import React from 'react'

const Interests: React.FC = () => {
  return (
    <div className="flex justify-center items-center font-freigeistwide font-black noselect text-[12vw] py-24">
      <p
        className="text-jurreyellow"
        style={{ writingMode: 'vertical-lr', textOrientation: 'upright' }}
      >
        CODE
      </p>
      <div className="flex flex-col">
        <p
          className="text-jurrepurple"
          style={{ writingMode: 'vertical-lr', textOrientation: 'upright' }}
        >
          UI
        </p>
        <p
          className="text-jurreblue"
          style={{ writingMode: 'vertical-lr', textOrientation: 'upright' }}
        >
          UX
        </p>
      </div>
      <p
        className="text-jurremagenta"
        style={{ writingMode: 'vertical-lr', textOrientation: 'upright' }}
      >
        BIZZ
      </p>
    </div>
  )
}

export default Interests
