import { motion } from 'framer-motion'
import React from 'react'
import {
  basicHoverTapScale,
  basicHoverTapScaleExtended,
  navBubbles
} from '../lib/AnimationPresets'
import Logo from './Logo'
import MaskSvg from './MaskSvg'

export default function Hero() {
  return (
    <div className="bg-jurreyellow-dark flex flex-col overflow-hidden relative">
      <motion.div
        className="flex justify-between px-4 xs:px-8 sm:px-16 py-8 items-center sm:items-baseline"
        variants={{
          hidden: {
            opacity: 0.5,
            y: -100
          },
          visible: {
            opacity: 1,
            y: 0
          }
        }}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.75,
          delay: 0.7
        }}
      >
        <motion.div
          whileHover={basicHoverTapScale.hover}
          transition={{ duration: basicHoverTapScale.duration }}
        >
          <div className="sm:hidden mb-2">
            <MaskSvg
              className="h-8 w-8"
              url="/icons/logo-icon.svg"
              color="white"
            />
          </div>
          <div className="hidden sm:block">
            <Logo color="white" />
          </div>
        </motion.div>
        <div className="flex justify-center items-center gap-4 sm:gap-8 text-sm sm:text-base">
          <motion.p
            className="text-white cursor-pointer font-medium"
            whileHover={basicHoverTapScaleExtended.hover}
            whileTap={basicHoverTapScaleExtended.tap}
            transition={{ duration: basicHoverTapScaleExtended.duration }}
          >
            About
          </motion.p>
          <motion.p
            className="text-white cursor-pointer font-medium"
            whileHover={basicHoverTapScaleExtended.hover}
            whileTap={basicHoverTapScaleExtended.tap}
            transition={{ duration: basicHoverTapScaleExtended.duration }}
          >
            Work
          </motion.p>
          <motion.div
            className="bg-white rounded-[20px] cursor-pointer py-3 px-4 sm:px-8 text-center"
            whileHover={basicHoverTapScale.hover}
            whileTap={basicHoverTapScale.tap}
            transition={{ duration: basicHoverTapScale.duration }}
          >
            <p className="font-euclid font-medium noselect">Let&apos;s Talk!</p>
          </motion.div>
        </div>
      </motion.div>
      <div className="flex justify-center items-center noselect pt-12">
        <motion.div className="text-jurreyellow-light font-freigeistwide font-black pb-92 text-[22vw] sm:text-[19vw] tracking-tight flex cursor-default">
          <motion.p
            variants={{
              start: {
                scale: 0,
                y: -100,
                x: 100
              },
              end: {
                scale: 1,
                y: 0,
                x: 0
              }
            }}
            initial="start"
            animate="end"
            transition={{
              duration: 1,
              delay: 0.5
            }}
          >
            J
          </motion.p>
          <motion.p
            variants={{
              start: {
                scale: 0,
                y: -100,
                x: 50
              },
              end: {
                scale: 1,
                y: 0,
                x: 0
              }
            }}
            initial="start"
            animate="end"
            transition={{
              duration: 1,
              delay: 0.55
            }}
          >
            U
          </motion.p>
          <motion.p
            variants={{
              start: {
                scale: 0,
                y: -100
              },
              end: {
                scale: 1,
                y: 0
              }
            }}
            initial="start"
            animate="end"
            transition={{
              duration: 1,
              delay: 0.6
            }}
          >
            R
          </motion.p>
          <motion.p
            variants={{
              start: {
                scale: 0,
                y: -100,
                x: -50
              },
              end: {
                scale: 1,
                y: 0,
                x: 0
              }
            }}
            initial="start"
            animate="end"
            transition={{
              duration: 1,
              delay: 0.65
            }}
          >
            R
          </motion.p>
          <motion.p
            variants={{
              start: {
                scale: 0,
                y: -100,
                x: -100
              },
              end: {
                scale: 1,
                y: 0,
                x: 0
              }
            }}
            initial="start"
            animate="end"
            transition={{
              duration: 1,
              delay: 0.7
            }}
          >
            E
          </motion.p>
        </motion.div>
      </div>
      <motion.div
        className="absolute -right-10 md:right-0 -bottom-80"
        variants={{
          start: {
            y: 600,
            rotate: 30
          },
          end: {
            y: 0,
            rotate: 0
          }
        }}
        initial="start"
        animate="end"
        transition={{
          type: 'spring',
          stiffness: 70,
          duration: 1.2
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/jurre-wave.png"
          alt="Jurre 3D character waving"
          className="h-[60rem] sm:scale-75 xl:scale-90 2xl:scale-100 object-contain transform rotate-[18deg] noselect"
          draggable="false"
        />
      </motion.div>
      <div className="flex flex-col gap-4 absolute bottom-12 left-12 lg:left-16">
        <motion.div
          className="h-4 w-4 bg-white rounded-full cursor-pointer"
          variants={navBubbles}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.75,
            duration: 0.8
          }}
        />
        <motion.div
          variants={navBubbles}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.8,
            duration: 0.8
          }}
        >
          <motion.div
            className="h-4 w-4 border-white border-solid border-2 rounded-full cursor-pointer"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1.1 }}
            transition={{
              delay: 0,
              duration: 0.15
            }}
          />
        </motion.div>
        <motion.div
          variants={navBubbles}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.85,
            duration: 0.8
          }}
        >
          <motion.div
            className="h-4 w-4 border-white border-solid border-2 rounded-full cursor-pointer"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1.1 }}
            transition={{
              delay: 0,
              duration: 0.15
            }}
          />
        </motion.div>
        <motion.div
          variants={navBubbles}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.9,
            duration: 0.8
          }}
        >
          <motion.div
            className="h-4 w-4 border-white border-solid border-2 rounded-full cursor-pointer"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1.1 }}
            transition={{
              delay: 0,
              duration: 0.15
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}
