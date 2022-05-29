import type { NextPage } from 'next'
import Cursor from '../components/Cursor'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <div className="relative h-full w-full overflow-hidden bg-white dark:bg-jurredark">
      <Cursor />
      <NavBar />
      <div className="mt-[30%]">
        <Footer />
      </div>
    </div>
  )
}

export default Home
