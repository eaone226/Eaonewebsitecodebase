import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

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

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number!");
      return;
    }

    // Email validation
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address!");
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

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
    setCountryCode("+91");
    setLoading(false);
    toast.success("Email sent! You will receive a confirmation message.");

    // Send email to owner
    emailjs
      .send(
        "service_zg8oiob",
        "template_owah7yf",
        dataToSend,
        "xoOcarvys8r7P1H10"
      )
      .then(() => console.log("Email sent to ecia"))
      .catch((err) => {
        console.error("Owner email error:", err);
        toast.error("Failed to send email to owner.");
      });

    // Send thank-you email to user
    emailjs
      .send(
        "service_zg8oiob",
        "template_32c1n9b",
        {
          name: dataToSend.name,
          email: dataToSend.email,
          phone: fullPhone,
        },
        "xoOcarvys8r7P1H10"
      )
      .then(() => console.log("Thank-you email sent"))
      .catch((err) => {
        console.error("Thank-you email error:", err);
        toast.error("Failed to send confirmation email to user.");
      });

    // Save to Google Sheets
    fetch(
      "https://script.google.com/macros/s/AKfycbw4zK1fYsztDbIjzGbMoUWlF5TY4AWMUfftaSAptFzQ3TVJaSGDIyTB6mThG5KRVZwl/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      }
    )
      .then(() => console.log("Saved to Google Sheets"))
      .catch((err) => console.error("Google Sheets error:", err));
  };

  return (
    <>
      <Toaster position="top-right" 
      toastOptions={{
       style: {
       marginTop: '80px', // push down
       marginRight: '20px', // push from right
      
    },
  }}/>
      <form
        onSubmit={sendEmail}
        className="md:bg-[#0a0908]/10  bg-[#0a0908]/20  rounded-b-[30px] md:rounded-none md:rounded-l-0 md:rounded-r-[30px] border-4 border-[#0a0908]/10 border-t-0 md:border-none md:mt-0 w-full ml-0 md:ml-[50px]"
      >
        <h1 className="text-[#0367fc] text-[30px]  md:text-[40px] mt-[30px] md:mt-[30px] text-center mb-2 font-bold">
          Send us message
        </h1>

        {/* Name */}
        <label className="font-bold md:ml-[90px] mt-[14px] ml-[20px] text-[20px] md:text-[24px]">Name</label>
        <br />
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          name="name"
          className="bg-[#f7f7f7] md:ml-[90px] mt-[14px] pl-[20px] ml-[20px] rounded-[5px] md:rounded-[10px] w-[280px] h-[40px] md:w-[331px] md:h-[50px]"
          required
        />
        <br />

        {/* Phone Number */}
        <label className="font-bold md:ml-[90px] mt-[20px] ml-[20px] text-[20px] md:text-[24px] block">
          Phone Number
        </label>
        <div className="flex md:ml-[90px] mb-[20px] mt-[14px]">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="bg-[#f7f7f7] rounded-[5px] ml-5 md:ml-2 md:rounded-[10px] w-[60px] h-[40px] md:w-[75px] md:h-[50px] md:pl-3 md:pr-2 align-middle mr-4 cursor-pointer"
          >
            {codes.map((item, index) => (
              <option key={index} value={item.code}>
                {item.code}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Phone"
            value={formData.phone}
            name="phone"
              onChange={(e) => {
                 const onlyNums = e.target.value.replace(/\D/g, ""); // Remove non-digits
                     if (onlyNums.length <= 10) {
                       handleChange({ target: { name: "phone", value: onlyNums } });
                     }
                   }}
            maxLength={10}
            className="bg-[#f7f7f7] pl-[20px]  ml-1 md:ml-[10px] rounded-[5px] md:rounded-[10px] w-[200px] h-[40px] md:w-[240px] md:h-[50px]  "
            required
          />
        </div>

        {/* Email */}
        <label className="font-bold md:ml-[90px] ml-[20px] text-[20px] md:text-[24px] ">Email</label>
        <br />
        <input
          type="email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          placeholder="Ex:user@gmail.com"
          className="bg-[#f7f7f7] md:ml-[90px] mt-[14px] mb-[20px] pl-[20px]  ml-[20px] rounded-[5px] md:rounded-[10px] w-[280px] h-[40px] md:w-[331px] md:h-[50px] "
          required
        />

        {/* Message */}
        <label className="font-bold md:ml-[90px] ml-[20px] text-[20px] md:text-[24px] ">Message</label>
        <br />
        <textarea
          value={formData.message}
          onChange={handleChange}
          name="message"
          placeholder="Type your Message here...."
          className="bg-[#f7f7f7] ml-[20px] md:ml-[90px] mt-[14px] pl-[20px] pt-[10px] rounded-[5px] w-[280px] h-[100px] md:rounded-[10px] md:w-[331px] md:h-[100px]"
          required
        />

        {/* Submit button */}
        <button
          className="bg-[#0367fc]  ml-[100px] w-[120px] h-[40px] md:w-[331px] md:h-[50px] text-[24px] font-bold rounded-[5px] md:rounded-[10px] text-[#f7f7f7] flex items-center justify-center md:mx-[90px] mt-6 mb-6 md:mb-0 cursor-pointer hover:bg-[#0367fc]/80 active:scale-95 transition-all duration-150"
          type="submit"
          disabled={loading}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
