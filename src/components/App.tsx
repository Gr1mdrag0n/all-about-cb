import { useMemo, useRef, useState } from 'react'
import '../css/App.css'
import type { ContactInfo } from '../types'
import Header from './Header-Nav'
import Footer from './Footer'
import Home from './Home'
import Resume from './Resume'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Divider from './Divider'
import Icons from './Icons'
import Sidebar from './Sidebar'
import LightSwitch from './LightSwitch'

const info: ContactInfo = {
  firstName: 'Caradec',
  lastName: 'Bisesar',
  name: 'Caradec Bisesar',
  email: 'c.bisesar@gmail.com',
}

function App() {
  const [lights, setLights] = useState(true)
  const homeRef = useRef<HTMLDivElement>(null)
  const resumeRef = useRef<HTMLDivElement>(null)
  const aboutmeRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const allRefs = useMemo(
    () => [homeRef, resumeRef, aboutmeRef, contactRef],
    [],
  )

  const toggleLights = () => setLights((on) => !on)

  return (
    <div className={'App ' + (lights ? '' : 'dark')}>
      <Header info={info} allRefs={allRefs} toggleLights={toggleLights} lights={lights} />
      <Sidebar allRefs={allRefs} />
      <LightSwitch toggleLights={toggleLights} />
      <Home ref={homeRef} />
      <Divider
        type="resume"
        content={
          <>
            <span className="flicker">W</span>ant <span className="flicker">to</span> kn
            <span className="flicker">ow</span> more<span className="flicker">?</span>
          </>
        }
      />
      <Resume ref={resumeRef} />
      <Divider
        type="aboutme"
        content={
          <>
            <span className="flicker">A</span>b<span className="flicker">ou</span>t{' '}
            <span className="flicker">Me</span>
          </>
        }
      />
      <AboutMe ref={aboutmeRef} />
      <Divider
        type="contact"
        ref={contactRef}
        content={
          <>
            <span className="flicker">Fi</span>
            <span className="flicker">nd</span> <span className="flicker">Me</span>
          </>
        }
      />
      <Contact />
      <Footer info={info} />
      <Icons info={info} />
    </div>
  )
}

export default App
