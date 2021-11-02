import React, { useEffect, useRef } from 'react'

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const innerCursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleMouse(e: MouseEvent) {
      console.log(e.type)

      if (cursorRef.current && innerCursorRef.current) {
        const pos = `left: ${e.clientX}px; top: ${e.clientY}px;`

        cursorRef.current.style.cssText =
          pos +
          ` ${
            e.type === 'mousedown'
              ? `width: 2.5rem; height: 2.5rem;`
              : e.type === 'mouseup'
              ? `width: 3rem; height: 3rem;`
              : ''
          }`
        innerCursorRef.current.style.cssText =
          pos +
          ` ${
            e.type === 'mousedown'
              ? `width: 1rem; height: 1rem;`
              : e.type === 'mouseup'
              ? `width: 0.5rem; height: 0.5rem;`
              : ''
          }`
      }
    }

    // Mouse move
    window.addEventListener('mousemove', (e) => handleMouse(e), false)

    // Mouse down
    window.addEventListener('mousedown', (e) => handleMouse(e), false)

    // Mouse up
    window.addEventListener('mouseup', (e) => handleMouse(e), false)

    // Remove the event listeners
    return () => {
      window.removeEventListener('mousemove', handleMouse, false)
      window.removeEventListener('mousedown', handleMouse, false)
      window.removeEventListener('mouseup', handleMouse, false)
    }
  }, [])

  return (
    <div>
      <div
        ref={cursorRef}
        className="fixed w-12 h-12 border-black border-2 z-10 rounded-full pointer-events-none duration-150 transform -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={innerCursorRef}
        className="fixed w-2 h-2 z-10 bg-black rounded-full pointer-events-none duration-100 transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  )
}

export default Cursor
