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
      <Controller>
        <Scene triggerHook="onLeave" duration={1000} pin>
          <div className="w-[89%] h-screen mt-25 bg-jurremagenta rounded-[40px]"></div>
        </Scene>
      </Controller>
    </div>
  )
}

export default About
