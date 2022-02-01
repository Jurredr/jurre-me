import { motion } from 'framer-motion'
import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import { basicHoverTapScale } from '../lib/AnimationPresets'
import MaskSvg from './MaskSvg'
import SectionIntro from './SectionIntro'
import WorkCard from './WorkCard'

const Work: React.FC = () => {
  return (
    <div className="mb-[14.6rem] flex justify-center items-center flex-col">
      <div className="mb-36">
        <SectionIntro
          sectionName="Projects"
          textBig="A highlight reel of work"
          textSmall="Check out some of my latest projects!"
        />
      </div>
      <Controller>
        <Scene triggerHook="onLeave" duration={1000} pin>
          {(progress: number) => (
            <div
              className={
                `w-full h-screen rounded-[40px] flex justify-between items-center ` +
                (progress > 0.55
                  ? `bg-gradient-to-br from-red-300 to-blue-300`
                  : `bg-gradient-to-br from-red-300 to-yellow-300`)
              }
            >
              <div className="flex items-center w-1/2 ml-16 gap-22">
                <div className="flex flex-col gap-4">
                  <motion.div className="h-4 w-4 bg-white rounded-full cursor-pointer" />
                  <motion.div
                    className="h-4 w-4 border-white border-solid border-2 rounded-full cursor-pointer"
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{
                      delay: 0,
                      duration: 0.15
                    }}
                  />
                  <motion.div
                    className="h-4 w-4 border-white border-solid border-2 rounded-full cursor-pointer"
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{
                      delay: 0,
                      duration: 0.15
                    }}
                  />
                  <motion.div
                    className="h-4 w-4 border-white border-solid border-2 rounded-full cursor-pointer"
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{
                      delay: 0,
                      duration: 0.15
                    }}
                  />
                </div>
                <div
                  className={`transition duration-200 ${
                    progress > 0.5 ? 'opacity-0' : 'opacity-100'
                  }`}
                  hidden={progress > 0.55}
                >
                  <WorkCard
                    name="Cashew"
                    title="Personal finance platform[split]for budgeting and overview"
                    languages={[['JavaScript'], ['Vue']]}
                  />
                </div>
                <div
                  className={`transition duration-200 ${
                    progress <= 0.5 ? 'opacity-0' : 'opacity-100'
                  }`}
                  hidden={progress <= 0.55}
                >
                  <WorkCard
                    name="Glassdown"
                    title="Modern & Fast transparent[split]Markdown editor."
                    languages={[['TypeScript'], ['React'], ['Electron']]}
                  />
                </div>
              </div>
              <div className="bg-orange-100 rounded-4xl h-2/3 w-2/5 mr-16 flex justify-end items-end">
                <motion.div
                  className="bg-white rounded-2xl cursor-pointer py-4 px-4 text-center w-38 m-10 flex justify-center items-center gap-3"
                  whileHover={basicHoverTapScale.hover}
                  whileTap={basicHoverTapScale.tap}
                  transition={{ duration: basicHoverTapScale.duration }}
                >
                  <p className="font-euclid font-medium noselect">Check out</p>
                  <MaskSvg
                    className="h-[0.65rem] w-[0.65rem] mt-[2px]"
                    url="/icons/arrow-tr.svg"
                  />
                </motion.div>
              </div>
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  )
}

export default Work
