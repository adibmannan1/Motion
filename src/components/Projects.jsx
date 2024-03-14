/* eslint-disable no-unused-vars */
import React from 'react'
import hero1 from '../images/hero1.png'
import hero3 from '../images/hero3.png'
import hero5 from '../images/hero5.png'
import hero4 from '../images/hero4.png'

const Projects = () => {
  return (
    <div className='w-full py-0 md:py-10 px-6 md:px-20 raleway'>
        <div className='w-full border-b-2 pb-2 md:pb-7 mb-6 md:mb-10 border-blue-500'>
            <h1 className='mt-16 md:-mt-3 text-[7.5vw] md:text-[3vw] leading-[5.5vw] md:leading-[3.5vw] font-bold text-white'>
                Best Projects
            </h1>
        </div>
        <div className='cards w-full grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10'>

            <div className="cardcontainer relative">
                <h1 className='hidden md:flex absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-7xl founders_grotesk uppercase text-blue-700 md:leading-[54px]'>{'Collecta'.split('').map((letter, index) => <span key={index}>{letter}</span>)}</h1>
                <div className='card rounded-xl hover:scale-[0.98] transition ease-in-out duration-200 overflow-hidden relative'>
                    <img src={hero4} alt="hero image" className='w-full h-full bg-contain'/>
                </div>
            </div>

            <div className="cardcontainer relative">
                <h1 className='hidden md:flex absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-7xl founders_grotesk uppercase text-blue-700 md:leading-[54px]'>{'Offshore'.split('').map((letter, index) => <span key={index}>{letter}</span>)}</h1>
                <div className='card rounded-xl hover:scale-[0.98] transition ease-in-out duration-200 overflow-hidden relative'>
                    <img src={hero5} alt="hero image" className='w-full h-full bg-contain'/>
                </div>
            </div>

            <div className="cardcontainer relative">
                <h1 className='hidden md:flex absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-7xl founders_grotesk uppercase text-blue-700 md:leading-[54px]'>{'Collecta'.split('').map((letter, index) => <span key={index}>{letter}</span>)}</h1>
                <div className='card rounded-xl hover:scale-[0.98] transition ease-in-out duration-200 overflow-hidden relative'>
                    <img src={hero4} alt="hero image" className='w-full h-full bg-contain'/>
                </div>
            </div>

            <div className="cardcontainer relative">
                <h1 className='hidden md:flex absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-7xl founders_grotesk uppercase text-blue-700 md:leading-[54px]'>{'Offshore'.split('').map((letter, index) => <span key={index}>{letter}</span>)}</h1>
                <div className='card rounded-xl hover:scale-[0.98] transition ease-in-out duration-200 overflow-hidden relative'>
                    <img src={hero5} alt="hero image" className='w-full h-full bg-contain'/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Projects