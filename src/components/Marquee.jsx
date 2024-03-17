// eslint-disable-next-line no-unused-vars
import React from 'react'
import { motion } from "framer-motion"

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.2" className='w-full py-10 lg:py-16 rounded-tl-3xl rounded-tr-3xl bg-blue-800'>
        <div className="text border-t-2 border-b-2 border-[#050711] flex whitespace-nowrap overflow-hidden uppercase tracking-tight lg:tracking-[3px]">
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{duration: 10, repeat: Infinity, ease: "linear"}} className='text-[25vw] -mt-3 lg:-mt-14 lg:-mb-6 leading-none founders_grotesk font-semibold'>Move N Flow</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{duration: 10, repeat: Infinity, ease: "linear"}} className='text-[25vw] -mt-3 lg:-mt-14 lg:-mb-6 leading-none founders_grotesk font-semibold'>Move N Flow</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{duration: 10, repeat: Infinity, ease: "linear"}} className='text-[25vw] -mt-3 lg:-mt-14 lg:-mb-6 leading-none founders_grotesk font-semibold'>Move N Flow</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{duration: 10, repeat: Infinity, ease: "linear"}} className='text-[25vw] -mt-3 lg:-mt-14 lg:-mb-6 leading-none founders_grotesk font-semibold'>Move N Flow</motion.h1>
        </div>
    </div>
  )
}

export default Marquee