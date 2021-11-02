import React from 'react'

interface Props {
  sectionName: string
  textBig: string
  textSmall: string
}

const SectionIntro: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col justify-center items-center font-euclid">
      <div className="bg-jurreorange bg-opacity-[21%] rounded-[30px] px-8 py-1 mb-4">
        <h1 className="text-jurreorange font-medium">{props.sectionName}</h1>
      </div>
      <h2 className="font-medium text-5xl mb-6">{props.textBig}</h2>
      <p className="font-light text-2xl">{props.textSmall}</p>
    </div>
  )
}

export default SectionIntro
