/* eslint-disable no-unused-vars */
// import React from 'react'

// const Footer = () => {
//   return (
//     <div className='w-full h-[25vh] lg:h-[35vh] bg-blue-800 text-[#050711]'>
        
//     </div>
//   )
// }

// export default Footer

export default function Footer() {
  return (
    <footer
      className="w-full h-[20vh] lg:h-[30vh] bg-blue-800 text-[#050711] raleway text-[15px] lg:text-[20px] flex flex-col lg:flex-row justify-between py-7 px-6 lg:px-20 mt-10 lg:mt-0"
    >
      <div className="flex items-center mx-auto mt-2 lg:m-0">
        <img
          alt="Logo"
          height="32"
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          width="70"
        />
      </div>
      <div className="flex items-center justify-center space-x-4 order-3 text-center sm:order-2 sm:justify-start sm:space-x-2 sm:gap-4 lg:order-3 lg:justify-end">
        <a className="" href="#">
          Privacy
        </a>
        <a className="" href="#">
          Terms
        </a>
        <a className="" href="#">
          Contact
        </a>
        <a className="" href="#">
          Careers
        </a>
      </div>
      <div className="flex items-center justify-center space-x-2 order-2 sm:order-3 lg:order-2">
        <span className="neue_montreal">&copy; 2023 All rights reserved</span>
      </div>
    </footer>
  )
}


