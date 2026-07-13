import { useEffect } from 'react'
import '../css/chat.css'
import { useLights } from '../hooks/useLights'
import { KIT_CAMERA, KIT_COFFEE } from '../content/kit'

function Kit() {
  const [lights, setLights] = useLights()

  useEffect(() => {
    const previous = document.title
    document.title = 'The Kit ☕ Caradec Bisesar'
    return () => { document.title = previous }
  }, [])

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
        <div className="coffee-kicker">the kit</div>
        <h1 className="serif">What I keep handy.</h1>

        <div className="coffee-kicker log-kicker">the camera bag</div>
        <dl className="caps">
          {KIT_CAMERA.map(([label, items]) => (
            <div key={label} style={{ display: 'contents' }}>
              <dt>{label}</dt>
              <dd>
                <ul className="kit-list">
                  {items.map((v) => <li key={v}>{v}</li>)}
                </ul>
              </dd>
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
      </section>

      <footer className="chat-footer">
        <span>© {new Date().getFullYear()} Caradec Bisesar</span>
        <a href="#/">back to the chat</a>
      </footer>
    </div>
  )
}

export default Kit
