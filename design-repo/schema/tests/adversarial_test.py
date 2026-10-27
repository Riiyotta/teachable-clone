#!/usr/bin/env python3
"""Adversarial suite: every mutation must be rejected with its expected rule, every control must pass.

    python3 schema/tests/adversarial_test.py

Controls: every reference example (real asset paths, the source brand name), every generation-safe example, the bundled
example, AND generated-mode controls synthesised per template from templates/templates.json by schema/synthesize.py
(minimal and rich), so a new or split template is covered with zero new control code.

Leakage of hashed identities (real people, organisations, customer domains, CTA labels, copy) is proven twice:
  - mechanism cases (always run): a fictional string is added to the in-memory hash registry, then injected;
  - real-source cases (need the clone project around this folder): a real string is read from the clone source AT RUN
    TIME and injected. This repo never stores those strings; standalone, these cases are reported as SKIPPED.
Mutations are applied to deep copies; registry-level mutations are applied to an in-memory copy of the loaded repo.
"""
import copy, importlib.util, json, re, sys

sys.dont_write_bytecode = True
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]
PROJECT = REPO.parent
SIBLING = (PROJECT / "src/content/home.js").exists()


def mod(name, rel):
    s = importlib.util.spec_from_file_location(name, REPO / rel)
    m = importlib.util.module_from_spec(s)
    s.loader.exec_module(m)
    return m


sv = mod("semantic_validate", "schema/semantic_validate.py")
sy = mod("synthesize", "schema/synthesize.py")
BASE = sv.load_repo()
J = lambda rel: json.loads((REPO / rel).read_text())
REF = lambda name: J(f"schema/examples/reference/{name}.pagespec.json")
GEN = lambda name: J(f"schema/examples/generated/{name}.generated.pagespec.json")

R_PRICING, R_HOME, R_FEAT, R_ENT = REF("pricing"), REF("home"), REF("analytics-and-reporting"), REF("enterprise")
R_DD, R_COACH, R_DEMO, R_CJ, R_OC = REF("digital-downloads"), REF("coaching"), REF("watch-demo"), REF("customer-journey"), REF("online-courses")
G_HOME, G_FEAT, G_PRICE, G_ENT, G_SHOW = GEN("home"), GEN("feature-highlight"), GEN("pricing"), GEN("enterprise-solution"), GEN("customer-showcase")


def idx(s, section, nth=0):
    return [i for i, n in enumerate(s["nodes"]) if n["section"] == section][nth]


def node(s, section, nth=0):
    return s["nodes"][idx(s, section, nth)]


CASES, SKIPPED = [], []


def case(name, base, fn, expect, repo_fn=None):
    s = copy.deepcopy(base)
    fn(s)
    r = BASE
    if repo_fn:
        r = copy.deepcopy(BASE)
        repo_fn(r)
    CASES.append((name, s, expect, r))


def setp(path, value):
    def f(s):
        cur = s
        for k in path[:-1]:
            cur = cur[k]
        cur[path[-1]] = value
    return f


def inject_hash(kind, text):
    def f(r):
        h = sv.h16(" ".join(sv.norm_words(text)))
        if kind == "copy":
            r["hashes"]["copy"]["fullStrings"].append(h)
        else:
            r["hashes"][kind].append(h)
    return f


def variant_case(want_forbidden):
    """first (example, node index, field) whose variant forbids (or requires) a field - derived, not hand-picked."""
    for ex in (R_HOME, R_PRICING, R_FEAT, R_ENT, R_DD, R_COACH, R_CJ, R_OC):
        for i, n in enumerate(ex["nodes"]):
            vd = BASE["contracts"][n["section"]]["variants"][n["variant"]]
            fl = vd["forbiddenFields"] if want_forbidden else [f for f in vd["requiredFields"] if f not in BASE["contracts"][n["section"]]["content"]["requiredFields"]]
            fl = [f for f in fl if f in ("eyebrow", "heading", "lead", "note")] if want_forbidden else fl
            if fl:
                return ex, i, fl[0]
    return None


HERO_P = {"pattern": "static", "reducedMotionFallback": "none-needed"}
GLINK = lambda s, sec="hero.home": node(s, sec)["content"]["actions"][0]

