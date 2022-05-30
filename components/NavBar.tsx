import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { memo } from 'react'
import { Route } from '../types'
import Logo from './Logo'
import MaskSvg from './MaskSvg'

type Props = {
  readonly routes: Route[]
}

export const NavBar = memo<Props>(({ routes }) => {
  const { pathname } = useRouter()
  const { setTheme } = useTheme()

  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full max-w-[1680px] items-center justify-between gap-2 py-8 px-6 mdlg:px-16 lg:px-32 xl:px-40 2xl:px-48">
        <MaskSvg
          className="min-h-7 min-w-7 mb-1 h-7 w-7 dark:!bg-white sm:hidden"
          url="/img/icons/logo-icon.svg"
        />
        <div className="hidden dark:hidden sm:block">
          <Logo color="black" />
        </div>
        <div className="hidden dark:sm:block">
          <Logo color="white" />
        </div>
        <div className="flex h-12 items-center justify-center gap-3">
          <nav className="z-0 flex h-full rounded-xl bg-jurregray dark:bg-jurredarklight">
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
          <div className="cursor-pointer">
            <div
              className="rounded-2xl bg-jurregray p-4 dark:hidden"
              onClick={() => setTheme('dark')}
            >
              <MaskSvg className="h-4 w-4" url="/img/icons/moon.svg" />
            </div>
            <div
              className="hidden rounded-2xl bg-jurredarklight p-4 dark:block"
              onClick={() => setTheme('light')}
            >
              <MaskSvg
                className="h-4 w-4"
                url="/img/icons/sun.svg"
                color="white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

NavBar.displayName = 'NavBar'
