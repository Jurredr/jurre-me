import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Interests from '../components/Interests'
import ChatBubble from '../components/ChatBubble'
import About from '../components/About'
import Work from '../components/Work'

const Home: NextPage = () => {
  return (
    <div className="relative w-screen h-screen">
      {/* Chat bubble */}
      <ChatBubble />

      <div className="h-full w-full absolute overflow-auto relative">
        {/* Hero section */}
        <Hero />

        {/* About section */}
        <About />

        {/* Interests section */}
        <Interests />

        {/* Work section */}
        <Work />

        {/* Contact section */}

        {/* Footer section */}
        <Footer />
      </div>
    </div>
  )
}

export default Home
