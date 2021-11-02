import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Interests from '../components/Interests'
import ChatBubble from '../components/ChatBubble'

const Home: NextPage = () => {
  return (
    <div className="relative w-screen h-screen">
      {/* Chat bubble */}
      <ChatBubble />

      <div className="h-full w-full absolute overflow-auto">
        {/* Hero section */}
        <Hero />

        {/* About section */}

        {/* Interests section */}
        <Interests />

        {/* Work section */}

        {/* Contact section */}

        {/* Footer section */}
        <Footer />
      </div>
    </div>
  )
}

export default Home
