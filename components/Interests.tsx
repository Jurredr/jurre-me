import { useTransform, useViewportScroll } from 'framer-motion'
import React from 'react'

const Interests: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()
  const scaledY = useTransform(scrollYProgress, [0, 1], [1, 100])

  return (
    <div className="flex justify-center items-center font-freigeistwide font-black noselect text-[12vw] my-[14.6rem] cursor-default">
      <p className="text-jurreyellow write-vertical-left write-orient-upright">
        CODE
      </p>
      <p className="write-vertical-left write-orient-upright text-jurrepurple">
        UI<span className="text-jurreblue">UX</span>
      </p>
      <p className="text-jurremagenta write-vertical-left write-orient-upright">
        BIZZ
      </p>
    </div>
  )
}

export default Interests
