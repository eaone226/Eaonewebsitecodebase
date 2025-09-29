import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#d2f801] mt-[100px] text-black flex flex-row rounded-tr-[50px]">
      {/* Logo */}
      <div className="flex ml-[80px] items-center justify-center">
        <img src="/logomark.png" className="h-[150px] w-[150px]" alt="Logo" />
      </div>

      {/* Footer Content */}
      <div className="px-[120px] pt-[80px] pb-[40px] flex flex-row">
        {/* Courses */}
        <div>
          <h1 className="text-[24px] font-bold mb-[10px]">Courses</h1>
          <ul className="space-y-[10px] text-[20px]">
            <li>Graphics Design</li>
            <li>UI/UX</li>
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
          <h1 className="text-[24px] font-bold mb-[10px]">About us</h1>
          <ul className="space-y-[10px] text-[20px]">
            <li>Contact Us</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="ml-[80px]">
          <h1 className="text-[24px] font-bold mb-[10px]">Social Media</h1>
          <ul className="space-y-[10px] text-[20px]">
            
            <li className="flex items-center gap-[14px]">
              
              <img
                src="/Instagram.png"
                alt="Instagram"
                className="w-[24px] h-[24px]"sk
              />
              <a href="https://www.instagram.com/ecia.4you/?igsh=MXEycXZsZTA2bjRscQ%3D%3D#" className="hover:text-[#0367fc]" target="_blank" rel="noopener noreferrer">
              Instagram
              </a>
            </li>
         
            <li className="flex items-center gap-[14px]">
              <img src="/FB.png" alt="Facebook" className="w-[24px] h-[24px]" />
              Facebook
            </li>
            <li className="flex items-center gap-[14px]">
              <img
                src="/LinkedIn.png"
                alt="LinkedIn"
                className="w-[24px] h-[24px]"
              />
              LinkedIn
            </li>
            <li className="flex items-center gap-[14px]">
              <img src="/Mail.png" alt="Mail" className="w-[24px] h-[24px]" />
               <a href="mailto:eciainwebsite@gmail.com?subject=Course%20Registration%20Query&body=Hello,%20I%20have%20a%20question%20about%20the%20course." cursor="pointer" className="hover:text-[#0367fc]" target="_blank" rel="noopener noreferrer">
          
              Gmail
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
