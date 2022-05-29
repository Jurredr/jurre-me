import React from 'react'
import MaskSvg from './MaskSvg'

interface Props {
  color?: string
}

const Logo: React.FC<Props> = (props) => {
  return (
    <div className="footer-logo noselect flex items-baseline justify-center gap-2">
      <MaskSvg
        className="h-5 w-5 md:h-7 md:w-7"
        url="/icons/logo-icon.svg"
        color={props.color}
      />
      <p
        className="text-xl font-medium md:text-3xl"
        draggable="false"
        style={{ color: `${props.color || 'black'}` }}
      >
        Jurre.me
      </p>
    </div>
  )
}

export default Logo
