import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { restaurant } from '../../data/restaurant'
import { useLanguage } from '../../context/LanguageContext'
import LanguageToggle from '../common/LanguageToggle'

const links = [
  { to: '/', en: 'Home', ko: '홈' },
  { to: '/about', en: 'About', ko: '소개' },
  { to: '/menu', en: 'Menu', ko: '메뉴' },
  { to: '/gallery', en: 'Gallery', ko: '갤러리' },
  { to: '/contact', en: 'Contact', ko: '문의' },
]

function navLinkClass({ isActive }) {
  return `text-sm font-medium transition-colors hover:text-crimson-600 ${
    isActive ? 'text-crimson-600' : 'text-navy-800'
  }`
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1800px] items-center justify-between px-4 py-3 sm:px-8 lg:px-12 2xl:px-16">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src="/images/Logonobg.png" alt={restaurant.name} className="h-9 w-auto" />
        </NavLink>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass}>
              {t(link.en, link.ko)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle className="hidden sm:inline-flex" />

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md text-navy-800 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="flex flex-col gap-1 border-t border-navy-100 bg-cream px-4 pb-4 pt-2 md:hidden"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-base font-medium ${
                  isActive ? 'bg-navy-50 text-crimson-600' : 'text-navy-800'
                }`
              }
              onClick={() => setOpen(false)}
            >
              {t(link.en, link.ko)}
            </NavLink>
          ))}
          <LanguageToggle className="mt-2 self-start sm:hidden" />
        </nav>
      )}
    </header>
  )
}
