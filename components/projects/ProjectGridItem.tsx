import MaskSvg from '../MaskSvg'

const ProjectGridItem: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="flex h-[21rem] w-[35rem] items-end justify-end rounded-[2rem] bg-jurreoffwhite dark:bg-jurredarklight">
        <div className="m-5 rounded-full bg-white p-4">
          <MaskSvg
            className="h-[0.8rem] w-[0.8rem]"
            url="/img/icons/arrow-tr.svg"
            color="black"
          />
        </div>
      </div>
      <div className="ml-4">
        <h1 className="mt-3 mb-2 font-freigeistwide text-[2.5rem] font-black tracking-[-0.07em]">
          Glassdown
        </h1>
        <p className="max-w-[30rem] text-lg text-jurregray dark:text-jurredarkgray">
          Glassdown is a modern, fast, and transparent Markdown editor, made to
          learn ElectronJS ⚡️
        </p>
        <div className="mt-3 flex gap-2">
          <p className="rounded-full bg-jurreoffwhite py-2 px-4 text-jurregray dark:bg-white dark:text-black">
            typescript
          </p>
          <p className="rounded-full bg-jurreoffwhite py-2 px-4 text-jurregray dark:bg-white dark:text-black">
            electron
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectGridItem
