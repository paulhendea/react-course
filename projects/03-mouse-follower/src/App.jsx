import { useState } from 'react'
import { Cursor } from './components/Cursor'

function App() {
  const [effect, setEffect] = useState(false)

  const handleClick = () => {
    setEffect(!effect)
  }

  return (
    <main>
      <Cursor enabled={effect} />
      <button onClick={handleClick}>
        {effect ? "Don't follow" : 'Follow'} mouse
      </button>
    </main>
  )
}

export default App
