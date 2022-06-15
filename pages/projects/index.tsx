import type { NextPage } from 'next'
import { Layout } from '../../components/common/Layout'
import PageHero from '../../components/common/PageHero'
import SearchBar from '../../components/projects/SearchBar'
import { SEO } from '../../components/common/SEO'
import ProjectsGrid from '../../components/projects/ProjectsGrid'
import sanity, { builder } from '../../utils/sanity'
import type * as Schema from '../../types/sanity'
import { useEffect } from 'react'
import getSinglePluralText from '../../utils/getSinglePluralText'

export async function getStaticProps() {
  const query = `*[_type == "project"] | order(publishedAt desc){
    ...,
    author->,
    techstack[]->
  }
  `
  const projects = await sanity.fetch(query)
  return {
    props: {
      projects
    }
  }
}

interface Props {
  projects: Schema.Project[]
}

const Projects: NextPage<Props> = ({ projects }) => {
  useEffect(() => {
    console.log(projects[0])
    console.log(builder.image(projects[0].mainImage?.asset || '').url())
  }, [])

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
        {getSinglePluralText('The ', 'All ', projects.length)}
        <span className="font-medium text-jurreyellow">
          {projects.length}
        </span>{' '}
        {getSinglePluralText('project', 'projects', projects.length)} I have
        worked on can be found here. 🔨
      </PageHero>
      <SearchBar />
      <ProjectsGrid projects={projects} />
    </Layout>
  )
}

export default Projects
