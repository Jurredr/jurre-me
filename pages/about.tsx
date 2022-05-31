import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import PageHero from '../components/PageHero'
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
      <PageHero title={title}>
        Want to learn more about me?
        <br />
        You&rsquo;re in the right place! 😎
      </PageHero>
      <div className="mb-80" />
    </Layout>
  )
}

export default About
