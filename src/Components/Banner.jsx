import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
 <section className="relative bg-[#0367fc] px-[120px] mt-[160px]">
  <div className=" h-[336px] relative ">
    <motion.h1 className="text-[#f7f7f7] leading-[107px] text-[104px] font-black w-[483px]"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}>
      Learning <span className="text-[#d2f801]">Without Limits</span>
    </motion.h1>
    <motion.img
      src="/Banner.png"
      alt="Banner"
      className="absolute -top-[156px] right-0 h-[492px] "
       initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}></motion.img>
   
  </div>
</section>

  );
};

export default Banner;
