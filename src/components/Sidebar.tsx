import { useActiveSection, scrollToSection } from '../hooks/useScrollSpy'
import type { SectionRef } from '../types'

const ITEMS = [
  { className: 'home', label: 'Home' },
  { className: 'resume', label: 'Resume' },
  { className: 'aboutme', label: 'About Me' },
  { className: 'contact', label: 'Contact' },
]

function Sidebar({ allRefs }: { allRefs: SectionRef[] }) {
  const selected = useActiveSection(allRefs, 650)

  return (
    <div className="sidebar">
      {ITEMS.map((item, idx) => (
        <div
          key={item.className}
          className={'ribbon sidebar-item ' + item.className + (selected === idx ? ' selected' : '')}
          onClick={() => scrollToSection(allRefs[idx])}
        >
          {item.label}
        </div>
      ))}
    </div>
  )
}

export default Sidebar
