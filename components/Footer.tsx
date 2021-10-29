import React from 'react'
import Image from 'next/image'
import Logo from './Logo'
import MaskSvg from './MaskSvg'

const Footer: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-16 py-10 font-euclid">
      <div className="footer-left flex justify-center items-center gap-12">
        <Logo color="black" />
        <p className="text-gray-400 mt-1">&#169; 2021 All Rights Reserved</p>
      </div>
      <div className="footer-right flex justify-center items-center gap-11 text-black">
        <div
          className="footer-mail flex justify-center items-center gap-2 cursor-pointer"
          onClick={(e) => {
            window.location.href =
              "mailto:contact@jurre.me?subject=I'd%20like%20to%20talk!"
            e.preventDefault()
          }}
        >
          <Image
            src="/icons/mail.svg"
            alt="Email"
            width={17}
            height={14}
            draggable="false"
          />
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
