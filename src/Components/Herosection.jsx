import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

const Herosection = () => {
  return (
    <section className="h-[598px] w-full px-[20px] md:px-[120px] mt-15 bg-gradient-to-b from-[#0367FC]/30 to-[#F7F7F7]/30 font-family-inter">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Left Content */}
        <div className=" sm:text-center md:text-left">
          <p className="text-[18px]  md:text-[20px] pt-[40px] md:pt-[127px]">
            Welcome to the
          </p>
          <h1 className="text-[36px] md:text-[64px] max-w-[422px] text-[#0367fc] leading-[1.2] font-black mx-auto md:mx-0">
            Beginning of{" "}
            <span className="text-[#0367fc] italic font-black">change.</span>
          </h1>
          <p className="max-w-[486px] text-[16px] md:text-[20px] mt-[16px] md:mt-[24px] mx-auto md:mx-0">
            Empowering your future through practical learning. Discover courses
            that match your career goals.
          </p>

          {/* Buttons */}
          <div className="flex sm:flex-row gap-[20px] mt-[30px] md:mt-[63px] justify-center md:justify-start">
            <a
              href="https://forms.gle/b8emcBsY3ghZDZEW6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#0367fc] w-[150px]  md:w-[245px]  h-[50px] md:h-[60px] rounded-[14px] text-[#f7f7f7] text-[16px] md:text-[24px] font-bold flex items-center justify-center gap-2 hover:bg-[#d2f801] hover:text-[#0367fc] cursor-pointer">
                Join Course <ChevronRight className="mt-1" size={20} />
              </button>
            </a>
            <a
              href="/contact"
              className="border border-[#0367fc] w-[150px] md:w-[214px] h-[50px] md:h-[60px] rounded-[14px] text-[#0367fc] text-[16px] md:text-[24px] font-bold flex items-center justify-center hover:bg-[#d2f801] gap-2 mx-auto md:mx-0"
              style={{ textDecoration: "none" }}
            >
              Enquire now <ChevronRight className="mt-1" size={20} />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <img
          src="Hero.png"
          alt="Hero"
          className="w-[200px] sm:w-[300px] md:w-[395px] md:ml-[138px] h-auto md:h-[518px] mt-[30px] md:mt-[20px]"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Herosection;
