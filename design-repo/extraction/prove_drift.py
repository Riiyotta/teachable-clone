#!/usr/bin/env python3
"""Proves verify_all.py's drift checks actually catch drift (they must FAIL on injected drift).

    python3 extraction/prove_drift.py

For each case: copy this design-repo into a fresh OS temp directory, inject one drift, run verify_all there and require
the named check to FAIL (or, for warn-level gates, to report the named warning). An untouched copy must pass first. The
real package is never modified. When the clone project surrounds this folder, its source files are symlinked (read-only
use) next to the scratch copy so the citation / provenance / route-table / token-completeness cases can be exercised;
standalone, those cases are reported as SKIPPED.
"""
import json, re, shutil, subprocess, sys, tempfile
from pathlib import Path

sys.dont_write_bytecode = True
REPO = Path(__file__).resolve().parent.parent
PROJECT = REPO.parent
SIBLING = (PROJECT / "src").is_dir() and (PROJECT / "package.json").exists() and (PROJECT / "tailwind.config.cjs").exists()
LINKS = ["src", "public", "specs", "package.json", "tailwind.config.cjs", "CLONE_SPEC.md", "BUILD_NOTES.md", "index.html"]


def jload(p):
    return json.loads(p.read_text())


def jsave(p, d):
    p.write_text(json.dumps(d, indent=1, ensure_ascii=False) + "\n")


def edit_json(rel, fn):
    def go(r):
        p = r / rel
        d = jload(p)
        fn(d)
        jsave(p, d)
    return go


def edit_text(rel, old, new):
    def go(r):
        p = r / rel
        s = p.read_text()
        assert old in s, f"drift anchor not found in {rel}: {old[:60]}"
        p.write_text(s.replace(old, new, 1))
    return go


def both(*fns):
    def go(r):
        for f in fns:
            f(r)
    return go


def scratch(with_sibling):
    root = Path(tempfile.mkdtemp(prefix="design-repo-drift-"))
    shutil.copytree(REPO, root / "design-repo", ignore=shutil.ignore_patterns("__pycache__", "*.pyc", ".DS_Store"))
    if with_sibling:
        for name in LINKS:
            if (PROJECT / name).exists():
                (root / name).symlink_to(PROJECT / name)
    return root


def run_verify(root, quiet=True):
    p = subprocess.run([sys.executable, "-B", str(root / "design-repo/extraction/verify_all.py")] + (["--quiet"] if quiet else []), capture_output=True, text=True)
    return p.returncode, set(re.findall(r"^FAIL\s+(\S+)", p.stdout, re.M)), p.stdout


MV = "extraction/measured-values.json"
PR = "/pricing"


def mv_routes(fn):
    return edit_json(MV, lambda d: fn(d["sectionHeights"]["routes"]))


def hero_px(px):
    return mv_routes(lambda R: [n.update(heightPx=px) for n in R[PR]["nodes"] if n["section"] == "hero.pricing"])


def plant_copy_hash(r):
    p = r / "schema/source-identity-hashes.json"
    d = jload(p)
    c = jload(r / "sections/faq.accordion.json")
    import hashlib
    w = re.findall(r"[a-z0-9']+", c["purpose"].lower())
    d["copy"]["fullStrings"].append(hashlib.sha1(" ".join(w).encode()).hexdigest()[:16])
    jsave(p, d)


