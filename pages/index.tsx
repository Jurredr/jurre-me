import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Interests from '../components/Interests'
import ChatBubble from '../components/ChatBubble'
import About from '../components/About'
import Work from '../components/Work'
import { useAnimation } from 'framer-motion'

const Home: NextPage = () => {
  const chatControls = useAnimation()

  return (
    <div className="relative w-screen h-screen">
      {/* Chat bubble */}
      <ChatBubble chatControls={chatControls} />

      <div className="h-full w-full absolute overflow-auto relative">
        {/* Hero section */}
        <Hero />

        {/* About section */}
        <About chatControls={chatControls} />

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
