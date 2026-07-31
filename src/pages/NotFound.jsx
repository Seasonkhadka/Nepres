import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <section className="px-4 py-24 text-center">
      <h1 className="text-3xl font-bold text-navy-900">{t('Page not found', '페이지를 찾을 수 없습니다')}</h1>
      <Link to="/" className="mt-4 inline-block text-crimson-600 underline">
        {t('Back to home', '홈으로 돌아가기')}
      </Link>
    </section>
  )
}
