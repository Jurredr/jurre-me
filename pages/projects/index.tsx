import type { NextPage } from 'next'
import { Layout } from '../../components/common/Layout'
import PageHero from '../../components/common/PageHero'
import SearchBar from '../../components/projects/SearchBar'
import { SEO } from '../../components/common/SEO'
import ProjectsGrid from '../../components/projects/ProjectsGrid'

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
      <SearchBar />
      <ProjectsGrid />
    </Layout>
  )
}

export default Projects
