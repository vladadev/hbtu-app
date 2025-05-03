import { useState } from 'react'
import { motion } from 'framer-motion'

const MuteButton = ({ audioRef }) => {
  const [muted, setMuted] = useState(false)

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !muted
      setMuted(!muted)
    }
  }

  return (
    <motion.button
      onClick={toggleMute}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        border: 'none',
        fontSize: '24px',
        cursor: 'pointer',
        zIndex: 2000,
        backdropFilter: 'blur(5px)',
      }}
    >
      {muted ? '🔇' : '🔊'}
    </motion.button>
  )
}

export default MuteButton
