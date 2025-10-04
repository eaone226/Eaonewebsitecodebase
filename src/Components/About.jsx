import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="mt-[40px] md:mt-[80px]">
      {/* Title */}
      <h2 className="text-[24px] md:text-[36px] px-6 md:px-[120px] text-center font-bold">
        About Us
      </h2>

      <div className="w-full bg-[#f7f7f7] py-10 md:py-12 px-4 sm:px-6 md:px-16 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="rounded-full border-2 border-[#0367fc]/40 p-[16px] md:p-[24px] relative">
            <div className="rounded-full border-2 border-[#0367fc]/40 p-[16px] md:p-[24px] relative">
              <img
                src="/About.png"
                alt="Team working together"
                className="rounded-full w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 object-cover"
              />
              {/* Decorative dots */}
              <div className="absolute bottom-[220px] sm:bottom-[280px] md:bottom-[331px] left-[90px] sm:left-[115px] md:left-[136px] w-2 h-2 bg-[#0367fc] rounded-full"></div>
              <div className="absolute bottom-10 sm:bottom-[50px] md:bottom-15 left-[20px] sm:left-[25px] md:left-[31px] w-2 h-2 bg-[#0367fc] rounded-full"></div>
              <div className="absolute top-[1px] right-10 sm:right-12 md:right-14 w-2 h-2 bg-[#0367fc] rounded-full"></div>
              <div className="absolute bottom-[12px] sm:bottom-[15px] md:bottom-[18px] right-14 sm:right-[70px] md:right-20 w-2 h-2 bg-[#0367fc] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <div>
            <h3 className="text-[22px] sm:text-[28px] md:text-[32px] font-bold max-w-[90%] md:max-w-[372px] mx-auto md:mx-0">
              Inspired by Challenges, <br /> Motivated by Results.
            </h3>
            <p className="mt-[12px] md:mt-[16px] text-[18px] sm:text-[22px] md:text-[26px] px-4 md:px-0">
              At Everyone Creative and Innovative Academy (ECIA), we believe that
              creativity lies within everyone – waiting to be discovered, nurtured
              and unleashed.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-10 md:gap-[80px] mt-[30px] md:mt-[40px]">
            <div>
              <p className="text-[28px] sm:text-[32px] md:text-[36px] font-bold">100+</p>
              <p className="text-[18px] sm:text-[20px] md:text-[24px]">Students</p>
            </div>
            <div>
              <p className="text-[28px] sm:text-[32px] md:text-[36px] font-bold">20+</p>
              <p className="text-[18px] sm:text-[20px] md:text-[24px]">Courses</p>
            </div>
            <div>
              <p className="text-[28px] sm:text-[32px] md:text-[36px] font-bold">10+</p>
              <p className="text-[18px] sm:text-[20px] md:text-[24px]">Instructors</p>
            </div>
          </div>

          {/* Button */}
          <a
            href="/about"
            className="flex items-center ml-6 md:ml-0 md:justify-start gap-2 text-[18px] sm:text-[20px] w-[180px] md:text-[24px] font-medium text-black mt-10 hover:text-[#0367fc]"
            style={{ textDecoration: "none" }}
          >
            More about <ArrowRight size={24} className="mt-1 md:size-7" />
          </a>
        </div>
      </div>
    </section>
  );
}
