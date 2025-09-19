import React, { useState, useRef, useEffect } from "react";
import { Star, ChevronDown } from "lucide-react";
import Courses from "../Components/Course";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const HeroSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  // ✅ use different state names
  const [skillsData, setSkillsData] = useState([]);
  const [reviewsData, setReviewsData] = useState([]);
  const [faqsData, setFaqsData] = useState([]);
  const [coursesData, setCoursesData] = useState([]);

  const { courseId } = useParams();
  const course = coursesData.find((c) => c.id === courseId);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ✅ Fetch data from public folder
  useEffect(() => {
    fetch("/Data/coursedata.json")
      .then((res) => res.json())
      .then((data) => setCoursesData(data));

    fetch("/Data/graphicdesign_data.json")
      .then((res) => res.json())
      .then((data) => {
        setSkillsData(data.skills || []);
        setReviewsData(data.reviews || []);
        setFaqsData(data.faqs || []);
      });
  }, []);

  if (!course) {
    return <p className="text-center mt-20">Loading course...</p>;
  }

  return (
    <section>
      <Navbar />

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

      {/* Skills Section */}
      <div className="px-[120px] mt-12">
        <h2 className="text-[40px] font-bold text-[#0367fc] mb-8">
          Skills Learn :
        </h2>
        <div className="flex flex-wrap gap-6 rounded-[20px] ">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border text-[#0367fc] rounded-lg p-4 w-full sm:w-[48%]"
            >
              <img src={skill.icon} alt={skill.name} className="h-12 w-12" />
              <p className="text-[24px] font-bold text-[#0a0908]">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16 px-[120px] pb-20">
        <h2 className="text-[40px] font-bold text-center text-blue-700">
          Reviews from students
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          {reviewsData.map((review, idx) => (
            <div
              key={idx}
              className="border rounded-xl shadow-sm p-6 bg-[#f7f7f7]"
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
                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-gray-200 text-xs">
                  {review.name.charAt(0)}
                </span>
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="px-[120px] pb-20">
        <h2 className="text-[40px] font-bold text-[#0367fc] mb-8">
          Still having any doubt ?
        </h2>
        <div className="flex flex-col max-w-3xl mx-auto shadow-lg rounded-2xl bg-[#f7f7f7]">
          {faqsData.map((faq, index) => (
            <div key={index} className=" border-b border-b-gray-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-[20px] font-semibold"
              >
                {faq.question}
                <ChevronDown
                  className={`h-6 w-6 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
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
                <p className="text-[#0a0908] text-[18px] leading-relaxed py-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default HeroSection;
