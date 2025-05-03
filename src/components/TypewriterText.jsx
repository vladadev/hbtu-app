import { Typewriter } from 'react-simple-typewriter'

const TypewriterText = () => {
  return (
    <h2 style={{ fontSize: '1.8rem', marginTop: '20px', maxWidth: '600px' }}>
      <Typewriter
        words={[
          'Happy Birthday, my love! 🎉',
          'Wishing you endless joy and happiness! 🎂',
          'You are my favorite person in the world! ❤️',
        ]}
        loop={0} // 0 = infinite loop
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </h2>
  )
}

export default TypewriterText
