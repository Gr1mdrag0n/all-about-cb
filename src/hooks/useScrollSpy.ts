import { useEffect, useState } from 'react'
import type { SectionRef } from '../types'

/** True while the page is scrolled within `threshold` px of the top. */
export function useIsTop(threshold = 200): boolean {
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    const onScroll = () => setIsTop(window.scrollY < threshold)
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [threshold])

  return isTop
}

/**
 * Index of the section the user is currently reading: the last section whose
 * top edge has scrolled within `threshold` px of the viewport top.
 */
export function useActiveSection(refs: SectionRef[], threshold: number): number {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      let idx = 0
      refs.forEach((ref, i) => {
        const node = ref.current
        if (node && node.getBoundingClientRect().top <= threshold) idx = i
      })
      setActive(idx)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [refs, threshold])

  return active
}

export function scrollToSection(ref: SectionRef): void {
  ref.current?.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' })
}
