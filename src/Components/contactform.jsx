import React, { useState } from "react";
import emailjs from '@emailjs/browser';

import { useRef } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [countryCode, setCountryCode] = useState("+91");

  const codes = [
    { code: "+91" },
    { code: "+1" },
    { code: "+44" },
    { code: "+61" },
    { code: "+81" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
  e.preventDefault();
   // Phone validation (10 digits, numbers only)
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(formData.phone)) {
    alert("Please enter a valid 10-digit phone number (numbers only).");
    return;
  }
  // Email validation
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(formData.email)) {
    alert("Please enter a valid email address.");
    return;
  }
 
  setLoading(true);

  const fullPhone = `${countryCode} ${formData.phone}`;
  const dataToSend = {
    name: formData.name,
    email: formData.email,
    phone: fullPhone,
    message: formData.message,
  };

  // Immediately reset form & UI
  setFormData({ name: "", email: "", phone: "", message: "" });
  setCountryCode("+91");
  setLoading(false);
  alert("Email Send & You received a confirmation message.");

  // Fire-and-forget tasks (no await)
  emailjs
    .send("service_zg8oiob", "template_owah7yf", dataToSend, "xoOcarvys8r7P1H10")
    .then(() => console.log("Email sent to owner"))
    .catch((err) => console.error("Owner email error:", err));

  emailjs
    .send("service_zg8oiob", "template_32c1n9b", {
      name: dataToSend.name,
      email: dataToSend.email,
      phone: fullPhone,
    }, "xoOcarvys8r7P1H10")
    .then(() => console.log("Thank-you email sent"))
    .catch((err) => console.error("Thank-you email error:", err));

  fetch("https://script.google.com/macros/s/AKfycbw4zK1fYsztDbIjzGbMoUWlF5TY4AWMUfftaSAptFzQ3TVJaSGDIyTB6mThG5KRVZwl/exec", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataToSend),
  })
    .then(() => console.log("Saved to Google Sheets"))
    .catch((err) => console.error("Google Sheets error:", err));
};

  return (
    <form onSubmit={sendEmail} className="bg-[#0a0908]/10 w-full ml-[50px]">
      <h1 className="text-[#0367fc] text-[40px] mt-[30px] text-center mb-2 font-bold">
        Send us message
      </h1>

      {/* Name */}
      <label className="font-bold ml-[90px] mt-[14px] text-[24px]">Name</label>
      <br />
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        name="name"
        className="bg-[#f7f7f7] ml-[90px] mt-[14px] pl-[20px] rounded-[10px] w-[331px] h-[50px]"
        required
      />
      <br />

      {/* Phone Number */}
      <label className="font-bold ml-[90px] mt-[20px] text-[24px] block">
        Phone Number
      </label>
      <div className="flex ml-[90px] mb-[20px] mt-[14px]">
        {/* Country Code Dropdown */}
        <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className="bg-[#f7f7f7] rounded-[10px] w-[75px] h-[50px] pl-3 mr-2"
        >
          {codes.map((item, index) => (
            <option key={index} value={item.code}>
              {item.code}
            </option>
          ))}
        </select>

        {/* Phone Input */}
        <input
          type="text"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          name="phone"
          className="bg-[#f7f7f7] pl-[20px] rounded-[10px] w-[240px] h-[50px]"
          required
        />
      </div>

      {/* Email */}
      <label className="font-bold ml-[90px] text-[24px]">Email</label>
      <br />
      <input
        type="email"
        value={formData.email}
        onChange={handleChange}
        name="email"
        placeholder="Ex:user@gmail.com"
        className="bg-[#f7f7f7] ml-[90px] mt-[14px] mb-[20px] pl-[20px] rounded-[10px] w-[331px] h-[50px]"
        required
      />

      {/* Message */}
      <label className="font-bold ml-[90px] text-[24px]">Message</label>
      <br />
      <textarea
        value={formData.message}
        onChange={handleChange}
        name="message"
        placeholder="Type your Message here...."
        className="bg-[#f7f7f7] ml-[90px] mt-[14px] pl-[20px] pt-[10px] rounded-[10px] w-[331px] h-[100px]"
        required
      />

      {/* Submit button */}
      <button
        className="bg-[#0367fc] w-[331px] h-[50px] text-[24px] font-bold rounded-[10px] text-[#f7f7f7] flex items-center justify-center mx-[90px] mt-6 cursor-pointer hover:bg-[#0367fc]/80 active:scale-95 transition-all duration-150"
        type="submit"
      >
       Submit
      </button>
    </form>
  );
};

export default ContactForm;
