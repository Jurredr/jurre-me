import { motion } from 'framer-motion'
import React from 'react'
import Logo from './Logo'

export default function Hero() {
  return (
    <div className="bg-jurreyellow-dark flex flex-col">
      <div className="flex justify-between px-16 py-8">
        <Logo color="white" />
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.0 }}
          className="bg-white rounded-[20px] cursor-pointer py-3 px-8"
        >
          <p className="font-euclid font-medium noselect">Let&apos;s Talk!</p>
        </motion.div>
      </div>
      <div className="flex justify-center items-center noselect">
        <p className="text-jurreyellow-light font-freigeistwide font-black pb-72 text-[19vw] tracking-tight">
          JURRE
        </p>
      </div>
    </div>
  )
}
