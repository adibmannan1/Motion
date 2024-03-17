/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import design from '../images/design.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Eyes = () => {
  const [rotate, setRotate] = useState(0)

  useEffect(() => {
    window.addEventListener('mousemove', (e)=>{
      const mouseX = e.clientX
      const mouseY = e.clientY

      const deltaX = mouseX - window.innerWidth / 2
      const deltaY = mouseY - window.innerHeight / 2

      const degree = (Math.atan2(deltaY, deltaX) * (180 / Math.PI))-180
      setRotate(degree)
    })
  }, [])


  return (
    <div className='w-full lg:h-screen py-7 lg:py-0 flex items-center justify-center overflow-hidden'>
        <div data-scroll data-scroll-speed="-0.6" className='w-[75%] box-shadow relative'>
          <img src={design} alt="design"/>
          <div className='absolute top-4 lg:top-[40%] left-1/2 -translate-x-1/2 lg:-translate-y-1/2 flex gap-24'>
            <div className='flex lg:items-center justify-center w-[14vw] h-[14vw] bg-white border-[4px] lg:border-[13px] border-[#BBDEFB]  rounded-full box-shadow2'>
              <div className='relative w-2/3 h-2/3 mr-2 mt-1 lg:mr-0 lg:mt-0 bg-[#050711] rounded-full'>
                <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='w-full h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <div className='w-[15px] h-[15px] lg:w-[32px] lg:h-[32px] mr-4 mt-1 lg:mr-0 lg:mt-0 bg-white rounded-full'>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex lg:items-center justify-center w-[14vw] h-[14vw] bg-white border-[4px] lg:border-[13px] border-[#BBDEFB]  rounded-full box-shadow2'>
              <div className='relative w-2/3 h-2/3 mr-2 mt-1 lg:mr-0 lg:mt-0 bg-[#050711] rounded-full'>
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='w-full h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <div className='w-[15px] h-[15px] lg:w-[32px] lg:h-[32px] mr-4 mt-1 lg:mr-0 lg:mt-0 bg-white rounded-full'>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute bottom-[15%] left-1/2 -translate-x-1/2'>
          <AnchorLink href="#projects"><button type="button" className="rounded-full bg-[#050711]  text-center  text-[#559fff] text-[12px] lg:text-[22px] font-bold uppercase raleway lg:py-3 lg:px-14 px-5">
              Projects
            </button>
            </AnchorLink>
          </div>
        </div>
    </div>  
  )
}

export default Eyes