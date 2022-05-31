import type { NextPage } from 'next'
import { Layout } from '../../components/Layout'
import PageHero from '../../components/PageHero'
import ProjectGridItem from '../../components/projects/ProjectGridItem'
import SearchBar from '../../components/projects/SearchBar'
import { SEO } from '../../components/SEO'

const Projects: NextPage = () => {
  const title = 'Projects'
  const description =
    'Find out about all the development projects I have worked on!'

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        // imageUrl={'/img/projects.png'}
      />
      <PageHero title={title}>
        All <span className="font-medium text-jurreyellow">43</span> projects I
        have worked on can be found here. 🔨
      </PageHero>
      <div className="mt-6" />
      <SearchBar />
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
    </Layout>
  )
}

export default Projects
