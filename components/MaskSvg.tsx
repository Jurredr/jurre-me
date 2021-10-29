import React from 'react'

interface Props {
  url: string
  color?: string
  className?: string
}

const MaskSvg: React.FC<Props> = (props) => {
  return (
    <div
      className={props.className}
      style={{
        WebkitMask: `${props.url} no-repeat center / contain`,
        mask: `${props.url} no-repeat center / contain`,
        backgroundColor: `${props.color || 'black'}`
      }}
    />
  )
}

export default MaskSvg
