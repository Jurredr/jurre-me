import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useRef } from 'react'
import MoonIcon from './MoonIcon'
import SunIcon from './SunIcon'

const ThemeToggler = () => {
  const { theme, setTheme, systemTheme } = useTheme()

  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
  })

  return (
    <motion.div className="cursor-pointer" whileHover="hover">
      {theme === 'light' || (theme === 'system' && systemTheme === 'light') ? (
        <div
          className="rounded-2xl bg-jurrelightgray p-4"
          onClick={() => setTheme('dark')}
        >
          <MoonIcon firstRender={firstRender.current} />
        </div>
      ) : theme === 'dark' ? (
        <div
          className="rounded-2xl bg-jurredarklight p-4"
          onClick={() => setTheme('light')}
        >
          <SunIcon firstRender={firstRender.current} />
        </div>
      ) : (
        <></>
      )}
    </motion.div>
  )
}

export default ThemeToggler
