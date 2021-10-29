import React from 'react'

interface Props {
  color?: string
}

const Logo: React.FC<Props> = (props) => {
  return (
    <div className="footer-logo flex items-baseline justify-center gap-2 cursor-default noselect">
      <div
        className="h-7 w-7"
        style={{
          WebkitMask: 'url("/icons/logo-icon.svg") no-repeat center / contain',
          mask: 'url("/icons/logo-icon.svg") no-repeat center / contain',
          backgroundColor: `${props.color || 'black'}`
        }}
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
