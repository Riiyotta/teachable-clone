// app-hub.md §2 `section.section_feature-apps`: six category tabs (shared PillTabs, size "apps": the pane
// fades out 100ms / in 300ms, ease) over a centred pane header and a 3-column app grid, then a grey
// trademark footnote. App names and logos are functional labels; copy comes from src/content/app-hub.js.
//
// tabs: [{ label, intro, apps: [{ name, logo, text, more?: { label, href } }] }]. footnote: node.
// `more` renders the `.button-simple` link (arrow statically at -45deg; this page has no hover rule for it).
import PillTabs from '../../sections/PillTabs.jsx'
import ButtonSimple from '../../shared/ButtonSimple.jsx'

function Pane({ label, intro, apps }) {
  return (
    <div className="flex flex-col gap-16 md:gap-12 sm:gap-8">
      <div className="mx-auto flex w-full max-w-[60rem] flex-col items-center justify-between gap-4 text-center xs:items-start xs:text-left">
        <h2>{label}</h2>
        <p>{intro}</p>
      </div>
      <div className="grid grid-cols-3 gap-16 md:gap-12 sm:grid-cols-2 sm:gap-8 xs:grid-cols-1">
        {apps.map((a) => (
          <div key={a.name} className="flex flex-col items-start justify-start gap-4 sm:gap-2">
            <div className="relative h-16 w-16">
              <img src={a.logo} alt="" width="96" height="96" loading="lazy" className="h-full w-full" />
            </div>
            <div className="font-heading text-[2rem] leading-[1.5] sm:text-[1.5rem] xs:text-[7vw]">{a.name}</div>
            <p className="text-size-medium">{a.text}</p>
            {a.more && (
              <div className="relative flex items-center justify-start">
                <ButtonSimple label={a.more.label} href={a.more.href} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AppDirectory({ tabs, footnote }) {
  return (
    <section className="relative flex items-center justify-center overflow-hidden">
      <div className="padding-global padding-section-large w-full">
        <div className="container-large">
          <div className="flex flex-col gap-24 md:gap-16">
            <PillTabs size="apps" tabs={tabs.map((t) => ({ label: t.label, content: <Pane {...t} /> }))} />
            <div className="mx-auto flex w-full max-w-[58rem] flex-col items-center justify-center rounded-md bg-grey-light px-12 py-8 text-center sm:px-6">
              <p className="text-size-regular text-grey-footnote">{footnote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
