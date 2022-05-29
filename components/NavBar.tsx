import { useTheme } from 'next-themes'
import Logo from './Logo'
import MaskSvg from './MaskSvg'

const NavBar: React.FC = () => {
  const { setTheme } = useTheme()

  return (
    <div className="flex items-center justify-between gap-2 py-8 px-6 lg:px-32 xl:px-48">
      <MaskSvg
        className="min-h-7 min-w-7 mb-1 h-7 w-7 dark:!bg-white sm:hidden"
        url="/icons/logo-icon.svg"
      />
      <div className="hidden dark:hidden sm:block">
        <Logo color="black" />
      </div>
      <div className="hidden dark:block sm:block">
        <Logo color="white" />
      </div>
      <div className="flex items-center justify-center gap-3">
        <div className="flex gap-1 rounded-xl bg-jurregray p-2 font-semibold tracking-wide dark:bg-jurredarklight">
          <a className="cursor-pointer rounded-lg bg-white py-1 px-2 dark:bg-jurredark">
            Home
          </a>
          <a className="cursor-pointer py-1 px-2">About</a>
          <a className="cursor-pointer py-1 px-2">Portfolio</a>
        </div>
        <div className="cursor-pointer">
          <div
            className="rounded-2xl bg-jurregray p-4 dark:hidden"
            onClick={() => setTheme('dark')}
          >
            <MaskSvg className="h-4 w-4" url="/icons/moon.svg" />
          </div>
          <div
            className="hidden rounded-2xl bg-jurredarklight p-4 dark:block"
            onClick={() => setTheme('light')}
          >
            <MaskSvg className="h-4 w-4" url="/icons/sun.svg" color="white" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
