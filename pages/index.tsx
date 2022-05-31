import type { NextPage } from 'next'
import HomeAbout from '../components/home/HomeAbout'
import HomeContact from '../components/home/HomeContact'
import HomeHero from '../components/home/HomeHero'
import HomeProjects from '../components/home/HomeProjects'
import HomeToolScroller from '../components/home/HomeToolScroller'
import { Layout } from '../components/common/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeHero />
      <HomeAbout />
      <HomeToolScroller />
      <HomeProjects />
      <HomeContact />
    </Layout>
  )
}

export default Home
