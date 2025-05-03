import Lottie from 'lottie-react'
import birthdayAnimation from '../assets/birthday.json'

const BirthdayAnimation = () => {
  return (
    <div style={{ width: '300px', height: '300px', margin: '0 auto' }}>
      <Lottie
        animationData={birthdayAnimation}
        loop
        autoplay
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  )
}

export default BirthdayAnimation
