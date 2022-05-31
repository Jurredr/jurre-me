interface Props {
  title: string
  children: React.ReactNode
}

const PageHero: React.FC<Props> = (props) => {
  return (
    <section className="mt-16 flex flex-col items-center justify-center">
      <h1 className="font-freigeistwide text-[6rem] font-black tracking-[-0.07em] text-black dark:text-white">
        {props.title}
      </h1>
      <p className="text-center text-2xl text-jurregray dark:text-jurredarkgray">
        {props.children}
      </p>
    </section>
  )
}

export default PageHero
