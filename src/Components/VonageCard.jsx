import React from "react";
import { FaArrowRight } from "react-icons/fa";

const VonageCard = ({ imageSrc, logoSrc, number, color, text, linkText }) => {
  return (
    <div
      className={`bg-white w-2/6 rounded-3xl p-9 border-${color} border shadow transition-opacity duration-500 ease-out`}
    >
      <img src={logoSrc} alt="Logo" className="w-48" />
      <p className={`text-6xl text-${color} font-bold mt-8`}>{number}</p>
      <span className="mt-9 text-[#1A4162] font-semi-bold text-xl flex gap-3 items-center">
        {text}
      </span>
      <span className="mt-9 text-[#006BFF] font-semi-bold text-xl flex gap-3 items-center pt-12">
        {linkText}
        <FaArrowRight />
      </span>
    </div>
  );
};

export default VonageCard;
