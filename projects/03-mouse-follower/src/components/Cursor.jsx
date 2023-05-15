import { useEffect, useState } from 'react'

export const Cursor = ({ enabled }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <div
      style={{
        display: enabled ? 'block' : 'none',
        cursor: 'none',
        width: 40,
        height: 40,
        position: 'absolute',
        top: -20,
        left: -20,
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.3,
        pointerEvents: 'none',
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: '0.05s ease'
      }}
    />
  )
}
