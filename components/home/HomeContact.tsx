import Image from 'next/image'
import AnimatedLink from '../common/AnimatedLink'
import MaskSvg from '../common/MaskSvg'
import ShadowButton from '../common/ShadowButton'

const HomeContact: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <section className="relative mb-72 flex w-full max-w-[1680px] flex-col items-center justify-center md:flex-row-reverse md:justify-end">
        <div className="relative h-[24rem] w-[24rem] md:absolute md:right-8 mdlg:right-16 lg:right-32 xl:right-40 2xl:right-48 2xl:h-[30rem] 2xl:w-[30rem]">
          <div className="relative h-full w-full dark:hidden">
            <Image
              src="/img/avatars/jurre_contact_light.png"
              layout="fill"
              draggable={false}
              quality={100}
              alt="Rainbow colored decorative wave shapes for light mode."
            />
          </div>
          <div className="relative hidden h-full w-full dark:block">
            <Image
              src="/img/avatars/jurre_contact_dark.png"
              layout="fill"
              draggable={false}
              quality={100}
              alt="Rainbow colored decorative wave shapes for dark mode."
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
              <div className="w-fit">
                <AnimatedLink
                  href="mailto:contact@jurre.me?subject=I'd%20like%20to%20talk!"
                  color="from-jurreyellow to-jurreyellow dark:from-jurredarkyellow dark:to-jurredarkyellow"
                  iconColor="!bg-jurreyellow dark:!bg-jurredarkyellow"
                  iconSize="h-[1rem] w-[1rem]"
                >
                  <div className="flex w-fit items-center justify-start gap-4">
                    <p className="whitespace-nowrap text-[1.5rem] font-medium tracking-wide text-jurreyellow dark:text-jurredarkyellow">
                      Shoot me a message!
                    </p>
                  </div>
                </AnimatedLink>
              </div>
            </div>
          </div>
          <div className="flex w-fit gap-5">
            <ShadowButton href="https://www.instagram.com/jurre.053/">
              <Image
                src="/img/icons/instagram-fill.svg"
                layout="fill"
                draggable={false}
                alt="Instagram logo icon with brand color gradient."
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
    </div>
  )
}

export default HomeContact
