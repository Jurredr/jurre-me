import React from 'react'

const Interests: React.FC = () => {
  return (
    <div className="flex justify-center items-center font-freigeistwide font-black noselect text-[12vw] py-24">
      <p className="text-jurreyellow write-vertical-left write-orient-upright">
        CODE
      </p>
      <div className="flex flex-col">
        <p className="text-jurrepurple write-vertical-left write-orient-upright">
          UI
        </p>
        <p className="text-jurreblue write-vertical-left write-orient-upright">
          UX
        </p>
      </div>
      <p className="text-jurremagenta write-vertical-left write-orient-upright">
        BIZZ
      </p>
    </div>
  )
}

export default Interests
