import React from 'react';
import { IoMdCheckmark } from "react-icons/io";

const FeatureList = ({ features }) => {
  return (
    <div className="pt-5 text-blue-950">
      {features.map((feature, index) => (
        <div key={index} className="flex gap-2 items-center justify-center text-sm pt-2">
          <p><IoMdCheckmark /></p>
          <p className="underline decoration-dotted">{feature}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
