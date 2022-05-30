import { scroller } from 'react-scroll'
import MaskSvg from '../MaskSvg'

const HomeHero: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <section className="mt-28 mb-28 flex w-full max-w-[1680px] flex-col items-end px-8 lg:px-32 xl:px-48">
        <h1 className="noselect self-center whitespace-nowrap font-freigeistwide text-[23rem] font-black leading-[10.8rem] tracking-[-0.07em] text-jurreyellow">
          JURRE
        </h1>
        <h2 className="noselect whitespace-nowrap font-freigeistwide text-[8.2rem] font-black tracking-[-0.07em] text-black dark:text-white">
          de Ruiter
        </h2>
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
