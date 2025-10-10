import React from "react";

const Banner = () => {
  return (
    <section className="relative bg-[#0367fc] px-6 sm:px-10 md:px-[120px] mt-[40px] md:mt-[160px]">
      <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between h-auto md:h-[336px]">
        {/* Heading */}
        <h1
          className="text-[#f7f7f7] leading-tight sm:leading-[60px] md:leading-[80px] lg:leading-[107px] 
                     text-[32px] sm:text-[48px] md:text-[72px] lg:text-[104px] font-black 
                     max-w-full md:max-w-[483px] text-center md:text-left"
        >
          Learning{" "}
          <span className="text-[#d2f801] block md:inline">
            Without Limits
          </span>
        </h1>

        {/* Banner Image */}
        <img
          src="/Banner.png"
          alt="Banner"
          className="mt-8 md:mt-0 relative md:absolute md:-top-[156px] md:right-0 
                     h-48 sm:h-72 md:h-[400px] lg:h-[492px] object-contain"
          
        />
      </div>
    </section>
  );
};

export default Banner;
