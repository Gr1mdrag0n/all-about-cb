import { useState, type MouseEvent } from 'react'
import { useActiveSection, useIsTop, scrollToSection } from '../hooks/useScrollSpy'
import type { ContactInfo, SectionRef } from '../types'

interface HeaderProps {
  info: ContactInfo
  allRefs: SectionRef[]
  toggleLights: () => void
  lights: boolean
}

// liClass keeps the original markup's casing ("aboutMe") because parts of
// App.css select on it; hoverName drives the navbar accent color classes.
const SECTIONS = [
  { liClass: 'home', hoverName: 'home', label: 'Home' },
  { liClass: 'resume', hoverName: 'resume', label: 'Resume' },
  { liClass: 'aboutMe', hoverName: 'aboutme', label: 'About Me' },
  { liClass: 'contact', hoverName: 'contact', label: 'Contact' },
]

function Header({ info, allRefs, toggleLights, lights }: HeaderProps) {
  const isTop = useIsTop()
  const active = useActiveSection(allRefs, 500)
  const [hover, setHover] = useState<string | null>(null)
  const [expanded, setExpanded] = useState(false)

  const accent = hover ?? SECTIONS[active].hoverName

  const navigate = (event: MouseEvent, idx: number) => {
    event.preventDefault()
    setExpanded(false)
    scrollToSection(allRefs[idx])
  }

  return (
    <nav className={'navbar navbar-inverse navbar-fixed-top' + (isTop ? '' : ' collapsed ' + accent)}>
      <div className="container">
        <div className="navbar-header">
          <a
            href="#/"
            className={'navbar-brand home' + (isTop ? '' : ' collapsed')}
            onMouseEnter={() => setHover('home')}
            onMouseLeave={() => setHover(null)}
            onClick={(e) => navigate(e, 0)}
          >
            {info.name}
          </a>
          <button
            type="button"
            className="navbar-toggle collapsed"
            aria-expanded={expanded}
            onClick={() => setExpanded((open) => !open)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
        <div className={'navbar-collapse' + (expanded ? ' in' : ' collapse')}>
          <ul className={'nav navbar-nav navbar-right' + (isTop ? '' : ' collapsed')}>
            {SECTIONS.map((section, idx) => (
              <li
                key={section.hoverName}
                className={section.liClass + (active === idx ? ' active' : '')}
              >
                <a
                  href={'#' + section.label.replace(' ', '')}
                  onMouseEnter={() => setHover(section.hoverName)}
                  onMouseLeave={() => setHover(null)}
                  onClick={(e) => navigate(e, idx)}
                >
                  {section.label}
                </a>
              </li>
            ))}
            <li>
              <a role="button" onClick={toggleLights}>
                Turn the lights {lights ? 'off' : 'on'} <i className="bulb fas fa-lightbulb"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
