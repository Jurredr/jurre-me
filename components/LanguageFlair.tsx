interface Props {
  name: string
  color: string
}

const LanguageFlair: React.FC<Props> = (props) => {
  return (
    <p
      className={`bg-${props.color}-100 text-${props.color}-400 px-5 py-[0.35rem] rounded-full`}
    >
      {props.name}
    </p>
  )
}

export default LanguageFlair