# ---------------------------------------------------------------- schema layer
case("unknown template id", R_PRICING, setp(["template"], "T99"), "SCHEMA")
case("missing mode", R_PRICING, lambda s: s.pop("mode"), "SCHEMA")
case("mode outside enum", R_PRICING, setp(["mode"], "draft"), "SCHEMA")
case("missing copyRole", R_PRICING, lambda s: s.pop("copyRole"), "SCHEMA")
case("invented section id", R_PRICING, lambda s: s["nodes"].insert(3, {"section": "hero.video", "variant": "default", "content": {}, "motion": HERO_P}), "SCHEMA")
case("missing reducedMotionFallback", R_PRICING, lambda s: node(s, "faq.accordion")["motion"].pop("reducedMotionFallback"), "SCHEMA")
case("wrong reducedMotionFallback for pattern", R_PRICING, lambda s: node(s, "faq.accordion")["motion"].update(reducedMotionFallback="unchanged"), "SCHEMA")
case("invented motion field", R_PRICING, lambda s: node(s, "faq.accordion")["motion"].update(inventedAnimation="spin"), "SCHEMA")
case("invented content field", R_PRICING, lambda s: node(s, "hero.pricing")["content"].update(subtitle="Extra line"), "SCHEMA")
case("invented asset role", R_PRICING, lambda s: node(s, "social-proof.stories-slider")["content"]["media"][0].update(assetRole="hero.photo"), "SCHEMA")
case("invented link role", R_PRICING, lambda s: node(s, "cta.product-band")["content"]["actions"][0].update(linkRole="link.anything"), "SCHEMA")
case("href scheme outside the allowed set", R_PRICING, lambda s: node(s, "cta.product-band")["content"]["actions"][0].update(href="javascript:alert(1)"), "SCHEMA")
case("maxChars overflow (schema layer)", R_PRICING, lambda s: node(s, "hero.pricing")["content"].update(heading="x" * 900), "SCHEMA")
case("list over observed max", R_PRICING, lambda s: node(s, "faq.accordion")["content"]["items"].extend(copy.deepcopy(node(s, "faq.accordion")["content"]["items"]) * 6), "SCHEMA")
case("unknown variant", R_PRICING, lambda s: node(s, "faq.accordion").update(variant="carousel"), "SCHEMA")
case("unknown theme", R_PRICING, setp(["theme"], "sepia"), "THEME_UNSUPPORTED")

# ---------------------------------------------------------------- template linkage / graph rules
case("template/node mismatch (pricing page declared as enterprise)", R_PRICING, setp(["template"], "T6"), "TEMPLATE_SEQUENCE")
case("required section removed", R_PRICING, lambda s: s["nodes"].pop(idx(s, "pricing.plan-cards")), "TEMPLATE_SEQUENCE")
case("sections reordered", R_PRICING, lambda s: s["nodes"].insert(idx(s, "pricing.plan-cards"), s["nodes"].pop(idx(s, "faq.accordion"))), "TEMPLATE_SEQUENCE")
case("variant not observed at this template position", R_PRICING, lambda s: node(s, "cta.product-band").update(variant="red-plain"), "TEMPLATE_SEQUENCE")
case("template removed from the registry", R_PRICING, lambda s: None, "TEMPLATE_SEQUENCE", lambda r: r["templates"].pop("T5"))
case("second hero", R_FEAT, lambda s: s["nodes"].insert(idx(s, "hero.feature") + 1, copy.deepcopy(node(s, "hero.feature"))), "ONE_HERO")
case("hero added to the hero-less demo template", R_DEMO, lambda s: s["nodes"].insert(1, copy.deepcopy(node(R_FEAT, "hero.feature"))), "ONE_HERO")
case("hero removed", R_PRICING, lambda s: s["nodes"].pop(idx(s, "hero.pricing")), "ONE_HERO")
case("content before the hero", R_FEAT, lambda s: s["nodes"].insert(idx(s, "hero.feature"), s["nodes"].pop(idx(s, "features.why-statement"))), "HERO_FIRST_CONTENT")
case("section over maxPerPage", R_DD, lambda s: s["nodes"].insert(idx(s, "features.split-rows", 2) + 1, copy.deepcopy(node(s, "features.split-rows", 1))), "SECTION_MAX_PER_PAGE")
case("adjacent identical section+variant", R_DD, lambda s: node(s, "features.split-rows", 1).update(variant="grey"), "NO_ADJACENT_IDENTICAL")
case("footer moved before content", R_PRICING, lambda s: s["nodes"].insert(2, s["nodes"].pop(idx(s, "shell.footer"))), "SHELL_ORDER")
case("navbar after the hero", R_FEAT, lambda s: s["nodes"].insert(1, s["nodes"].pop(0)), "SHELL_ORDER")
case("overlay placed mid-page", R_PRICING, lambda s: s["nodes"].insert(3, s["nodes"].pop(idx(s, "pricing.exit-modal"))), "OVERLAY_LAST")
case("home without the promo marquee but with the sticky nav", R_HOME, lambda s: s["nodes"].pop(idx(s, "shell.promo-marquee")), "SHELL_NAV_MODE")
case("inner page with the homepage sticky nav", R_FEAT, lambda s: node(s, "shell.navbar").update(variant="sticky"), "SHELL_NAV_MODE")
case("home template on a non-home route", R_HOME, setp(["route"], "/pricing"), "HOME_ROUTE_ONLY")
case("non-home template on '/'", R_PRICING, setp(["route"], "/"), "HOME_ROUTE_ONLY")
case("reference route mapped to another template", R_PRICING, setp(["route"], "/enterprise"), "REFERENCE_ROUTE_IN_TEMPLATE")
case("reference route that the clone does not serve", R_PRICING, setp(["route"], "/blog"), "REFERENCE_ROUTE_IN_TEMPLATE")

# ---------------------------------------------------------------- content contract
case("maxWords overflow on a real field", R_PRICING, lambda s: node(s, "faq.accordion")["content"]["items"][0].update(text=" ".join(["ab"] * 140)), "MAX_WORDS")
vf = variant_case(True)
if vf:
    ex, i, fld = vf
    case(f"variant forbidden field ({ex['nodes'][i]['section']}#{ex['nodes'][i]['variant']} never renders {fld})", ex, lambda s, i=i, fld=fld: s["nodes"][i]["content"].update({fld: "Short line"}), "VARIANT_FORBIDDEN_FIELD")
vr = variant_case(False)
if vr:
    ex, i, fld = vr
    case(f"variant required field missing ({ex['nodes'][i]['section']}#{ex['nodes'][i]['variant']} needs {fld})", ex, lambda s, i=i, fld=fld: s["nodes"][i]["content"].pop(fld, None), "VARIANT_REQUIRED_FIELD")
case("contract-required field missing", R_PRICING, lambda s: node(s, "hero.pricing")["content"].pop("heading"), "CONTENT_REQUIRED_FIELD")
case("list under observed minimum", R_PRICING, lambda s: node(s, "shell.footer")["content"].update(actions=node(s, "shell.footer")["content"]["actions"][:2]), "LIST_SIZE")

# ---------------------------------------------------------------- motion
case("motion pattern not allowed for section", R_PRICING, lambda s: node(s, "hero.pricing").update(motion={"pattern": "marquee.loop", "reducedMotionFallback": "paused-static-row"}), "MOTION_PATTERN_NOT_ALLOWED")
case("required motion pattern missing (stories without autoplay)", R_PRICING, lambda s: node(s, "social-proof.stories-slider").update(motion={"pattern": "static", "reducedMotionFallback": "none-needed"}), "MOTION_REQUIRED_PATTERN")
case("registry fallback edited (motion-patterns.json)", R_PRICING, lambda s: None, "MOTION_FALLBACK", lambda r: r["motion"]["accordion.expand"].update(reducedMotionFallback="keep-animating"))

