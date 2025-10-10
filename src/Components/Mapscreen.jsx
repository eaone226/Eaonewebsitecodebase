import React from "react";

const Mapscreen = () => {
  return (
    <div id="Map" className="w-full flex justify-center mb-10">
      <iframe
        title="office-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31111.1437579092!2d80.23803419450378!3d12.914600070964466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c61885f4ce3%3A0xcf96ff181e8910e7!2sDurga%20Enclave!5e0!3m2!1sen!2sin!4v1759842676342!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen=""
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-[20px] shadow-lg shadow-[#0a0908]/30  md:w-[800px] md:h-[400px] w-[300px] h-[200px]"
      ></iframe>
    </div>
  );
};

export default Mapscreen;
