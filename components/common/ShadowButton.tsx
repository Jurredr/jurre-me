interface Props {
  href: string
}

const ShadowButton: React.FC<Props> = (props) => {
  return (
    <a
      href={props.href}
      rel="noreferrer"
      target="_blank"
      className="group w-full cursor-pointer rounded-2xl border-none bg-black dark:bg-jurredarklighter"
    >
      <span className="block -translate-y-[6px] rounded-2xl border-[0.22rem] border-b-[0.12rem] border-black bg-white py-2 px-3 transition-transform group-hover:-translate-y-[8px] group-active:-translate-y-[2px] dark:border-jurredarklighter">
        <div className="relative flex h-[1.5rem] w-[1.5rem] items-center justify-center">
          {props.children}
        </div>
      </span>
    </a>
  )
}

export default ShadowButton