# ---------------------------------------------------------------- retrieval eligibility (node / contract / allowlist)
case("exit-intent dialog marked retrievable (node)", R_PRICING, lambda s: node(s, "pricing.exit-modal").update(retrievalEligible=True), "RUNTIME_UI_INELIGIBLE")
case("countdown campaign marked retrievable (node)", R_COACH, lambda s: node(s, "campaign.countdown-banner").update(retrievalEligible=True), "RUNTIME_UI_INELIGIBLE")
case("promo marquee marked retrievable (node)", R_HOME, lambda s: node(s, "shell.promo-marquee").update(retrievalEligible=True), "RUNTIME_UI_INELIGIBLE")
case("content section marked ineligible (node)", R_PRICING, lambda s: node(s, "faq.accordion").update(retrievalEligible=False), "RUNTIME_UI_INELIGIBLE")
case("contract flipped to eligible (registry)", R_PRICING, lambda s: None, "RETRIEVAL_PIN_MISMATCH", lambda r: r["contracts"]["pricing.exit-modal"].update(retrievalEligible=True))
case("allowlist flipped to eligible (registry)", R_PRICING, lambda s: None, "RETRIEVAL_PIN_MISMATCH", lambda r: [e.update(retrievalEligible=True) for e in r["allowlist"]["entries"] if e["id"] == "campaign.countdown-banner"])
case("content contract marked ineligible (registry)", R_PRICING, lambda s: None, "RETRIEVAL_PIN_MISMATCH", lambda r: r["contracts"]["faq.accordion"].update(retrievalEligible=False))
case("runtime-looking contract not pinned (dialog title)", R_PRICING, lambda s: None, "RETRIEVAL_PIN_MISMATCH", lambda r: r["contracts"]["pricing.plan-cards"].update(title="Plan picker dialog"))

# ---------------------------------------------------------------- asset / link / copy registry pins
case("registry loosens customer.logo to generation-safe", G_HOME, lambda s: None, "REGISTRY_PIN_MISMATCH", lambda r: r["roles"]["roles"]["customer.logo"].update(availability="generation-safe"))
case("registry loosens person.photo to reference-only", G_HOME, lambda s: None, "REGISTRY_PIN_MISMATCH", lambda r: r["roles"]["roles"]["person.photo"].update(availability="reference-only"))
case("pinned policy changed to another valid value (person.photo may-generate-new)", G_HOME, lambda s: None, "REGISTRY_PIN_MISMATCH", lambda r: r["roles"]["roles"]["person.photo"].update(generationPolicy="may-generate-new"))
case("pinned policy changed (live endpoint may-generate-new)", G_HOME, lambda s: None, "REGISTRY_PIN_MISMATCH", lambda r: r["roles"]["roles"]["link.live-endpoint"].update(generationPolicy="may-generate-new"))
case("registry drops forbiddenInAllModes", R_PRICING, lambda s: None, "REGISTRY_PIN_MISMATCH", lambda r: r["roles"]["roles"]["link.live-endpoint"].pop("forbiddenInAllModes"))
case("wordmark set to must-reuse-exact", R_PRICING, lambda s: None, "REGISTRY_PIN_MISMATCH", lambda r: r["roles"]["roles"]["brand.wordmark"].update(generationPolicy="must-reuse-exact"))
case("new role missing from the code pins", R_PRICING, lambda s: None, "REGISTRY_PIN_MISMATCH", lambda r: r["roles"]["roles"].update({"sponsor.mark": copy.deepcopy(r["roles"]["roles"]["customer.logo"])}))
case("contract lists a blocked role as generation-safe", G_HOME, lambda s: None, "REGISTRY_PIN_MISMATCH", lambda r: r["contracts"]["hero.home"]["generatedAssetRoles"].append("person.photo"))
case("asset role not allowed for the field", R_ENT, lambda s: node(s, "hero.split")["content"]["media"][0].update(assetRole="person.photo"), "ASSET_ROLE_NOT_ALLOWED_FOR_FIELD")
case("live endpoint link role (reference mode)", R_PRICING, lambda s: node(s, "cta.product-band")["content"]["actions"][0].update(linkRole="link.live-endpoint"), "LIVE_ENDPOINT_ALL_MODES")
case("live form endpoint href (reference mode)", R_CJ, lambda s: node(s, "cta.product-band")["content"]["actions"][0].update(href="https://acme.typeform.com/to/abc123", linkRole="link.source-external"), "LIVE_ENDPOINT_ALL_MODES")
case("site route labelled as external link", R_PRICING, lambda s: node(s, "cta.product-band")["content"]["actions"][0].update(href="#plans", linkRole="link.source-external"), "LINK_ROLE_MISMATCH")
case("source copy claimed verbatim", R_PRICING, setp(["copyRole"], "copy.source-verbatim"), "COPY_ROLE")

