import { useEffect } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import App from './App'
import Bar from './Bar'
import Coffee from './Coffee'
import Kit from './Kit'
import Gallery from './Gallery'
import { initAnalytics, trackPageview } from '../analytics'

// Fires a GA4 page_view on every route change. Deferred a tick so each page's
// own document.title effect has run before we read it.
function Analytics() {
  const location = useLocation()
  useEffect(() => { initAnalytics() }, [])
  useEffect(() => {
    const id = window.setTimeout(
      () => trackPageview(location.pathname + location.search, document.title),
      0,
    )
    return () => window.clearTimeout(id)
  }, [location])
  return null
}

const Router = () => (
  <HashRouter>
    <Analytics />
    <Routes>
      <Route path="/bar" element={<Bar />} />
      <Route path="/coffee" element={<Coffee />} />
      <Route path="/uses" element={<Kit />} />
      <Route path="/photos" element={<Gallery />} />
      <Route path="*" element={<App />} />
    </Routes>
  </HashRouter>
)

export default Router
