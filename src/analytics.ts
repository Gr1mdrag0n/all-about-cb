// Google Analytics 4.
//
// The Measurement ID is public (it ships in the page source either way), so
// it lives here rather than in a secret. Paste your own G-XXXXXXXXXX id below.
// Until a real id is set, every call is a no-op, so this is safe to ship.
export const GA_ID = 'G-272H5NQTX8'

// Self-exclusion: run `localStorage.setItem('cb-noga', '1')` in the console on
// any browser you want kept out of the stats. Reliable and device-specific,
// independent of your IP address.
function optedOut() {
  try {
    return localStorage.getItem('cb-noga') === '1'
  } catch {
    return false
  }
}

const enabled = () => GA_ID.startsWith('G-') && !GA_ID.includes('XXXX') && !optedOut()

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

let started = false

// Inject gtag.js once. We disable the automatic page_view because this is a
// single-page app on a HashRouter — we send one per route change instead.
export function initAnalytics() {
  if (started || !enabled()) return
  started = true

  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // GA expects the raw arguments object pushed onto dataLayer.
    window.dataLayer!.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID, { send_page_view: false })
}

export function trackPageview(path: string, title: string) {
  if (!enabled() || !window.gtag) return
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: title,
  })
}
