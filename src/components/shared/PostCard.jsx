// Webflow `a.global_post-card` (examples.md §2): 3/2 image (radius .6rem) + Peridot 1.5rem/1.3/600 title
// (≤991 1.25rem, ≤479 6vw) + 1.15rem/1.5 paragraph + 3rem round avatar and author name.
// No hover (the original's underline rule targets a different class).
export default function PostCard({ href, image, imageAlt = '', title, text, author, avatar, avatarAlt = '', newTab = false }) {
  return (
    <a
      href={href}
      {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="flex h-full w-full flex-col gap-4 no-underline xs:gap-2"
    >
      <div className="flex flex-1 flex-col gap-4">
        <div className="relative overflow-hidden rounded-md [aspect-ratio:3/2]">
          <img src={image} alt={imageAlt} width="360" height="279" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-[1.5rem] font-semibold leading-[1.3] md:text-[1.25rem] xs:text-[6vw]">{title}</div>
          <p className="text-medium">{text}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 flex-none overflow-hidden rounded-full">
          <img src={avatar} alt={avatarAlt} width="48" height="48" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div className="text-[1rem] leading-[1.5]">{author}</div>
      </div>
    </a>
  )
}
