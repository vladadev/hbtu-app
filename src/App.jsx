import { useRef, useState, useEffect } from 'react'

import { motion } from 'framer-motion'

import BirthdayAnimation from './components/BirthdayAnimation'
import TypewriterText from './components/TypewriterText'
import ConfettiEffect from './components/ConfettiEffect'
import FadeInSection from './components/FadeInSection'
import Fireworks from './components/Fireworks'
import MuteButton from './components/MuteButton'
import BirthdayModal from './components/BirthdayModal'

function App() {
  const audioRef = useRef(null)
  const [showMessage, setShowMessage] = useState(false)
  const [fireworks, setFireworks] = useState(false)
  const [musicStarted, setMusicStarted] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
        padding: '5vw',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Pacifico', cursive, sans-serif",
      }}
    >
      <audio ref={audioRef} loop>
        <source src="/assets/music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {showModal && <BirthdayModal onClose={() => setShowModal(false)} />}

      {musicStarted && <MuteButton audioRef={audioRef} />}

      <Fireworks fire={fireworks} />

      <ConfettiEffect />

      <FadeInSection delay={0}>
        <h1
          style={{
            fontSize: 'clamp(1.6rem, 5vw, 2.5rem)',
            marginBottom: '20px',
          }}
        >
          🎉 Happy Birthday! 🎉
        </h1>
      </FadeInSection>

      <FadeInSection delay={0.3}>
        <BirthdayAnimation />
      </FadeInSection>

      <FadeInSection delay={0.6}>
        <TypewriterText />
      </FadeInSection>

      {/* Dugme za otvaranje poruke */}
      <FadeInSection delay={0.9}>
        <motion.button
          onClick={() => {
            setShowMessage(true)
            setFireworks(true)
            setMusicStarted(true)
            setShowModal(true)
            audioRef.current?.play()
          }}
          style={{
            marginTop: '30px',
            padding: '10px 5vw',
            fontSize: 'clamp(1rem, 4vw, 1.2rem)',
            borderRadius: '10px',
            border: 'none',
            backgroundColor: '#ff7eb3',
            color: 'white',
            cursor: 'pointer',
            fontFamily: "'Pacifico', cursive, sans-serif",
          }}
          whileHover={{ scale: 1.1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          Otvori moju poruku 🎁
        </motion.button>
      </FadeInSection>
    </div>
  )
}

export default App
