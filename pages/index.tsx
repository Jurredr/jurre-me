import type { NextPage } from 'next'
import Cursor from '../components/Cursor'
import Footer from '../components/Footer'
import HomeAbout from '../components/HomeAbout'
import HomeHero from '../components/HomeHero'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <div className="relative h-full w-full overflow-hidden bg-white dark:bg-jurredark">
      <Cursor />
      <NavBar />
      <HomeHero />
      <HomeAbout />
      <Footer />
    </div>
  )
}

export default Home
