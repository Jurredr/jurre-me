import React from 'react'
import Image from 'next/image'
import Logo from './Logo'
import MaskSvg from './MaskSvg'

const Footer: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-8 md:px-16 py-8 font-euclid">
      <div className="footer-left flex justify-center items-center gap-4 md:gap-12 flex-col md:flex-row">
        <Logo color="black" />
        <p className="text-gray-400 mt-1 md:text-sm">
          &#169; 2021 All Rights Reserved
        </p>
      </div>
      <div className="footer-right flex flex-col md:flex-row justify-center items-center gap-8 md:gap-11 text-black">
        <div
          className="footer-mail flex justify-center items-center gap-2 cursor-pointer"
          onClick={(e) => {
            window.location.href =
              "mailto:contact@jurre.me?subject=I'd%20like%20to%20talk!"
            e.preventDefault()
          }}
        >
          <MaskSvg className="h-4 w-4 cursor-pointer" url="/icons/mail.svg" />
          <p>contact@jurre.me</p>
        </div>
        <div className="footer-media-icons flex justify-center items-center gap-5">
          <a
            href="https://www.instagram.com/jurre.053/"
            rel="noreferrer"
            target="_blank"
            className="h-5"
          >
            <MaskSvg
              className="h-5 w-5 cursor-pointer"
              url="/icons/instagram.svg"
            />
          </a>
          <a
            href="https://twitter.com/JurredeRuiter"
            rel="noreferrer"
            target="_blank"
            className="h-5"
          >
            <MaskSvg
              className="h-5 w-5 cursor-pointer"
              url="/icons/twitter.svg"
            />
          </a>
          <a
            href="https://github.com/jurredr"
            rel="noreferrer"
            target="_blank"
            className="h-5"
          >
            <MaskSvg
              className="h-5 w-5 cursor-pointer"
              url="/icons/github.svg"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jurre-de-ruiter-2503901b4/"
            rel="noreferrer"
            target="_blank"
            className="h-5"
          >
            <MaskSvg
              className="h-5 w-5 cursor-pointer"
              url="/icons/linkedin.svg"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
