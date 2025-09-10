import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="mt-[80px] " >
        {/* Title */}
        <h2 className="text-[36px] px-[120px] text-center font-bold">About Us</h2>
        <div className="w-full bg-[#f7f7f7] py-12 px-6 md:px-16 flex flex-col md:flex-row items-center md:items-start gap-10">
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center">
      <div className="rounded-full border-2  border-[#0367fc]/40 p-[24px] relative">
        <div className="rounded-full border-2 border-[#0367fc]/40  p-[24px] relative">
          <img
            src="/About.png" // replace with your actual image path
            alt="Team working together"
            className="rounded-full w-72 h-72 object-cover"
          />
          {/* Small circle dots (decoration) */}
          <div className="absolute bottom-[331px] left-[136px] w-2 h-2 bg-[#0367fc] rounded-full"></div>
          <div className="absolute bottom-15 left-[31px] w-2 h-2 bg-[#0367fc] rounded-full"></div>
          <div className="absolute top-[1px] right-14 w-2 h-2 bg-[#0367fc] rounded-full"></div>
          <div className="absolute bottom-[18px] right-20 w-2 h-2 bg-[#0367fc] rounded-full"></div>
        </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 space-y-6">
        

        <div>
          <h3 className="text-[32px] font-bold w-[372px]">
            Inspired by Challenges, <br /> Motivated by Results.
          </h3>
          <p className=" mt-[16px] text-[26px] ">
            At Everyone Creative and Innovative Academy (ECIA), we believe that creativity
            lies within everyone – waiting to be discovered, nurtured and unleashed.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-[80px] mt-[40px]">
          <div>
            <p className="text-[36px] ml-[5px] font-bold">100+</p>
            <p className="text-[24px]">Students</p>
          </div>
          <div>
            <p className="text-[36px] ml-[12px]  font-bold">20+</p>
            <p className="text-[24px]">Courses</p>
          </div>
          <div>
            <p className="text-[36px]  ml-[20px] font-bold">10+</p>
            <p className="text-[24px]">Instructors</p>
          </div>
        </div>

        {/* Button */}
        <a
          href="/about"
          className="flex items-center gap-2 text-[24px] font-medium text-black mt-6 hover:text-[#0367fc]"
          style={{ textDecoration: 'none' }}
        >
          More about <ArrowRight size={30} className="mt-1" />
        </a>
      </div>
      </div>
    </section>
  );
}
