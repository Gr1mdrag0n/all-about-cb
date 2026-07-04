import { useEffect } from 'react'
import '../css/chat.css'
import CatSilhouette from './CatSilhouette'

interface Shop {
  name: string
  note: string
}

// The Toronto rotation. Caradec adds spots as he vouches for them.
const ROTATION: Shop[] = [
  {
    name: 'De Mello',
    note: 'The house beans. The Ethiopia Bensa on the V60 every morning comes from here, which makes this less a recommendation and more a dependency.',
  },
]

function Coffee() {
  useEffect(() => {
    const previous = document.title
    document.title = 'Where I’d take you ☕ Caradec Bisesar'
    return () => { document.title = previous }
  }, [])

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
          The site ends by offering you a coffee. This is where that coffee happens. Toronto spots I actually go to, one honest line each.
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
