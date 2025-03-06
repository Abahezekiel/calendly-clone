import React from 'react';
import Button from "../Components/button/Button";
import { FaArrowRight } from 'react-icons/fa';

const EbookCard = ({ title, imageUrl, buttonType, buttonText, buttonLink }) => {
  return (
    <div className="group">
      <div className="pb-5">
        <img src={imageUrl} alt={title} className=" w-96 rounded-3xl transition-transform duration-300 ease-in-out group-hover:scale-110" />
      </div>
      <Button
        title={buttonType}
        type="secondary"
        extraStyles="bg-blue-100 rounded-full flex items-center justify-center text-blue-900 font-light text-xs border-none h-6 "
      />
      <p className="pt-3 pb-3 text-blue-950 font-semibold text-xl w-72">{title}</p>
      <div className="ml-[-1rem]">
        <Button
          afterIcon={<FaArrowRight />}
          title={buttonText}
          type="secondary"
          extraStyles="rounded-full flex items-center justify-center text-blue-950 font-normal text-xl border-none h-6"
        />
      </div>
    </div>
  );
};

export default EbookCard;
