/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Projects from './components/Projects'
import Cards from './components/Cards'
import Footer from './components/Footer'
// import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  // const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen text-white bg-[#050711]">
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Projects/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App