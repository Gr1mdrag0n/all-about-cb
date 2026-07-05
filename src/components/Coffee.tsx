import { useEffect, useMemo } from 'react'
import '../css/chat.css'
import { useLights } from '../hooks/useLights'
import CatSilhouette from './CatSilhouette'
import { COFFEES, ROASTER_STATS, WISHLIST } from '../content/coffees'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function monthLabel(when: string) {
  const [y, m] = when.split('-')
  return `${MONTHS[Number(m) - 1]} ${y}`
}

function Coffee() {
  const [lights, setLights] = useLights()

  useEffect(() => {
    const previous = document.title
    document.title = 'The Log ☕ Caradec Bisesar'
    return () => { document.title = previous }
  }, [])

  const stats = useMemo(() => {
    const roasters = new Set(COFFEES.map((c) => c[1]))
    const dates = COFFEES.map((c) => c[5]).sort()
    return {
      total: COFFEES.length,
      roasters: roasters.size,
      since: monthLabel(dates[0]),
    }
  }, [])

  const topRated = useMemo(
    () => ROASTER_STATS.filter((r) => r[1] > 2).sort((a, b) => b[2] - a[2]).slice(0, 6),
    [],
  )

  const regulars = useMemo(
    () => COFFEES.filter((c) => c[7] > 1).sort((a, b) => b[7] - a[7]),
    [],
  )

  return (
    <div className={'chat-page coffee-page' + (lights ? '' : ' lights-off')}>
      <nav className="chat-nav">
        <ul>
          <li><a href="#/">Small Talk</a></li>
          <li><a href="#/#paperwork">Resume</a></li>
          <li><a href="#/#contact">Contact</a></li>
        </ul>
      </nav>
      <a className="name-morph" href="#/">Caradec Bisesar</a>
      <button className="cord" type="button" aria-label="Light switch" onClick={() => setLights((on) => !on)}>
        <span className="line"></span>
        <span className="knob"></span>
      </button>

      <section className="coffee-wrap">
        <div className="coffee-kicker">the log</div>
        <h1 className="serif">What’s actually in the grinder.</h1>
        <p className="coffee-intro">
          I track every bag that comes through the house: roaster, origin, process, and a rating from the household tasting panel. {stats.total} bags logged from {stats.roasters} roasters, going back to {stats.since}.
        </p>

        <div className="coffee-highlights">
          <div className="highlight-col">
            <div className="highlight-label">Top rated</div>
            <ul className="highlight-list">
              {topRated.map((r) => (
                <li key={r[0]}>
                  <span className="hl-rating">{r[2]}</span>
                  <span className="hl-name">{r[0]}</span>
                  <span className="hl-meta">{r[1]} bag{r[1] > 1 ? 's' : ''}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="highlight-col">
            <div className="highlight-label">The regulars</div>
            <ul className="highlight-list">
              {regulars.map((c) => (
                <li key={c[0] + c[1]}>
                  <span className="hl-rating">{c[7]}×</span>
                  <span className="hl-name">{c[0]}</span>
                  <span className="hl-meta">{c[1]}{c[8] ? ` · ${c[8]}` : ''}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="coffee-kicker log-kicker">every roaster</div>
        <details className="coffee-log-details">
          <summary>See all {ROASTER_STATS.length} roasters</summary>
          <div className="coffee-log-scroll">
            <table className="coffee-log-table">
              <thead>
                <tr>
                  <th>Roaster</th>
                  <th>Bags</th>
                  <th>Avg</th>
                </tr>
              </thead>
              <tbody>
                {ROASTER_STATS.map((r) => (
                  <tr key={r[0]}>
                    <td>{r[0]}</td>
                    <td>{r[1]}</td>
                    <td>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>

        <p className="coffee-more coffee-wishlist">
          <span className="wishlist-label">Still on the list: </span>
          {WISHLIST.join(', ')}.
        </p>

        <div className="coffee-manager" aria-hidden="true">
          <CatSilhouette />
          <span>quality control</span>
        </div>
      </section>

      <footer className="chat-footer">
        <span>© {new Date().getFullYear()} Caradec Bisesar</span>
        <a href="#/">back to the chat</a>
      </footer>
    </div>
  )
}

export default Coffee
