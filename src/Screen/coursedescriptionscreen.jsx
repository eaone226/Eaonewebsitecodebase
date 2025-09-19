import React from "react";


const HeroSection = () => {
  // ✅ Skills data array
  const skills = [
    { name: "Blender / Cinema4D", icon:"/cinematic.png"   },
    { name: "Canva", icon:"/canva.png"},
    { name: " Adobe XD", icon:"/adobe.png"  },
    { name: "Digital Media Design",icon:"/digital.png"},
    { name: "UI/UX Basics", icon:"/ux.png" },
    { name: "Image Editing", icon:"/videoedit.png" },
  ];

  return (
  
      <section>
        {/* Hero section */}
      <div className="w-full h-[530px] bg-[url('/Graphicdesign.png')] bg-cover bg-center">
        <div className="r-10 h-full bg-black/40 flex justify-end items-center px-[120px]">
          <div>
            <h1 className="text-[48px] text-[#D2F801] w-[439px] font-bold">
              Graphic Designing
            </h1>

            <p className="w-[442px] text-[24px] text-[#f7f7f7]">
              We’re not just shaping creators we’re raising voices that
              influence, inspire, and bring positive change to society.
            </p>

            <button className="bg-[#0367fc] w-[178px] h-[55px] rounded-[10px] text-[24px] font-bold text-[#f7f7f7] mt-[20px]">
              Enroll now
            </button>
          </div>
        </div>
      </div>

      {/* About Course Section */}
      <div className=" py-10 bg-[#F7F7F7] px-[120px]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[40px] font-bold text-blue-700 mb-4">
            About Course :
          </h2>
          <p className="text-[#0a0908] w-[1040px] text-[24px] leading-relaxed">
            Our Graphic Designing Course is designed to help you master the art
            of visual communication and creative storytelling. Learn essential
            design principles, popular design tools, and practical skills to
            create stunning visuals for brands, social media, marketing, and
            more. This course empowers you to turn your ideas into professional
            designs and build a portfolio that showcases your unique style and
            creativity.
          </p>

          {/* Course Info Row */}
          <div className="flex justify-center mt-10">
          <div className="flex flex-row bg-[#0367fc] font-bold items-center px-[20px] text-[#f7f7f7] h-[60px] rounded-md w-[900px]  ">
           
             <h1 className="text-[20px] "> <span className="text-[#d2f801] font-black text-[24px]">Duration </span> : 3 Months <span className="text-[30px] ml-[20px]">|</span> </h1>
           
             <h1  className="text-[20px] ml-[20px]"><span className="text-[#d2f801]  font-black text-[24px]">Mode </span> : Online <span className="text-[30px] ml-[20px]">|</span></h1> 
          
             <h1 className="text-[20px] ml-[20px]"><span className="text-[#d2f801] font-black text-[24px]">Level </span> : Beginner <span className="text-[30px] ml-[20px]">|</span></h1> 
           
             <h1 className="text-[20px] ml-[20px] mt-1"><span className="text-[#d2f801]  font-black  text-[24px]">Certificate </span> : Yes </h1> 
    
          </div>
        </div>
        </div>

        {/* Skills Learn */}
        <div className="  mt-12">
          <h2 className="text-[40px] font-bold text-[#0367fc] mb-8">
            Skills Learn :
          </h2>

         <div className="flex flex-wrap gap-6 h-[124px]  rounded-[20px] ">
                 {skills.map((skill, index) => (
             <div
                 key={index}
                 className="flex items-center gap-4 border border-blue-400 rounded-lg p-4 w-full sm:w-[48%]"
               >
             <img src={skill.icon} alt="" />
              <p className="text-[24px] font-bold text-[#0a0908]">{skill.name}</p>
          </div>
          ))}
       </div>

        </div>
      </div>
      </section>
  );
};

export default HeroSection;
