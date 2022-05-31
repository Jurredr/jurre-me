import type { NextPage } from 'next'
import { Layout } from '../../components/Layout'
import PageHero from '../../components/PageHero'
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
    </Layout>
  )
}

export default Projects
