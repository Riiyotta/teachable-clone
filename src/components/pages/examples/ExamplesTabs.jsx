// examples.md §2 `section.section_examples-tabs`: 6 pill tabs (PillTabs size 'examples', motion X-M1:
// fade out 100ms / in 300ms) over a pane with a centred h2 + intro and a 3-column PostCard grid
// (2 columns ≤767, 1 ≤479). Section height follows the active pane (no height animation).
//
// tabs: [{ label, title, intro, newTab?, cards: [{ image, avatar, href, title, text, author }] }]
import PillTabs from '../../sections/PillTabs.jsx'
import PostCard from '../../shared/PostCard.jsx'

function Pane({ tab }) {
  return (
    <div className="flex flex-col gap-12 sm:gap-6">
      <div className="mx-auto flex w-full max-w-[58rem] flex-col items-center justify-start gap-4 text-center">
        <h2>{tab.title}</h2>
        <p>{tab.intro}</p>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-x-8 gap-y-16 md:gap-x-4 md:gap-y-12 sm:grid-cols-2 sm:gap-y-8 xs:grid-cols-1 xs:gap-y-12">
          {tab.cards.map((c) => (
            <PostCard key={c.href} {...c} newTab={!!tab.newTab} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ExamplesTabs({ tabs, defaultIndex = 0 }) {
  return (
    <section className="relative overflow-hidden pb-32 md:py-24 sm:py-16 xs:px-0">
      <div className="padding-global">
        <div className="container-large">
          <div className="flex flex-col gap-12">
            <PillTabs size="examples" defaultIndex={defaultIndex} tabs={tabs.map((t) => ({ label: t.label, content: <Pane tab={t} /> }))} />
          </div>
        </div>
      </div>
    </section>
  )
}
