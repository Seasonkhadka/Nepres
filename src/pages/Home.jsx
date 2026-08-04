import { Link } from 'react-router-dom'
import { banner } from '../data/banner'
import { restaurant } from '../data/restaurant'
import { useLanguage } from '../context/LanguageContext'
import PlaceholderImage from '../components/common/PlaceholderImage'
import { publicUrl } from '../utils/publicUrl'

const highlights = [
  {
    en: { title: 'Hand-Folded Momos', description: 'Steamed or pan-fried dumplings, made fresh in-house every day.' },
    ko: { title: '수제 모모', description: '매일 매장에서 직접 빚는 찐 모모와 팬프라이드 모모.' },
  },
  {
    en: { title: 'Tandoori Specialties', description: 'Marinated overnight, char-grilled to order in a traditional clay tandoor.' },
    ko: { title: '탄두리 요리', description: '하룻밤 재운 재료를 전통 탄두르 화덕에서 즉석으로 구워냅니다.' },
  },
  {
    en: { title: 'Slow-Cooked Curries', description: 'Home-ground spice blends, simmered low and slow for depth of flavor.' },
    ko: { title: '슬로우 커리', description: '직접 갈아 만든 향신료로 오래 끓여낸 깊은 맛의 커리.' },
  },
  {
    en: { title: 'Warm Hospitality', description: 'A cozy dining room and attentive service, every visit.' },
    ko: { title: '따뜻한 환대', description: '아늑한 매장과 세심한 서비스로 맞이합니다.' },
  },
]

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      {banner.overlayText === false ? (
        // Banner graphic already has its own logo/text — just show it, plus a CTA.
        <section>
          {banner.image ? (
            <img
              src={publicUrl(banner.image)}
              alt={t(banner.heading, banner.headingKo)}
              className="max-h-[80vh] w-full object-cover"
            />
          ) : (
            <PlaceholderImage className="aspect-[21/9] w-full" />
          )}
          <div className="flex justify-center bg-white py-8">
            <Link
              to={banner.ctaHref}
              className="rounded-md bg-crimson-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-crimson-700"
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

      <section className="mx-auto max-w-[1800px] px-4 py-16 sm:px-8 lg:px-12 2xl:px-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.en.title} className="rounded-lg border border-navy-100 bg-white p-6 text-center shadow-sm">
              <h2 className="font-display text-lg text-navy-900">{t(h.en.title, h.ko.title)}</h2>
              <p className="mt-2 text-sm text-navy-700">{t(h.en.description, h.ko.description)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl text-navy-900">
            {t('Nepali & Indian, side by side', '네팔과 인도, 한 테이블 위에')}
          </h2>
          <p className="mt-4 text-navy-700">
            {t(
              "From Kathmandu-style momos to North Indian curries and tandoori favorites, our menu brings both cuisines together on one table — familiar favorites and dishes you won't find anywhere else nearby.",
              '카트만두 스타일 모모부터 북인도 커리와 탄두리 요리까지, 두 나라의 맛을 한 메뉴에서 만나보세요.',
            )}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/menu"
              className="rounded-md bg-navy-800 px-6 py-3 text-sm font-semibold text-white hover:bg-navy-900"
            >
              {t('Explore the Menu', '메뉴 보기')}
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-navy-800 px-6 py-3 text-sm font-semibold text-navy-800 hover:bg-navy-50"
            >
              {t('Visit Us', '오시는 길')}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
