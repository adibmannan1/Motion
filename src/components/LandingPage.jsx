// eslint-disable-next-line no-unused-vars
import React from 'react'
import ImageSlider from './ImageSlider'

const LandingPage = () => {
    const motos = ["We Create", "Sites","That Shine"]
  return (
    <div className='flex pt-[2rem] justify-between items-center w-full h-screen bg-[#050711]'>
        <div className='textstructure px-20 mb-[25px]'>
            {motos.map((moto, index) => (
                <div key={index} className="masker">
                    <div className='w-fit flex items-end overflow-hidden'>
                        {index==1 && (<div className='mr-[1vw] rounded-sm sm:rounded-md w-[9vw] h-[5.5vw] bg-blue-500'>
                            
                        </div>)}
                        <h1 className='uppercase text-[20vw] md:text-[8.6vw] leading-[97px] founders_grotesk font-semibold'>{moto}</h1>
                    </div>
                </div>
            ))}
        </div>
        <div className='px-20'>
            {/* <ImageSlider/> */}
            <ImageSlider/>
        </div>
    </div>
  )
}

export default LandingPage