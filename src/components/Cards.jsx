/* eslint-disable no-unused-vars */
import React from 'react'
import motionlogo from '../images/motionlogo.svg'
import badgelogo from '../images/badgelogo.svg'
import soralogo from '../images/soralogo.svg'

const Cards = () => {
  return (
    <div className='w-full lg:h-[75vh] px-6 lg:px-20 flex flex-col lg:flex-row gap-5 lg:gap-10 mt-10 lg:mt-24' id='cards'>
        <div className="card-container w-full lg:w-1/2 lg:h-[60vh] cursor-pointer">
            <a href="https://www.usemotion.com/" target='_blank'>
                <div className='w-full bg-transparent border-4 border-blue-800 rounded-xl flex items-center justify-center relative min-h-[300px] lg:h-full'>
                    <img className='w-20 lg:w-32 mb-6' src={motionlogo} alt="" />
                    <button className='absolute left-4 bottom-4 lg:left-10 lg:bottom-6 right-10 lg:right-auto px-4 lg:px-7 py-2 border-[3px] rounded-full neue_montreal font-medium tracking-widest'>
                        &copy; 2024 All Rights Reserved
                    </button>
                </div>
            </a>
        </div>
        <div className="card-container w-full lg:w-1/2 lg:h-[60vh] flex flex-col lg:flex-row gap-5 lg:gap-10 cursor-pointer">
            <a href='https://openai.com/sora' target='_blank' className='lg:w-1/2 bg-[#1c2231] rounded-xl flex items-center justify-center relative min-h-[300px]'>
                <img className='w-20 lg:w-32 mb-6' src={soralogo} alt="" />
                <button className='absolute left-4 bottom-4 lg:left-10 lg:bottom-6 px-5 lg:px-7 py-2 border-[3px] rounded-full neue_montreal font-medium tracking-widest'>
                    Best Ai Software
                </button>
            </a>
            <a href='https://en.wikipedia.org/wiki/New_York_(state)' target='_blank' className='lg:w-1/2 bg-[#1c2231] rounded-xl flex items-center justify-center relative min-h-[300px] cursor-pointer'>
                <img className='w-20 lg:w-32 mb-6' src={badgelogo} alt="" />
                <button className='absolute left-4 bottom-4 lg:left-10 lg:bottom-6 px-5 lg:px-7 py-2 border-[3px] rounded-full neue_montreal font-medium tracking-widest'>
                    Quality Education
                </button>
            </a>
        </div>
    </div>
  )
}

export default Cards