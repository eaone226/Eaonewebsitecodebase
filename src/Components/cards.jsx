import React from "react";

const Features = () => {
  const cards = [
    {
      icon: "/instructor.png",
      title: "Amazing Instructor",
      description:
        "Our Amazing Instructors Bring Experience, Knowledge And Fun On The Class.",
      ellipseClass: "top-[16px] left-7.5", // ellipse position for card 1
    },
    {
      icon: "/support.png",
      title: "Life Time Support",
      description:
        "You Will Have Life Time Access Of The Courses & Resources.",
      ellipseClass: "top-13.5 right-8", // ellipse position for card 2
    },
    {
      icon: "/contact.png",
      title: "Video Lesson",
      description:
        "Recorded Version Of Lectures From Professional Instructions To Boost Your Growth.",
      ellipseClass: "top-7 right-0", // ellipse position for card 3
    },
  ];

  return (
    <section className="mt-[80px]">
      {/* Back rectangle visible only on md and up */}
      <div className="hidden md:block h-[100px] bg-[#0a0908]/10 mx-auto text-center"></div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center px-4 md:px-[120px] items-center gap-[20px]  md:-mt-[100px]">
        {cards.map((card, index) => (
          <div key={index} className="w-full md:w-1/3 flex justify-center">
            <div className="bg-white rounded-lg w-[334px] h-[266px] border border-black shadow-md flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 relative z-7">
              {/* Icon + ellipse container */}
              <div className="relative mb-4 w-[80px] h-[80px] flex items-center justify-center">
                {/* Decorative ellipse */}
                <span
                  className={`absolute w-[54px] h-[54px] bg-blue-200 rounded-full ${card.ellipseClass}`}
                ></span>

                {/* Main Icon */}
                <img src={card.icon} alt="icon" className="absolute mt-10 z-10" loading="lazy" />
              </div>

              <h3 className="text-[24px] font-bold mt-[30px]">{card.title}</h3>
              <p className="text-gray-600 text-[16px] mt-[14px] text-center w-[250px]">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
