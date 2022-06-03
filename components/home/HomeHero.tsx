import Image from 'next/image'
import { scroller } from 'react-scroll'
import MaskSvg from '../common/MaskSvg'

const HomeHero: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center">
      <section className="mt-24 mb-28 flex w-full max-w-[1680px] flex-col items-end px-6 mdlg:px-16 lg:px-32 xl:px-40 2xl:px-48">
        <div className="h-full w-full">
          <svg width="100%" height="100%" viewBox="0 0 35 7.1">
            <text
              x={0}
              y={7.0}
              fontSize="10"
              fontWeight="900"
              letterSpacing="-0.07em"
              fontFamily="Freigeist Wide"
              className="fill-jurreyellow"
            >
              JURRE
            </text>
          </svg>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 14"
            className="relative"
          >
            <text
              x={54.5}
              y={7.8}
              fontSize="10px"
              fontWeight="900"
              letterSpacing="-0.07em"
              fontFamily="Freigeist Wide"
              className="-translate-x-[0.6rem] translate-y-[0.095rem] fill-black text-[12px] dark:fill-white xs:translate-x-0 xs:translate-y-0 xs:text-[10px]"
            >
              de Ruiter
            </text>
            <svg
              x={56.5}
              y={7.3}
              xmlns="http://www.w3.org/2000/svg"
              width="40.816"
              height="8.428"
              viewBox="0 0 268.816 24.428"
            >
              <path
                className="-translate-y-[1144.5rem] -translate-x-[36.2rem] rotate-[-2deg] stroke-[5] xs:-translate-y-[1145.3rem] lg:stroke-[3]"
                id="Path_69"
                data-name="Path 69"
                d="M-56.486,18342.422c235.554-15.086,261.313,3.1,261.313,3.1"
                fill="none"
                stroke="#ffc532"
                stroke-linecap="round"
              />
            </svg>
          </svg>
        </div>
        <div className="z-10 border-l-[0.4rem] border-l-jurreyellow pl-4 text-3xl font-light leading-[1.3]">
          <p className="whitespace-nowrap">
            <span className="font-medium">Heyo</span>, I&rsquo;m Jurre de
            Ruiter!
          </p>
          <div className="flex items-center justify-center gap-2">
            <p className="whitespace-nowrap">I code stuff. 🤓</p>
            <div
              className="flex w-fit cursor-pointer items-center justify-start gap-2 border-b-[3px] border-b-black pr-1 dark:border-b-white"
              onClick={() =>
                scroller.scrollTo('about-scroller', {
                  duration: 800,
                  delay: 0,
                  smooth: 'easeInOutQuart'
                })
              }
            >
              <p className="whitespace-nowrap text-[1.5rem] font-medium tracking-wide">
                Learn more
              </p>
              <MaskSvg
                className="h-[0.8rem] w-[0.8rem] rotate-90 dark:!bg-white"
                url="/img/icons/arrow-tr.svg"
                color="black"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="absolute -bottom-[18%] sm:-left-[16%] sm:h-[90%] sm:w-[40rem] md:-left-[4%] lg:-bottom-[14%] lg:left-[4%] xl:left-[8%] xl:h-full xl:w-[46rem] 2xl:left-[10%]">
        <Image
          src="/img/avatars/jurre_wave.png"
          layout="fill"
          objectFit="contain"
          quality={100}
          draggable={false}
        />
      </div>
      <div className="absolute -left-10 right-0 -bottom-[61%] h-full w-[200%] dark:hidden lg:w-[110%]">
        <Image
          src="/img/shapes/rainbow_wave.svg"
          layout="fill"
          quality={100}
          draggable={false}
        />
      </div>
      <div className="absolute -left-10 right-0 -bottom-[61%] hidden h-full w-[200%] dark:block lg:w-[110%]">
        <Image
          src="/img/shapes/rainbow_wave_dark.svg"
          layout="fill"
          quality={100}
          draggable={false}
        />
      </div>
    </div>
  )
}

export default HomeHero
