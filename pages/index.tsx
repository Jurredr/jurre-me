import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Interests from '../components/Interests'
import About from '../components/About'
import Work from '../components/Work'
import ChatBubble from '../components/ChatBubble'
import Cursor from '../components/Cursor'

const Home: NextPage = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Cursor */}
      <Cursor />

      {/* Chat bubble */}
      <ChatBubble />

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
  )
}

export default Home
