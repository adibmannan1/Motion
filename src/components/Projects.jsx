/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import hero1 from '../images/hero1.png'
import hero3 from '../images/hero3.png'
import hero5 from '../images/hero5.png'
import hero4 from '../images/hero4.png'
import { easeInOut, motion, useAnimation } from 'framer-motion'
import { Power4 } from 'gsap'

const Projects = () => {
    const [hovering, setHovering] = useState(false)
    const cardData = [
        { image: hero4, text: 'Collecta' },
        { image: hero5, text: 'Offshore' },
        { image: hero1, text: 'Contracted' },
        { image: hero3, text: 'Mandi' }
      ];

    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()]

  return (
    <div className='w-full py-0 lg:py-10 px-6 lg:px-20 raleway' id='projects'>
        <div className='w-full border-b-2 pb-2 lg:pb-7 mb-6 lg:mb-10 border-blue-500'>
            <h1 className='mt-16 lg:-mt-3 text-[7.5vw] lg:text-[3vw] leading-[5.5vw] lg:leading-[3.5vw] font-bold text-white'>
                Best Projects
            </h1>
        </div>


        <div className='cards w-full grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10'>
        {cardData.map((item, index) => (
            <motion.div onHoverStart={()=> cards[index].start({y: "0"})} key={index} onHoverEnd={()=> cards[index].start({y: "100%"})} className="cardcontainer relative">
                <h1 className={`hidden lg:flex absolute ${index % 2 === 0 ? 'left-full -translate-x-1/2' : 'right-full translate-x-1/2'} top-1/2 -translate-y-1/2 z-10 text-7xl founders_grotesk uppercase text-blue-700 lg:leading-[54px] overflow-hidden`}>
                    {item.text.split('').map((letter, letterIndex) => (
                    <motion.span 
                        initial={{y:"100%"}} 
                        animate={cards[index]}  
                        transition={{ease: [0.87, 0, 0.13, 1], delay: letterIndex*0.02}}
                        key={letterIndex} 
                        className='inline-block'>{letter}</motion.span>
                    ))}
                </h1>

                <div className='card rounded-xl hover:scale-[0.98] transition ease-in-out duration-200 overflow-hidden relative'>
                    <img src={item.image} alt="hero image" className='w-full h-full bg-contain' />
                </div>
            </motion.div>
        ))}
        </div>

    </div>
  )
}

export default Projects