import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Services = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [services, setServices] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Load services data
    fetch("/Data/service_data.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error loading services:", err));

    // Detect screen resize
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      // Reset desktop index and scroll for mobile
      if (mobile) {
        setStartIndex(0);
        if (scrollRef.current) scrollRef.current.scrollLeft = 0;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Arrow navigation (desktop only)
  const handleNext = () => {
    if (startIndex < services.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section
      id="service"
      className="bg-[#f7f7f7] rounded-[14px] mt-[80px] relative"
    >
      {/* Section Title */}
      <h2 className="text-[36px] font-bold text-center mb-10">Services</h2>

      {/* Scroll Arrows (desktop only) */}
      {!isMobile && (
        <>
          <button
            onClick={handlePrev}
            className="absolute mt-[218px] left-[100px] drop-shadow-2xl w-[50px] h-[50px] transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 cursor-pointer"
          >
            <ChevronLeft className="text-[#0367fc]" size={30} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-[100px] mt-[218px] transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 cursor-pointer"
          >
            <ChevronRight className="text-[#0367fc]" size={30} />
          </button>
        </>
      )}

      {/* Cards Grid */}
      <div
        ref={scrollRef}
        className={`flex flex-row justify-start items-stretch gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory
          ${!isMobile ? "px-[120px] md:overflow-visible" : "px-4  pb-10 scrollbar-hide"} 
        `}
      >
        {(isMobile ? services : services.slice(startIndex, startIndex + 3)).map(
          (service, index) => (
            <div
              key={index}
              className="bg-[#f7f7f7] rounded-2xl shadow-md h-[400px] md:h-[446px] w-[80%] md:w-[325px] md:w-1/3 flex-shrink-0 snap-start hover:shadow-xl transition duration-300"
            >
              {/* Service Image */}
              <div className="relative items-center flex justify-center">
                <img
                  src={service.img}
                  alt={service.title}
                  className="object-cover mt-[30px] sm:w-[50px] h-[140px] md:w-auto md:h-full rounded-lg"
                />
                {/* Circle Icon */}
                <div className="absolute bg-[#f7f7f7] rounded-full w-[65px] h-[68px] -bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-[50px] mt-[9px] ml-[8px] h-[50px] bg-[#0367fc] rounded-full flex items-center justify-center shadow-md">
                    <img src={service.icon} alt="icon" className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="mt-[30px] text-center items-center px-4">
                <h3 className="text-[20px]  md:text-[24px]  text-center font-bold">
                  {service.title}
                </h3>
                <p
                  className={`text-gray-600 text-justify mt-[10px] md:mt-[30px]  md:text-[16px]   md:w-[273px] mt-2 md:${service.deswidth} ${service.mobilewidth}`}
                >
                  {service.description}
                </p>
                <div className="flex justify-center mt-[10px] md:mt-[30px]">
                  <a
                    href="#"
                    className="text-black text-[16px] w-[124px] font-bold flex items-center gap-1 whitespace-nowrap hover:text-[#0367fc]"
                  >
                    View Service <ArrowRight className="mt-1" />
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* Scroll Indicator */}
      <div className=" hidden  md:block relative w-[200px] h-[12px] bg-[#0a0908]/10 rounded-full mx-auto mt-10 overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-[#0a0908] rounded-full transition-all duration-500"
          style={{
            width: `${
              !isMobile
                ? ((startIndex / (services.length - 3)) * 100 + 10)
                : ((0 / (services.length - 1)) * 100 + 10)
            }%`,
          }}
        />
      </div>
    </section>
  );
};

export default Services;
