import React from "react";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { courses } from "../data/courseData";

const Courses = ({ showTitle = true, excludeId = null }) => {
  // Filter out the course with excludeId (current course)
  const displayedCourses = excludeId
    ? courses.filter((course) => course.id !== excludeId)
    : courses;

  return (
    <section id="course" className="mt-[80px] bg-[#f7f7f7] px-[120px]">
      <div className="container mx-auto text-center">
        {showTitle && <h2 className="text-[36px] font-bold mb-[40px]">Courses</h2>}

        <div className="flex flex-wrap justify-center gap-[13px]">
          {displayedCourses.map((course) => (
            <div
              key={course.id}
              className="relative w-[332px] h-[442px] rounded-2xl overflow-hidden shadow-md group cursor-pointer"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-4 w-full text-left">
                  <h3 className="text-white text-[24px] font-bold drop-shadow-lg group-hover:-translate-y-10 transition-transform duration-500">
                    {course.title}
                  </h3>

                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-500 delay-150">
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

              {!excludeId && (
                <div className="absolute bottom-4 left-4 right-4 text-left mb-[20px] pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
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
