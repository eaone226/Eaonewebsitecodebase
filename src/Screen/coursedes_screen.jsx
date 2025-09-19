import React, { useState,useRef } from "react";
import { Star, ChevronDown } from "lucide-react";
import Courses from "../Components/Course";
import { useParams } from "react-router-dom";
import { skills, reviews, faqs } from "../Data/graphicdesign_data";
import { courses } from "../Data/courseData"; // ✅ Import courses
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const HeroSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);

 
  return (
    <section>
      <Navbar/>
      {/* Hero section */}
      <div
        className="w-full h-[530px] bg-cover bg-center"
        style={{ backgroundImage: `url('${course.img}')` }}
      >
        <div className="r-10 h-full bg-black/40 flex justify-end items-center px-[120px]">
          <div>
            <h1 className="text-[48px] text-[#D2F801] w-[439px] font-bold">
              {course.title}
            </h1>

            <p className="w-[442px] text-[24px] text-[#f7f7f7]">
              {course.description}
            </p>

            <button className="bg-[#0367fc] w-[178px] h-[55px] rounded-[10px] text-[24px] font-bold text-[#f7f7f7] mt-[20px]">
              Enroll now
            </button>
          </div>
        </div>
      </div>

      {/* About Course Section */}
      <div className="py-10 bg-[#F7F7F7] px-[120px]">
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
            <div className="flex flex-row bg-[#0367fc] font-bold items-center px-[20px] text-[#f7f7f7] h-[60px] rounded-md w-[900px]">
              <h1 className="text-[20px] ">
                <span className="text-[#d2f801] font-black text-[24px]">
                  Duration{" "}
                </span>
                : 3 Months <span className="text-[30px] ml-[20px]">|</span>
              </h1>

              <h1 className="text-[20px] ml-[20px]">
                <span className="text-[#d2f801]  font-black text-[24px]">
                  Mode{" "}
                </span>
                : Online <span className="text-[30px] ml-[20px]">|</span>
              </h1>

              <h1 className="text-[20px] ml-[20px]">
                <span className="text-[#d2f801] font-black text-[24px]">
                  Level{" "}
                </span>
                : Beginner <span className="text-[30px] ml-[20px]">|</span>
              </h1>

              <h1 className="text-[20px] ml-[20px] mt-1">
                <span className="text-[#d2f801]  font-black  text-[24px]">
                  Certificate{" "}
                </span>
                : Yes
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Learn */}
      <div className="px-[120px] mt-12">
        <h2 className="text-[40px] font-bold text-[#0367fc] mb-8">
          Skills Learn :
        </h2>

        <div className="flex flex-wrap gap-6 rounded-[20px] ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border text-[#0367fc] rounded-lg p-4 w-full sm:w-[48%]"
            >
              <img src={skill.icon} alt="" />
              <p className="text-[24px] font-bold text-[#0a0908]">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* What will you learn / What will you get */}
      <div className="mt-16 bg-[#0367fc]/20 border mx-[120px] px-[80px] text-[#0367fc]/50 rounded-lg p-8">
        <h2 className="text-[40px] font-bold text-[#0367fc] mb-4">
          What will you learn
        </h2>
        <ul className="list-disc list-inside space-y-2 text-[#0a0908] text-[24px] font-bold text-lg">
          <li>Design professional logos and branding materials</li>
          <li>Build a strong portfolio with your best design work</li>
          <li>
            Get hands-on experience with Photoshop, Illustrator, and Canva
          </li>
        </ul>

        <h2 className="text-[40px] font-bold text-[#0367fc] mt-6 mb-4">
          What will you Get
        </h2>
        <ul className="list-disc list-inside space-y-2 font-bold text-[#0a0908]  text-[24px]">
          <li>Real-time projects and assignments</li>
          <li>Portfolio support to showcase your work</li>
          <li>Career and freelance guidance</li>
        </ul>
      </div>

      {/* Reviews Section */}
      <div className="mt-16 px-[120px] pb-20">
        <h2 className="text-[40px] font-bold text-center text-blue-700">
          Reviews from students
        </h2>

        <div className="text-center mt-3">
          <p className="text-gray-600 text-sm">AVERAGE RATINGS</p>
          <div className="flex justify-center items-center mt-1">
            <span className="text-lg font-semibold mr-2">4.5</span>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="border text-[#0a0908]/20 rounded-xl shadow-sm p-6 bg-[#f7f7f7] hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-3">
                <h1 className="mr-2 text-[#0a0908]">{review.rating}</h1>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-[#0a0908] text-sm">{review.text}</p>
              <p className="mt-4 font-medium text-[#0a0908] flex items-center gap-2">
                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-gray-200 text-[#0a0908] text-xs">
                  {review.name.charAt(0)}
                </span>
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Courses */}
      <div className="px-[120px] pb-16">
        <h1 className="text-[40px] font-bold text-[#0367fc] text-center mb-8">
          Others in demand training
        </h1>
        <Courses showTitle={false} excludeId={courseId} />
      </div>
{/* FAQ */}
   <div className="px-[120px] pb-20">
      <h2 className="text-[40px] font-bold text-[#0367fc] mb-8">
        Still having any doubt ?
      </h2>

      <div className="flex flex-col max-w-3xl mx-auto shadow-lg rounded-2xl overflow-hidden bg-white">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`w-full ${
              index !== faqs.length - 1 ? "border-b border-b-gray-300" : ""
            }`}
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-5 text-gray-900 font-semibold text-[20px] hover:bg-gray-50 transition-colors duration-200"
            >
              {faq.question}
              <ChevronDown
                className={`h-6 w-6 text-gray-600 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Answer */}
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              style={{
                height:
                  openIndex === index
                    ? contentRefs.current[index]?.scrollHeight
                    : 0,
                transition: "height 0.3s ease",
              }}
              className="px-6 overflow-hidden"
            >
              <p className="text-gray-700 text-[18px] leading-relaxed py-4">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </section>
  );
};

export default HeroSection;
 