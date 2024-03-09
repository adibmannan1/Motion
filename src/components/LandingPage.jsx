// eslint-disable-next-line no-unused-vars
import React from 'react'
import ImageSlider from './ImageSlider'

const LandingPage = () => {
    const motos = ["We Create", "Sites That","Shine"]
  return (
    <div className='flex flex-col md:flex-row pt-9 pb-14 md:pb-0 md:px-20 justify-between items-center w-full md:h-screen bg-[#050711]'>
        <div className='pt-24 md:pt-0 mb-[25px]'>
            {motos.map((moto, index) => (
                <div key={index} className="masker">
                    <div className='w-fit flex items-end overflow-hidden'>
                        {index==2 && (<div className='mr-[3.5vw] md:mr-[1vw] rounded-[4px] md:rounded-md w-[23vw] md:w-[11vw] h-[13.4vw] md:h-[5.5vw] bg-blue-500'>
                            
                        </div>)}
                        <h1 className='uppercase text-[20vw] md:text-[8.6vw] leading-[60px] md:leading-[97px] founders_grotesk font-semibold'>{moto}</h1>
                    </div>
                </div>
            ))}
        </div>
        <div className='hidden md:block'>
            <ImageSlider/>
        </div>
    </div>
  )
}

export default LandingPage