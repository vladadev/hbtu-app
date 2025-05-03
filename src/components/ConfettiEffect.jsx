import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from '@react-hook/window-size'

const ConfettiEffect = () => {
  const [width, height] = useWindowSize()
  const [pieces, setPieces] = useState(300)
  const [startFadeOut, setStartFadeOut] = useState(false)

  useEffect(() => {
    // After 10 seconds, start fading out the confetti
    const fadeOutTimer = setTimeout(() => {
      setStartFadeOut(true)
    }, 10000)

    let interval
    if (startFadeOut) {
      interval = setInterval(() => {
        setPieces(prev => Math.max(0, prev - 5)) // each interval reduce pieces by 5
      }, 500)
    }

    return () => {
      clearTimeout(fadeOutTimer)
      clearInterval(interval)
    }
  }, [startFadeOut])

  if (pieces <= 0) {
    return null // after confetti is gone, don't render anything
  }

  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={pieces}
      gravity={0.2}
      wind={0.01}
    />
  )
}

export default ConfettiEffect
