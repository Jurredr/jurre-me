import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="flex justify-between items-center p-16 font-euclid">
      <div className="footer-left flex justify-center items-center gap-12">
        <div className="footer-logo flex items-baseline justify-center gap-2 cursor-default">
          <Image
            src="/icons/logo-icon.svg"
            alt=""
            width={27}
            height={28}
            draggable="false"
          />
          <p className="text-black font-medium text-3xl">Jurre.me</p>
        </div>
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
            alt=""
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
            className="h-[19px]"
          >
            <Image
              className="cursor-pointer"
              src="/icons/instagram.svg"
              alt=""
              width={19}
              height={19}
              draggable="false"
            />
          </a>
          <a
            href="https://twitter.com/JurredeRuiter"
            rel="noreferrer"
            target="_blank"
            className="h-[19px]"
          >
            <Image
              className="cursor-pointer"
              src="/icons/twitter.svg"
              alt=""
              width={19}
              height={19}
              draggable="false"
            />
          </a>
          <a
            href="https://github.com/jurredr"
            rel="noreferrer"
            target="_blank"
            className="h-[19px]"
          >
            <Image
              className="cursor-pointer"
              src="/icons/github.svg"
              alt=""
              width={19}
              height={19}
              draggable="false"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jurre-de-ruiter-2503901b4/"
            rel="noreferrer"
            target="_blank"
            className="h-[19px]"
          >
            <Image
              className="cursor-pointer"
              src="/icons/linkedin.svg"
              alt=""
              width={19}
              height={19}
              draggable="false"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
