import { AnimationControls, motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import SectionIntro from './SectionIntro'

interface Props {
  chatControls: AnimationControls
}

const About: React.FC<Props> = (props) => {
  const introControls = useAnimation()
  const [introRef, introInView] = useInView({
    threshold: 1,
    triggerOnce: true
  })
  const [chatRef, chatInView] = useInView({
    threshold: 0,
    triggerOnce: false
  })

  useEffect(() => {
    if (introInView) {
      introControls.start('visible')
    } else {
      introControls.start('hidden')
    }
  }, [introControls, introInView])

  useEffect(() => {
    if (chatInView) {
      props.chatControls.start('visible')
    } else {
      props.chatControls.start('hidden')
    }
  }, [props.chatControls, chatInView])

  return (
    <div className="mt-29 flex justify-center items-center flex-col">
      <div ref={chatRef}>
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
      </div>
      <div className="w-[89%] h-[120rem] mt-25 bg-jurremagenta rounded-[40px]"></div>
    </div>
  )
}

export default About
