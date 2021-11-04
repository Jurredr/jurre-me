import { AnimationControls, motion } from 'framer-motion'
import React from 'react'
import MaskSvg from './MaskSvg'

interface Props {
  chatControls: AnimationControls
}

const ChatBubble: React.FC<Props> = (props) => {
  return (
    <motion.div
      className="h-16 w-16 bg-jurreblack rounded-full absolute z-10 bottom-8 right-16 cursor-pointer flex justify-center items-center"
      animate={props.chatControls}
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
