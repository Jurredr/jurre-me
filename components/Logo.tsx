import React from 'react'
import Image from 'next/image'

export default function Logo() {
  return (
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
  )
}
