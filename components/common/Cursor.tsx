import { useEffect, useRef } from 'react'

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorScaleRef = useRef<HTMLDivElement>(null)
  const innerCursorRef = useRef<HTMLDivElement>(null)
  const innerCursorScaleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = 0
    let mouseY = 0
    let xp = 0
    let yp = 0
    let type = 'mouseup'

    function handleMouse(e: MouseEvent) {
      if (
        cursorRef.current &&
        cursorScaleRef.current &&
        innerCursorRef.current &&
        innerCursorScaleRef.current
      ) {
        const posInner = `transform: translate(${e.clientX - 4}px,${
          e.clientY - 4
        }px);`

        innerCursorRef.current.style.cssText = posInner
        innerCursorScaleRef.current.style.cssText = `transform: ${
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
      if (
        cursorRef.current &&
        cursorScaleRef.current &&
        innerCursorRef.current &&
        innerCursorScaleRef.current
      ) {
        xp += (mouseX - xp) / 6
        yp += (mouseY - yp) / 6

        cursorScaleRef.current.style.cssText = `transform: ${
          type === 'mousedown'
            ? ` scale(0.9);`
            : type === 'mouseup'
            ? ` scale(1.0);`
            : ';'
        }`
        cursorRef.current.style.cssText =
          'transform: translateX(' +
          (xp - 14.5) +
          'px) translateY(' +
          (yp - 14.5) +
          'px);'
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
    <div className="z-50 hidden h-full w-full xl:block">
      <div ref={cursorRef} className="pointer-events-none fixed z-50 h-12 w-12">
        <div
          ref={cursorScaleRef}
          className="z-50 h-12 w-12 rounded-full border-2 border-black transition-transform duration-75 dark:border-white"
        />
      </div>

      <div
        ref={innerCursorRef}
        className="pointer-events-none fixed z-50 h-2 w-2"
      >
        <div
          ref={innerCursorScaleRef}
          className="z-50 h-2 w-2 rounded-full bg-black transition-transform duration-75 dark:bg-white"
        />
      </div>
    </div>
  )
}

export default Cursor
