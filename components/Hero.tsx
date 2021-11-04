import { motion } from 'framer-motion'
import React from 'react'
import Logo from './Logo'
import Image from 'next/image'

export default function Hero() {
  const animateTest = {
    hidden: {
      opacity: 0.5,
      x: -100
    },
    visible: {
      opacity: 1,
      x: 0
    }
  }

  return (
    <div className="bg-jurreyellow-dark flex flex-col overflow-hidden relative">
      <motion.div
        className="flex justify-between px-16 py-8"
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
          whileHover={{ scale: 1.1 }}
          transition={{
            duration: 0.2
          }}
        >
          <Logo color="white" />
        </motion.div>
        <div className="flex justify-center items-center gap-8">
          <motion.p
            className="text-white cursor-pointer font-medium"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            transition={{
              duration: 0.2
            }}
          >
            About
          </motion.p>
          <motion.p
            className="text-white cursor-pointer font-medium"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            transition={{
              duration: 0.2
            }}
          >
            Work
          </motion.p>
          <motion.div
            className="bg-white rounded-[20px] cursor-pointer py-3 px-8"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.05 }}
            transition={{
              duration: 0.2
            }}
          >
            <p className="font-euclid font-medium noselect">Let&apos;s Talk!</p>
          </motion.div>
        </div>
      </motion.div>
      <div className="flex justify-center items-center noselect pt-12">
        <motion.div className="text-jurreyellow-light font-freigeistwide font-black pb-92 text-[19vw] tracking-tight flex">
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
        className="absolute -right-0 -bottom-80 nextimg"
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
        <Image
          src="/jurre-wave.png"
          alt="Jurre 3D character waving"
          className="!h-[60rem] transform rotate-[18deg]"
          draggable="false"
          layout="fill"
          priority={true}
        />
      </motion.div>
      <div className="flex flex-col gap-4 absolute bottom-12 left-16">
        <motion.div
          className="h-4 w-4 bg-white rounded-full cursor-pointer"
          variants={animateTest}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.75,
            duration: 0.8
          }}
        />
        <motion.div
          variants={animateTest}
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
          variants={animateTest}
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
          variants={animateTest}
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
