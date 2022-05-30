import type { NextPage } from 'next'
import Cursor from '../components/Cursor'
import Footer from '../components/Footer'
import HomeAbout from '../components/home/HomeAbout'
import HomeContact from '../components/home/HomeContact'
import HomeHero from '../components/home/HomeHero'
import HomeProjects from '../components/home/HomeProjects'
import HomeToolScroller from '../components/home/HomeToolScroller'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <div className="relative h-full w-full overflow-hidden bg-white dark:bg-jurredark">
      <Cursor />
      <NavBar />
      <HomeHero />
      <HomeAbout />
      <HomeToolScroller />
      <HomeProjects />
      <HomeContact />
      <Footer />
    </div>
  )
}

export default Home
