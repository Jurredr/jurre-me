import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll
} from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Controller, Scene } from 'react-scrollmagic'
import SectionIntro from './SectionIntro'

const About: React.FC = () => {
  const introControls = useAnimation()
  const [introRef, introInView] = useInView({
    threshold: 1,
    triggerOnce: true
  })

  const { scrollYProgress } = useViewportScroll()
  const scaledY = useTransform(
    scrollYProgress,
    [0, 0.205, 0.37, 0.5],
    [0.7, 1.0, 1.0, 0.9]
  )
  const borderY = useTransform(
    scrollYProgress,
    [0, 0.205, 0.22, 0.35, 0.37, 0.5],
    [40, 40, 0, 0, 40, 40]
  )

  useEffect(() => {
    if (introInView) {
      introControls.start('visible')
    } else {
      introControls.start('hidden')
    }
  }, [introControls, introInView])

  return (
    <div className="mt-29 flex justify-center items-center flex-col">
      <motion.div
        ref={introRef}
        animate={introControls}
        initial="hidden"
        transition={{ duration: 0.4 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -50 }
        }}
      >
        <SectionIntro
          sectionName="About"
          textBig="Hi there! I’m Jurre"
          textSmall="Welcome to my world. Get to know me :)"
        />
      </motion.div>
      <div className="w-screen">
        <Controller>
          <Scene triggerHook="onLeave" duration={1000} pin>
            <motion.div
              className="w-screen h-screen mt-25 bg-jurremagenta"
              style={{ scaleX: scaledY, borderRadius: borderY }}
            ></motion.div>
          </Scene>
        </Controller>
      </div>
    </div>
  )
}

export default About
