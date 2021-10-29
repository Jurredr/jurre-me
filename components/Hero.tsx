import React from 'react'
import Logo from './Logo'

export default function Hero() {
  return (
    <div className="bg-jurreyellow-dark flex flex-col">
      <div className="flex justify-between px-16 py-8">
        <Logo color="white" />
        <div className="bg-white rounded-[20px] cursor-pointer py-3 px-8">
          <p className="font-euclid font-medium">Let&apos;s Talk!</p>
        </div>
      </div>
      <div className="flex justify-center items-center noselect">
        <p className="text-jurreyellow-light font-freigeistwide font-black pb-72 text-[19vw]">
          JURRE
        </p>
      </div>
    </div>
  )
}
