import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const Aboutscreen= () => {
  return (
    <section className="w-full">
      {/* Top Hero Section */}
        <Navbar />
      <div
        className="relative mt-[60px] px-[120px] w-full h-[400px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/abouthero.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-4xl px-6 md:px-16">
          <h3 className="text-[#d2f801] font-bold text-[40px] md:text-[40px] mb-2">
            ABOUT US
          </h3>
          <h1 className="text-2xl md:text-[48px] font-bold leading-snug text-white">
            Wellness Is the First Step <br /> to Real Productivity
          </h1>
          <p className="text-[16px] md:text-base mt-4 text-white max-w-xl">
            We are a transformative learning platform committed to helping
            individuals from all walks of life unlock their creative potential
          </p>
           <a href="https://forms.gle/b8emcBsY3ghZDZEW6" target="_blank" rel="noopener noreferrer" >
          <button  className="mt-6 bg-[#0367fc] hover:bg-[#0255d0] text-white w-[215px] h-[50px] font-bold py-2 px-6 rounded-lg cursor-pointer">
            Join With Us
          </button>
          </a>
        </div>
      </div>

      {/* Mission Section */}
      <div className=" flex flex-row px-[120px] mt-[90px] items-center">
        <img
          src="/mission.png"
          alt="Mission"
          
        />
        <div  className="ml-[170px]">
          <h2 className="text-[40px] font-bold mb-4">Our Mission</h2>
          <p className="text-[#0a0908] w-[480px] text-[20px] leading-relaxed">
            Our mission is to empower individuals regardless of background or
            experience to unlock their creative potential, develop strong media
            and communication skills, and confidently express their unique talents.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="  px-[120px] mt-[90px] flex flex-row  items-center">
        <div >
          <h2 className="text-[40px] font-bold mb-4">Our Vision</h2>
          <p className="text-[#0a0908] text-[20px] w-[480px] leading-relaxed">
            To become a transformative platform where every individual
            discovers their inner creativity, refines their media skills from
            the ground up, and grows into a confident, innovative voice that
            positively influences society.
          </p>
        </div>
        <img
          src="/vision.png"
          alt="Vision"
          className="ml-[120px]"
        />
      </div>
     <Footer />
    </section>
  );
};

export default Aboutscreen;
