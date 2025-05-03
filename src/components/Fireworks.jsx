import { useEffect, useRef, useCallback } from 'react'
import ReactCanvasConfetti from 'react-canvas-confetti'

const Fireworks = ({ fire }) => {
  const refAnimationInstance = useRef(null)

  const getInstance = useCallback(instance => {
    if (instance) {
      refAnimationInstance.current = instance
    }
  }, [])

  const makeShot = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current({
        particleCount: 120,
        angle: 90,
        spread: 70,
        startVelocity: 45,
        gravity: 0.9,
        origin: { x: 0.5, y: 1 }, // dno ekrana
        colors: ['#ff0000', '#00ff00', '#0000ff'],
      })
    }
  }, [])

  useEffect(() => {
    if (fire) {
      const timer = setTimeout(() => {
        makeShot()
      }, 300) // 300ms buffer da canvas bude spreman
      return () => clearTimeout(timer)
    }
  }, [fire, makeShot])

  return (
    <ReactCanvasConfetti
      refConfetti={getInstance}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    />
  )
}

export default Fireworks
