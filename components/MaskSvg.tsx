import { motion } from 'framer-motion'
import React from 'react'

interface Props {
  url: string
  color?: string
  className?: string
}

const MaskSvg: React.FC<Props> = (props) => {
  return (
    <motion.div
      className={props.className}
      style={{
        WebkitMask: `url('${props.url}') no-repeat center / contain`,
        mask: `url('${props.url}') no-repeat center / contain`,
        backgroundColor: `${props.color || 'black'}`
      }}
    />
  )
}

export default MaskSvg
