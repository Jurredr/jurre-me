import Image from 'next/image'
import MaskSvg from '../MaskSvg'
import ShadowButton from '../ShadowButton'

const HomeContact: React.FC = () => {
  return (
    <section className="mb-72 flex flex-col items-center justify-center md:flex-row-reverse md:justify-end">
      <div className="relative h-[24rem] w-[24rem] md:absolute md:right-8 mdlg:right-16 lg:right-32 xl:right-40 2xl:right-48 2xl:h-[30rem] 2xl:w-[30rem]">
        <div className="relative h-full w-full dark:hidden">
          <Image
            src="/img/avatars/jurre_contact_light.png"
            layout="fill"
            draggable={false}
          />
        </div>
        <div className="relative hidden h-full w-full dark:block">
          <Image
            src="/img/avatars/jurre_contact_dark.png"
            layout="fill"
            draggable={false}
          />
        </div>
      </div>
      <div className="flex flex-col md:ml-8 mdlg:ml-16 lg:ml-32 xl:ml-40 2xl:ml-48">
        <div className="mb-6 xl:mb-4">
          <h1 className="whitespace-nowrap font-freigeistwide text-[3.5rem] font-black leading-[1] tracking-[-0.07em] md:text-[4.5rem] xl:text-[6.5rem] 2xl:text-[8rem]">
            Get in touch.
          </h1>
          <div className="flex flex-col py-6 xl:flex-row xl:gap-2">
            <p className="whitespace-nowrap text-[1.5rem] tracking-wide">
              Wanna connect?
            </p>
            <div
              className="flex w-fit cursor-alias items-center justify-start gap-4 border-b-[3px] border-b-black pr-1 dark:border-b-white"
              onClick={(e) => {
                window.location.href =
                  "mailto:contact@jurre.me?subject=I'd%20like%20to%20talk!"
                e.preventDefault()
              }}
            >
              <p className="whitespace-nowrap font-euclid text-[1.5rem] tracking-wide">
                Shoot me a message!
              </p>
              <MaskSvg
                className="h-[1rem] w-[1rem] dark:!bg-white"
                url="/img/icons/arrow-tr.svg"
                color="black"
              />
            </div>
          </div>
        </div>
        <div className="flex w-fit gap-5">
          <ShadowButton href="https://www.instagram.com/jurre.053/">
            <Image
              src="/img/icons/instagram-fill.svg"
              layout="fill"
              draggable={false}
            />
          </ShadowButton>
          <ShadowButton href="https://twitter.com/JurredeRuiter">
            <MaskSvg
              className="h-full w-full"
              url="/img/icons/twitter.svg"
              color="#00C2FE"
            />
          </ShadowButton>
          <ShadowButton href="https://discordapp.com/channels/@me">
            <MaskSvg
              className="h-[95%] w-[95%]"
              url="/img/icons/discord.svg"
              color="#5765F2"
            />
          </ShadowButton>
          <ShadowButton href="https://www.linkedin.com/in/jurre-de-ruiter-2503901b4/">
            <MaskSvg
              className="h-[90%] w-[90%]"
              url="/img/icons/linkedin.svg"
              color="#4EA3FF"
            />
          </ShadowButton>
        </div>
      </div>
    </section>
  )
}

export default HomeContact
