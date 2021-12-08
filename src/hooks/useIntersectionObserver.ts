import React, { useEffect, useState } from 'react'

export function useIntersectionObserver(el: React.RefObject<any>) {
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(() => true)
      }
    })

    observer.observe(el.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return { isVisible }
}
