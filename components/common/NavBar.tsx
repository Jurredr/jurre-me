import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { memo } from 'react'
import { Route } from '../../types'
import { basicHoverTapScale } from '../../utils/animation'
import Logo from './Logo'
import MaskSvg from './MaskSvg'
import ThemeToggler from './theme-toggler/ThemeToggler'

type Props = {
  readonly routes: Route[]
}

export const NavBar = memo<Props>(({ routes }) => {
  const { pathname } = useRouter()

  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full max-w-[1680px] items-center justify-between gap-2 py-8 px-6 mdlg:px-16 lg:px-32 xl:px-40 2xl:px-48">
        <Link href="/">
          <a className="sm:hidden">
            <MaskSvg
              className="min-h-7 min-w-7 mb-1 h-7 w-7 dark:!bg-white"
              url="/img/icons/logo-icon.svg"
            />
          </a>
        </Link>
        <Link href="/">
          <motion.a
            className="hidden cursor-pointer dark:hidden sm:block"
            whileHover={basicHoverTapScale.hover}
            whileTap={basicHoverTapScale.tap}
            transition={{ duration: basicHoverTapScale.duration }}
          >
            <Logo color="black" />
          </motion.a>
        </Link>
        <Link href="/">
          <motion.a
            className="hidden cursor-pointer dark:sm:block"
            whileHover={basicHoverTapScale.hover}
            whileTap={basicHoverTapScale.tap}
            transition={{ duration: basicHoverTapScale.duration }}
          >
            <Logo color="white" />
          </motion.a>
        </Link>
        <div className="flex h-12 items-center justify-center gap-3">
          <nav className="z-0 flex h-full rounded-xl bg-jurrelightgray dark:bg-jurredarklight">
            {routes.map((route) => (
              <div
                key={route.path}
                className="relative flex items-center justify-center"
              >
                <Link href={route.path}>
                  <a className="z-10 cursor-pointer p-3 py-1 px-3 font-semibold tracking-wide">
                    {route.label}
                  </a>
                </Link>
                {pathname === route.path ||
                (pathname.startsWith(route.path) && route.path !== '/') ? (
                  <motion.div
                    className="absolute left-0 top-0 right-0 bottom-0 -z-10 m-auto h-[80%] w-[85%] rounded-lg bg-white dark:bg-jurredark"
                    layoutId="active"
                    transition={{ type: 'spring', stiffness: 270, damping: 30 }}
                  />
                ) : null}
              </div>
            ))}
          </nav>
          <ThemeToggler />
        </div>
      </div>
    </div>
  )
})

NavBar.displayName = 'NavBar'
