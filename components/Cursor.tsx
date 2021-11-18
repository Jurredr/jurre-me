import React, { useEffect, useRef } from 'react'

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const innerCursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0
    let xp = 0
    let yp = 0
    let type = 'mouseup'

    function handleMouse(e: MouseEvent) {
      if (cursorRef.current && innerCursorRef.current) {
        const posInner = `transform: translate(${e.clientX - 4}px,${
          e.clientY - 4
        }px)`

        innerCursorRef.current.style.cssText =
          posInner +
          ` ${
            e.type === 'mousedown'
              ? ` scale(1.4);`
              : e.type === 'mouseup'
              ? ` scale(1.0);`
              : ';'
          }`

        mouseX = e.clientX - 10
        mouseY = e.clientY - 10
        type = e.type
      }
    }

    setInterval(() => {
      if (cursorRef.current && innerCursorRef.current) {
        xp += (mouseX - xp) / 6
        yp += (mouseY - yp) / 6

        cursorRef.current.style.cssText =
          'transform: translateX(' +
          (xp - 14.5) +
          'px) translateY(' +
          (yp - 14.5) +
          'px)' +
          (type === 'mousedown'
            ? ` scale(0.9);`
            : type === 'mouseup'
            ? ` scale(1.0);`
            : ';')
      }
    }, 10)

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
        className="fixed w-12 h-12 z-50 border-black border-2 rounded-full pointer-events-none"
      />
      <div
        ref={innerCursorRef}
        className="fixed w-2 h-2 z-50 bg-black rounded-full pointer-events-none"
      />
    </div>
  )
}

export default Cursor
