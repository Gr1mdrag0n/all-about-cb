import { useEffect, useRef, useState } from 'react'
import '../css/chat.css'
import {
  CHAT_OPENERS,
  CHAT_MIDDLE,
  CHAT_RUNNING,
  CHAT_PHOTOGRAPHY,
  HOT_PHRASES,
  ICED_PHRASES,
  type ChatQA,
} from '../content/chat'
import { ENTRIES, TOOLBOX, EDUCATION } from '../content/resume'
import { useLights } from '../hooks/useLights'
import cupArt from '../assets/cup-top-view.svg'
import cupArtIced from '../assets/cup-top-view-iced.svg'
import ringStain from '../assets/coffee-ring-stain.png'
import pairPhoto from '../assets/pair.jpg'

// Homepage rails reuse the gallery assets (no duplicate files).
const galleryImgs = import.meta.glob<string>('../assets/gallery/*.jpg', {
  eager: true,
  import: 'default',
  query: '?url',
})
const g = (file: string) => galleryImgs[`../assets/gallery/${file}.jpg`]

const CUP_TOP = 6
const CUP_BOTTOM = 38

function ChatSection({ items }: { items: ChatQA[] }) {
  return (
    <section className="chat">
      {items.map((qa) => (
        <div key={qa.q} className="qa">
          <div className="q">{qa.q}</div>
          <div className="a">
            {qa.a.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

interface RailPhoto {
  src: string
  alt: string
}

// A horizontal photo carousel: scroll-snap driven, so it's the user's
// scroll doing the work (arrows just nudge it along). Images render at
// their natural aspect ratio, no cropping.
function PhotoRail({ photos, label }: { photos: RailPhoto[]; label: string }) {
  const railRef = useRef<HTMLDivElement>(null)
  const animRef = useRef(0)

  const nudge = (dir: number) => {
    const rail = railRef.current
    if (!rail) return
    const slide = rail.querySelector<HTMLElement>('figure')
    const amount = slide ? slide.getBoundingClientRect().width + 16 : rail.clientWidth * 0.8
    const target = Math.max(0, Math.min(rail.scrollWidth - rail.clientWidth, rail.scrollLeft + dir * amount))

    // Advancing on an arrow click is a direct user action, so we still glide
    // even under reduced motion — just faster. Scroll-snap fights a scripted
    // scroll mid-flight, so it's paused for the ride and restored at the end.
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    cancelAnimationFrame(animRef.current)
    rail.style.scrollSnapType = 'none'
    const start = rail.scrollLeft
    const t0 = performance.now()
    const duration = reduce ? 240 : 520
    const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / duration)
      rail.scrollLeft = start + (target - start) * ease(p)
      if (p < 1) {
        animRef.current = requestAnimationFrame(step)
      } else {
        rail.style.scrollSnapType = ''
      }
    }
    animRef.current = requestAnimationFrame(step)
  }

  return (
    <section className="rail-wrap" aria-label={label}>
      <div className="rail" ref={railRef}>
        {photos.map((p) => (
          <figure key={p.src}>
            <img src={p.src} alt={p.alt} loading="lazy" />
          </figure>
        ))}
      </div>
      <button className="rail-btn prev" type="button" aria-label="Previous photo" onClick={() => nudge(-1)}>←</button>
      <button className="rail-btn next" type="button" aria-label="Next photo" onClick={() => nudge(1)}>→</button>
    </section>
  )
}

function App() {
  const [lights, setLights] = useLights()
  const [atEnd, setAtEnd] = useState(false)
  const [noMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const hero = root.querySelector<HTMLElement>('.hero')
    const cupFill = root.querySelector<SVGRectElement>('.cup .fill')
    const cupNote = root.querySelector<HTMLElement>('.cup .cup-note')
    const paperwork = root.querySelector<HTMLElement>('#paperwork')
    const contact = root.querySelector<HTMLElement>('#contact')
    const navLinks = root.querySelectorAll<HTMLAnchorElement>('nav.chat-nav ul a')
    if (!hero || !cupFill || !cupNote || !paperwork || !contact) return

    const clamp01 = (v: number) => Math.max(0, Math.min(1, v))
    let ticking = false

    function update() {
      ticking = false
      const y = window.scrollY
      const vh = window.innerHeight

      // Hero drift is the only piece that's purely decorative; the cup meter
      // and nav-spy below are functional and run regardless of motion pref.
      hero!.style.setProperty('--exit', noMotion ? '0' : clamp01(y / (vh * 0.75)).toFixed(3))

      const pageProgress = clamp01(y / (document.documentElement.scrollHeight - vh))
      const fullness = 1 - Math.pow(pageProgress, 2.4)
      const h = (CUP_BOTTOM - CUP_TOP) * fullness
      cupFill!.setAttribute('height', h.toFixed(2))
      cupFill!.setAttribute('y', (CUP_BOTTOM - h).toFixed(2))

      const iced = root!.classList.contains('lights-off')
      const phrases = iced ? ICED_PHRASES : HOT_PHRASES
      // Fall back to the lowest phrase rather than an "empty cup" line: the
      // cup is fading out by the time it drains, so no need to flash it.
      let note = phrases[phrases.length - 1][1]
      for (const [threshold, phrase] of phrases) {
        if (fullness >= threshold) { note = phrase; break }
      }
      cupNote!.textContent = note

      let active = 0
      if (contact!.getBoundingClientRect().top < vh * 0.55) active = 2
      else if (paperwork!.getBoundingClientRect().top < vh * 0.45) active = 1
      navLinks.forEach((a, i) => a.classList.toggle('active', i === active))
    }

    function onScroll() {
      if (!ticking) { requestAnimationFrame(update); ticking = true }
    }

    // Reveal-on-scroll animations only when motion is welcome; under
    // reduced motion the CSS already renders these elements fully visible.
    let revealIo: IntersectionObserver | undefined
    if (!noMotion) {
      revealIo = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.setAttribute('data-in', 'true'); revealIo!.unobserve(e.target) }
        })
      }, { threshold: 0.16 })
      root.querySelectorAll('.qa, .pull-scene').forEach((el) => revealIo!.observe(el))
    }

    const endIo = new IntersectionObserver((entries) => {
      entries.forEach((e) => setAtEnd(e.isIntersecting))
    }, { threshold: 0.25 })
    endIo.observe(contact)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      revealIo?.disconnect()
      endIo.disconnect()
    }
  }, [noMotion])

  // refresh the scroll-driven bits (cup phrase, nav state) right after a lights toggle
  useEffect(() => {
    window.dispatchEvent(new Event('scroll'))
  }, [lights])

  // the browser tab keeps a cup on the table, and worries when you leave
  useEffect(() => {
    const baseTitle = () =>
      'Caradec Bisesar | Developer, Photographer, Coffee Enthusiast'
    document.title = baseTitle()
    const onVisibility = () => {
      document.title = document.hidden
        ? (lights ? 'your coffee’s getting cold' : 'the ice is melting')
        : baseTitle()
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [lights])

  const rootClass =
    'chat-page' + (lights ? '' : ' lights-off') + (atEnd ? ' at-end' : '') + (noMotion ? ' no-motion' : '')

  return (
    <div className={rootClass} ref={rootRef}>
      <nav className="chat-nav">
        <ul>
          <li><a href="#over">Small Talk</a></li>
          <li><a href="#paperwork">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="name-morph">Caradec Bisesar</div>

      <button className="cord" type="button" aria-label="Light switch" onClick={() => setLights((on) => !on)}>
        <span className="line"></span>
        <span className="knob"></span>
      </button>

      <a className="cup" href="#/coffee" target="_blank" rel="noopener noreferrer" aria-label="The coffee log — the beans I’ve been drinking">
        <span className="cup-tip" aria-hidden="true">psst — curious what beans I’m drinking?</span>
        <svg viewBox="0 0 40 44" aria-hidden="true">
          <defs>
            <clipPath id="cupclip"><path d="M6 6 h20 v26 a6 6 0 0 1 -6 6 h-8 a6 6 0 0 1 -6 -6 z"></path></clipPath>
            <clipPath id="glassclip"><path d="M13 6 h14 v30 a3 3 0 0 1 -3 3 h-8 a3 3 0 0 1 -3 -3 z"></path></clipPath>
          </defs>
          <rect className="fill" x="6" y="38" width="24" height="0" clipPath="url(#cupclip)"></rect>
          <rect className="ice" x="14" y="11" width="7" height="7" rx="2" transform="rotate(-12 17.5 14.5)" clipPath="url(#glassclip)"></rect>
          <rect className="ice" x="20" y="17" width="6" height="6" rx="2" transform="rotate(14 23 20)" clipPath="url(#glassclip)"></rect>
          <path className="straw" d="M26 1 L20 22"></path>
          <path className="glass-outline" d="M13 6 h14 v30 a3 3 0 0 1 -3 3 h-8 a3 3 0 0 1 -3 -3 z"></path>
          <path className="outline" d="M6 6 h20 v26 a6 6 0 0 1 -6 6 h-8 a6 6 0 0 1 -6 -6 z"></path>
          <path className="outline" d="M26 12 h5 a5 5 0 0 1 0 12 h-5"></path>
        </svg>
        <span className="cup-note"></span>
      </a>

      <section className="hero" id="hero">
        <span id="over" style={{ position: 'absolute', top: 0 }}></span>
        <div className="hero-content">
          <div className="ring" aria-hidden="true">
            <img className="ring-echo" src={ringStain} alt="" />
            <img className="cup-art" src={lights ? cupArt : cupArtIced} alt="" />
          </div>
          <div className="inner">
            <h1>
              <span className="w dev">Developer.</span><br />
              <span className="w photo">Photographer.</span><br />
              <span className="w coffee">Coffee enthusiast.</span>
            </h1>
            <div className="cue">let’s chat <span className="arrow">↓</span></div>
            <div className="rule-line"></div>
          </div>
        </div>
      </section>

      <ChatSection items={CHAT_OPENERS} />
      <ChatSection items={CHAT_MIDDLE} />
      <ChatSection items={CHAT_RUNNING} />

      <section className="chat cat-beat">
        <figure className="cat-inline">
          <img src={pairPhoto} alt="Despair, a black cat, wearing a small star-print necktie" />
        </figure>
        <p className="cat-say">
          This is Despair, or Pair for short. He runs the home café, and he takes it seriously — especially once the tie goes on.
        </p>
      </section>

      <PhotoRail
        label="Wildlife photos"
        photos={[
          { src: g('img-8707'), alt: 'An osprey diving, talons out' },
          { src: g('img-8438'), alt: 'A duck and her ducklings on sparkling water' },
          { src: g('img-8583'), alt: 'A squirrel peering around a tree trunk' },
          { src: g('img-8596'), alt: 'Two squirrels on a tree trunk' },
          { src: g('img-8465'), alt: 'A duck paddling through golden water' },
        ]}
      />

      <ChatSection items={CHAT_PHOTOGRAPHY} />

      <PhotoRail
        label="Travel and architecture photos"
        photos={[
          { src: g('img-2801-enhanced-nr'), alt: 'Tower Bridge lit up at night, seen from above' },
          { src: g('img-3466-hdr'), alt: 'The Eiffel Tower from below, looking up' },
          { src: g('img-4032-enhanced-nr-edit'), alt: 'Elizabeth Tower (Big Ben) at night' },
          { src: g('img-2976-enhanced-nr-edit'), alt: 'The Old Royal Naval College at dusk, Greenwich' },
          { src: g('img-4020'), alt: 'The London Eye glowing magenta' },
          { src: g('img-4624'), alt: 'Big Tub Lighthouse on a rocky shore, Tobermory' },
          { src: g('img-3741-enhanced-nr'), alt: 'Wellington Arch at dusk with light trails' },
          { src: g('img-4322-edit-edit-edit'), alt: 'Flowerpot Island over turquoise water' },
        ]}
      />

      <p className="rail-more"><a href="#/photos" target="_blank" rel="noopener noreferrer">See the full gallery →</a></p>

      <div className="pull-scene" id="pull">
        <div className="pull-big serif">Enough small talk.</div>
        <div className="pull-who">on to the paperwork</div>
      </div>

      <div className="paper-band">
        <section className="doc" id="paperwork">
          <div className="doc-head"><h2>The Paperwork</h2><span>for the recruiters</span></div>
          {ENTRIES.map((entry) => (
            <div key={entry.company} className="entry">
              <div className="when">
                <b>{entry.company}</b>
                {entry.when}
                <br />
                {entry.location}
              </div>
              <div>
                {entry.roles.map((role) => (
                  <div key={role.title} className={'role' + (role.past ? ' past' : '')}>{role.title}</div>
                ))}
                <div className="role-gap"></div>
                {entry.bullets.map((bullet) => (
                  <p key={bullet.slice(0, 40)}>{bullet}</p>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="doc">
          <div className="doc-head"><h2>The Toolbox</h2><span><a href="#/uses">the physical kit</a></span></div>
          <dl className="caps">
            {TOOLBOX.map(([label, items]) => (
              <div key={label} style={{ display: 'contents' }}>
                <dt>{label}</dt>
                <dd>{items}</dd>
              </div>
            ))}
          </dl>
          <div className="edu"><b>{EDUCATION.degree}</b><span>{EDUCATION.school}</span></div>
          <div className="edu-detail">{EDUCATION.detail}</div>
        </section>
      </div>

      <section className="closing" id="contact">
        <a className="big-cup-link" href="#/coffee" target="_blank" rel="noopener noreferrer" aria-label="The coffee log — the beans I’ve been drinking">
        <svg className="big-cup" viewBox="0 0 48 52" aria-hidden="true">
          <path className="steam" d="M18 10 q-2 -3 0 -6"></path>
          <path className="steam s2" d="M26 10 q2 -3 0 -6"></path>
          <defs>
            <clipPath id="bigcupclip"><path d="M10 14 h24 v28 a7 7 0 0 1 -7 7 h-10 a7 7 0 0 1 -7 -7 z"></path></clipPath>
            <clipPath id="bigglassclip"><path d="M16 8 h16 v34 a4 4 0 0 1 -4 4 h-8 a4 4 0 0 1 -4 -4 z"></path></clipPath>
          </defs>
          <rect className="fill" x="10" y="18" width="24" height="31" clipPath="url(#bigcupclip)"></rect>
          <rect className="ice" x="18" y="14" width="9" height="9" rx="2.5" transform="rotate(-10 22.5 18.5)" clipPath="url(#bigglassclip)"></rect>
          <rect className="ice" x="25" y="24" width="8" height="8" rx="2.5" transform="rotate(12 29 28)" clipPath="url(#bigglassclip)"></rect>
          <path className="straw" d="M31 2 L25 30"></path>
          <path className="glass-outline" d="M16 8 h16 v34 a4 4 0 0 1 -4 4 h-8 a4 4 0 0 1 -4 -4 z"></path>
          <path className="outline" d="M10 14 h24 v28 a7 7 0 0 1 -7 7 h-10 a7 7 0 0 1 -7 -7 z"></path>
          <path className="outline" d="M34 21 h6 a6 6 0 0 1 0 13 h-6"></path>
        </svg>
        </a>
        <div className="serif">Let’s get in touch.</div>
        <ul>
          <li><a href="mailto:c.bisesar@gmail.com">c.bisesar@gmail.com</a></li>
          <li><a href="https://www.linkedin.com/in/caradec-bisesar-b3552443" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://500px.com/cbisesar" target="_blank" rel="noopener noreferrer">500px</a></li>
          <li><a href="https://www.instagram.com/gr1mdrag0n/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </section>

      <footer className="chat-footer">
        <span>© {new Date().getFullYear()} Caradec Bisesar</span>
        <span>Toronto, Canada</span>
      </footer>
    </div>
  )
}

export default App
