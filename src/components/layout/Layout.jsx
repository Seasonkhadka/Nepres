import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const { pathname, hash } = useLocation()
  // Contact page already shows address/phone/hours inline, so the repeating
  // footer would just duplicate it — skip it there.
  const hideFooter = pathname === '/contact'

  useEffect(() => {
    // React Router doesn't scroll to an #id on client-side navigation the
    // way a full page load would, so do it ourselves (e.g. Navbar's "About"
    // link, or the /about -> /#about redirect).
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </div>
  )
}
