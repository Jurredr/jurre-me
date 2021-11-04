import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll
} from 'framer-motion'
import React, { useEffect, useState } from 'react'
import MaskSvg from './MaskSvg'

const ChatBubble: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()
  const scaledY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const controls = useAnimation()
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    const unsubscribe = scaledY.onChange((v) => {
      if (v > 3 && v < 97) {
        if (!isVisible) {
          setVisible(true)
          controls.start('visible')
        }
      } else if (isVisible) {
        setVisible(false)
        controls.start('hidden')
      }
    })

    return () => unsubscribe()
  }, [controls, scaledY, isVisible])

  return (
    <motion.div
      className="h-16 w-16 bg-jurreblack rounded-full fixed z-10 bottom-8 right-16 cursor-pointer flex justify-center items-center"
      // style={{ right: scaledY }}
      animate={controls}
      initial="hidden"
      exit="hidden"
      variants={{
        hidden: {
          x: 150,
          rotate: 35
        },
        visible: {
          x: 0,
          rotate: 0
        }
      }}
      transition={{
        duration: 0.4
      }}
    >
      <MaskSvg className="h-8 w-8" url="/icons/contact.svg" color="white" />
    </motion.div>
  )
}

export default ChatBubble
