import React from "react";
import DashNav from "./DashNav";
import Button from "../Components/button/Button";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { MdFilterList } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { CiDollar, CiSearch } from "react-icons/ci";

const RoutingDash = () => {
  return (
    <div className="">
      <DashNav />
      <div className="p-3  ">
        <Button
          afterIcon={
            <HiOutlineQuestionMarkCircle className="w-6 h-6 font-extrabold " />
          }
          title="Routing"
          type="secondary"
          extraStyles="h- hover:bg-transparent rounded-full w- flex items-center justify-center text-black font-semibold text-3xl border-none"
        />
      </div>
      <div className="shadow-md border-2 border-blue-600 m-7 bg-blue-50 rounded-md flex items-center justify-between p-6">
        <Button
          title="Upgrade to the Standard plan to access this feature and other advanced scheduling tools."
          beforeIcon={
            <CiDollar className="w-6 h-6 font-extrabold text-blue-600" />
          }
          type="secondary"
          extraStyles="h- hover:bg-transparent rounded-full flex items-center justify-center text-black font-light text-sm border-none"
        />
        <Button
          title="Explore the Standard plan"
          type="secondary"
          extraStyles="bg-blue-600 rounded-full flex items-center justify-center text-white font-normal text-sm border-none h-11"
        />
      </div>

      <div className="flex items-center justify-center flex-col ">
        <img
          src="https://assets.calendly.com/assets/frontend/media/routing_forms_icon-cdb9903527c4a970315b.svg"
          alt="Workflows Icon"
        />
        <p className="font-semibold text-xl mb-5 text-blue-950 text-center">
          Qualify, route, and schedule meetings from your website
        </p>
        <p className="font-light text-blue-900 mb-5 text-center w-3/5 flex items-center justify-center">
          Create or import an existing marketing form. Set up screening rules
          that send people to a specific booking page or URL based on their
          responses.
        </p>
        <Button
          title="Learn More"
          beforeIcon={
            <HiOutlineQuestionMarkCircle className="w-4 h-4 font-thin" />
          }
          afterIcon={<FaAngleRight className="w-4 h-4 font-thin" />}
          type="secondary"
          extraStyles="h- hover:bg-transparent rounded-full flex items-center justify-center text-black font-light text-sm border-none text-blue-700"
        />
         <Button
          title="New routing form"
          beforeIcon={
            <GoPlus className="w-6 h-6 font-extrabold text-blue-600" />
          }
          type="secondary"
          extraStyles="bg-blue-100 rounded-full flex items-center justify-center text-black font-light text-sm border-none"
        />
      </div>

    </div>
  );
};

export default RoutingDash;
