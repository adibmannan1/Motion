// eslint-disable-next-line no-unused-vars
import React from 'react'
import team1 from '../images/team1.png';
import team2 from '../images/team2.png';
import team3 from '../images/team3.png';
import team4 from '../images/team4.png';
import { CrewMembers } from './CrewMembers'

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.3" className='-mt-5 raleway w-full p-6 lg:px-20 lg:py-16 bg-[#559fff] rounded-tl-3xl rounded-tr-3xl' id='about'>
        <h1 className='font-semibold text-[#050711] text-[5vw] lg:text-[3vw] leading-[5.5vw] lg:leading-[3.5vw]'>Motion is a website design startup for growing brands that needs to reach their customers, sell products, explain complex ideas, and get more leads.</h1>
        <div className='w-full border-t-2 mt-5 md:mt-16 border-blue-500 flex flex-col lg:flex-row pt-5 md:pt-16 items-start justify-between'>
          <div className='lg:w-2/3 lg:pr-10'>
            <CrewMembers image1={team1} image2={team2} image3={team3} image4={team4}/>
          </div>
          <div className='lg:w-1/3'>
            <h1 className='mt-16 lg:-mt-3 text-[7.5vw] lg:text-[3vw] leading-[5.5vw] lg:leading-[3.5vw] font-bold text-[#050711]'>Our Crew Members</h1>
            <p className='text-[#050711] text-[4.5vw] lg:text-[1.4vw] leading-[5.5vw] lg:leading-[2vw] mt-4'>
              The dynamic and innovative team at our web design agency comprises a talented group of individuals dedicated to transforming digital landscapes into visually stunning and highly functional experiences.Our designers are the creative architects of the digital realm, crafting visually captivating and user-centric interfaces that resonate with the brand identity of our clients.
            </p>
            <a href='#footer'>
              <button type="button" className="px-10 py-6 w-full rounded-full lg:w-auto mt-7 border-4 border-[#050711] bg-[#050711] hover:bg-transparent hover:text-[#050711] text-center me-2 mb-2 text-[#559fff] text-[5vw] lg:text-[1.4vw] font-bold transition ease-in-out duration-200 flex justify-between items-center gap-5 uppercase transform hover:scale-105">
                <h1>Know More</h1>
                <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
              </button>
            </a>
          </div>
        </div>
    </div>
  )
}

export default About