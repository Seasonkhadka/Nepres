import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext(undefined)
const STORAGE_KEY = 'nepres-language'

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    return localStorage.getItem(STORAGE_KEY) === 'ko' ? 'ko' : 'en'
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  // t(englishText, koreanText) — pick the string for the active language.
  function t(en, ko) {
    return language === 'ko' && ko ? ko : en
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
