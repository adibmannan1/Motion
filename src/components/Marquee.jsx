// eslint-disable-next-line no-unused-vars
import React from 'react'
import { motion } from "framer-motion"

const Marquee = () => {
  return (
    <div className='w-full py-10 md:py-16 rounded-tl-3xl rounded-tr-3xl bg-blue-800'>
        <div className="text border-t-2 border-b-2 border-[#050711] flex whitespace-nowrap overflow-hidden uppercase tracking-tight md:tracking-[3px]">
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{duration: 10, repeat: Infinity, ease: "linear"}} className='text-[25vw] -mt-3 md:-mt-14 md:-mb-6 leading-none founders_grotesk font-semibold'>Move N Flow</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{duration: 10, repeat: Infinity, ease: "linear"}} className='text-[25vw] -mt-3 md:-mt-14 md:-mb-6 leading-none founders_grotesk font-semibold'>Move N Flow</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{duration: 10, repeat: Infinity, ease: "linear"}} className='text-[25vw] -mt-3 md:-mt-14 md:-mb-6 leading-none founders_grotesk font-semibold'>Move N Flow</motion.h1>
        </div>
    </div>
  )
}

export default Marquee