import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Pagination = ({ currentIndex, total, onLeftClick, onRightClick }) => {
  return (
    <div className="flex gap-5 items-center justify-center">
    {/* Left arrow is conditionally rendered based on current index */}
    {currentIndex > 0 && (
      <span
        onClick={onLeftClick}
        className="hover:text-blue-100 bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center font-light cursor-pointer"
      >
        <FaArrowLeft />
      </span>
    )}

    <p className="text-blue-500">
      {currentIndex + 1} <span className="text-gray-500">/ {total}</span>
    </p>

    {/* Right arrow is conditionally rendered based on current index (hidden at last page) */}
    {currentIndex < total - 1 && (
      <span
        onClick={onRightClick}
        className="hover:text-blue-100 bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center font-light cursor-pointer"
      >
        <FaArrowRight />
      </span>
    )}
  </div>
  );
};

export default Pagination;
