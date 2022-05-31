import ProjectGridItem from './ProjectGridItem'

const ProjectsGrid: React.FC = () => {
  return (
    <div className="mt-16 mb-48 flex items-center justify-center overflow-hidden">
      <div className="grid grid-cols-1 gap-24 xl:grid-cols-2">
        <ProjectGridItem
          title="Glassdown"
          description="Glassdown is a modern, fast, and transparent Markdown editor, made to learn ElectronJS ⚡️"
          tags={['typescript', 'electron']}
        />
        <ProjectGridItem
          title="Glassdown"
          description="Glassdown is a modern, fast, and transparent Markdown editor, made to learn ElectronJS ⚡️"
          tags={['typescript', 'electron']}
        />
        <ProjectGridItem
          title="Glassdown"
          description="Glassdown is a modern, fast, and transparent Markdown editor, made to learn ElectronJS ⚡️"
          tags={['typescript', 'electron']}
        />
        <ProjectGridItem
          title="Glassdown"
          description="Glassdown is a modern, fast, and transparent Markdown editor, made to learn ElectronJS ⚡️"
          tags={['typescript', 'electron']}
        />
      </div>
    </div>
  )
}

export default ProjectsGrid
