import { IoMdCheckmark } from "react-icons/io";
import Button from "../Components/button/Button";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import Billed from "./Billed";

const Pricing = () => {
  return (
    <div className=" w-full pb-10 pt-20 bg-slate-100">
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
          extraStyles=" bg-gray-300 rounded-full flex items-center justify-center text-blue-900 font-light text-xs border-none h-6 "
        />
      </div>
      

      <Billed />
    </div>
  );
};

export default Pricing;
