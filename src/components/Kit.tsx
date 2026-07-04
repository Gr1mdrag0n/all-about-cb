import { useEffect } from 'react'
import '../css/chat.css'
import { KIT_CAMERA, KIT_COFFEE } from '../content/kit'

function Kit() {
  useEffect(() => {
    const previous = document.title
    document.title = 'The Kit ☕ Caradec Bisesar'
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
        <div className="coffee-kicker">the kit</div>
        <h1 className="serif">What I actually use.</h1>
        <p className="coffee-intro">
          The Toolbox covers the stack. This is the physical version: what’s in the camera bag and on the counter.
        </p>

        <div className="coffee-kicker log-kicker">the camera bag</div>
        <dl className="caps">
          {KIT_CAMERA.map(([label, value]) => (
            <div key={label} style={{ display: 'contents' }}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <div className="coffee-kicker log-kicker">the home cafe</div>
        <dl className="caps">
          {KIT_COFFEE.map(([label, value]) => (
            <div key={label} style={{ display: 'contents' }}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <p className="coffee-more">The beans themselves get their own page. This is just the hardware.</p>
      </section>

      <footer className="chat-footer">
        <span>© {new Date().getFullYear()} Caradec Bisesar</span>
        <a href="#/">back to the chat</a>
      </footer>
    </div>
  )
}

export default Kit
