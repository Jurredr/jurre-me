import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'

const About: NextPage = () => {
  const title = 'About'
  const description = 'Want to know more about Jurre de Ruiter? Get to know me!'

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        // imageUrl={'/img/about.png'}
      />
    </Layout>
  )
}

export default About
