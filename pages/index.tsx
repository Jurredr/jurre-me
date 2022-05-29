import type { NextPage } from 'next'
import Cursor from '../components/Cursor'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Cursor />
      <NavBar />
      <Footer />
    </div>
  )
}

export default Home
