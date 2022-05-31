import Image from 'next/image'

const HomeAbout: React.FC = () => {
  return (
    <section
      className="mt-60 mb-40 flex flex-col items-center justify-center pt-32"
      id="about-scroller"
    >
      <div className="mb-20 flex flex-col items-center justify-center">
        <h1 className="whitespace-nowrap font-freigeistwide text-[9rem] font-black leading-[1] tracking-[-0.07em]">
          Hi!
        </h1>
        <h2 className="whitespace-nowrap font-euclid text-[1.7rem] tracking-wide">
          <span className="font-medium">Heyo</span>, I&rsquo;m Jurre de Ruiter!
        </h2>
      </div>
      <div className="relative h-[25rem] w-[25rem]">
        <Image
          src="/img/avatars/jurre_smile.png"
          layout="fill"
          draggable={false}
        />
      </div>
    </section>
  )
}

export default HomeAbout
