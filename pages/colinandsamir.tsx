import Image from 'next/image'
import MaskSvg from '../components/common/MaskSvg'
import ShadowButton from '../components/common/ShadowButton'

const ColinAndSamir: React.FC = () => {
  return (
    <div className="h-full w-full overflow-hidden bg-[#efefef]">
      <nav className="flex items-center justify-center">
        <div className="relative mt-12 h-12 w-20">
          <Image
            src="/img/colinandsamir/logo.png"
            layout="fill"
            draggable={false}
            alt="Colin and Samir logo icon"
          />
        </div>
      </nav>
      <main>
        {/* Hero */}
        <div className="mb-56 flex flex-col items-center justify-center">
          <div className="mt-24 mb-6 flex flex-col items-center justify-center">
            <h1 className="mr-20 whitespace-nowrap font-[Roslindale] text-[3rem] font-medium sm:text-[4.5rem]">
              Hey <span className="font-semibold">Colin</span> 👋
            </h1>
            <h1 className="ml-20 whitespace-nowrap font-[Roslindale] text-[3rem] font-medium sm:text-[4.5rem]">
              Hi <span className="font-semibold">Samir</span> 👋
            </h1>
          </div>
          <div className="relative flex flex-col items-center justify-center">
            <div className="z-10 mb-24 h-24 w-[2px] bg-black" />
            <p className="z-10 whitespace-nowrap bg-[#F7E825] p-2 font-[Helvetica,sans-serif] text-[1.5rem] font-bold md:text-[2.5rem] lg:text-[4rem]">
              So you need a website, huh?
            </p>
            <div className="z-10 mt-6 animate-bounce rounded-xl bg-white p-2">
              <div className="relative h-9 w-9">
                <Image
                  src="/img/colinandsamir/scroll.svg"
                  layout="fill"
                  draggable={false}
                  alt="Scroll suggestion icon"
                />
              </div>
            </div>
            <div className="absolute top-10">
              <div className="relative h-[450px] w-[700px] opacity-50">
                <Image
                  src="/img/colinandsamir/colinandsamir.jpeg"
                  layout="fill"
                  draggable={false}
                  alt="Colin and Samir"
                />
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="flex w-full items-center justify-center bg-[#161513] py-32 text-white">
          <div className="flex w-[800px] max-w-[800px] flex-col items-center justify-between gap-16 lg:flex-row lg:gap-0 xl:w-[1000px] xl:max-w-[1000px]">
            <div className="flex flex-col gap-12">
              <div className="relative">
                <h1 className="font-[Roslindale] text-[3rem] font-bold leading-tight sm:text-[4rem]">
                  I've got you
                  <br />
                  covered.
                </h1>
                <h2 className="font-[Roslindale] text-[1.5rem] font-medium opacity-80 sm:text-[2rem]">
                  (if you want me to 😉)
                </h2>
                <div className="absolute -top-24 sm:-top-20 sm:-left-20">
                  <div className="relative h-[80px] w-[80px] sm:h-[120px] sm:w-[120px]">
                    <Image
                      src="/img/colinandsamir/starcircle.svg"
                      layout="fill"
                      draggable={false}
                      alt="Star illustration"
                    />
                  </div>
                </div>
              </div>
              <div className="flex h-[12.5rem] items-center justify-center gap-3">
                <div className="h-full w-[6px] bg-white opacity-50"></div>
                <div className="flex flex-col gap-4 text-[0.9rem] sm:text-lg">
                  <p>
                    I&apos;m <strong className="text-[#FBD512]">Jurre</strong>;
                    a <strong>20 y/o</strong> full-stack{' '}
                    <strong>developer</strong>
                    <br /> & CS student from The Netherlands 🇳🇱
                  </p>
                  <p className="opacity-50 transition-opacity duration-200 hover:opacity-100">
                    I&apos;ve been developing websites for{' '}
                    <strong>6 years</strong>,
                    <br />
                    and currently intern at <strong>Amazon</strong> in Dublin.
                  </p>
                  <p className="opacity-50 transition-opacity duration-200 hover:opacity-100">
                    I can pretty much create <i>anything</i> you want
                    <br />
                    for <strong>Creator Support</strong>, both{' '}
                    <strong>code</strong> & <strong>desig</strong>n-wise.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[450px] w-[300px] sm:h-[600px] sm:w-[400px]">
              <Image
                src="/img/colinandsamir/jurre.png"
                layout="fill"
                draggable={false}
                alt="Jurre de Ruiter portrait photo"
              />
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="flex items-center justify-center py-48">
          <div className="grid w-[300px] max-w-[300px] grid-cols-1 gap-10 sm:w-[400px] sm:max-w-[400px] lg:w-[1000px] lg:max-w-[1000px] lg:grid-cols-2 xl:grid-cols-3">
            <div className="relative h-72 w-full">
              <Image
                src="/img/colinandsamir/projects/jurre-me.png"
                layout="fill"
                draggable={false}
                alt="Jurre.me personal website project"
              />
            </div>
            <div className="relative h-72 w-full">
              <Image
                src="/img/colinandsamir/projects/cashew.png"
                layout="fill"
                draggable={false}
                alt="Cashew website project"
              />
            </div>
            <div className="relative h-72 w-full">
              <Image
                src="/img/colinandsamir/projects/jurregram.png"
                layout="fill"
                draggable={false}
                alt="JurreGram Instagram clone website project"
              />
            </div>
            <div className="relative h-72 w-full">
              <Image
                src="/img/colinandsamir/projects/twente.png"
                layout="fill"
                draggable={false}
                alt="Twente DigiBuddy website project"
              />
            </div>
            <div className="relative h-72 w-full">
              <Image
                src="/img/colinandsamir/projects/socials.png"
                layout="fill"
                draggable={false}
                alt="Socials.lol website project"
              />
            </div>
            <div className="relative h-72 w-full">
              <Image
                src="/img/colinandsamir/projects/glassdown.png"
                layout="fill"
                draggable={false}
                alt="Glassdown, a modern markdown IDE project"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-56 mt-10 flex flex-col items-center justify-center gap-4">
          <div className="relative">
            <h1 className="text-center font-[Roslindale] text-[3.5rem] lg:text-[4.5rem]">
              Let&apos;s work together!
            </h1>
            <div className="absolute left-36 -top-12 sm:-top-8 sm:-left-12 lg:-top-14 lg:-left-28">
              <div className="relative h-[40px] w-[40px] lg:h-[90px] lg:w-[90px]">
                <Image
                  src="/img/colinandsamir/star.svg"
                  layout="fill"
                  draggable={false}
                  alt="Star illustration"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <ShadowButton href="mailto:contact@jurre.me?subject=I'd%20like%20to%20talk!">
              <MaskSvg
                className="h-[90%] w-[90%]"
                url="/img/colinandsamir/mail.svg"
                color="#161513"
              />
            </ShadowButton>
            <ShadowButton href="https://github.com/Jurredr">
              <MaskSvg
                className="h-[90%] w-[90%]"
                url="/img/icons/github.svg"
                color="#2B3137"
              />
            </ShadowButton>
            <ShadowButton href="https://www.linkedin.com/in/jurre-de-ruiter/">
              <MaskSvg
                className="h-[90%] w-[90%]"
                url="/img/icons/linkedin.svg"
                color="#0D62BC"
              />
            </ShadowButton>
            <ShadowButton href="https://www.jurre.me/">
              <MaskSvg
                className="h-[100%] w-[100%]"
                url="/img/icons/logo-icon.svg"
                color="#FFB800"
              />
            </ShadowButton>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex items-center justify-center gap-1 pb-12">
          <p className="text-center font-[Roslindale] text-lg sm:text-2xl">
            Made by <strong>Jurre</strong>, for <strong>Colin & Samir</strong>,
            with
          </p>
          <div className="relative h-5 w-5">
            <Image
              src="/img/colinandsamir/heart.svg"
              layout="fill"
              draggable={false}
              alt="Yellow heart icon"
            />
          </div>
        </footer>
      </main>
    </div>
  )
}

export default ColinAndSamir
