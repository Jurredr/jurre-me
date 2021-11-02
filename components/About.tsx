import React from 'react'
import SectionIntro from './SectionIntro'

const About: React.FC = () => {
  return (
    <div className="mt-29 flex justify-center items-center flex-col">
      <SectionIntro
        sectionName="About"
        textBig="Hi there! I’m Jurre"
        textSmall="Welcome to my world. Get to know me :)"
      />
      <div className="w-10/12 h-4xl mt-25 bg-jurremagenta rounded-[40px]"></div>
    </div>
  )
}

export default About
