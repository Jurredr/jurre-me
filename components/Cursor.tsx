import React, { useEffect, useRef } from 'react'

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const innerCursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    return window.addEventListener('mousemove', (e) => {
      if (cursorRef.current && innerCursorRef.current) {
        cursorRef.current.style.cssText =
          innerCursorRef.current.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`
      }
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
        className={
          'fixed w-2 h-2 z-10 bg-black rounded-full pointer-events-none duration-100 transform -translate-x-1/2 -translate-y-1/2'
        }
      />
    </div>
  )
}

export default Cursor
