import { motion } from 'framer-motion'
import React from 'react'
import { basicHoverTapScale } from '../lib/AnimationPresets'
import SectionIntro from './SectionIntro'

const Work: React.FC = () => {
  return (
    <div className="mb-[14.6rem] flex justify-center items-center flex-col">
      <SectionIntro
        sectionName="Projects"
        textBig="A highlight reel of work"
        textSmall="Check out some of my latest projects!"
      />
      <div className="w-full h-screen mt-36 rounded-[40px] bg-gradient-to-br from-red-300 to-yellow-300 flex justify-between items-center">
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
          <div className="flex flex-col text-white gap-7">
            <p className="font-euclid font-medium text-2xl">Cashew</p>
            <div className="font-freigeist font-bold text-5xl flex flex-col gap-4">
              <p>Personal finance platform</p>
              <p>for budgeting and overview</p>
            </div>
            <div className="flex font-euclid text-lg gap-2 mt-4">
              <p className="bg-orange-100 text-orange-400 px-5 py-[0.35rem] rounded-full">
                JavaScript
              </p>
              <p className="bg-teal-100 text-teal-400 px-5 py-[0.35rem] rounded-full">
                Vue
              </p>
            </div>
          </div>
        </div>
        <div className="bg-orange-100 rounded-4xl h-2/3 w-2/5 mr-16 flex justify-end items-end">
          <motion.div
            className="bg-white rounded-2xl cursor-pointer py-4 px-4 text-center w-38 m-10"
            whileHover={basicHoverTapScale.hover}
            whileTap={basicHoverTapScale.tap}
            transition={{ duration: basicHoverTapScale.duration }}
          >
            <p className="font-euclid font-medium noselect">Check out</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Work
