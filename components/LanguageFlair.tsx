interface Props {
  name: string
}

const LanguageFlair: React.FC<Props> = (props) => {
  const languageColorMap = [
    ['typescript', 'bg-blue-100 text-blue-400'],
    ['react', 'bg-cyan-100 text-cyan-400'],
    ['electron', 'bg-violet-100 text-violet-400'],
    ['javascript', 'bg-orange-100 text-orange-400'],
    ['vue', 'bg-teal-100 text-teal-400']
  ]

  const result = languageColorMap.find(
    (lang) => lang[0] === props.name.toLowerCase()
  )

  return (
    <p
      className={`${
        result ? result[1] : 'bg-gray-100 text-gray-400'
      } px-5 py-[0.35rem] rounded-full`}
    >
      {props.name}
    </p>
  )
}

export default LanguageFlair
