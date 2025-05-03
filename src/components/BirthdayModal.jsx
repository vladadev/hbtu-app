import { motion } from 'framer-motion'

const BirthdayModal = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: 'url("/assets/photo.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center 20%',
        display: 'flex',
        alignItems: 'center', // ✨ vratili na center
        justifyContent: 'center',
        zIndex: 9999,
        backdropFilter: 'blur(2px)',
        cursor: 'pointer',
        padding: '0 5vw',
      }}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        onClick={e => e.stopPropagation()}
        style={{
          backgroundColor: 'rgba(255,255,255,0.88)',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
          textAlign: 'center',
          fontSize: 'clamp(1.1rem, 5vw, 1.4rem)',
          fontFamily: "'Pacifico', cursive, sans-serif",
          maxWidth: '90vw',
          marginTop: '40vh', // ✅ poruka spuštena niže ručno
        }}
      >
        🥰 Srećan rođendan, ljubavi! Hvala ti što ulepšavaš svaki moj dan. Volim
        te više nego što reči mogu opisati! ❤️
      </motion.div>
    </motion.div>
  )
}

export default BirthdayModal
