// eslint-disable-next-line no-unused-vars
import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  return (
    <div className="fixed z-[999] w-full px-20 py-3 lg:py-1 flex justify-between items-center backdrop-blur-3xl raleway">
        <div className="logo text-[6vw] md:text-[2vw] font-bold">
          Motion
        </div>
        <div className='hidden lg:flex'>
          <div className="header flex cursor-pointer">
              <ul className='menu'>
                {[
                  { name: "Home", id: "home" },
                  { name: "About", id: "about" },
                  { name: "Projects", id: "projects" },
                  { name: "Insights", id: "cards" },
                  { name: "Contact Us", id: "footer" }

                  ].map((link, index) => (
                    <li key={index} className={`raleway text-lg capitalize font-semibold ${index===4 && 'ml-32'}`}><AnchorLink href={`#${link.id}`}>{link.name}</AnchorLink></li>
                ))}
              </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar