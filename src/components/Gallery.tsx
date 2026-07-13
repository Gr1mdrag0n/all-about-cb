import { useCallback, useEffect, useState } from 'react'
import '../css/chat.css'
import { useLights } from '../hooks/useLights'
import { GALLERY, PX_PROFILE, type GalleryPhoto } from '../content/gallery'

// Resolve every gallery image at build time, keyed by basename.
const imgs = import.meta.glob<string>('../assets/gallery/*.jpg', {
  eager: true,
  import: 'default',
  query: '?url',
})
const srcFor = (file: string) => imgs[`../assets/gallery/${file}.jpg`]

// Flatten for lightbox prev/next across the whole gallery.
const ALL: GalleryPhoto[] = GALLERY.flatMap((s) => s.photos)
const indexOf = (p: GalleryPhoto) => ALL.indexOf(p)

function Gallery() {
  const [lights, setLights] = useLights()
  const [open, setOpen] = useState<number | null>(null)

  useEffect(() => {
    const previous = document.title
    document.title = 'The Gallery ☕ Caradec Bisesar'
    return () => { document.title = previous }
  }, [])

  const close = useCallback(() => setOpen(null), [])
  const step = useCallback((dir: number) => {
    setOpen((i) => (i === null ? i : (i + dir + ALL.length) % ALL.length))
  }, [])

  // Keyboard nav + scroll lock while the lightbox is open.
  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, close, step])

  const current = open === null ? null : ALL[open]

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
          A wander through what I’ve been shooting: wildlife, cities, landscapes, and the odd late night with a tripod. Tap any frame to open it.
        </p>

        {GALLERY.map((section) => (
          <div key={section.title} className="gallery-section">
            <div className="coffee-kicker log-kicker">{section.title.toLowerCase()}</div>
            <div className="gallery-grid">
              {section.photos.map((p) => (
                <button
                  key={p.file}
                  className="gallery-item"
                  type="button"
                  onClick={() => setOpen(indexOf(p))}
                  aria-label={`Open: ${p.alt}`}
                >
                  <img src={srcFor(p.file)} alt={p.alt} loading="lazy" />
                  {p.loc && <span className="gallery-loc">{p.loc}</span>}
                </button>
              ))}
            </div>
          </div>
        ))}

        <p className="coffee-more">More, and full resolution, on <a href={PX_PROFILE} target="_blank" rel="noopener noreferrer">500px</a>.</p>
      </section>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.alt} onClick={close}>
          <button className="lb-close" type="button" aria-label="Close" onClick={close}>×</button>
          <button className="lb-nav prev" type="button" aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1) }}>←</button>
          <button className="lb-nav next" type="button" aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1) }}>→</button>
          <figure className="lb-figure" onClick={(e) => e.stopPropagation()}>
            <img src={srcFor(current.file)} alt={current.alt} />
            <figcaption>
              <span className="lb-alt">{current.alt}</span>
              {current.loc && <span className="lb-loc">{current.loc}</span>}
              <a className="lb-px" href={current.px || PX_PROFILE} target="_blank" rel="noopener noreferrer">
                View on 500px ↗
              </a>
            </figcaption>
          </figure>
        </div>
      )}

      <footer className="chat-footer">
        <span>© {new Date().getFullYear()} Caradec Bisesar</span>
        <a href="#/">back to the chat</a>
      </footer>
    </div>
  )
}

export default Gallery
