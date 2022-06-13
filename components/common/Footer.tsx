import { motion } from 'framer-motion'
import { animateScroll } from 'react-scroll'
import { basicHoverTapScale } from '../../utils/animation'
import AnimatedLink from './AnimatedLink'
import Logo from './Logo'
import MaskSvg from './MaskSvg'

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-center bg-jurreoffwhite transition-colors duration-300 dark:bg-jurredarklight">
      <div className="flex w-full max-w-[1680px] flex-col items-center justify-between py-14 px-8 font-euclid md:flex-row mdlg:px-16 lg:px-32 xl:px-40 2xl:px-48">
        <div className="mb-6 flex flex-row items-center justify-center gap-4 md:mb-0 md:gap-12">
          <motion.div
            whileHover={basicHoverTapScale.hover}
            whileTap={basicHoverTapScale.tap}
            transition={{ duration: basicHoverTapScale.duration }}
            className="cursor-pointer dark:hidden"
            onClick={() => animateScroll.scrollToTop()}
          >
            <Logo color="black" />
          </motion.div>
          <motion.div
            className="hidden cursor-pointer dark:block"
            onClick={() => animateScroll.scrollToTop()}
          >
            <Logo color="white" />
          </motion.div>
          <p
            className="mt-1 whitespace-nowrap text-center text-[0.9rem] text-gray-400"
            style={{ lineHeight: '1.25rem' }}
          >
            &#169; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 text-black md:flex-row md:gap-11">
          <AnimatedLink
            href="mailto:contact@jurre.me?subject=I'd%20like%20to%20talk!"
            color="from-black to-black dark:from-white dark:to-white"
          >
            <div className="flex items-center justify-center gap-2">
              <MaskSvg
                className="mt-[0.1rem] h-4 w-4 dark:!bg-white"
                url="/img/icons/mail.svg"
              />
              <p className="text-black dark:text-white">contact@jurre.me</p>
            </div>
          </AnimatedLink>
          {/* <div
            className="flex cursor-alias items-center justify-center gap-2"
            onClick={(e) => {
              window.location.href =
                "mailto:contact@jurre.me?subject=I'd%20like%20to%20talk!"
              e.preventDefault()
            }}
          >
            <MaskSvg
              className="mt-[0.1rem] h-4 w-4 dark:!bg-white"
              url="/img/icons/mail.svg"
            />
            <p className="text-black dark:text-white">contact@jurre.me</p>
          </div> */}
          <div className="flex items-center justify-center gap-5">
            <a
              href="https://www.instagram.com/jurre.053/"
              rel="noreferrer"
              target="_blank"
              className="h-5 transition-all hover:mb-1"
            >
              <MaskSvg
                className="h-5 w-5 cursor-alias dark:!bg-white"
                url="/img/icons/instagram.svg"
              />
            </a>
            <a
              href="https://twitter.com/JurredeRuiter"
              rel="noreferrer"
              target="_blank"
              className="h-5 transition-all hover:mb-1"
            >
              <MaskSvg
                className="h-5 w-5 cursor-alias dark:!bg-white"
                url="/img/icons/twitter.svg"
              />
            </a>
            <a
              href="https://github.com/jurredr"
              rel="noreferrer"
              target="_blank"
              className="h-5 transition-all hover:mb-1"
            >
              <MaskSvg
                className="h-5 w-5 cursor-alias dark:!bg-white"
                url="/img/icons/github.svg"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jurre-de-ruiter-2503901b4/"
              rel="noreferrer"
              target="_blank"
              className="h-5 transition-all hover:mb-1"
            >
              <MaskSvg
                className="h-5 w-5 cursor-alias dark:!bg-white"
                url="/img/icons/linkedin.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
