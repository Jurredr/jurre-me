import ProjectGridItem from './ProjectGridItem'
import type * as Schema from '../../types/sanity'

interface Props {
  projects: Schema.Project[]
}

const ProjectsGrid: React.FC<Props> = ({ projects }) => {
  return (
    <div className="mt-16 mb-48 flex items-center justify-center overflow-hidden">
      <div className="grid grid-cols-1 gap-24 xl:grid-cols-2">
        {projects.map((project) => {
          return <ProjectGridItem project={project} />
        })}
      </div>
    </div>
  )
}

export default ProjectsGrid
