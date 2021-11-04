import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import SectionIntro from './SectionIntro'

const About: React.FC = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 1, triggerOnce: false })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  return (
    <div className="mt-29 flex justify-center items-center flex-col">
      <motion.div
        ref={ref}
        animate={controls}
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
      <div className="w-10/12 h-4xl mt-25 bg-jurremagenta rounded-[40px]"></div>
    </div>
  )
}

export default About
