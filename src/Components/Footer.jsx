import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#d2f801] mt-[100px] text-black flex  flex-row rounded-tr-[50px]">
        <div className="flex ml-[80px]  items-center justify-center">
        <img src="/logomark.png" className="h-[150px] w-[150px]" alt="Logo" />
        </div>
        {/* desc */}
        <div className="px-[120px] pt-[80px] pb-[40px] flex flex-row  ">
            {/* Courses */}
        <div className="">
            <h1 className="text-[24px] font-bold mb-[10px] mb-[10px]">Courses</h1>
            <ul className="space-y-[10px] text-[20px]" >
                <li>Graphics Design</li>
                <li>Ui/Ux</li>
                <li>Video Editing</li>
            </ul>
        </div>
        {/* Services */}
         <div className="ml-[80px]">
            <h1 className="text-[24px] font-bold mb-[10px]">Services</h1>
            <ul className="space-y-[10px] text-[20px]">
                <li>Digital marketing</li>
                <li>Branding</li>
                <li>Video Editing</li>
                <li>Logo Designing</li>
                <li>Social Media Handling</li>
                <li>Graphics Designing</li>
            </ul>
        </div>
        {/* About */}
        <div className="ml-[40px]">
            <h1 className="text-[24px] font-bold mb-[10px]" >About us</h1>
            <ul className="space-y-[10px] text-[20px]">
                <li>Contact Us</li>
                <li>privacy</li>
                <li>Terms</li>
            </ul>
        </div>
        {/* Social media */}
         <div className="ml-[80px]">
            <h1 className="text-[24px] font-bold mb-[10px]">Social Media</h1>
            <ul className="space-y-[10px] text-[20px]">
                <li className="flex flex-row gap-[14px]"> <img src="Instagram.png" alt="instagram" className="w-[24px] h-[24px] mt-[5px]" />Instagram</li>
                <li className="flex flex-row  gap-[14px]"><img src="FB.png" alt="FB" className="w-[24px] h-[24px]  mt-[5px]" />Facebook</li>
                <li className="flex flex-row gap-[14px]"><img src="LinkedIn.png" alt="Linkedin"className="w-[24px] h-[24px]  mt-[5px]" />Linkedin</li>
                <li className="flex flex-row gap-[14px]"><img src="Mail.png" alt="Mail"className="w-[24px] h-[24px]  mt-[5px]"  />Gmail</li>
                
            </ul>
        </div>
        </div>
        
    </footer>
  );
};

export default Footer;
