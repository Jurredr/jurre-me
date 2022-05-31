import MaskSvg from '../MaskSvg'

interface Props {
  title: string
  description: string
  tags: string[]
}

const ProjectGridItem: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col items-center justify-start md:items-start">
      <div className="flex h-[14rem] w-[20rem] items-end justify-end rounded-[2rem] bg-jurreoffwhite dark:bg-jurredarklight xs:h-[16rem] xs:w-[24rem] sm:h-[20rem] sm:w-[30rem] md:h-[21rem] md:w-[35rem]">
        <div className="m-5 rounded-full bg-white p-4">
          <MaskSvg
            className="h-[0.6rem] w-[0.6rem] md:h-[0.8rem] md:w-[0.8rem]"
            url="/img/icons/arrow-tr.svg"
            color="black"
          />
        </div>
      </div>
      <div className="xs:ml-4">
        <h1 className="mt-3 mb-2 font-freigeistwide text-[2.5rem] font-black tracking-[-0.07em]">
          {props.title}
        </h1>
        <p className="text-md max-w-[18rem] text-jurregray dark:text-jurredarkgray xs:max-w-[24rem] sm:max-w-[28rem] sm:text-lg md:max-w-[30rem]">
          {props.description}
        </p>
        <div className="mt-3 flex gap-2">
          {props.tags.map((tag) => {
            return (
              <p
                key={tag}
                className="rounded-full bg-jurreoffwhite py-2 px-4 text-jurregray dark:bg-white dark:text-black"
              >
                {tag}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectGridItem
