import { motion } from 'framer-motion'
import React from 'react'
import { basicHoverTapScale } from '../lib/AnimationPresets'
import Logo from './Logo'
import MaskSvg from './MaskSvg'

const Footer: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-8 md:px-16 py-8 font-euclid">
      <div className="footer-left flex justify-center items-center gap-4 md:gap-12 flex-col md:flex-row">
        <motion.div
          whileHover={basicHoverTapScale.hover}
          transition={{ duration: basicHoverTapScale.duration }}
        >
          <Logo color="black" />
        </motion.div>
        <p className="text-gray-400 mt-1 md:text-sm">
          &#169; 2021 All Rights Reserved
        </p>
      </div>
      <div className="footer-right flex flex-col md:flex-row justify-center items-center gap-8 md:gap-11 text-black">
        <motion.div
          className="footer-mail flex justify-center items-center gap-2 cursor-pointer"
          whileHover={basicHoverTapScale.hover}
          whileTap={basicHoverTapScale.tap}
          transition={{ duration: basicHoverTapScale.duration }}
          onClick={(e) => {
            window.location.href =
              "mailto:contact@jurre.me?subject=I'd%20like%20to%20talk!"
            e.preventDefault()
          }}
        >
          <MaskSvg
            className="h-4 w-4 cursor-pointer mt-[0.1rem]"
            url="/icons/mail.svg"
          />
          <p>contact@jurre.me</p>
        </motion.div>
        <div className="footer-media-icons flex justify-center items-center gap-5">
          <motion.a
            href="https://www.instagram.com/jurre.053/"
            rel="noreferrer"
            target="_blank"
            className="h-5"
            whileHover={basicHoverTapScale.hover}
            whileTap={basicHoverTapScale.tap}
            transition={{ duration: basicHoverTapScale.duration }}
          >
            <MaskSvg
              className="h-5 w-5 cursor-pointer"
              url="/icons/instagram.svg"
            />
          </motion.a>
          <motion.a
            href="https://twitter.com/JurredeRuiter"
            rel="noreferrer"
            target="_blank"
            className="h-5"
            whileHover={basicHoverTapScale.hover}
            whileTap={basicHoverTapScale.tap}
            transition={{ duration: basicHoverTapScale.duration }}
          >
            <MaskSvg
              className="h-5 w-5 cursor-pointer"
              url="/icons/twitter.svg"
            />
          </motion.a>
          <motion.a
            href="https://github.com/jurredr"
            rel="noreferrer"
            target="_blank"
            className="h-5"
            whileHover={basicHoverTapScale.hover}
            whileTap={basicHoverTapScale.tap}
            transition={{ duration: basicHoverTapScale.duration }}
          >
            <MaskSvg
              className="h-5 w-5 cursor-pointer"
              url="/icons/github.svg"
            />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jurre-de-ruiter-2503901b4/"
            rel="noreferrer"
            target="_blank"
            className="h-5"
            whileHover={basicHoverTapScale.hover}
            whileTap={basicHoverTapScale.tap}
            transition={{ duration: basicHoverTapScale.duration }}
          >
            <MaskSvg
              className="h-5 w-5 cursor-pointer"
              url="/icons/linkedin.svg"
            />
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default Footer
