import BirthdayAnimation from './components/BirthdayAnimation'

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
        🎉 Happy Birthday! 🎉
      </h1>
      <BirthdayAnimation />
    </div>
  )
}

export default App
