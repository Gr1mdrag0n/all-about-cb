import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import Router from './components/Router'

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)

// The old CRA build registered a service worker; unregister it so returning
// visitors stop being served years-old cached builds.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .getRegistrations()
    .then((registrations) => registrations.forEach((registration) => registration.unregister()))
    .catch(() => {})
}