# ---------------------------------------------------------------- tokens / policy
case("unknown token", R_FEAT, lambda s: node(s, "cta.product-band").update(style={"surface": "color.surface.violet"}), "TOKEN_UNKNOWN")
case("raw hex colour", R_FEAT, lambda s: node(s, "cta.product-band").update(style={"surface": "#7f2a23"}), "TOKEN_RAW_COLOR")
case("raw rgb colour", R_FEAT, lambda s: node(s, "cta.product-band").update(style={"surface": "rgb(127,42,35)"}), "TOKEN_RAW_COLOR")
case("arbitrary spacing value", R_FEAT, lambda s: node(s, "cta.product-band").update(style={"surface": "120px"}), "TOKEN_ARBITRARY_SPACING")
case("unsupported font", R_FEAT, lambda s: node(s, "cta.product-band").update(style={"surface": "Hotmart Sans"}), "TOKEN_UNSUPPORTED_FONT")
case("unknown font token", R_FEAT, lambda s: node(s, "cta.product-band").update(style={"surface": "font.family.comic"}), "TOKEN_UNSUPPORTED_FONT")
case("surface the section never renders (gold on a CTA band)", R_FEAT, lambda s: node(s, "cta.product-band").update(style={"surface": "color.surface.gold"}), "TOKEN_INVALID_COMBINATION")
case("token of the wrong category (radius as surface)", R_FEAT, lambda s: node(s, "cta.product-band").update(style={"surface": "radius.card"}), "TOKEN_INVALID_COMBINATION")
case("style prop the section does not expose", R_FEAT, lambda s: node(s, "hero.feature").update(style={"surface": "color.surface.brand"}), "STYLE_PROP_UNKNOWN")

