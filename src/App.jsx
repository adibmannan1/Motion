// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'

const App = () => {
  return (
    <div className="w-full min-h-screen text-white bg-[#050711]">
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
    </div>
  )
}

export default App