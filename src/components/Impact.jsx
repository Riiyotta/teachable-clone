// CLONE_SPEC §18 Impact CTA (`section.section_impact`).
export default function Impact() {
  return (
    <section className="relative overflow-hidden py-[12rem] text-white md:py-[10rem] sm:py-[4rem] xs:py-[8rem]">
      <img
        src="/assets/68beb37f210630a32db2e951_temp-stock-1.webp"
        loading="lazy"
        width="2800"
        height="1867"
        alt="Woman in a white shirt working on a laptop at an orange table with magazines and a pen."
        className="absolute inset-0 h-full w-full object-cover object-[50%_33%]"
      />
      <div className="padding-global">
        <div className="container-small">
          <h2 className="pb-[40px] text-center">
            Your expertise has always been your edge. <br />
            Let's scale it.
          </h2>
          <div className="relative mx-auto flex w-full max-w-mw-xlarge flex-col items-center justify-between gap-[2rem] text-center md:max-w-[32rem]">
            <div className="relative flex items-center justify-center">
              <a href="https://www.teachable.com/pricing" className="btn-primary">
                <span className="btn-txt">Explore plans</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
