import { useEffect } from 'react'
import '../css/chat.css'
import { useLights } from '../hooks/useLights'
import { GALLERY, PX_PROFILE } from '../content/gallery'

// Resolve every gallery image at build time, keyed by basename.
const imgs = import.meta.glob<string>('../assets/gallery/*.jpg', {
  eager: true,
  import: 'default',
  query: '?url',
})
const srcFor = (file: string) => imgs[`../assets/gallery/${file}.jpg`]

function Gallery() {
  const [lights, setLights] = useLights()

  useEffect(() => {
    const previous = document.title
    document.title = 'The Gallery ☕ Caradec Bisesar'
    return () => { document.title = previous }
  }, [])

  return (
    <div className={'chat-page coffee-page gallery-page' + (lights ? '' : ' lights-off')}>
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

      <section className="coffee-wrap gallery-wrap">
        <div className="coffee-kicker">the gallery</div>
        <h1 className="serif">Through the lens.</h1>
        <p className="coffee-intro">
          A wander through what I’ve been shooting: wildlife, cities, landscapes, and the odd late night with a tripod. Tap any frame to see it full-size on 500px.
        </p>

        {GALLERY.map((section) => (
          <div key={section.title} className="gallery-section">
            <div className="coffee-kicker log-kicker">{section.title.toLowerCase()}</div>
            <div className="gallery-grid">
              {section.photos.map((p) => (
                <a
                  key={p.file}
                  className="gallery-item"
                  href={p.px || PX_PROFILE}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={srcFor(p.file)} alt={p.alt} loading="lazy" />
                </a>
              ))}
            </div>
          </div>
        ))}

        <p className="coffee-more">More, and full resolution, on <a href={PX_PROFILE} target="_blank" rel="noopener noreferrer">500px</a>.</p>
      </section>

      <footer className="chat-footer">
        <span>© {new Date().getFullYear()} Caradec Bisesar</span>
        <a href="#/">back to the chat</a>
      </footer>
    </div>
  )
}

export default Gallery
