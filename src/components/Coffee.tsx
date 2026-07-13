import { useEffect, useMemo, useState } from 'react'
import '../css/chat.css'
import { useLights } from '../hooks/useLights'
import { COFFEES, ROASTER_STATS } from '../content/coffees'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function monthLabel(when: string) {
  const [y, m] = when.split('-')
  return `${MONTHS[Number(m) - 1]} ${y}`
}

// Consistent one-decimal scores so "8" lines up with "7.75", "7.6", etc.
const score = (n: number) => n.toFixed(1)

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

  // Highest-rated individual beans (not roasters).
  const topRated = useMemo(
    () =>
      COFFEES.filter((c) => c[6] != null)
        .sort((a, b) => (b[6] as number) - (a[6] as number))
        .slice(0, 6),
    [],
  )

  // Sortable roaster table. 0 = name (A–Z), 1 = bags, 2 = avg.
  // Defaults: bags, most first. Numbers default to descending, name to A–Z.
  const [sortKey, setSortKey] = useState<0 | 1 | 2>(1)
  const [sortDir, setSortDir] = useState<1 | -1>(-1)
  const sortBy = (key: 0 | 1 | 2) => {
    if (key === sortKey) setSortDir((d) => (d === 1 ? -1 : 1))
    else { setSortKey(key); setSortDir(key === 0 ? 1 : -1) }
  }
  const sortedRoasters = useMemo(() => {
    return [...ROASTER_STATS].sort((a, b) => {
      const cmp = sortKey === 0
        ? String(a[0]).localeCompare(String(b[0]))
        : (a[sortKey] as number) - (b[sortKey] as number)
      return cmp * sortDir
    })
  }, [sortKey, sortDir])
  const arrow = (key: 0 | 1 | 2) => (sortKey === key ? (sortDir === 1 ? ' ↑' : ' ↓') : '')
  const ariaSort = (key: 0 | 1 | 2) =>
    sortKey === key ? (sortDir === 1 ? 'ascending' : 'descending') : 'none'

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
        <div className="coffee-kicker">beans</div>
        <h1 className="serif">Roaster Ratings</h1>
        <p className="coffee-intro">
          I track every bag that comes through the house: roaster, origin, process, and a personal rating. {stats.total} bags logged from {stats.roasters} roasters, and counting.
        </p>

        <div className="coffee-highlights">
          <div className="highlight-col">
            <div className="highlight-label">Top rated</div>
            <ul className="highlight-list">
              {topRated.map((c) => (
                <li key={c[0] + c[1]}>
                  <span className="hl-rating">{score(c[6] as number)}</span>
                  <span className="hl-name">{c[0]}</span>
                  <span className="hl-meta">{c[1]}</span>
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
                  <th aria-sort={ariaSort(0)}>
                    <button type="button" className="sort-th" onClick={() => sortBy(0)}>Roaster{arrow(0)}</button>
                  </th>
                  <th aria-sort={ariaSort(1)}>
                    <button type="button" className="sort-th" onClick={() => sortBy(1)}>Bags{arrow(1)}</button>
                  </th>
                  <th aria-sort={ariaSort(2)}>
                    <button type="button" className="sort-th" onClick={() => sortBy(2)}>Avg{arrow(2)}</button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedRoasters.map((r) => (
                  <tr key={r[0]}>
                    <td>{r[0]}</td>
                    <td>{r[1]}</td>
                    <td>{score(r[2])}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>

        <p className="coffee-more">
          Curious to learn more? <a href="#/#contact">Let’s get in touch</a> and talk beans.
        </p>
      </section>

      <footer className="chat-footer">
        <span>© {new Date().getFullYear()} Caradec Bisesar</span>
        <a href="#/">back to the chat</a>
      </footer>
    </div>
  )
}

export default Coffee
