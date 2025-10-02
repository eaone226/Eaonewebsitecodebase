import React from "react";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";
import WhyChooseUs from "../Components/why";
import { FaEnvelope } from "react-icons/fa";
import Footer from "../Components/Footer";
const Businessscreen =()=>{
  
    return(
       <div>
        {/* Navbar section */}
        <Navbar />
        <div
        className="relative mt-[60px] md:mt-[60px] px-6 md:px-[120px] w-full h-[300px] md:h-[455px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/Businesshero.png')" }}
        >

        {/* Text Content */}
        <div className="relative z-10  text-left">
          <p className="text-[20px] md:text-[32px] font-bold  leading-[0.5]  text-[#f7f7f7]">
           We are here to help you!
          </p>
            <h1 className="text-[20px] md:text-[64px] font-bold text-[#D2F801]">
           Welcome to EAone
          </h1>
          <p className="text-[24px]  ml-3 text-white w-[531px] ">
           Transforming Ideas into Brands with Lasting Impact.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-10 ml-3 bg-[#f7f7f7] hover:bg-[#0255d0]  text-[14px] md:text-[20px]  text-center text-[#0367fc] hover:text-[#f7f7f7] w-[130px] md:w-[215px] h-[36px] md:h-[50px] font-bold rounded-lg cursor-pointer">
              Get Started
            </button>
          </a>
        </div>
      </div>

      {/* Services */}
      <Services />

      {/* Our expert Team */}
      <div className=" mt-[80px] px-6 md:px-[120px]">
         <h1 className="text-[36px] font-bold text-center ">Our Experienced Team</h1>
      <div className="flex flex-row  mt-[40px]">
        <p className="text-[26px] w-[576px]">We offer complete digital solutions from branding,logo design,social media handling, video editing to effective digital marketing strategies.Our services help businesses build strong identities,engage audiences,and drive lasting growth.</p>
        <img src="/expert.png" alt="expert" />
       </div>
       </div>
       {/* why choose us  */}
        <WhyChooseUs />

        {/* Testimonials */}
        <div className=" px-[120px] mb-[200px]  mt-[80px] ">
      {/* Section Heading */}
      <h2 className="text-[36px] relative font-bold  mb-[40px] ">Client Testimonials</h2>

      {/* Main Card with Rocket BG */}
       <img src="/rocket.png" alt="rocket"
       className="absolute top-[2786px] right-5 "
       />
     <div >

      <div className="relative bg-[#0a0908]/5 h-[329px] flex flex-col  w-full text-center ">
        {/* Content */}
        <h3 className="text-[20px] md:text-[48px] mt-[20px] font-bold text-[#0367fc] mb-4">
          Ready to Start Our Project ?
        </h3>
        <p className=" mb-6 w-[620px] text-[20px]  text-left ml-[203px]">
          With all plans in place, we are ready to officially launch our project.
          We are excited to begin our collaboration and work towards a successful
          outcome.
        </p>
        <button className="w-[196px] h-[58px] bg-[#0367fc] text-[20px] hover:bg-[#0367fc]/60 text-[#f7f7f7] font-bold rounded-[10px] flex items-center text-[24px] justify-center mt-[10px] ml-[203px] cursor-pointer">
          Our Project
        </button>
      </div>
     
      {/* Newsletter Section */}
      <div className="text-center py-12 relative">
        <h3 className="text-[40px] font-bold mb-2">Never Miss An Opportunity</h3>
        <p className=" mb-6 text-[20px]">
          Get in touch with us for queries, support, or collaboration
        </p>

        {/* Input Field */}
        <div className="flex justify-center">
       <div className="flex items-center h-[70px] w-[630px] bg-[#f7f7f7] border border-[#0367fc] rounded-[10px] overflow-hidden ">
        <input
             type="email"
             placeholder="Enter your mail address"
             className="flex-grow px-4 text-[#0a0908]/80 placeholder-[#0a0908]/50 focus:outline-none"
        />
        <button className="flex items-center justify-center h-full w-[70px] bg-[#0367fc] text-white">
          <FaEnvelope size={24} className="cursor-pointer" />
        </button>
      </div>

      </div>
      </div>
       </div>
    </div>
    <Footer />
       </div>
    )
}
export default Businessscreen;