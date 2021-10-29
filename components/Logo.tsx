import React from 'react'
import MaskSvg from './MaskSvg'

interface Props {
  color?: string
}

const Logo: React.FC<Props> = (props) => {
  return (
    <div className="footer-logo flex items-baseline justify-center gap-2 cursor-default noselect">
      <MaskSvg
        className="h-7 w-7"
        url="url('/icons/logo-icon.svg')"
        color={props.color}
      />
      <p
        className="font-medium text-3xl"
        style={{ color: `${props.color || 'black'}` }}
      >
        Jurre.me
      </p>
    </div>
  )
}

export default Logo
