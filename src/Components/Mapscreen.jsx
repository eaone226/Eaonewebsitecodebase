import React from "react";

const Mapscreen = () => {
  return (
    <div id="Map" className="w-full flex justify-center  mt-[750px] mb-10">
      <iframe
        title="office-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.054850921115!2d80.23000197286451!3d12.91558664218736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267df0fa8d8ed%3A0xffd52acb6a07a68f!2sLifehouse%20Church!5e0!3m2!1sen!2sin!4v1757349341890!5m2!1sen!2sinn"
        width="600"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className="rounded-[20px] shadow-lg shadow-[#0a0908]/30"
      ></iframe>
    </div>
  );
};

export default Mapscreen;
