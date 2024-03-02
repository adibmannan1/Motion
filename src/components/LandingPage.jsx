// eslint-disable-next-line no-unused-vars
import React from 'react'
import ImageSlider from './ImageSlider'

const LandingPage = () => {
    const motos = ["We Create", "Websites That", "Breathe"]
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-48 px-20'>
            {motos.map((moto, index) => (
                <div key={index} className="masker">
                    <div className='w-fit flex items-end overflow-hidden'>
                        {index==2 && (<div className='mr-[1vw] rounded-sm sm:rounded-md w-[8vw] h-[5.5vw] bg-green-500'>
                            
                        </div>)}
                        <h1 className='uppercase text-[20vw] md:text-[8.6vw] leading-[6.5vw] founders_grotesk font-semibold'>{moto}</h1>
                    </div>
                </div>
            ))}
        </div>
        <div>
            <ImageSlider/>
        </div>
    </div>
  )
}

export default LandingPage