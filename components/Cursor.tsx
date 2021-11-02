import React, { useEffect, useRef } from 'react'

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const innerCursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Mouse move
    window.addEventListener('mousemove', (e) => {
      if (cursorRef.current && innerCursorRef.current) {
        cursorRef.current.style.cssText =
          innerCursorRef.current.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`
      }
    })

    // Mouse down
    window.addEventListener('mousedown', (e) => {
      if (innerCursorRef.current)
        innerCursorRef.current.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px; width: 1rem; height: 1rem;`
    })

    // Mouse up
    window.addEventListener('mouseup', (e) => {
      if (innerCursorRef.current)
        innerCursorRef.current.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px; width: 0.5rem; height: 0.5rem;`
    })
  }, [])

  return (
    <div>
      <div
        ref={cursorRef}
        className={
          'fixed w-12 h-12 border-black border-2 z-10 rounded-full pointer-events-none duration-150 transform -translate-x-1/2 -translate-y-1/2'
        }
      />
      <div
        ref={innerCursorRef}
        className="fixed w-2 h-2 z-10 bg-black rounded-full pointer-events-none duration-100 transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  )
}

export default Cursor
