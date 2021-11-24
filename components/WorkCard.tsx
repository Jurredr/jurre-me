import LanguageFlair from './LanguageFlair'

interface Props {
  name: string
  title: string
  languages: string[][]
}

const WorkCard: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col text-white gap-7">
      <p className="font-euclid font-medium text-2xl">{props.name}</p>
      <div className="font-freigeist font-bold text-5xl flex flex-col gap-4">
        {props.title.split('[split]').map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </div>
      <div className="flex font-euclid text-lg gap-2 mt-4">
        {props.languages.map((item, index) => {
          return <LanguageFlair key={index} name={item[0]} />
        })}
      </div>
    </div>
  )
}

export default WorkCard
