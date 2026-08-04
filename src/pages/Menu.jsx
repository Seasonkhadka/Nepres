import { useState } from 'react'
import { menu, cuisines } from '../data/menu'
import { restaurant } from '../data/restaurant'
import { useLanguage } from '../context/LanguageContext'
import PlaceholderImage from '../components/common/PlaceholderImage'
import { publicUrl } from '../utils/publicUrl'

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

function formatPrice(price) {
  return `${restaurant.currency}${price.toLocaleString()}`
}

export default function Menu() {
  const { t, language } = useLanguage()
  const [activeCuisine, setActiveCuisine] = useState(cuisines[0].key)

  const sections = menu.filter((section) => section.cuisine === activeCuisine)

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

      {/* Cuisine tabs */}
      <div className="mt-8 flex justify-center gap-2">
        {cuisines.map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setActiveCuisine(c.key)}
            aria-pressed={activeCuisine === c.key}
            className={`rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
              activeCuisine === c.key
                ? 'bg-crimson-600 text-white'
                : 'border border-navy-200 text-navy-800 hover:border-crimson-600 hover:text-crimson-600'
            }`}
          >
            {t(c.label, c.labelKo)}
          </button>
        ))}
      </div>

      {/* Slideable category nav — horizontal scroll/swipe, snaps per item */}
      <nav
        aria-label="Menu categories"
        className="sticky top-[57px] z-40 -mx-4 mt-6 flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-px-4 bg-cream/95 px-4 py-3 backdrop-blur sm:top-[65px]"
      >
        <div className="flex gap-2 scrollbar-hide">
          {sections.map((section) => (
            <a
              key={section.category}
              href={`#${slugify(section.category)}`}
              className="snap-start whitespace-nowrap rounded-full border border-navy-200 px-4 py-1.5 text-sm font-medium text-navy-800 hover:border-crimson-600 hover:text-crimson-600"
            >
              {t(section.category, section.categoryKo)}
            </a>
          ))}
        </div>
      </nav>

      <div className="mt-8 space-y-16">
        {sections.map((section) => (
          <div key={section.category} id={slugify(section.category)} className="scroll-mt-32">
            <div className="flex items-baseline gap-3 border-b border-navy-100 pb-3">
              <h2 className="font-display text-2xl text-navy-900">{t(section.category, section.categoryKo)}</h2>
              {/*{language === 'en' && section.categoryKo && (
                <span className="text-sm text-navy-400">{section.categoryKo}</span>
              )}*/}
            </div>
            {section.note && <p className="mt-2 text-sm text-navy-500">{t(section.note, section.noteKo)}</p>}

            {section.comingSoon ? (
              <p className="mt-6 rounded-lg border border-dashed border-navy-200 px-4 py-10 text-center text-navy-500">
                {t('Coming soon', '곧 만나요')}
              </p>
            ) : (
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 xl:grid-cols-5">
                {section.items.map((item) => (
                  <article
                    key={item.name}
                    className="overflow-hidden rounded-xl border border-navy-100 bg-white shadow-sm transition-shadow hover:shadow-md"
                  >
                    {item.image ? (
                      <img src={publicUrl(item.image)} alt={item.name} className="aspect-[4/3] w-full object-cover" />
                    ) : (
                      <PlaceholderImage label={item.name} className="aspect-[4/3] w-full" />
                    )}
                    <div className="p-2.5 sm:p-4">
                      <div className="flex items-start justify-between gap-2 sm:gap-3">
                        <div>
                          <h3 className="text-lg font-medium text-navy-900 sm:text-lg">
                            {t(item.name, item.nameKo)}
                          </h3>
                          {/*{language === 'en' && item.nameKo && (
                            <p className="text-xs text-navy-500">{item.nameKo}</p>
                          )}*/}
                        </div>
                        {section.type === 'table' ? (
                          <span className="whitespace-nowrap text-sm font-semibold text-crimson-600 sm:text-base">
                            {formatPrice(item.prices[0])}+
                          </span>
                        ) : (
                          <span className="whitespace-nowrap text-sm font-semibold text-crimson-600 sm:text-base">
                            {formatPrice(item.price)}
                          </span>
                        )}
                      </div>
                      {section.type === 'table' && (
                        <dl className="mt-2 space-y-1 border-t border-navy-50 pt-2">
                          {section.columns.map((col, i) => (
                            <div key={col} className="flex items-center justify-between text-xs text-navy-600">
                              <dt>{col}</dt>
                              <dd className="font-bold text-navy-900">{formatPrice(item.prices[i])}</dd>
                            </div>
                          ))}
                        </dl>
                      )}
                      {item.description && (
                        <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-navy-400">
                          {t(item.description, item.descriptionKo)}
                        </p>
                      )}
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
