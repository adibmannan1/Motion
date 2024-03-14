/* eslint-disable no-unused-vars */
import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-[75vh] px-6 md:px-20 flex flex-col md:flex-row gap-5 md:gap-10 mt-10 md:mt-24'>
        <div className="card-container w-full md:w-1/2 h-[60vh]">
            <div className='w-full bg-blue-800 rounded-xl h-full flex items-center justify-center'>
                <img className='w-20 md:w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            </div>
        </div>
        <div className="card-container w-full md:w-1/2 h-[60vh] flex flex-col md:flex-row gap-5 md:gap-10">
            <div className='md:w-1/2 bg-[#1c2231] rounded-xl h-full flex items-center justify-center'>
                <img className='w-20 md:w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            </div>
            <div className='md:w-1/2 bg-[#1c2231] rounded-xl h-full flex items-center justify-center'>
                <img className='w-20 md:w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Cards