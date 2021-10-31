import { motion } from 'framer-motion'
import React from 'react'
import Logo from './Logo'

export default function Hero() {
  return (
    <div className="bg-jurreyellow-dark flex flex-col">
      <div className="flex justify-between px-16 py-8">
        <Logo color="white" />
        <div className="flex justify-center items-center gap-8">
          <p className="text-white cursor-pointer font-medium">About</p>
          <p className="text-white cursor-pointer font-medium">Work</p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.05 }}
            className="bg-white rounded-[20px] cursor-pointer py-3 px-8"
          >
            <p className="font-euclid font-medium noselect">Let&apos;s Talk!</p>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center items-center noselect pt-12">
        <p className="text-jurreyellow-light font-freigeistwide font-black pb-92 text-[19vw] tracking-tight">
          JURRE
        </p>
      </div>
    </div>
  )
}
