import { restaurant } from '../../data/restaurant'
import { useLanguage } from '../../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-navy-900 px-4 py-12 text-navy-100 sm:px-6">
      <div className="mx-auto grid max-w-[1800px] gap-8 sm:grid-cols-3">
        <div>
          <h2 className="font-display text-lg text-white">{restaurant.name}</h2>
          <p className="mt-2 text-sm text-navy-200">{t(restaurant.tagline, restaurant.taglineKo)}</p>
          <div className="mt-4 flex gap-4">
            {restaurant.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-navy-200 underline-offset-4 hover:text-white hover:underline"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-300">{t('Hours', '영업시간')}</h3>
          <ul className="mt-3 space-y-1 text-sm text-navy-200">
            {restaurant.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{t(h.day, h.dayKo)}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-300">{t('Visit', '오시는 길')}</h3>
          <address className="mt-3 space-y-1 text-sm not-italic text-navy-200">
            <p>{restaurant.address.line1}</p>
            <p>{restaurant.address.line2}</p>
            <p>
              <a href={restaurant.phoneHref} className="hover:text-white hover:underline">
                {restaurant.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${restaurant.email}`} className="hover:text-white hover:underline">
                {restaurant.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-[1800px] border-t border-navy-800 pt-6 text-xs text-navy-400">
        &copy; {new Date().getFullYear()} {restaurant.name}. {t('All rights reserved.', '모든 권리 보유.')}
      </p>
    </footer>
  )
}
