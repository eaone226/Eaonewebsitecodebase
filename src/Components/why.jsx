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
    <div className="mx-[120px] mt-[80px]">
      <h2 className="text-[36px] font-bold  text-center py-8">
        Why Choose Us?
      </h2>

      {/* Main flex container */}
      <div className="flex flex-col md:flex-row border-5  border-[#0a0908]/10 rounded-[24px]">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src="why.png"
            alt="Team working together"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 flex flex-col relative">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              {/* Number circle, positioned to touch image edge */}
              <div className=" -ml-12 md:-ml-10 h-[86px] w-[86px] mt-[70px] flex justify-center items-center rounded-full bg-[#f7f7f7] ">
                <div className="w-[68px] h-[68px] flex items-center justify-center  rounded-full text-[40px] bg-[#0367fc] text-[#f7f7f7] font-bold">
                  {i + 1}
                </div>
              </div>
              {/* Text */}
              <div>
                <h3 className="font-bold text-[24px] mt-[56px]">{item.title}</h3>
                <p className="font-medium text-[20px] w-[426px]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
