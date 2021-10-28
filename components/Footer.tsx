import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="flex justify-between items-center p-16 font-euclid">
      <div className="footer-left flex justify-center items-center gap-12">
        <div className="footer-logo flex items-baseline justify-center gap-2">
          <Image
            src="/icon.svg"
            alt=""
            width={27}
            height={28}
            draggable="false"
          />
          <p className="text-black font-medium text-3xl">Jurre.me</p>
        </div>
        <p className="text-gray-400 mt-1">&#169; 2021 All Rights Reserved</p>
      </div>
      <div className="footer-right flex justify-center items-center">
        <div className="footer-mail flex justify-center items-center">
          <p>M</p>
          <p>contact@jurre.me</p>
        </div>
        <div className="footer-media-icons flex justify-center items-center">
          <p>I</p>
          <p>T</p>
          <p>G</p>
          <p>L</p>
        </div>
      </div>
    </div>
  )
}
