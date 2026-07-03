import type { ReactNode } from 'react'

interface AboutSectionProps {
  title: ReactNode
  content: ReactNode
  flipped?: boolean
}

function AboutSection({ title, content, flipped }: AboutSectionProps) {
  const image = <div className="App-about-section-title">{title}</div>
  const text = (
    <div className="App-about-content">
      <p>{content}</p>
    </div>
  )

  return (
    <div className={'App-about-section' + (flipped ? ' flipped' : '')}>
      {flipped ? text : image}
      {flipped ? image : text}
    </div>
  )
}

export default AboutSection
