import { useEffect, useState } from 'react'
import type { ContactInfo } from '../types'
import print from '../assets/print.png'
import email from '../assets/email.png'
import resume from '../assets/Resume.pdf'

function Icons({ info }: { info: ContactInfo }) {
  const [isBottom, setIsBottom] = useState(false)

  useEffect(() => {
    const onScroll = () =>
      setIsBottom(window.innerHeight + window.scrollY > document.body.offsetHeight - 50)
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  const printPDF = () => {
    const popup = window.open(resume)
    popup?.print()
  }

  return (
    <div className={'persistentIcons' + (isBottom ? ' shifted' : '')}>
      <img src={print} onClick={printPDF} alt="Print resume" />
      <a href={'mailto:' + info.email} target="_blank" rel="noopener noreferrer">
        <img src={email} alt="Email me" />
      </a>
    </div>
  )
}

export default Icons
