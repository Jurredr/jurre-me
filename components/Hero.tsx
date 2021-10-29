import React from 'react'
import Logo from './Logo'

export default function Hero() {
  return (
    <div className="bg-jurreyellow-dark flex flex-col">
      <div className="flex justify-between px-16 py-8">
        <Logo color="text-white" />
        <div className="bg-white rounded-[20px]">
          <p className="font-euclid font-medium">Let&apos;s Talk!</p>
        </div>
      </div>
      <div className="flex justify-center items-center text-[20rem] noselect">
        <p className="text-jurreyellow-light font-freigeistwide font-black">
          JURRE
        </p>
      </div>
    </div>
  )
}
