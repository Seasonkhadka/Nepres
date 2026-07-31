import { useLanguage } from '../../context/LanguageContext'

export default function LanguageToggle({ className = '' }) {
  const { language, setLanguage } = useLanguage()

  return (
    <div
      role="group"
      aria-label="Select language"
      className={`inline-flex rounded-full border border-navy-200 p-0.5 text-xs font-semibold ${className}`}
    >
      {[
        { code: 'en', label: 'EN' },
        { code: 'ko', label: 'KR' },
      ].map(({ code, label }) => (
        <button
          key={code}
          type="button"
          aria-pressed={language === code}
          onClick={() => setLanguage(code)}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            language === code ? 'bg-crimson-600 text-white' : 'text-navy-700 hover:text-crimson-600'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
