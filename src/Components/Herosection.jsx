import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

const Herosection = () => {
  return (
    <section className="h-[598px] w-full px-[120px] mt-15 bg-gradient-to-b from-[#0367FC]/30 to-[#F7F7F7]/30 font-family-inter ">
        <div className="flex flex-row">
        <div>
            <p className="text-[20px] pt-[127px]">Welcome to the</p>
            <h1 className="text-[64px] w-[422px] text-[#0367fc]  leading-[1.2] font-black" >Beginning of <span className="text-[#0367fc] italic font-black">change.</span></h1>
            <p className="w-[486px] text-[20px] mt-[24px]">Empowering your future through practical learning. Discover courses that match your career goals.</p>
            <div className="flex flex-row gap-[20px]">
               <button className="bg-[#0367fc] mt-[63px] w-[245px] h-[60px] rounded-[14px] text-[#f7f7f7] text-[24px] font-bold flex items-center justify-center gap-2 hover:bg-[#d2f801] hover:text-[#0367fc]">Join Course <ChevronRight className="mt-1" size={30} /></button>
               <a
                 href="/contact"
                 className="border border-[#0367fc] mt-[63px] w-[214px] pl-2 h-[60px] rounded-[14px] text-[#0367fc] text-[24px] font-bold flex items-center justify-center hover:bg-[#d2f801] gap-2"
                 style={{ textDecoration: 'none' }}
               >
                 Enquire now<ChevronRight className="mt-1" size={30} />
               </a>
            </div>
        </div>
        <img src="Hero.png" alt="Hero"  className="w-[395px] ml-[138px] h-[518px] mt-[20px]"/>
        </div>
    
    </section>
  );
};

export default Herosection;
