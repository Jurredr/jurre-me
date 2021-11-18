import React, { useEffect, useRef } from 'react'

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const innerCursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleMouse(e: MouseEvent) {
      if (cursorRef.current && innerCursorRef.current) {
        const pos = `transform: translate(${e.clientX - 24}px,${
          e.clientY - 24
        }px);`
        const posInner = `transform: translate(${e.clientX - 4}px,${
          e.clientY - 4
        }px);`

        // https://stackoverflow.com/questions/59883437/modified-cursor-lags

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
          posInner +
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

    // Dispatch move event on mount
    const mouseMoveEvent = new MouseEvent('mousemove', {
      view: window,
      bubbles: true,
      cancelable: true,
      clientX: window.screen.width / 2,
      clientY: window.screen.height / 2
    })
    window.dispatchEvent(mouseMoveEvent)

    // Remove the event listeners
    return () => {
      window.removeEventListener('mousemove', handleMouse, false)
      window.removeEventListener('mousedown', handleMouse, false)
      window.removeEventListener('mouseup', handleMouse, false)
    }
  }, [])

  return (
    <div className="hidden z-50 h-full w-full xl:block">
      <div
        ref={cursorRef}
        className="fixed w-12 h-12 z-50 border-black border-2 rounded-full pointer-events-none cursor_outer"
      />
      <div
        ref={innerCursorRef}
        className="fixed w-2 h-2 z-50 bg-black rounded-full pointer-events-none cursor_inner"
      />
    </div>
  )
}

export default Cursor
