import { Link } from 'react-router-dom'
import { banner } from '../data/banner'
import { restaurant } from '../data/restaurant'
import { menu } from '../data/menu'
import { useLanguage } from '../context/LanguageContext'
import PlaceholderImage from '../components/common/PlaceholderImage'
import { publicUrl } from '../utils/publicUrl'

// A thin mountain-peak zigzag, echoing the line art on the printed banner
// and bar menu — used as a section boundary instead of a flat color block.
function MountainRule({ className = '' }) {
  return (
    <svg viewBox="0 0 240 14" preserveAspectRatio="none" className={className} aria-hidden="true">
      <polyline
        points="0,14 15,3 30,14 45,5 60,14 75,2 90,14 105,6 120,14 135,3 150,14 165,5 180,14 195,2 210,14 225,5 240,14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  )
}

const pillars = [
  { en: 'Nepali Roots', ko: '네팔의 뿌리' },
  { en: 'Indian Classics', ko: '인도의 클래식' },
  { en: 'Made Fresh Daily', ko: '매일 신선하게' },
]

function findItem(category, index = 0) {
  return menu.find((s) => s.category === category)?.items[index]
}

const tastes = [
  { category: 'Momo', item: findItem('Momo', 0) },
  { category: 'Chicken Curries', item: findItem('Chicken Curries', 0) },
  { category: 'Biryani', item: findItem('Biryani', 1) },
  { category: 'Naan', item: findItem('Naan', 2) },
  { category: 'Drinks', item: findItem('Drinks', 0) },
].filter((t) => t.item)

function formatPrice(price) {
  return `${restaurant.currency}${price.toLocaleString()}`
}

function itemPrice(item) {
  return item.prices ? `${formatPrice(item.prices[0])}+` : formatPrice(item.price)
}

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      {banner.overlayText === false ? (
        // Banner graphic already has its own logo/text — just show it, plus a CTA.
        <section className="relative">
          {banner.image ? (
            <img
              src={publicUrl(banner.image)}
              alt={t(banner.heading, banner.headingKo)}
              className="max-h-[100vh] w-full object-cover"
            />
          ) : (
            <PlaceholderImage className="aspect-[21/9] w-full" />
          )}
          <div className="absolute inset-x-0 bottom-6 flex justify-center sm:bottom-10">
            <Link
              to={banner.ctaHref}
              className="rounded-md bg-crimson-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-colors hover:bg-crimson-700"
            >
              {t(banner.ctaLabel, banner.ctaLabelKo)}
            </Link>
          </div>
        </section>
      ) : (
        <section className="relative overflow-hidden">
          {banner.image ? (
            <img src={publicUrl(banner.image)} alt="" className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <PlaceholderImage className="absolute inset-0 h-full w-full" />
          )}
          <div className="absolute inset-0 bg-navy-900/60" aria-hidden="true" />

          <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center sm:py-28 lg:py-36">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-saffron-300">{restaurant.name}</p>
            <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {t(banner.heading, banner.headingKo)}
            </h1>
            <p className="mt-4 max-w-2xl text-base text-navy-100 sm:text-lg">
              {t(banner.subheading, banner.subheadingKo)}
            </p>
            <Link
              to={banner.ctaHref}
              className="mt-8 rounded-md bg-crimson-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-crimson-700"
            >
              {t(banner.ctaLabel, banner.ctaLabelKo)}
            </Link>
          </div>
        </section>
      )}

      {/* Statement + photo — an asymmetric editorial band instead of an icon-feature grid */}
      <section className="mx-auto max-w-[1800px] px-4 py-12 sm:px-8 sm:py-16 lg:px-12 2xl:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.3fr] lg:gap-40">
          <p className="font-display text-xl italic leading-snug text-navy-900 sm:text-4xl lg:text-[4xl]">
            {t(
              'Momos, curries, and everything in between — two Nepalese and Indian kitchens, served at one table.',
              '모모부터 커리까지, 그 사이의 모든 것 — 히말라야와 인도, 두 주방의 맛을 한 테이블에서.',
            )}
          </p>

          <div className="text-center">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -inset-3 rounded-xl border border-saffron-300/80" aria-hidden="true" />
              <img
                src={publicUrl('/images/chef1.jpg')}
                alt=""
                className="relative aspect-[3/2] w-full rounded-xl object-content shadow-d"
              />
            </div>
            <p className="mt-6 font-display text-lg italic text-navy-600">
              {t(restaurant.tagline, restaurant.taglineKo)}
            </p>
          </div>
        </div>
      </section>

      <MountainRule className="mx-auto h-3 w-full max-w-[1800px] text-saffron-400/70" />

      {/* Our Story (merged from the former About page) */}
      <section id="about" className="scroll-mt-24 bg-[#fdf8ee] px-4 py-12 sm:px-8 sm:py-16 lg:px-12 2xl:px-16">
        <div className="mx-auto grid max-w-[1800px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl border border-saffron-300/60" aria-hidden="true" />
            <img
              src={publicUrl('/images/building.jpg')}
              alt="Restaurant interior"
              className="relative aspect-[4/3] w-full rounded-xl object-cover shadow-md"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-crimson-600">
              {t('Our Story', '우리의 이야기')}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
              {t('About ', `${restaurant.name} `)}
              <span className="text-crimson-600">{t(restaurant.name, '소개')}</span>
            </h2>

            <div className="mt-6 space-y-4 text-navy-700 first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-6xl first-letter:font-bold first-letter:text-crimson-600">
              <p>
                {t(
                  `${restaurant.name} was born from a simple idea: bring the food of home to the table, without compromise. Our recipes draw from two rich culinary traditions — the Himalayan flavors of Nepal and the bold spice work of India — served the way family would make it.`,
                  `${restaurant.name}는 타협 없이 고향의 맛을 그대로 전한다는 단순한 생각에서 시작되었습니다. 네팔의 히말라야 풍미와 인도의 강렬한 향신료, 두 요리 전통을 담아 가족이 만들어주듯 정성껏 준비합니다.`,
                )}
              </p>
              <p>
                {t(
                  'Every dish starts from scratch in our kitchen: spices are ground and blended in-house, momos are folded by hand, and our tandoor runs hot all day for chicken, kebabs, and fresh-baked naan. Nothing is rushed.',
                  '모든 요리는 주방에서부터 시작됩니다. 향신료는 직접 갈아 블렌딩하고, 모모는 손으로 하나하나 빚으며, 탄두르 화덕은 하루 종일 뜨겁게 달궈져 치킨과 케밥, 갓 구운 난을 만들어냅니다.',
                )}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-navy-800">
              {pillars.map((p, i) => (
                <span key={p.en} className="flex items-center gap-3">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-saffron-500" aria-hidden="true" />}
                  {t(p.en, p.ko)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* A taste of the menu — styled like the printed parchment menu, not a generic CTA */}
      {tastes.length > 0 && (
        <section className="px-4 py-12 sm:px-8 sm:py-16 lg:px-12 2xl:px-16">
          <div className="mx-auto max-w-2xl rounded-2xl border border-saffron-300/60 bg-[#fdf8ee] px-6 py-8 shadow-sm sm:px-12 sm:py-10">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-crimson-600">
                {t('A Taste of the Menu', '메뉴 미리보기')}
              </p>
              <h2 className="mt-2 font-display text-2xl text-navy-900 sm:text-3xl">
                {t("What We're Serving", '오늘의 메뉴')}
              </h2>
            </div>

            <ul className="mt-8 divide-y divide-saffron-200">
              {tastes.map(({ item }) => (
                <li key={item.name} className="flex items-baseline justify-between gap-4 py-3">
                  <span className="font-display text-lg text-navy-900">{t(item.name, item.nameKo)}</span>
                  <span className="flex-1 border-b border-dotted border-navy-300" aria-hidden="true" />
                  <span className="whitespace-nowrap font-semibold text-crimson-600">{itemPrice(item)}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-center">
              <Link
                to="/menu"
                className="inline-block rounded-md bg-crimson-600 px-6 py-3 text-sm font-semibold text-white hover:bg-crimson-700"
              >
                {t('View Full Menu', '전체 메뉴 보기')}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section className="relative bg-navy-900 px-4 pb-12 pt-10 sm:px-6">
        <MountainRule className="mx-auto mb-10 h-3 w-full max-w-3xl text-saffron-500/80" />
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl text-white">{t('Come hungry.', '배고픔을 안고 오세요.')}</h2>
          <p className="mt-4 text-navy-200">
            {t(
              "We're a short stop for something warm, spiced, and made from scratch — see you at the table.",
              '따뜻하고 향긋한, 정성으로 만든 한 끼를 위해 언제든 들러주세요.',
            )}
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="rounded-md bg-crimson-600 px-6 py-3 text-sm font-semibold text-white hover:bg-crimson-700"
            >
              {t('Visit Us', '오시는 길')}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
