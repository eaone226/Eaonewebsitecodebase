import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";
import WhyChooseUs from "../Components/why";
import { FaEnvelope } from "react-icons/fa";
import Footer from "../Components/Footer";
import { Link as RouterLink } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { Toaster, toast } from "react-hot-toast";

const Businessscreen = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email) {
      toast.error("Please enter an email address!");
      return;
    }

    setLoading(true);

    const dataToSend = { email: formData.email };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,   // EmailJS Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_NEWSLETTER,  // EmailJS Template ID
        dataToSend,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // EmailJS Public Key
      )
      .then(() => {
        toast.success("Email sent successfully!");
        setFormData({ email: "" });
      })
      .catch((err) => {
        console.error("Error sending email:", err);
        toast.error("Failed to send email.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      {/* Toast container */}
      <Toaster position="top-right"
       toastOptions={{
       style: {
       marginTop: '80px', // push down
       marginRight: '20px', // push from right
      
    },
  }} />

      {/* Navbar section */}
      <Navbar />

      <div
        className="relative mt-[60px] md:mt-[60px] px-6 md:px-[120px] w-full h-[300px] md:h-[455px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/Businesshero.png')" }}
      >
        {/* Text Content */}
        <div className="relative z-10 text-left">
          <p className="text-[20px] md:text-[32px] font-bold leading-[0.5] text-[#f7f7f7]">
            We are here to help you!
          </p>
          <h1 className="text-[20px] md:text-[64px] font-bold text-[#D2F801]">
            Welcome to ECIA
          </h1>
          <p className="text-[24px] ml-3 text-white md:w-[531px]">
            Transforming Ideas into Brands with Lasting Impact.
          </p>
          <RouterLink to="/contact">
            <button className="mt-10 ml-3 bg-[#f7f7f7] hover:bg-[#0255d0] text-[14px] md:text-[20px] text-center text-[#0367fc] hover:text-[#f7f7f7] w-[130px] md:w-[215px] h-[36px] md:h-[50px] font-bold rounded-lg cursor-pointer">
              Get Started
            </button>
          </RouterLink>
        </div>
      </div>

      {/* Services */}
      <Services />

      {/* Our expert Team */}
      <div className="md:mt-[80px] px-6 md:px-[120px]">
        <h1 className="text-[36px] font-bold md:text-center">Our Experienced Team</h1>
        <div className="flex  flex-col md:flex-row mt-[40px]">
          <p className="text-[26px] md:w-[576px]">
            We offer complete digital solutions from branding, logo design, social media handling, video editing to effective digital marketing strategies. Our services help businesses build strong identities, engage audiences, and drive lasting growth.
          </p>
          <img src="/expert.png" alt="expert" className=" mt-10 md:mt-0" />
        </div>
      </div>

      {/* Why choose us */}
      <WhyChooseUs />

      {/* Testimonials & Newsletter */}
      <div className="md:px-[120px] mb-[200px] mt-[80px]">
        <h2 className=" text-[36px] relative text-center md:text-left font-bold mb-[40px]">Client Testimonials</h2>

  <img src="/Rocket.png" alt="rocket" className="absolute top-[3740px] md:top-[2986px] md:right-5 w-[621px]" />

        <div>
          <div className="relative bg-[#0a0908]/5 md:h-[329px] rounded-[10px] mx-[20px] md:mx-0 flex flex-col w-[380px] md:w-full text-center">
            <h3 className="text-[20px] text-[25px]  md:text-[48px] mt-[20px] font-bold text-[#0367fc] mb-4">
              Ready to Start Our Project?
            </h3>
            <p className="mb-6 w-[340px] md:w-[620px] text-[16px] md:text-[20px] text-left ml-[22px] md:ml-[203px]">
              With all plans in place, we are ready to officially launch our project.
              We are excited to begin our collaboration and work towards a successful outcome.
            </p>
            <a href="https://www.behance.net/gallery/229571561/Branding-Service-Coaching" target="_blank" rel="noopener noreferrer">
              <button className="md:w-[196px] w-[150px] h-[48px] md:h-[58px] bg-[#0367fc] mb-5 md:mb-0 text-[20px] hover:bg-[#0367fc]/60 text-[#f7f7f7] font-bold rounded-[5px] md:rounded-[10px] flex items-center md:text-[24px] justify-center mt-[10px] ml-[100px] md:ml-[203px] cursor-pointer">
                Our Project
              </button>
            </a>
          </div>

          {/* Newsletter Section */}
          <div className="text-center py-12 relative">
            <h3 className=" text-[20px] md:text-[40px] font-bold mb-2">Never Miss An Opportunity</h3>
            <p className="mb-6  md:text-[20px]">
              Get in touch with us for queries, support, or collaboration
            </p>

            <form onSubmit={handleSubmit} className="flex justify-center">
             <div className="flex items-center h-[70px] w-[360px] md:w-[630px] bg-[#f7f7f7] border border-[#0367fc] rounded-[10px] overflow-hidden">
              <input
                 type="email"
                 placeholder="Enter your mail address"
                 className="flex-grow pl-[20px] bg-[#f7f7f7] focus:outline-none focus:ring-0 focus:bg-[#f7f7f7]"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 required
                 
               />
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex items-center justify-center h-full w-[70px] bg-[#0367fc] text-white ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  <FaEnvelope size={24} className="cursor-pointer" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Businessscreen;
