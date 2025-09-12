import React from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Herosection = () => {
  // Parent container animation for stagger
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2, // delays each child slightly
      },
    },
  };

  // Child animations (text, buttons)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="h-[598px] w-full px-[120px] mt-15 bg-gradient-to-b from-[#0367FC]/30 to-[#F7F7F7]/30 font-family-inter"
    >
      <div className="flex flex-row">
        {/* Left content */}
        <motion.div className="flex flex-col" variants={containerVariants}>
          <motion.p className="text-[20px] pt-[127px]" variants={itemVariants}>
            Welcome to the
          </motion.p>

          <motion.h1
            className="text-[64px] w-[422px] text-[#0367fc] leading-[1.2] font-black"
            variants={itemVariants}
          >
            Beginning of{" "}
            <span className="text-[#0367fc] italic font-black">change.</span>
          </motion.h1>

          <motion.p
            className="w-[486px] text-[20px] mt-[24px]"
            variants={itemVariants}
          >
            Empowering your future through practical learning. Discover courses
            that match your career goals.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-row gap-[20px]"
            variants={itemVariants}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0367fc] mt-[63px] w-[245px] h-[60px] rounded-[14px] text-[#f7f7f7] text-[24px] font-bold flex items-center justify-center gap-2 hover:bg-[#d2f801] hover:text-[#0367fc]"
            >
              Join Course <ChevronRight className="mt-1" size={30} />
            </motion.button>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-[#0367fc] mt-[63px] w-[214px] pl-2 h-[60px] rounded-[14px] text-[#0367fc] text-[24px] font-bold flex items-center justify-center hover:bg-[#d2f801] gap-2"
              style={{ textDecoration: "none" }}
            >
              Enquire now <ChevronRight className="mt-1" size={30} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.img
          src="Hero.png"
          alt="Hero"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="w-[395px] ml-[138px] h-[518px] mt-[20px]"
        />
      </div>
    </motion.section>
  );
};

export default Herosection;
