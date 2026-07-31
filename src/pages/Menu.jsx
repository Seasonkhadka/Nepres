import { menu } from '../data/menu'
import { restaurant } from '../data/restaurant'
import { useLanguage } from '../context/LanguageContext'
import PlaceholderImage from '../components/common/PlaceholderImage'

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

function formatPrice(price) {
  return `${restaurant.currency}${price.toLocaleString()}`
}

export default function Menu() {
  const { t, language } = useLanguage()

  return (
    <section className="mx-auto max-w-[1800px] px-4 py-16 sm:px-8 lg:px-12 2xl:px-16">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-crimson-600">
          {t('Our Menu', '메뉴')}
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
          {t("What We're Serving", '오늘의 메뉴')}
        </h1>
      </div>

      <nav aria-label="Menu categories" className="sticky top-[57px] z-40 -mx-4 mt-8 flex flex-wrap justify-center gap-2 bg-cream/95 px-4 py-3 backdrop-blur sm:top-[65px]">
        {menu.map((section) => (
          <a
            key={section.category}
            href={`#${slugify(section.category)}`}
            className="rounded-full border border-navy-200 px-4 py-1.5 text-sm font-medium text-navy-800 hover:border-crimson-600 hover:text-crimson-600"
          >
            {t(section.category, section.categoryKo)}
          </a>
        ))}
      </nav>

      <div className="mt-8 space-y-16">
        {menu.map((section) => (
          <div key={section.category} id={slugify(section.category)} className="scroll-mt-32">
            <div className="flex items-baseline gap-3 border-b border-navy-100 pb-3">
              <h2 className="font-display text-2xl text-navy-900">{t(section.category, section.categoryKo)}</h2>
              {language === 'en' && section.categoryKo && (
                <span className="text-sm text-navy-400">{section.categoryKo}</span>
              )}
            </div>
            {section.note && <p className="mt-2 text-sm text-navy-500">{section.note}</p>}

            {section.comingSoon ? (
              <p className="mt-6 rounded-lg border border-dashed border-navy-200 px-4 py-10 text-center text-navy-500">
                {t('Coming soon', '곧 만나요')}
              </p>
            ) : (
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {section.items.map((item) => (
                  <article
                    key={item.name}
                    className="overflow-hidden rounded-xl border border-navy-100 bg-white shadow-sm transition-shadow hover:shadow-md"
                  >
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="aspect-[4/3] w-full object-cover" />
                    ) : (
                      <PlaceholderImage label={item.name} className="aspect-[4/3] w-full" />
                    )}
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-medium text-navy-900">{t(item.name, item.nameKo)}</h3>
                          {language === 'en' && item.nameKo && (
                            <p className="text-xs text-navy-500">{item.nameKo}</p>
                          )}
                        </div>
                        <span className="whitespace-nowrap font-semibold text-crimson-600">
                          {formatPrice(item.price)}
                        </span>
                      </div>
                      {item.description && <p className="mt-1 text-sm text-navy-700">{item.description}</p>}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