# ---------------------------------------------------------------- generated mode leakage (controls: the generated examples)
F_PERSON, F_ORG, F_DOMAIN, F_COPY, F_CTA = "Zed Quillfeather", "Marrowgate Analytics", "marrowgate-school.org", "every lesson we build starts with a quiet promise", "Claim your marrowgate seat"
case("source brand in a heading", G_HOME, lambda s: node(s, "hero.home")["content"].update(heading="Teachable for creators"), "GENERATED_MODE_BRAND")
case("source brand as page brand", G_HOME, setp(["brand", "name"], "Teachable"), "GENERATED_MODE_BRAND")
case("legal entity in the footer", G_HOME, lambda s: node(s, "shell.footer")["content"].update(lead="Copyright © Teachable, Inc."), "GENERATED_MODE_BRAND")
case("parent company named", G_HOME, lambda s: node(s, "hero.home")["content"].update(lead="Part of the Hotmart family"), "GENERATED_MODE_BRAND")
case("source product name", G_FEAT, lambda s: node(s, "hero.feature")["content"].update(heading="Meet Teachable Payments"), "GENERATED_MODE_BRAND")
case("source brand in alt text", G_HOME, lambda s: node(s, "hero.home")["content"]["media"][0].update(alt="Teachable dashboard"), "GENERATED_MODE_BRAND")
case("hashed organisation name (mechanism)", G_HOME, lambda s: node(s, "hero.home")["content"].update(lead=f"Trusted by {F_ORG} teams"), "GENERATED_MODE_BRAND", inject_hash("orgs", F_ORG))
case("hashed person name (mechanism)", G_HOME, lambda s: node(s, "hero.home")["content"].update(lead=f"Says {F_PERSON}"), "GENERATED_MODE_PERSON", inject_hash("persons", F_PERSON))
case("real person photo role", G_HOME, lambda s: node(s, "hero.home")["content"]["media"][0].update(assetRole="person.photo"), "GENERATED_MODE_PERSON")
case("real customer logo", G_ENT, lambda s: node(s, "hero.split")["content"]["media"][0].update(assetRole="customer.logo", ref="/assets/6a2975edbf200a011673f9b5_enterprise-adobe-logo.svg"), "GENERATED_MODE_ASSET")
case("source wordmark reused", G_HOME, lambda s: node(s, "shell.navbar")["content"]["media"][0].update(assetRole="brand.wordmark", ref="/assets/68daba31282892b31e937809_teachable-logo-color.svg"), "GENERATED_MODE_ASSET")
case("proprietary screenshot reused", G_HOME, lambda s: node(s, "hero.home")["content"]["media"][0].update(assetRole="product.screenshot"), "GENERATED_MODE_ASSET")
case("source file path behind a safe role", G_HOME, lambda s: node(s, "hero.home")["content"]["media"][0].update(ref="/assets/68e47a1d7727e0f7bd1ac19e_8b04a4deab039f00b369cedcd9295a73_ui-main-hero-tab-1.webp"), "GENERATED_MODE_ASSET")
case("third-party embed role", G_ENT, lambda s: node(s, "hero.split")["content"]["media"][0].update(assetRole="media.third-party-embed", ref="https://player.vimeo.com/video/1"), "GENERATED_MODE_ASSET")
case("review handle and date line", G_HOME, lambda s: node(s, "hero.home")["content"].update(lead="quill_reader • 03/04/2025"), "GENERATED_MODE_RATING")
case("review score claim", G_HOME, lambda s: node(s, "hero.home")["content"].update(lead="Rated 4.9 out of 5"), "GENERATED_MODE_RATING")
case("app-store mark text", G_HOME, lambda s: node(s, "hero.home")["content"].update(lead="Get it on Google Play today"), "GENERATED_MODE_STORE")
case("app-store URL", G_HOME, lambda s: GLINK(s).update(href="https://apps.apple.com/app/id1"), "GENERATED_MODE_STORE")
case("source domain URL", G_HOME, lambda s: GLINK(s).update(href="https://www.teachable.com/pricing"), "GENERATED_MODE_URL")
case("source sign-up endpoint", G_HOME, lambda s: GLINK(s).update(href="https://sso.teachable.com/secure/teachable_accounts/sign_up"), "GENERATED_MODE_URL")
case("non-reserved absolute URL", G_HOME, lambda s: GLINK(s).update(href="https://fernhollow.io/start"), "GENERATED_MODE_URL")
case("source-site route reused", G_HOME, lambda s: GLINK(s).update(href="/pricing"), "GENERATED_MODE_URL")
case("third-party embed URL as a link", G_HOME, lambda s: GLINK(s).update(href="https://player.vimeo.com/video/1"), "GENERATED_MODE_URL")
case("blocked link role in generated mode", G_HOME, lambda s: GLINK(s).update(linkRole="link.source-external"), "GENERATED_MODE_URL")
case("hashed customer domain (mechanism)", G_HOME, lambda s: GLINK(s).update(href=f"https://{F_DOMAIN}/join"), "GENERATED_MODE_URL", lambda r: r["hashes"]["customerDomains"].append(sv.h16(F_DOMAIN)))
case("hashed source copy (mechanism)", G_HOME, lambda s: node(s, "hero.home")["content"].update(lead=F_COPY.capitalize()), "GENERATED_MODE_COPY", inject_hash("copy", F_COPY))
case("copyRole is not original", G_HOME, setp(["copyRole"], "copy.clone-stand-in"), "GENERATED_MODE_COPY")
case("source-brand CTA", G_HOME, lambda s: GLINK(s).update(label="Start Teachable"), "GENERATED_MODE_CTA")
case("hashed source CTA label (mechanism)", G_HOME, lambda s: GLINK(s).update(label=F_CTA), "GENERATED_MODE_CTA", lambda r: r["hashes"]["ctaLabels"].append(sv.h16(" ".join(sv.norm_words(F_CTA)))))
case("live endpoint in a generated page", G_HOME, lambda s: GLINK(s).update(href="https://acme.typeform.com/to/x"), "LIVE_ENDPOINT_ALL_MODES")

# ---------------------------------------------------------------- real-source leakage (strings read from the clone at run time, never stored)
def first_hit(texts, bucket, k=None):
    hs = BASE["hashes"]
    pool = set(hs["copy"]["fullStrings"]) if bucket == "copy" else set(hs[bucket])
    for t in texts:
        w = sv.norm_words(t)
        if bucket in ("persons", "orgs") and set(sv.windows(t)) & pool:
            return t
        if bucket == "copy" and len(w) >= hs["copy"]["fullStringMinWords"] and sv.h16(" ".join(w)) in pool:
            return t
        if bucket == "ctaLabels" and len(w) >= 3 and sv.h16(" ".join(w)) in pool:
            return t
        if bucket == "customerDomains":
            h = sv.host_of(t)
            if h and sv.h16(h) in pool:
                return t
    return None


