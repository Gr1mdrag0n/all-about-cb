import type { Ref } from 'react'
import InfoBox from './InfoBox'

function Home({ ref }: { ref?: Ref<HTMLDivElement> }) {
  return (
    <div className="App-home" ref={ref}>
      <div className="spacer" />
      <div className="Home-title">Hello, my name is Caradec.</div>
      <div className="Home-subtitle1">What do I do?</div>
      <InfoBox />
      <div className="spacer" />
    </div>
  )
}

export default Home
