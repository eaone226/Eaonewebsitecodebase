import React, { useState,useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Services = () => {
   useEffect(() => {
    fetch("/Data/service_data.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error loading services:", err));
  }, []);
  const [startIndex, setStartIndex] = useState(0);
  const [services, setServices] = useState([]);
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
    <section id="service" className="bg-[#f7f7f7] rounded-[14px] mt-[80px] relative">
      {/* Section Title */}
      <h2 className="text-[36px] font-bold pt-[140px] text-center mb-10">Services</h2>

      {/* Scroll Arrows */}
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

      {/* Cards Grid */}
      <div className="flex flex-col px-[120px] md:flex-row justify-center items-stretch gap-6">
        {services.slice(startIndex, startIndex + 3).map((service, index) => (
          <div
            key={index}
            className="bg-[#f7f7f7] rounded-2xl shadow-md h-[446px] md:w-1/3 w-[333px] relative hover:shadow-xl transition duration-300"
          >
            {/* Service Image */}
            <div className="relative items-center flex justify-center">
              <img
                src={service.img}
                alt={service.title}
                className="object-cover mt-[30px] rounded-lg"
              />
              {/* Circle Icon */}
              <div className="absolute bg-[#f7f7f7] rounded-full w-[65px] h-[68px] -bottom-6 left-1/2 transform -translate-x-1/2 ">
                <div className="w-[50px] mt-[9px] ml-[8px] h-[50px] bg-[#0367fc] rounded-full flex items-center justify-center shadow-md">
                  <img src={service.icon} alt="icon" className="w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="mt-[30px] text-center items-center px-4">
              <h3 className="text-[24px] text-center font-bold">{service.title}</h3>
              <p
                className={`text-gray-600 text-justify mt-[30px] text-[16px] w-[273px] mt-2 ${service.deswidth}`}
              >
                {service.description}
              </p>
              {/* view button */}
              <div className="flex justify-center mt-[30px]">
                <a
                  href="#"
                  className="text-black text-[16px] w-[124px] font-bold flex items-center gap-1 whitespace-nowrap hover:text-[#0367fc]"
                >
                  View Service <ArrowRight className="mt-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
