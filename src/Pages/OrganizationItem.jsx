import React from "react";
import { FaArrowRight } from "react-icons/fa";

function OrganizationItem({
  title,
  description,
  isVisible,
  handleToggle,
  handleBorderAnimationEnd,
  borderColor,
  bordersWidth,
  buttonText = "Learn more", // default button text is "Learn more"
  itemId,
}) {
  return (
    <div
      className={`bg-white pb-8 cursor-pointer relative ${isVisible ? "text-[#A6BBD1]" : ""}`}
      onClick={() => handleToggle(itemId)}
      key={itemId}
    >
      <h3
        className={`text-3xl font-medium mt-4 ${isVisible ? "text-[#A6BBD1]" : "text-[#0B3558]"}`}
      >
        {title}
      </h3>
      <div
        className={`transition-all duration-[1000ms] max-h-0 overflow-hidden ${isVisible ? "max-h-[500px]" : "max-h-0"}`}
      >
        <p className="text-xl w-5/6 pt-6 font-thin">{description}</p>
        <span className="mt-5 text-[#0B3558] font-semi-bold text-xl flex gap-3 items-center w-5/6">
          {buttonText}
          <FaArrowRight />
        </span>
      </div>
      <div
        className={`border-b-2 absolute bottom-0 left-0 ${bordersWidth[itemId]} ${
          isVisible ? `bg-${borderColor}` : "text-[#A6BBD1]"
        } h-2 transition-all duration-[1000ms]`}
        onTransitionEnd={() => handleBorderAnimationEnd(itemId)}
      ></div>
    </div>
  );
}

export default OrganizationItem;
