import React, { useEffect, useState } from "react";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Courses = ({ showTitle = true, excludeId = null }) => {
  const [courses, setCourses] = useState([]);
  const [touchedCourse, setTouchedCourse] = useState(null);

  // Load JSON from public/data/courseData.json
  useEffect(() => {
    fetch("/Data/coursedata.json")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Error loading courses:", err));
  }, []);

  // Filter out the course with excludeId (if needed)
  const displayedCourses = excludeId
    ? courses.filter((course) => course.id !== excludeId)
    : courses;

  return (
    <section id="course" className="mt-[80px] bg-[#f7f7f7] px-4 sm:px-6 md:px-12 lg:px-[120px]">
      <div className="container mx-auto text-center">
        {showTitle && (
          <h2 className="text-[36px] font-bold mb-[40px]">
            Courses
          </h2>
        )}

        <div className="flex flex-wrap justify-center gap-[13px]">
          {displayedCourses.map((course) => (
            <div
              key={course.id}
              className="relative w-[332px] h-[442px] rounded-2xl overflow-hidden shadow-md group cursor-pointer"
               onClick={() =>
                setTouchedCourse(touchedCourse === course.id ? null : course.id)
                }
            >
              {/* Image */}
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div  className={`absolute inset-0 bg-black/70 transition-opacity duration-500 flex items-end 
                ${touchedCourse === course.id ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100`}>
                <div className="p-4  w-full text-left">
                  <h3 className="text-white text-[24px]  mb-4 md:mb-0 font-bold drop-shadow-lg group-hover:-translate-y-10 transition-transform duration-500">
                    {course.title}
                  </h3>

                  <div   className={`transition-all duration-500 delay-150 transform
                    ${touchedCourse === course.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                    group-hover:opacity-100 group-hover:translate-y-0`}>
                    <p className="text-gray-200 text-sm w-[250px] text-justify text-[16px] mb-[24px]">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center mb-[24px] text-yellow-400 text-sm">
                        <Star size={16} fill="currentColor" className="mr-1" />
                        {course.rating}
                      </span>

                      <Link
                        to={`/courseland/${course.id}`}
                        className="text-white text-[16px] w-[124px] mb-[24px] font-bold flex items-center gap-1 whitespace-nowrap hover:text-[#d2f801] transition"
                      >
                        View Course <ArrowRight className="mt-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title before hover */}
              {/* Title before hover */}
{!excludeId && (
  <div className={`absolute bottom-4 left-4 right-4 text-left mb-[20px] pointer-events-none transition-opacity duration-300
      ${touchedCourse === course.id ? "opacity-0" : "opacity-100"}
      group-hover:opacity-0`}>
    <h3 className="text-white text-[24px] font-bold drop-shadow-lg">
      {course.title}
    </h3>
  </div>
)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
