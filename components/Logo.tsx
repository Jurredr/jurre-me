import React from 'react'
import Image from 'next/image'

interface Props {
  color: string
}

const Logo: React.FC<Props> = (props) => {
  return (
    <div className="footer-logo flex items-baseline justify-center gap-2 cursor-default noselect">
      <Image
        className={props.color}
        src="/icons/logo-icon.svg"
        alt=""
        width={27}
        height={28}
        draggable="false"
      />
      <p className={props.color + ' font-medium text-3xl'}>Jurre.me</p>
    </div>
  )
}

export default Logo
