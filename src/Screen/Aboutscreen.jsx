import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Aboutscreen = () => {
  return (
    <section className="w-full">
      {/* Top Hero Section */}
      <Navbar />
      <div
        className="relative mt-[60px] md:mt-[60px] px-6 md:px-[120px] w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/abouthero.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-4xl px-4 md:px-16  text-left">
          <h3 className="text-[#d2f801] font-bold text-[28px] md:text-[40px] mb-2">
            ABOUT US
          </h3>
          <h1 className="text-xl md:text-[48px] font-bold leading-snug text-white">
            Wellness Is the First Step <br className="hidden md:block" /> to Real
            Productivity
          </h1>
          <p className="text-[14px] md:text-base mt-4 text-white max-w-xl mx-auto md:mx-0">
            We are a transformative learning platform committed to helping
            individuals from all walks of life unlock their creative potential
          </p>
          <a
            href="https://forms.gle/b8emcBsY3ghZDZEW6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-6 bg-[#0367fc] hover:bg-[#0255d0]  text-[14px] md:text-[20px]  text-white w-[130px] md:w-[215px] h-[36px] md:h-[50px] font-bold rounded-lg cursor-pointer">
              Join With Us
            </button>
          </a>
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row px-6 md:px-[120px] mt-[60px] md:mt-[90px] items-center text-center md:text-left">
        <img
          src="/mission.png"
          alt="Mission"
          className="w-[280px] md:w-auto mx-auto md:mx-0"
        />
        <div className="mt-6 md:mt-0 md:ml-[170px]">
          <h2 className="text-[28px] md:text-[40px] font-bold mb-4">
            Our Mission
          </h2>
          <p className="text-[#0a0908] text-[16px] md:text-[20px] leading-relaxed max-w-[480px] mx-auto md:mx-0">
            Our mission is to empower individuals regardless of background or
            experience to unlock their creative potential, develop strong media
            and communication skills, and confidently express their unique
            talents.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col-reverse md:flex-row px-6 md:px-[120px] mt-[60px] md:mt-[90px] items-center text-center md:text-left">
        <div className="mt-6 md:mt-0">
          <h2 className="text-[28px] md:text-[40px] font-bold mb-4">
            Our Vision
          </h2>
          <p className="text-[#0a0908] text-[16px] md:text-[20px] leading-relaxed max-w-[480px] mx-auto md:mx-0">
            To become a transformative platform where every individual discovers
            their inner creativity, refines their media skills from the ground
            up, and grows into a confident, innovative voice that positively
            influences society.
          </p>
        </div>
        <img
          src="/vision.png"
          alt="Vision"
          className="w-[280px] md:w-auto mx-auto md:ml-[120px]"
        />
      </div>

      <Footer />
    </section>
  );
};

export default Aboutscreen;
