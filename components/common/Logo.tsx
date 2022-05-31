import React from 'react'
import MaskSvg from './MaskSvg'

interface Props {
  color?: string
}

const Logo: React.FC<Props> = (props) => {
  return (
    <div className="footer-logo noselect flex items-baseline justify-center gap-2">
      <MaskSvg
        className="h-7 w-7"
        url="/img/icons/logo-icon.svg"
        color={props.color}
      />
      <p
        className="text-3xl font-medium"
        draggable="false"
        style={{ color: `${props.color || 'black'}` }}
      >
        Jurre.me
      </p>
    </div>
  )
}

export default Logo
