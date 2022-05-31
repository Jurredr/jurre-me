import { scroller } from 'react-scroll'
import MaskSvg from '../MaskSvg'

const HomeHero: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <section className="mt-28 mb-28 flex w-full max-w-[1680px] flex-col items-end px-6 mdlg:px-16 lg:px-32 xl:px-40 2xl:px-48">
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
        <svg width="100%" height="100%" viewBox="0 0 100 10">
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
        </svg>
        <div className="border-l-[0.4rem] border-l-jurreyellow pl-4 text-3xl font-light leading-[1.3]">
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
    </div>
  )
}

export default HomeHero
