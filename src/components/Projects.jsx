/* eslint-disable no-unused-vars */
import React from 'react'
import hero5 from '../images/hero5.png'
import hero4 from '../images/hero4.png'

const Projects = () => {
  return (
    <div className='w-full py-10 px-20 raleway'>
        <div className='w-full border-b-2 pb-7 mb-10 border-blue-500'>
            <h1 className='mt-16 md:-mt-3 text-[7.5vw] md:text-[3vw] leading-[5.5vw] md:leading-[3.5vw] font-bold text-white'>
                Best Projects
            </h1>
        </div>
        <div className='cards w-full flex gap-10'>
            <div className='card w-1/2 bg-blue-400 rounded-xl hover:scale-[0.98] transition ease-in-out duration-200 overflow-hidden'>
                <img src={hero4} alt="hero image" className='w-full h-full bg-contain'/>
            </div>
            <div className='card w-1/2 bg-blue-400 rounded-xl hover:scale-[0.98] transition ease-in-out duration-200 overflow-hidden'>
            <img src={hero5} alt="hero image" className='w-full h-full bg-contain'/>
            </div>
        </div>
    </div>
  )
}

export default Projects