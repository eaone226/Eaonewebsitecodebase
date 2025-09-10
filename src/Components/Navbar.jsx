import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="bg-[#0367fc] px-[120px] h-[62px] w-full fixed top-0 left-0  z-50">
      <div className="flex justify-between items-center h-full">   
       {/* Image Container */}
      <div className="relative w-[100px] h-[64px] cursor-pointer">
  {/* White logo (default) */}
  <img
    src="Ecialogo-white.png"
    alt="Ecialogo"
    className="absolute inset-0 w-[100px] h-[64px] transition-opacity duration-300 opacity-100 hover:opacity-0"
  />

  {/* Yellow logo (shows on hover) */}
  <img
    src="Ecialogo-yellow.png"
    alt="Ecialogo"
    className="absolute inset-0 w-[100px] h-[64px] opacity-0 hover:opacity-100 transition-opacity duration-300"
  />
</div>

        {/* Links */}
        <div className="flex items-center space-x-[22px]">
          {window.location.pathname === '/' ? (
            <span
              className="text-[#F7F7F7] font-bold hover:text-[#d2f801] text-[16px] cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Home
            </span>
          ) : (
            <RouterLink to="/" className="text-[#F7F7F7] font-bold hover:text-[#d2f801] text-[16px]">Home</RouterLink>
          )}
          {window.location.pathname === '/' ? (
            <ScrollLink to="course" smooth={true} offset={-62} duration={500} className="text-[#F7F7F7] font-bold hover:text-[#d2f801] text-[16px] cursor-pointer">Courses</ScrollLink>
          ) : (
            <RouterLink to="/#course" className="text-[#F7F7F7] font-bold hover:text-[#d2f801] text-[16px]">Courses</RouterLink>
          )}
          {window.location.pathname === '/' ? (
            <ScrollLink to="service" smooth={true} offset={-62} duration={500} className="text-[#F7F7F7] font-bold hover:text-[#d2f801] text-[16px] cursor-pointer">Sevices</ScrollLink>
          ) : (
            <RouterLink to="/#service" className="text-[#F7F7F7] font-bold hover:text-[#d2f801] text-[16px]">Sevices</RouterLink>
          )}
          <RouterLink to="/about" className="text-[#F7F7F7] font-bold hover:text-[#d2f801] text-[16px]">About</RouterLink>
          <RouterLink to="/contact" className="text-[#F7F7F7] font-bold hover:text-[#d2f801] text-[16px]">Contact</RouterLink>

          {/* Button */}

          <button className="
          font-bold border 
          border-[#f7f7f7] 
          rounded-[4px] text-[20px] 
          h-[34px] w-[157px] 
          hover:bg-[#f7f7f7] 
          hover:text-[#0367fc] h-[34]
           flex items-center justify-center 
           text-[#f7f7f7] cursor-pointer">For Business</button>
        </div>
      </div>  
    </nav>
  )
}

export default Navbar;