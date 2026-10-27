// product-template.md T3 `div.stats-marquee_instance.hide-mobile-portrait` (shown ≥480; pair it with
// <Stats variant="stack"/> for ≤479). Full bleed, 1px #f0f0f0 rules, two identical blocks that each
// translate 0 → -100% over 60s linear (motion B1, CSS keyframes `marquee-horizontal` in index.css).
// items: [{ num, label, icon: 'dollar' | 'check' | 'chat' }]. Each stat is followed by its icon.
const ICONS = {
  // svg-icons-b.md stats_icon is-dollar (viewBox 0 0 133 205), wrapper 1rem
  dollar: {
    w: 'w-4',
    svg: (
      <svg width="100%" height="100%" viewBox="0 0 133 205" fill="none">
        <path
          d="M89.9202 88.0676C92.9018 78.3594 95.4326 70.9648 97.248 66.1931L70.1943 55.924C69.9586 56.5467 68.1308 61.372 65.2526 70.1853C54.7487 61.7761 48.7069 54.6579 50.5182 48.1747C51.7836 43.6546 53.7479 42.3184 55.6833 41.5554C64.8928 37.9056 82.6708 44.0505 89.887 46.8591C103.43 52.1339 114.422 58.7119 114.534 58.7779L122.007 46.4384L129.508 34.0742C129.111 33.835 121.783 29.4346 111.317 24.6134C113.12 19.8748 115.026 15.1609 116.469 11.7584L103.141 6.12898L89.8126 0.499512C89.3081 1.68314 86.7938 7.64667 84.143 14.6453C68.5154 10.5996 55.4062 10.6161 45.0264 14.7155C33.8443 19.1324 26.1028 28.02 22.6332 40.4213C18.7212 54.4063 22.6539 68.0449 34.3281 80.9576C40.4071 87.6799 48.2065 93.8373 56.3491 99.7348C52.1971 114.586 47.4497 133.074 42.6072 155.011C26.4254 149.34 13.8001 142.779 13.6719 142.713L0.207031 168.27C0.872829 168.616 16.6535 176.844 36.677 183.5C35.6721 188.631 34.6714 193.902 33.6789 199.317L62.1552 204.501C63.0195 199.77 63.9003 195.135 64.7894 190.586C70.7278 191.526 76.3147 192.009 81.5336 192.009C90.5032 192.009 98.4018 190.615 105.18 187.831C117.317 182.841 125.873 173.438 129.922 160.628C135.199 143.921 131.406 127.812 118.649 112.755C110.808 103.504 100.478 95.5818 89.9243 88.0676H89.9202ZM102.31 151.951C100.829 156.644 98.3894 159.391 94.1631 161.131C90.5322 162.624 83.3945 164.171 70.6616 162.306C74.3214 145.707 78.0061 130.744 81.4674 117.712C87.319 122.195 92.6123 126.756 96.5368 131.384C104.415 140.679 103.877 146.993 102.31 151.947V151.951Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  // stats_icon 229x201 (check mark), wrapper 1.5rem
  check: {
    w: 'w-6',
    svg: (
      <svg width="100%" height="100%" viewBox="0 0 229 201" fill="none">
        <path
          d="M116.523 84.8345C99.3237 106.024 84.7713 128.654 72.4892 153.374L30.2959 76.5697L0 93.124L59.012 200.538L90.2507 198.525C103.778 163.981 121.154 133.883 143.374 106.511C165.531 79.2174 193.305 53.6477 228.282 28.346L207.998 0.458496C170.539 27.5583 140.62 55.1571 116.527 84.8304L116.523 84.8345Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  // stats_icon 241x199 (speech bubble), wrapper 1.5rem
  chat: {
    w: 'w-6',
    svg: (
      <svg width="100%" height="100%" viewBox="0 0 241 199" fill="none">
        <path
          d="M211.087 29.3544C193.048 11.369 169.282 1.13288 143.891 0.349294V0.299805H141.033H140.909H140.748H137.89V0.349294C125.947 0.716343 115.047 3.19496 104.65 7.89237C94.0387 12.6888 84.1799 19.7081 74.5072 29.3544C55.7202 48.0905 45.3735 73.0045 45.3735 99.5021C45.3735 112.551 42.5532 122.923 36.226 133.139C30.2918 142.723 21.901 151.289 11.2731 162.14L10.2971 163.138C6.97636 166.528 3.54816 170.025 0 173.786V198.709H15.6318C16.2356 198.709 16.8517 198.709 17.472 198.709C17.9724 198.709 18.4727 198.709 18.9814 198.709H33.3726L36.2302 198.692C54.5417 198.684 72.4686 198.709 72.6009 198.709H140.748C167.318 198.709 192.296 188.39 211.087 169.654C229.874 150.918 240.22 126.004 240.22 99.5063C240.22 73.0086 229.874 48.0987 211.087 29.3586V29.3544ZM211.628 99.498C211.628 138.475 179.831 170.186 140.748 170.186H72.6339C72.4974 170.186 58.8465 170.157 43.1858 170.149C51.5434 161.133 58.2965 152.712 63.5402 142.962C70.5538 129.922 73.9656 115.706 73.9656 99.498C73.9656 80.3826 80.6814 62.6281 92.8767 49.5092C105.25 36.2005 122.304 28.8472 140.884 28.8142C179.893 28.8884 211.628 60.5949 211.628 99.498Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
}

// `.stats-marquee_item`: flex, gap .5rem, padding 0 1rem (≤767 .5rem), font 1.75rem / 1.5 (token marquee-stat).
const ITEM = 'relative flex flex-none items-stretch justify-center gap-2 px-4 text-marquee-stat [backface-visibility:hidden] sm:px-2'

function Block({ items, hidden }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex flex-none flex-row items-stretch justify-start gap-6 px-6 [animation:marquee-horizontal_60s_linear_infinite] [transform-style:preserve-3d] [will-change:transform] sm:gap-4 sm:px-4"
    >
      {items.map((s, i) => (
        <div key={i} className="contents">
          <div className={ITEM}>
            <div className="flex-none rounded-sm bg-grey-light px-2 pb-[.05rem] font-bold">{s.num}</div>
            <div className="flex w-full items-center justify-center whitespace-nowrap font-medium">{s.label}</div>
          </div>
          {s.icon && ICONS[s.icon] && (
            <div className={ITEM}>
              <div className={`flex h-auto items-center justify-center ${ICONS[s.icon].w}`} aria-hidden="true">
                {ICONS[s.icon].svg}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function StatsMarquee({ items }) {
  return (
    <div
      data-anim="B1-stats-marquee"
      className="hide-mobile-portrait relative flex w-full min-w-0 flex-col gap-4 overflow-hidden border-y border-grey-light py-4"
    >
      <div className="relative flex-1 [perspective:1200px]">
        <div className="flex flex-row items-stretch justify-start [transform-style:preserve-3d] sm:gap-4">
          <Block items={items} />
          <Block items={items} hidden />
        </div>
      </div>
    </div>
  )
}
