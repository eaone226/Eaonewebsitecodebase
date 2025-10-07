import React from "react";
import Navbar from "../Components/Navbar"
import Mapscreen from "../Components/Mapscreen";
import Footer from "../Components/Footer"
import ContactForm from "../Components/contactform";
const Contactscreen = () =>{
  const text = encodeURIComponent("Hello, I want to register to the course.");
     return(
          <div>
        <Navbar />
        
       <img
          src="/contacts.png"
          alt="Contact Support"
          className="w-full h-[300px] md:h-auto object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0a0908]/70 h-[300px] md:h-[378px]"></div>

     

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-start text-center text-[#f7f7f7]">
        <h1 className="text-3xl md:text-[80px] mt-[80px] font-bold">Contact us</h1>
        <p className="mt-3 max-w-2xl text-sm md:text-lg px-4">
          Initiate a professional conversation with our team. We’re ready to assist with 
          your branding, digital, and creative needs.
        </p>
      </div>

      {/* contact box */}
      
      <div className=" bg-[#f7f7f7] z-10 inset-0 mt-[800px] md:mt-[300px]  md:pl-[94px] absolute md:w-[1040px] mx-[20px] md:mx-[110px]   md:rounded-[30px] shadow-lg md:h-[708px] flex flex-col md:flex-row justify-center"  >
        <div className="bg-[#f7f7f7] border-4 border-[#0a0908]/10 md:border-none border-b-0 rounded-t-[10px]  md:bg-[#f7f7f7] md:bg-transparent">
        <h1 className="text-[#0367fc] text-center text-[30px] md:text-[40px] mt-[30px] mb-2 font-bold">Get in Touch</h1>
        <p className="md:w-[354px] ml-4 md:ml-0 text-[14px] md:text-[20px]">We're always happy to hear from you. Whether you have a question, feedback feel free to ask.</p>
           {/* Head Office */}
           <a href="#Map" cursor="pointer">
        <div className="flex gap-4 items-start ml-5 md:ml-0 mt-[20px]">
          <img src="/Location.png" alt="location" className=" w-[50px] h-[50px] md:w-[60px] mt-2 md:h-[60px]" />
          <div>
            <h3 className="font-bold text-[16px] md:text-[20px] ">Head Office</h3>
            <p className="text-[14px] md:text-[16px]">
              Natesan street, <br />
              Karapakkam chennai 600097
            </p>
          </div>
          </div>
          </a>
          {/* Email */}
          <a href="mailto:ecia4website@gmail.com?subject=Course%20Registration%20Query&body=Hello,%20I%20have%20a%20question%20about%20the%20course." cursor="pointer">
          <div className="flex gap-4 items-start  ml-5 md:ml-0 mt-[20px]">
          <img src="/Mail.png" alt="Email" className="w-[50px] h-[50px] md:w-[60px] mt-2 md:h-[60px]" />
          <div>
            <h3 className="font-bold text-[16px] md:text-[20px]  mt-[5px]">Email Us</h3>
            <p className="text-[14px] md:text-[16px]">
             ecia4you@gmail.com
            </p>
          </div>
          </div>
          </a>
          {/* Call */}
          <a href="tel:+919159873818" cursor="pointer">
          <div className="flex gap-4  ml-5 md:ml-0 items-start mt-[20px]">
          <img src="/call.png" alt="call" className="w-[50px] h-[50px] md:w-[60px] mt-2 md:h-[60px]" />
          <div>
            <h3 className="font-bold text-[16px] md:text-[20px]  mt-[5px]">Call Us</h3>
            <p className="text-[14px] md:text-[16px]">
             +91 9994508321
            </p>
          </div>
          </div>
          </a>
          {/* Divider */}
      <div className="border-t border-[#0a0908]/30 w-[295px] ml-2 md:ml-0   mt-[50px]"></div>
       {/* Title */}
      <h3 className="font-bold mb-2 md:mb-4 mt-[20px] text-[20px] ml-[45px] md:ml-0 md:text-[24px] mx-[15px]">Follow our social media</h3>

      {/* Icons */}
      <div className="flex flex-row md:gap-1 mb-5 md:mb-0 ml-[50px] md:ml-[20px]">
      <div className=" text-white">
       <a
  href={`https://wa.me/919994508321?text=${text}`}
  target="_blank"
  rel="noopener noreferrer"
  style={{ cursor: "pointer" }}
>
 
          <img src="Whatsapp.png" alt="whatsapp" className=" h-[40px] md:h-[40px] " />
        </a>
      </div>
       <div className=" text-white">
        <a
          href="#"
       
        >
          <img src="LinkedIn.png" alt="LinkedIn" className=" h-[40px] md:h-[40px] ml-4" />
        </a>
      </div>
       <div className=" text-white">
        <a
          href="https://www.facebook.com/profile.php?id=61577226543640&mibextid=rS40aB7S9Ucbxw6v"
       
        >
          <img src="FB.png" alt="fb" className=" h-[40px] md:h-[40px] ml-4" />
        </a>
      </div>
       <div className=" text-white">
        <a
          href="#"
       
        >
          <img src="Instagram.png" alt="whatsapp" className=" h-[40px] md:h-[40px] ml-4" />
        </a>
        </div>
      </div>
      </div>
      {/* Form */}
       <ContactForm />
      </div>
      <div>
        <h1  className=" text-[40px] md:text-[40px] text-[#0367fc] mt-[1140px] md:mt-[580px] text-center font-bold mb-[50px] md:mt-[670px]">Location</h1>
       <Mapscreen />
       </div>
       <Footer />
      </div>
     )
}
export default Contactscreen;