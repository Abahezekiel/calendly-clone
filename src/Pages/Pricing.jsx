import React, { useState, useEffect } from "react";
import { IoMdCheckmark } from "react-icons/io";
import Button from "../Components/button/Button";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import Billed from "./Billed";
import CoreFeat from "./CoreFeat";
import IntegratePrice from "./IntegratePrice";
import TeamsPrice from "./TeamsPrice";
import CustomPrice from "./CustomPrice";
import BusinessPrice from "./BusinessPrice";
import Faq from "./Faq";

const Pricing = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const featuresElement = document.getElementById("features");
    const position = featuresElement.getBoundingClientRect();
    if (position.top <= 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full pb-10 pt-20 bg-slate-100">
      <p className="pt-20 flex justify-center items-center font-bold text-5xl text-blue-950">
        Pick the perfect plan for your team
      </p>

      <div className="flex justify-end text-sm items-center pt-10 gap-2 mr-10 w-">
        <p className="text-blue-500">Billed monthly</p>
        <p className="border-black border-l pl-2 text-blue-950">
          Billed yearly
        </p>
        <Button
          title="Save up to 20%"
          type="secondary"
          extraStyles="bg-gray-300 rounded-full flex items-center justify-center text-blue-900 font-light text-xs border-none h-6"
        />
      </div>

      <Billed />

      <div className="flex gap-4 bg-white mt-20 pt-32 p-7">
        <div
          id="features"
          className={`w-96 ${isSticky ? "sticky" : ""}`}
        >
          <p className="text-blue-500 font-normal text-xl">FEATURES</p>
          <p className="text-blue-950 font-bold text-3xl pt-3">
            Features by plan
          </p>
          <p className="text-gray-500 w- text-lg font-light pt-3">
            Find the subscription that makes the most sense for you or your team
          </p>
        </div>
        <div className="bg-slate-50 w-72 border-b border-gray-200 flex flex-col items-center justify-center">
          <p className="font-semibold text-lg text-blue-950">Free</p>
          <p className="pt-7 font-semibold text-lg text-blue-950">
            Always Free
          </p>
        </div>
        <div className="bg-slate-50 w-72 border-b border-gray-200 flex flex-col items-center justify-center pb-3">
          <p className="font-semibold text-lg text-blue-950 pt-6">Standard</p>
          <p className="pb-4 font-semibold text-2xl text-blue-950">
            $12 <span className="text-xs ">/seat/mo</span>
          </p>
          <Button
            title="Upgrade to the Standard "
            type="secondary"
            extraStyles="bg-blue-600 rounded-md flex items-center justify-center text-white font-light text-sm border-none"
          />
        </div>
        <div className="bg-slate-50 w-72 border-b border-gray-200 flex flex-col items-center justify-center pb-3">
          <p className="font-semibold text-lg text-blue-950 pt-6">Teams</p>
          <p className="pb-4 font-semibold text-2xl text-blue-950">
            $20 <span className="text-xs ">/seat/mo</span>
          </p>
          <Button
            title="Upgrade to the Teams "
            type="secondary"
            extraStyles="bg-blue-600 rounded-md flex items-center justify-center text-white font-light text-sm border-none"
          />
        </div>
        <div className="bg-slate-50 w-72 border-b border-gray-200 flex flex-col items-center justify-center pb-3">
          <p className="font-semibold text-lg text-blue-950 pt-6">Enterprise</p>
          <p className="pb-4 font-semibold text-2xl text-blue-950">
            Contact Us
          </p>
          <Button
            title="Talk to sales "
            type="secondary"
            extraStyles="bg-blue-600 rounded-md flex items-center justify-center text-white font-light text-sm border-none"
          />
        </div>
      </div>

      <CoreFeat />
      <IntegratePrice />
      <TeamsPrice />
      <CustomPrice />
      <BusinessPrice />
      <Faq />
    </div>
  );
};

export default Pricing;
