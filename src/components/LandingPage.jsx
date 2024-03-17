// eslint-disable-next-line no-unused-vars
import React from 'react'
import ImageSlider from './ImageSlider'
import { motion } from 'framer-motion'
import image from '../images/image.png'

const LandingPage = () => {

    const motos = ["We Create", "Sites That","Shine"]
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='flex flex-col lg:flex-row pt-9 pb-14 lg:pb-0 lg:px-20 justify-between items-center w-full lg:h-screen bg-[#050711]' id='home'>
        <div className='pt-24 lg:pt-0 mb-[25px]'>
            {motos.map((moto, index) => (
                <div key={index} className="masker">
                    <div className='w-fit flex items-end overflow-hidden'>
                        {index==2 && (
                        <motion.div initial={{width: 0, opacity: 0}} animate={{width: 130, opacity: 1}} transition={{ease: [0.76, 0, 0.24, 1] , duration: 1.2}}
                        className='mr-[3.5vw] lg:mr-[1vw] rounded-[4px] lg:rounded-md w-[23vw] lg:w-[11vw] h-[13.4vw] lg:h-[5.5vw] overflow-hidden'>
                            <img src={image} alt="" />
                        </motion.div>)}
                        <h1 className='uppercase text-[20vw] lg:text-[8.6vw] leading-[60px] lg:leading-[97px] founders_grotesk font-semibold'>{moto}</h1>
                    </div>
                </div>
            ))}
        </div>
        <div className='hidden lg:block'>
            <ImageSlider/>
        </div>
    </div>
  )
}

export default LandingPage