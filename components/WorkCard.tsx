import LanguageFlair from './LanguageFlair'

const WorkCard: React.FC = () => {
  return (
    <div className="flex flex-col text-white gap-7">
      <p className="font-euclid font-medium text-2xl">Cashew</p>
      <div className="font-freigeist font-bold text-5xl flex flex-col gap-4">
        <p>Personal finance platform</p>
        <p>for budgeting and overview</p>
      </div>
      <div className="flex font-euclid text-lg gap-2 mt-4">
        <LanguageFlair name="JavaScript" color="orange" />
        <LanguageFlair name="Vue" color="teal" />
      </div>
    </div>
  )
}

export default WorkCard
