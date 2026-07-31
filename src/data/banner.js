// Homepage hero content. `image` is a root-relative path into public/images
// (Vite serves that folder as-is) — swap the file there, or point this at an
// `import`ed file from src/assets instead if you'd rather bundle it.
export const banner = {
  image: '/images/Openingsoonbanner.png',
  // This banner graphic already has its own logo/text baked in, so skip
  // overlaying our heading/subheading on top of it. Set to true for a plain
  // photo (interior/food shot) that needs text overlaid on it.
  overlayText: false,
  heading: 'Nepali & Indian Restaurant',
  headingKo: '네팔 · 인도 레스토랑',
  subheading: 'Hand-folded momos, slow-cooked curries, and tandoori classics — made fresh, served warm.',
  subheadingKo: '정성껏 빚은 모모, 오래 끓인 커리, 그리고 탄두리 요리를 신선하게 만들어 따뜻하게 대접합니다.',
  ctaLabel: 'View Menu',
  ctaLabelKo: '메뉴 보기',
  ctaHref: '/menu',
}
