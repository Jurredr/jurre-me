import ProjectGridItem from './ProjectGridItem'
import type * as Schema from '../../types/sanity'

interface Props {
  projects: Schema.Project[]
  searchQuery: string
}

const ProjectsGrid: React.FC<Props> = (props) => {
  return (
    <div className="mt-16 mb-48 flex items-center justify-center overflow-hidden">
      <div className="grid grid-cols-1 gap-24 xl:grid-cols-2">
        {props.projects.map((project) => {
          if (project.title.toLowerCase().includes(props.searchQuery))
            return <ProjectGridItem project={project} key={project._id} />
        })}
      </div>
    </div>
  )
}

export default ProjectsGrid
