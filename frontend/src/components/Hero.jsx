import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="flex flex-col sm:flex-row border border-gray-400">
      {/* Left Section */}
      <div className="w-full sm:w-1/2 flex flex-col items-center justify-center py-10 sm:py-0">
        <div className="flex items-center gap-2">
          <span className="w-8 md:w-11 h-1 bg-[#414141]"></span>
          <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
        </div>
        <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
          Latest Arrivals
        </h1>
        <div className="flex items-center gap-2">
          <p className="font-semibold text-sm md:text-base hover:text-gray-700 transition-all cursor-pointer">
            SHOP NOW
          </p>
          <span className="w-8 md:w-11 h-1 bg-[#414141]"></span>
        </div>
      </div>

      {/* Right Section */}
      <img
        className="w-full sm:w-1/2 object-cover"
        src={assets.hero_img}
        alt="Showcasing our latest arrivals"
      />
    </section>
  );
};

export default Hero;
