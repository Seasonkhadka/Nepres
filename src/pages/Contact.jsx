import { restaurant } from '../data/restaurant'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-crimson-600">
          {t('Visit Us', '오시는 길')}
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
          {t('Reservations & Contact', '예약 및 문의')}
        </h1>
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-xl text-navy-900">{t('Get in Touch', '연락처')}</h2>
          <address className="mt-4 space-y-2 text-navy-700 not-italic">
            <p>{restaurant.address.line1}</p>
            <p>{restaurant.address.line2}</p>
            <p>
              <a href={restaurant.phoneHref} className="hover:text-crimson-600 hover:underline">
                {restaurant.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${restaurant.email}`} className="hover:text-crimson-600 hover:underline">
                {restaurant.email}
              </a>
            </p>
          </address>

          <h2 className="mt-8 font-display text-xl text-navy-900">{t('Hours', '영업시간')}</h2>
          <ul className="mt-4 space-y-1 text-navy-700">
            {restaurant.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4 border-b border-navy-100 py-1.5 text-sm">
                <span>{t(h.day, h.dayKo)}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-navy-700">
            {t('For reservations, please call us directly at', '예약은 아래 번호로 전화 부탁드립니다')}{' '}
            <a href={restaurant.phoneHref} className="font-medium text-crimson-600 hover:underline">
              {restaurant.phone}
            </a>
            .
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-navy-100">
          <iframe
            title={`Map to ${restaurant.name}`}
            src={restaurant.mapEmbedSrc}
            className="h-80 w-full sm:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
