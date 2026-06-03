import { useEffect, useRef } from 'react'

export function useReveal(className = 'revealed') {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add(className)
          observer.disconnect() // stop watching once revealed
        }
      },
      { threshold: 0.25 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [className])

  return ref
}