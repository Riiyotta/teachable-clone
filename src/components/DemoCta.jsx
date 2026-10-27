// CLONE_SPEC §6 — "Explore demo" CTA
export default function DemoCta() {
  return (
    <section className="relative overflow-hidden bg-white pb-4 pt-[var(--spacing-medium)]">
      <div className="padding-global">
        <div className="container-large">
          <div className="flex items-center justify-center gap-4 sm:mt-4 sm:flex-wrap sm:px-8 xs:mt-0 xs:w-full xs:flex-col xs:gap-2 xs:px-6">
            <a href="https://www.teachable.com/watch-demo" className="btn-black sm:w-full">
              <span className="btn-txt">Explore demo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
