import { useTheme } from 'next-themes'
import Logo from './Logo'
import MaskSvg from './MaskSvg'

const NavBar: React.FC = () => {
  const { setTheme } = useTheme()

  return (
    <div className="flex items-center justify-between py-8 px-8 lg:px-32 xl:px-48">
      <div className="dark:hidden">
        <Logo color="black" />
      </div>
      <div className="hidden dark:block">
        <Logo color="white" />
      </div>
      <div className="flex items-center justify-center gap-3">
        <div className="flex gap-2 rounded-xl bg-jurregray p-2 font-semibold dark:bg-jurredarklight">
          <a className="cursor-pointer rounded-lg bg-white p-1 dark:bg-jurredark">
            Home
          </a>
          <a className="cursor-pointer p-1">About</a>
          <a className="cursor-pointer p-1">Portfolio</a>
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
