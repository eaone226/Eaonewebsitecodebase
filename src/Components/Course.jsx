import React from "react";
import { Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Courses = () => {
  const courses = [
    {
      title: "Graphic Designing",
      description:
        "Master graphic design tools and create stunning visuals for print and digital media.",
      rating: "4.7k",
      img: "/graphicsdesign.png",
    },
    {
      title: "Video Editing",
      description:
        "Learn advanced video editing techniques and storytelling with industry tools.",
      rating: "4.8k",
      img: "/videoediting.png",
    },
    {
      title: "UI/UX Design",
      description:
        "Learn to design intuitive and engaging digital experiences with hands-on UI/UX skills.",
      rating: "4.5k",
      img: "/uiux.png",
    },
  ];

  // Animation variants for cards
  const cardVariants = [
    {
      hidden: { opacity: 0, x: -150 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    },
    {
      hidden: { opacity: 0, scale: 0.5 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
    },
    {
      hidden: { opacity: 0, x: 150 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    },
  ];

  return (
    <section id="course" className="mt-[80px] bg-[#f7f7f7] px-[120px]">
      <div className="container mx-auto text-center">
       <motion.h2
            className="text-[36px] font-bold mb-[40px]"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
               duration: 0.8,
               ease: "backOut", // gives a bounce effect at the end
             }}
             viewport={{ once: true }}
           >
          Courses
        </motion.h2>

        {/* Flex Cards */}
        <div className="flex flex-wrap justify-center gap-[13px]">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="relative w-[332px] h-[442px] rounded-2xl overflow-hidden shadow-md group cursor-pointer"
              variants={cardVariants[index]} // each card has unique animation
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Course Image */}
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-4 w-full text-left">
                  <h3
                    className="text-white text-[24px] font-bold drop-shadow-lg 
                    transform transition-transform duration-500 
                    group-hover:-translate-y-10"
                  >
                    {course.title}
                  </h3>

                  <div
                    className="opacity-0 group-hover:opacity-100 
                    transform translate-y-5 group-hover:translate-y-0 
                    transition-all duration-500 delay-150"
                  >
                    <p className="text-gray-200 text-sm w-[250px] text-justify text-[16px] mb-[24px]">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center mb-[24px] text-yellow-400 text-sm">
                        <Star size={16} fill="currentColor" className="mr-1" />
                        {course.rating}
                      </span>

                      <a
                        href="#"
                        className="text-white text-[16px] w-[124px] mb-[24px] font-bold flex items-center gap-1 whitespace-nowrap hover:text-[#d2f801]"
                      >
                        View Course <ArrowRight className="mt-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title always visible before hover */}
              <div className="absolute bottom-4 left-4 right-4 text-left mb-[20px] pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-white text-[24px] font-bold drop-shadow-lg">
                  {course.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