CASES = [
    # (name, mutate, check that must FAIL (or 'warn:<text>'), needs sibling source)
    ("phantom allowlist entry", edit_json("tokens/llm/component-allowlist.json", lambda d: d["entries"].append({"id": "section.ghost", "kind": "section", "file": "sections/section.ghost.json"})), "ALLOWLIST_PARITY", False),
    ("orphan contract (allowlist entry removed)", edit_json("tokens/llm/component-allowlist.json", lambda d: d.update(entries=[e for e in d["entries"] if e["id"] != "features.tools-grid"])), "ALLOWLIST_PARITY", False),
    ("allowlist settable drift", edit_json("tokens/llm/component-allowlist.json", lambda d: [e["settable"]["content"].append("subtitle") for e in d["entries"] if e["id"] == "hero.pricing"]), "ALLOWLIST_PARITY", False),
    ("allowlistVersion drift", edit_json("registry.manifest.json", lambda d: d.update(allowlistVersion="9.9.9")), "ALLOWLIST_PARITY", False),
    ("manifest count drift", edit_json("registry.manifest.json", lambda d: d["counts"].update(sections=d["counts"]["sections"] + 1)), "COUNTS", False),
    ("README count drift", edit_text("README.md", '"sections": ', '"sections": 1'), "COUNTS", False),
    ("registry availability loosened (customer.logo)", edit_json("assets/asset-roles.json", lambda d: d["roles"]["customer.logo"].update(availability="generation-safe")), "PINS", False),
    ("pin removed from verify_all (customer.logo)", edit_text("extraction/verify_all.py", '"customer.logo": "blocked-for-generation", "partner.logo"', '"partner.logo"'), "PINS", False),
    ("pinned policy changed to another valid value (person.photo may-generate-new)", edit_json("assets/asset-roles.json", lambda d: d["roles"]["person.photo"].update(generationPolicy="may-generate-new")), "PINS", False),
    ("contract + allowlist retrieval flipped together", both(edit_json("sections/pricing.exit-modal.json", lambda d: [d.update(retrievalEligible=True), d.pop("retrievalIneligibleReason", None)]),
                                                         edit_json("tokens/llm/component-allowlist.json", lambda d: [e.update(retrievalEligible=True) for e in d["entries"] if e["id"] == "pricing.exit-modal"])), "PINS", False),
    ("retrieval pin removed (campaign banner)", edit_text("extraction/verify_all.py", '"shell.promo-marquee", "campaign.countdown-banner", "pricing.exit-modal"}', '"shell.promo-marquee", "pricing.exit-modal"}'), "PINS", False),
    ("hero-less pin removed (T8)", edit_text("extraction/verify_all.py", 'HEROLESS_TEMPLATES = {"T8"}', 'HEROLESS_TEMPLATES = set()'), "PINS", False),
    ("graph rule documented but not implemented", edit_json("compatibility/graph.json", lambda d: d["rules"].append({"id": "NO_TWO_DARK_BANDS", "severity": "error", "rule": "documented but never implemented"})), "GRAPH_AGREEMENT", False),
    ("graph severity changed", edit_json("compatibility/graph.json", lambda d: [r.update(severity="warn") for r in d["rules"] if r["id"] == "ONE_HERO"]), "GRAPH_AGREEMENT", False),
    ("graph ONE_HERO exception list drifts", edit_json("compatibility/graph.json", lambda d: [r.update(exceptions=[]) for r in d["rules"] if r["id"] == "ONE_HERO"]), "GRAPH_AGREEMENT", False),
    ("token catalog value drift", edit_json("tokens/llm/token-catalog.json", lambda d: d["tokens"]["radius.md"].update(value="10px")), "TOKENS", False),
    ("policy category not in catalog", edit_json("tokens/llm/token-policy.json", lambda d: d["rawValueRestrictions"].update(shadow="only shadow tokens")), "TOKENS", False),
    ("policy surface list drifts from the contract", edit_json("tokens/llm/token-policy.json", lambda d: d["styleProps"]["surface"]["allowedBySection"]["cta.product-band"].append("color.surface.gold")), "TOKENS", False),
    ("motion fallback drift in a contract", edit_json("sections/stats.marquee.json", lambda d: d["motion"]["reducedMotionFallback"].update({"marquee.loop": "keep-moving"})), "MOTION", False),
    ("template routeCount drift", edit_json("templates/templates.json", lambda d: d["templates"]["T2"].update(routeCount=99)), "TEMPLATES", False),
    ("route mapped twice", edit_json("routes/routes.json", lambda d: d["routes"].append(dict(d["routes"][1]))), "ROUTE_COVERAGE", False),
    ("wrapper gate: missing measurement", mv_routes(lambda R: R.pop("/examples")), "WRAPPER_GATE", False),
    ("wrapper gate: wrong viewport", edit_json(MV, lambda d: d["sectionHeights"].update(viewport=1280)), "WRAPPER_GATE", False),
    ("wrapper gate: HERO 3100px", hero_px(3100), "WRAPPER_GATE", False),
    ("wrapper gate: HERO 1900px warns", hero_px(1900), "warn:WRAPPER_HERO", False),
    ("wrapper gate: majority share", mv_routes(lambda R: [n.update(heightPx=9000) for n in R[PR]["nodes"] if n["section"] == "pricing.comparison-matrix"]), "WRAPPER_GATE", False),
    ("wrapper gate: whitelist without justification / agent attestation", edit_json(MV, lambda d: d["wrapperGateWhitelist"].append({"route": PR, "section": "hero.pricing", "reviewedBy": "build agent", "justification": "tall", "maxHeightPx": 99999})), "WRAPPER_GATE", False),
    ("wrapper gate: stale whitelist entry", edit_json(MV, lambda d: d["wrapperGateWhitelist"].append({"route": PR, "section": "pricing.plan-cards", "reviewedBy": "build agent (agent attestation, not a human sign-off)", "justification": "stale entry that no measured hit uses at all", "maxHeightPx": 9999})), "WRAPPER_GATE", False),
    ("wrapper gate: measured structure no longer matches the template", mv_routes(lambda R: R[PR]["nodes"].pop(2)), "WRAPPER_GATE", False),
    ("absolute machine path", edit_text("CHANGELOG.md", "First build", "First build (" + "/" + "Users/someone/project)"), "HYGIENE", False),
    ("junk file", lambda r: (r / "sections/.DS_Store").write_text("x"), "HYGIENE", False),
    ("entry point outside the package", edit_json("registry.manifest.json", lambda d: d["entryPoints"].update(spec="../CLONE_SPEC.md")), "ENTRYPOINTS", False),
    ("generated example leaks the source brand", edit_json("schema/examples/generated/home.generated.pagespec.json", lambda d: d["brand"].update(name="Teachable")), "EXAMPLES", False),
    ("template loses its generated example", lambda r: (r / "schema/examples/generated/gated-demo.generated.pagespec.json").unlink(), "EXAMPLES", False),
    ("route loses its reference example", lambda r: (r / "schema/examples/reference/coaching.pagespec.json").unlink(), "EXAMPLES", False),
    ("a package string matches a source-copy hash", plant_copy_hash, "NO_SOURCE_COPY", False),
    ("route removed from routes.json (vs src/routes.js)", edit_json("routes/routes.json", lambda d: d.update(routes=[x for x in d["routes"] if x["path"] != "/examples"])), "ROUTE_COVERAGE", True),
    ("route re-assigned to the wrong template (vs src/App.jsx)", both(edit_json("routes/routes.json", lambda d: [x.update(template="T2") for x in d["routes"] if x["path"] == "/app-hub"])), "ROUTE_COVERAGE", True),
    ("out-of-range citation", edit_json("sections/hero.pricing.json", lambda d: d["evidence"].append("src/components/pages/pricing/PlanCards.jsx:9000-9010")), "CITATIONS", True),
    ("token cites a line that no longer holds its value", edit_json("tokens/00-foundation/color.json", lambda d: d["tokens"]["color.yellow.default"].update(cite="tailwind.config.cjs:20")), "CITATIONS", True),
    ("colour removed from tokens but still in the config", both(edit_json("tokens/00-foundation/color.json", lambda d: d["tokens"].pop("color.ice")),
                                                                edit_json("tokens/llm/token-catalog.json", lambda d: [d["tokens"].pop("color.ice"), d.update(count=len(d["tokens"]))])), "TOKENS", True),
    ("source tag moved off its cited line", edit_json("sections/hero.pricing.json", lambda d: d["source"].update(tagLine=d["source"]["tagLine"] + 3)), "SOURCE_PROVENANCE", True),
    ("reference asset ref points at a missing file", edit_json("schema/examples/reference/coaching.pagespec.json", lambda d: [n["content"]["media"][0].update(ref="/assets/does-not-exist.webp") for n in d["nodes"] if n["section"] == "hero.product"]), "ASSET_REFS", True),
]


