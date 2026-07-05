import { useEffect, useState } from 'react'

const KEY = 'cb-lights'

// Shared light-switch state, persisted so the easter egg survives navigation between pages.
export function useLights() {
  const [lights, setLights] = useState(() => localStorage.getItem(KEY) !== 'off')

  useEffect(() => {
    localStorage.setItem(KEY, lights ? 'on' : 'off')
  }, [lights])

  return [lights, setLights] as const
}