if SIBLING:
    src = {p.name: p.read_text() for p in list((PROJECT / "src/content").glob("*.js")) + list((PROJECT / "src/components").glob("*.jsx"))}
    lits = [x for t in src.values() for x in re.findall(r"'([^'\n]{3,400})'", t) + re.findall(r'"([^"\n]{3,400})"', t)]
    jsx_text = [x.strip() for t in src.values() for x in re.findall(r">\s*([A-Z][^<>{}\n]{2,80}?)\s*<", t)]
    person = first_hit([x for t in src.values() for x in re.findall(r"name: '([^']+)'", t)], "persons")
    org = first_hit([x for t in src.values() for x in re.findall(r"(?:name|alt): '([^']+)'", t)], "orgs")
    copy_real = first_hit(lits + jsx_text, "copy")
    cta_real = first_hit(jsx_text + lits, "ctaLabels")
    dom_real = first_hit([x for t in src.values() for x in re.findall(r"https://[a-z0-9.-]+", t)], "customerDomains")
    for label, val, mk, rule in (("real person's name", person, lambda s, v: node(s, "hero.home")["content"].update(lead=f"With {v}"), "GENERATED_MODE_PERSON"),
                                 ("real organisation / partner name", org, lambda s, v: node(s, "hero.home")["content"].update(lead=f"Works with {v}"), "GENERATED_MODE_BRAND"),
                                 ("real source copy", copy_real, lambda s, v: node(s, "hero.home")["content"].update(lead=v), "GENERATED_MODE_COPY"),
                                 ("real source CTA label", cta_real, lambda s, v: GLINK(s).update(label=v), "GENERATED_MODE_CTA"),
                                 ("real customer school domain", dom_real, lambda s, v: GLINK(s).update(href=v + "/"), "GENERATED_MODE_URL")):
        if val is None:
            SKIPPED.append(f"{label}: no source string matched its hash bucket")
        else:
            case(f"{label} (read from the clone at run time)", G_HOME, lambda s, v=val, mk=mk: mk(s, v), rule)
else:
    SKIPPED.append("real-source leakage cases (person, organisation, copy, CTA, customer domain): no sibling clone source")

TM, CT = sy.load()
SYNTH = [(f"synthesised generated control {tid} ({t['name']})", sy.synthesize(tid, repo=(TM, CT))) for tid, t in TM.items()] + \
        [(f"synthesised rich generated control {tid} ({t['name']})", sy.synthesize(tid, rich=True, repo=(TM, CT), seed=101)) for tid, t in TM.items()]
CONTROLS = [(str(p.relative_to(REPO)), json.loads(p.read_text())) for p in sorted((REPO / "schema/examples").rglob("*.json"))] + \
           [("schema/example.pagespec.json", J("schema/example.pagespec.json"))] + SYNTH


def main():
    fails = 0
    print(f"CONTROLS (must pass with 0 errors): {len(CONTROLS)} ({len(SYNTH)} synthesised from templates.json)")
    for name, s in CONTROLS:
        E, W = sv.validate(s, BASE)
        fails += bool(E)
        print(f"  {'pass' if not E else 'FAIL'}  {name}" + ("" if not E else f"  {E[:3]}"))
    print(f"\nMUTATIONS (must be rejected with the expected rule): {len(CASES)}")
    for name, s, expect, repo in CASES:
        E, W = sv.validate(s, repo)
        rules = {r for r, _ in E}
        ok = expect in rules
        fails += not ok
        print(f"  {'rejected' if ok else 'MISSED  '}  [{expect}] {name}" + ("" if ok else f"  got {sorted(rules) or 'no errors'}"))
    for s in SKIPPED:
        print(f"  SKIPPED   {s}")
    gen = sum(1 for _, s in CONTROLS if s.get("mode") == "generated")
    print(f"\nadversarial: {len(CONTROLS)} controls ({gen} generated-mode), {len(CASES)} mutations, {len(SKIPPED)} skipped, {fails} failures")
    return 1 if fails else 0


if __name__ == "__main__":
    sys.exit(main())
