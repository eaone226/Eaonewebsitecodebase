import React from "react";

const Banner = () => {
  return (
 <section className="relative bg-[#0367fc] px-[120px] mt-[160px]">
  <div className=" h-[336px] relative ">
    <h1 className="text-[#f7f7f7] leading-[107px] text-[104px] font-black w-[483px]">
      Learning <span className="text-[#d2f801]">Without Limits</span>
    </h1>
    <img
      src="/Banner.png"
      alt="Banner"
      className="absolute -top-[156px] right-0 h-[492px] "
    />
  </div>
</section>

  );
};

export default Banner;
