import Link from 'next/link'
import MaskSvg from '../common/MaskSvg'

const HomeProjects: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <section className="mt-48 mb-60 flex w-full max-w-[1680px] flex-col items-center justify-center">
        <h1 className="whitespace-nowrap font-freigeistwide text-[5rem] font-black leading-[1] tracking-[-0.07em] text-black dark:text-white sm:text-[8.2rem]">
          Projects
        </h1>
        <h2 className="mt-4 whitespace-nowrap font-euclid text-lg tracking-wide text-black dark:text-white sm:text-[1.75rem]">
          Check out some of my latest stuff!
        </h2>
        <Link href="/projects" passHref>
          <a className="mb-16 mt-6 flex items-center justify-center gap-3 rounded-2xl bg-jurreyellow py-3 px-7 dark:bg-jurredarkyellow">
            <p className="text-white">Check all</p>
            <MaskSvg
              className="h-[0.65rem] w-[0.65rem]"
              url="/img/icons/arrow-tr.svg"
              color="white"
            />
          </a>
        </Link>
        <div className="h-[60rem] w-full px-6 sm:px-12 mdlg:px-16 lg:px-32 xl:px-40 2xl:px-48">
          <div className="h-full w-full rounded-[5rem] bg-jurreoffwhite dark:bg-jurredarklight"></div>
        </div>
      </section>
    </div>
  )
}

export default HomeProjects
