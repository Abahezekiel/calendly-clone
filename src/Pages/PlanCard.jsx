import React from "react";
import FeatureList from "./FeatureList"; // Assuming you have a separate FeatureList component
import Button from "../Components/button/Button"; // Assuming this is your Button component
import { FaArrowRight } from "react-icons/fa";

const PlanCard = ({
  planName,
  description,
  price,
  features,
  buttonText,
  buttonAction,
  isRecommended,
  buttonExtraStyles,
  children
}) => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm p-7">
      {/* "Recommended" label */}
      <p className={`flex justify-end ${isRecommended ? 'bg-blue-800' : ''} rounded-tr-2xl w-20 items-end`}>
        {isRecommended ? 'Recommended' : ''}
      </p>

      {/* Plan details */}
      <p className="text-blue-950 font-bold text-xl">{planName}</p>
      <p className="text-blue-900 font-xs">{description}</p>

      {/* Plan price */}
      {price && (
        <p className="text-blue-950 font-bold pt-8 text-2xl">{price}</p>
      )}

      {/* Main action button */}
      <button
        className={`bg-blue-600 px-16 py-3 text-white rounded-md mt-8 font-semibold ${buttonExtraStyles}`}
        onClick={buttonAction}
      >
        {buttonText}
      </button>

      {/* Features list */}
      <FeatureList features={features} />

      {/* Optional "See all features" button */}
      {children && (
        <div className="pt-10">
          {children} 
        </div>
      )}
    </div>
  );
};

export default PlanCard;
