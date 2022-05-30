import type { NextPage } from 'next'
import { Layout } from '../../components/Layout'
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
    </Layout>
  )
}

export default Projects
