import React from "react";

export default function WhyChooseUs() {
  const items = [
    {
      title: "Creative Excellence",
      text: "Professional designs, videos, and branding that make your vision stand out.",
    },
    {
      title: "Innovative Solution",
      text: "Fresh, modern ideas tailored to your brand and audience.",
    },
    {
      title: "Personalized Approach",
      text: "Every project is unique, crafted to fit your specific goals.",
    },
    {
      title: "Affordable & Scalable",
      text: "Quality services at fair prices, designed to grow with you.",
    },
    {
      title: "Complete Solution",
      text: "From branding to social media strategy, we are your one-stop partner.",
    },
    {
      title: "Driven by impact",
      text: "Passionate about creativity, innovation, and community empowerment.",
    },
  ];

  return (
    <div className="mx-4 sm:mx-6 md:mx-[120px] mt-[80px]">
      <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-center py-6 sm:py-8">
        Why Choose Us?
      </h2>

      {/* Main flex container */}
      <div className="flex flex-col md:flex-row border-[5px] border-[#0a0908]/10 rounded-[35px]">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 h-[250px] sm:h-[300px] md:h-auto">
          <img
            src="why.png"
            alt="Team working together"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 flex flex-col relative px-4 sm:px-6 md:px-0">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-start sm:gap-4">
              {/* Number circle */}
              <div className="ml-0 sm:-ml-12 md:-ml-10 h-[70px] sm:h-[86px] w-[70px] sm:w-[86px] mt-[40px] sm:mt-[50px] flex justify-center items-center rounded-full bg-[#f7f7f7]">
                <div className="w-[50px] sm:w-[68px] h-[50px] sm:h-[68px] flex items-center justify-center rounded-full text-[28px] sm:text-[40px] bg-[#0367fc] text-[#f7f7f7] font-bold">
                  {i + 1}
                </div>
              </div>
              {/* Text */}
              <div className="mt-4 sm:mt-[40px] mb-5 md:mb-0">
                <h3 className="font-bold text-[20px] sm:text-[24px]">{item.title}</h3>
                <p className="font-medium text-[16px] sm:text-[20px] w-full sm:w-[426px]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
