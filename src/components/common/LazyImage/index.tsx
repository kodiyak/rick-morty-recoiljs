import React, { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver'
import useImage from 'react-use-image'

interface LazyImageProps {
  src: string
}

const LazyImage: React.FC<LazyImageProps> = ({ children, src }) => {
  const [isLoad, setLoad] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { isVisible } = useIntersectionObserver(ref)

  useEffect(() => {
    if (!isLoad && isVisible) {
      setLoad(() => true)
    }

    if (!isVisible) {
      setLoad(() => false)
    }
  }, [isVisible])

  return (
    <div className="flex flex-col absolute w-full h-full" ref={ref}>
      {!isLoad && (
        <img
          src="https://cdn.dribbble.com/users/233030/screenshots/3932726/rick-sanchez.gif"
          alt=""
          className="rounded-full w-20 h-20 absolute object-cover self-center justify-self-center flex"
          style={{
            filter: 'grayscale(100%)'
          }}
        />
      )}
      {isLoad && (
        <img
          src={src}
          alt="CharacterName"
          className="rounded-2xl object-cover shadow-lg w-full h-full"
        />
      )}
    </div>
  )
}

export default LazyImage
