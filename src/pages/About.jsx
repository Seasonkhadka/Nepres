import PlaceholderImage from '../components/common/PlaceholderImage'
import { restaurant } from '../data/restaurant'
import { useLanguage } from '../context/LanguageContext'

// Placeholder copy — swap in your real story once you're ready.
export default function About() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-crimson-600">
        {t('Our Story', '우리의 이야기')}
      </p>
      <h1 className="mt-2 text-center font-display text-3xl font-bold text-navy-900 sm:text-4xl">
        {t(`About ${restaurant.name}`, `${restaurant.name} 소개`)}
      </h1>

      <img src="/images/building.jpg" alt="Restaurant interior" className="mt-10 aspect-video w-full rounded-lg" />

      <div className="mt-10 space-y-6 text-navy-700">
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
        <p>
          {t(
            "What makes us different is the range on one menu — Kathmandu street-food classics alongside North Indian curries and tandoori favorites, so there's always something new to try and something familiar to come back to.",
            '카트만두의 길거리 음식부터 북인도의 커리와 탄두리 요리까지 한 메뉴에서 만날 수 있다는 점이 저희만의 특별함입니다.',
          )}
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        <div className="rounded-lg border border-navy-100 p-5">
          <h2 className="font-display text-lg text-navy-900">{t('Nepali Roots', '네팔의 뿌리')}</h2>
          <p className="mt-2 text-sm text-navy-700">
            {t('Momos, thukpa-inspired flavors, and home-style curries.', '모모, 특빠 그리고 가정식 커리.')}
          </p>
        </div>
        <div className="rounded-lg border border-navy-100 p-5">
          <h2 className="font-display text-lg text-navy-900">{t('Indian Classics', '인도의 클래식')}</h2>
          <p className="mt-2 text-sm text-navy-700">
            {t('Tandoori grills, rich curries, and fresh-baked breads.', '탄두리 구이, 진한 커리 그리고 갓 구운 빵.')}
          </p>
        </div>
        <div className="rounded-lg border border-navy-100 p-5">
          <h2 className="font-display text-lg text-navy-900">{t('Made Fresh Daily', '매일 신선하게')}</h2>
          <p className="mt-2 text-sm text-navy-700">
            {t('Spices ground in-house, nothing sitting on a shelf.', '매장에서 직접 갈아 만드는 신선한 향신료.')}
          </p>
        </div>
      </div>
    </section>
  )
}
