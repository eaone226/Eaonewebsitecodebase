import React, { useState, useRef, useEffect } from "react";
import { Star, ChevronDown } from "lucide-react";
import Courses from "../Components/Course";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const HeroSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const [skillsData, setSkillsData] = useState([]);
  const [reviewsData, setReviewsData] = useState([]);
  const [faqsData, setFaqsData] = useState([]);
  const [coursesData, setCoursesData] = useState([]);

  const { courseId } = useParams();
  const course = coursesData.find((c) => c.id === courseId);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

      {/* Hero Section */}
      <div
        className="w-full h-[300px] md:h-[480px] lg:h-[530px] bg-cover bg-center"
        style={{ backgroundImage: `url('${course.img}')` }}
      >
        <div className="h-full bg-black/70 flex justify-end items-center px-4  pt-10  md:pt-0 sm:px-8 lg:px-[120px]">
          <div>
            <h1 className="text-[24px] sm:text-[36px] lg:text-[48px] text-[#D2F801] w-full sm:w-[439px] font-bold">
              {course.title}
            </h1>
            <p className="w-full sm:w-[442px] text-[16px] sm:text-[20px] lg:text-[24px] text-[#f7f7f7]">
              {course.description}
            </p>
            <a
              href="https://forms.gle/b8emcBsY3ghZDZEW6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#0367fc] w-[120px] md:w-[178px] h-[40px] md:h-[55px] rounded-[6px] md:rounded-[10px] text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-[#f7f7f7] mt-[20px]">
                Enroll now
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* About Course */}
      <div className="py-10 bg-[#F7F7F7] px-4 sm:px-8 lg:px-[120px]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold text-blue-700 mb-4">
            About Course :
          </h2>
          <p className="text-[#0a0908] w-full lg:w-[1040px] text-[16px] sm:text-[20px] lg:text-[24px] leading-relaxed">
            Our Graphic Designing Course is designed to help you master the art
            of visual communication and creative storytelling. Learn essential
            design principles, popular design tools, and practical skills to
            create stunning visuals for brands, social media, marketing, and
            more. This course empowers you to turn your ideas into professional
            designs and build a portfolio that showcases your unique style and
            creativity.
          </p>
        </div>

        {/* Course Info Row */}
        <div className="flex justify-center mt-10">
          <div className="flex flex-col sm:flex-row bg-[#0367fc] font-bold items-start sm:items-center px-4 sm:px-[20px] text-[#f7f7f7] py-4 sm:h-[60px] rounded-md w-full sm:w-[90%] lg:w-[900px] gap-2 sm:gap-6">
            <h1 className="text-[16px] sm:text-[20px]">
              <span className="text-[#d2f801] font-black text-[20px] sm:text-[24px]">
                Duration
              </span>{" "}
              : 3 Months
            </h1>

            <h1 className="text-[16px] sm:text-[20px]">
              <span className="text-[#d2f801] font-black text-[20px] sm:text-[24px]">
                Mode
              </span>{" "}
              : Online
            </h1>

            <h1 className="text-[16px] sm:text-[20px]">
              <span className="text-[#d2f801] font-black text-[20px] sm:text-[24px]">
                Level
              </span>{" "}
              : Beginner
            </h1>

            <h1 className="text-[16px] sm:text-[20px]">
              <span className="text-[#d2f801] font-black text-[20px] sm:text-[24px]">
                Certificate
              </span>{" "}
              : Yes
            </h1>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="px-4 sm:px-8 lg:px-[120px] mt-12">
        <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold text-[#0367fc] mb-8">
          Skills Learn :
        </h2>
        <div className="flex flex-wrap gap-6 rounded-[20px]">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border text-[#0367fc] rounded-lg p-4 w-full sm:w-[48%]"
            >
              <img src={skill.icon} alt={skill.name} className="h-10 w-10 sm:h-12 sm:w-12" />
              <p className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-[#0a0908]">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* What will you learn / Get */}
      <div className="mt-16 bg-[#0367fc]/30 border mx-4 sm:mx-8 lg:mx-[120px] px-4 sm:px-8 lg:px-[80px] text-[#0367fc]/50 rounded-lg p-6 sm:p-8">
        <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold text-[#0367fc] mb-4">
          What will you learn
        </h2>
        <ul className="list-disc list-inside space-y-2 text-[#0a0908] text-[16px] sm:text-[20px] lg:text-[24px] font-bold">
          <li>Design professional logos and branding materials</li>
          <li>Build a strong portfolio with your best design work</li>
          <li>Get hands-on experience with Photoshop, Illustrator, and Canva</li>
        </ul>

        <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold text-[#0367fc] mt-6 mb-4">
          What will you Get
        </h2>
        <ul className="list-disc list-inside space-y-2 font-bold text-[#0a0908] text-[16px] sm:text-[20px] lg:text-[24px]">
          <li>Real-time projects and assignments</li>
          <li>Portfolio support to showcase your work</li>
          <li>Career and freelance guidance</li>
        </ul>
      </div>

      {/* Reviews */}
      <div className="mt-16 px-4 sm:px-8 lg:px-[120px] pb-20">
        <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold text-center text-blue-700">
          Reviews from students
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {reviewsData.map((review, idx) => (
            <div key={idx} className="border rounded-xl shadow-sm p-6 bg-[#f7f7f7]">
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

      {/* Courses */}
      <div className="px-4 sm:px-8 lg:px-[120px] pb-16">
        <h1 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold text-[#0367fc] text-center mb-8">
          Others in demand training
        </h1>
        <Courses showTitle={false} excludeId={courseId} />
      </div>

      {/* FAQ */}
      <div className="px-4 sm:px-8 lg:px-[120px] pb-20">
        <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold text-[#0367fc] mb-8">
          Still having any doubt ?
        </h2>
        <div className="flex flex-col max-w-3xl mx-auto shadow-lg rounded-2xl bg-[#f7f7f7]">
          {faqsData.map((faq, index) => (
            <div key={index} className="border-b border-b-gray-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 sm:px-6 py-4 sm:py-5 text-[16px] sm:text-[18px] lg:text-[20px] font-semibold"
              >
                {faq.question}
                <ChevronDown
                  className={`h-5 w-5 sm:h-6 sm:w-6 transform transition-transform duration-300 ${
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
                className="px-4 sm:px-6 overflow-hidden"
              >
                <p className="text-[#0a0908] text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed py-4">
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
