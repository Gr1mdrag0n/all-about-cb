import { useEffect, useMemo } from 'react'
import '../css/chat.css'
import CatSilhouette from './CatSilhouette'
import { COFFEES, WISHLIST } from '../content/coffees'

interface Shop {
  name: string
  note: string
}

const ROTATION: Shop[] = [
  {
    name: 'De Mello',
    note: 'The house beans. The Ethiopia Bensa on the V60 every morning comes from here, which makes this less a recommendation and more a dependency.',
  },
]

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function monthLabel(when: string) {
  const [y, m] = when.split('-')
  return `${MONTHS[Number(m) - 1]} ${y}`
}

function Coffee() {
  useEffect(() => {
    const previous = document.title
    document.title = 'Where I’d take you ☕ Caradec Bisesar'
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
    () =>
      COFFEES.filter((c) => c[6] !== null)
        .sort((a, b) => (b[6] as number) - (a[6] as number))
        .slice(0, 6),
    [],
  )

  const regulars = useMemo(
    () => COFFEES.filter((c) => c[7] > 1).sort((a, b) => b[7] - a[7]),
    [],
  )

  return (
    <div className="chat-page coffee-page">
      <nav className="chat-nav">
        <ul>
          <li><a href="#/">Small Talk</a></li>
          <li><a href="#/#paperwork">Resume</a></li>
          <li><a href="#/#contact">Contact</a></li>
        </ul>
      </nav>
      <a className="name-morph" href="#/">Caradec Bisesar</a>

      <section className="coffee-wrap">
        <div className="coffee-kicker">the rotation</div>
        <h1 className="serif">Where I’d take you.</h1>
        <p className="coffee-intro">
          The site ends by offering you a coffee. This is where that coffee happens. Toronto spots I actually go to, one honest line each, plus the running log of what I have been brewing at home.
        </p>

        <ul className="shops">
          {ROTATION.map((shop) => (
            <li key={shop.name}>
              <div className="shop-name serif">{shop.name}</div>
              <p>{shop.note}</p>
            </li>
          ))}
        </ul>

        <p className="coffee-more">The rest of the rotation is still under review. Standards are high. Ask me over a cup.</p>

        <div className="coffee-kicker log-kicker">the log</div>
        <h2 className="serif coffee-h2">What’s actually in the grinder.</h2>
        <p className="coffee-intro">
          I track every bag that comes through the house: roaster, origin, process, and a rating from the household tasting panel. {stats.total} bags logged from {stats.roasters} roasters, going back to {stats.since}.
        </p>

        <div className="coffee-highlights">
          <div className="highlight-col">
            <div className="highlight-label">Top rated</div>
            <ul className="highlight-list">
              {topRated.map((c) => (
                <li key={c[0] + c[1]}>
                  <span className="hl-rating">{c[6]}</span>
                  <span className="hl-name">{c[0]}</span>
                  <span className="hl-meta">{c[1]} · {c[3]}</span>
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

        <details className="coffee-log-details">
          <summary>See the whole log ({stats.total} bags)</summary>
          <div className="coffee-log-scroll">
            <table className="coffee-log-table">
              <thead>
                <tr>
                  <th>Coffee</th>
                  <th>Roaster</th>
                  <th>Origin</th>
                  <th>Process</th>
                  <th>When</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {COFFEES.map((c) => (
                  <tr key={c[0] + c[1] + c[5]}>
                    <td>{c[0]}</td>
                    <td>{c[1]}</td>
                    <td>{c[3]}</td>
                    <td>{c[4] || '—'}</td>
                    <td>{monthLabel(c[5])}</td>
                    <td>{c[6] ?? '—'}</td>
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
          <span>regional manager</span>
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
