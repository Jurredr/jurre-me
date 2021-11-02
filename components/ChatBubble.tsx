import React from 'react'
import MaskSvg from './MaskSvg'

const ChatBubble: React.FC = () => {
  return (
    <div className="h-16 w-16 bg-jurreblack rounded-full absolute z-10 bottom-8 right-16 cursor-pointer flex justify-center items-center">
      <MaskSvg className="h-8 w-8" url="/icons/contact.svg" color="white" />
    </div>
  )
}

export default ChatBubble