def main():
    fails, skipped = 0, 0
    root = scratch(SIBLING)
    rc, failed, out = run_verify(root)
    print(f"untouched scratch copy: verify_all exit {rc}, failed checks {sorted(failed) or 'none'}")
    if rc != 0:
        print(out)
        return 1
    shutil.rmtree(root)
    for name, mutate, check, needs_sibling in CASES:
        if needs_sibling and not SIBLING:
            skipped += 1
            print(f"  SKIPPED  [{check}] {name} (no sibling clone source)")
            continue
        root = scratch(SIBLING)
        mutate(root / "design-repo")
        if check.startswith("warn:"):
            rc, failed, out = run_verify(root, quiet=False)
            ok = check[5:] in out and "WRAPPER_GATE" not in failed
        else:
            rc, failed, out = run_verify(root)
            ok = rc != 0 and check in failed
        fails += not ok
        print(f"  {'caught' if ok else 'MISSED'}  [{check}] {name}" + ("" if ok else f"  (exit {rc}, failed {sorted(failed)})"))
        shutil.rmtree(root)
    rc = subprocess.run([sys.executable, "-B", str(REPO / "extraction/verify_all.py"), "--quiet"], capture_output=True).returncode
    print(f"\nreal repo after drift runs: verify_all exit {rc}")
    print(f"prove_drift: {len(CASES)} cases, {skipped} skipped, {fails} missed")
    return 1 if fails or rc else 0


if __name__ == "__main__":
    sys.exit(main())
