import React, { useState } from "react";
import Button from "../Components/button/Button";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import DashNav from "./DashNav";
import {
  MdArrowDropDown,
  MdFilterList,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { IoIosArrowDown, IoMdInformationCircleOutline } from "react-icons/io";
import ToggleSwitch from "../Images/ToggleSwitch";
import { CgImport } from "react-icons/cg";
import { IoListOutline } from "react-icons/io5";
import { FiCalendar } from "react-icons/fi";
import { HiSpeakerphone } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { LiaTimesSolid } from "react-icons/lia";
import { CiCirclePlus } from "react-icons/ci";
import { PiCopySimple } from "react-icons/pi";
import Days from "./Days";

const AvailabilityDash = ({ clickedIndex }) => {
  return (
    <div className=" w-full  pb-20 ">
      <DashNav />
      <div className="p-3">
        <Button
          title="Availability"
          type="secondary"
          extraStyles="h- hover:bg-transparent rounded-full w- flex items-center justify-center text-black font-bold text-2xl border-none"
        />
      </div>
      <div className="flex  items-center  ml-3 mr-8 border-b border-gray-200 ">
        <div className="flex ">
          <div className=" ">
            <Button
              title="Default Schedule"
              type="secondary"
              extraStyles="hover:bg-white rounded-md w- flex items-center justify-center text-black font-light text-md border-none "
            />
          </div>
          <div className=" flex items-center justify-center">
            <Button
              title="Holidays"
              type="secondary"
              extraStyles="hover:bg-white  border-none "
            />
          </div>
          <div className=" flex items-center justify-center">
            <Button
              title="Calendar Settings"
              type="secondary"
              extraStyles="hover:bg-white  border-none "
            />
          </div>
        </div>
      </div>
      <div className="shadow-md border border-blue-200 m-7 rounded-md  ">
        <div className="border-blue-200 border-b p-3 flex gap-2 text-gray-500  flex-col">
          <div className="flex  justify-between items-center ">
            <div className="flex">
              <Button
                title="Default Schedule"
                type="secondary"
                extraStyles="hover:bg-white  border-none font-light"
              />
            </div>
            <div className="flex gap-2  bg-gray-100 rounded-lg p-1 text-blue-950">
              <Button
                title="List"
                beforeIcon={<IoListOutline className="w-4 h-4" />}
                type="secondary"
                extraStyles="bg-white rounded-md shadow-lg border-none "
              />
              <Button
                title="Calendar"
                beforeIcon={<FiCalendar className="w-4 h-4" />}
                type="secondary"
                extraStyles="bg-white rounded-md shadow-lg border-none "
              />
            </div>
          </div>
          <div className="bg-blue-100 w-full  rounded-md p-3 flex items-center text-blue-950 font-light mt-3 mb-3">
            <Button
              beforeIcon={<HiSpeakerphone className="w-4 h-4" />}
              type="secondary"
              extraStyles="bg-none  border-none "
            />
            <p className="flex gap-2 items-center">
              Updating your schedule here will update it on{" "}
              <span className="flex text-blue-700 items-center">
                1 event type
                <Button
                  beforeIcon={<FaAngleDown className="w-4 h-4" />}
                  type="secondary"
                  extraStyles="bg-none  border-none items-center "
                />
              </span>
            </p>
          </div>
        </div>

        <div className="flex  p-5 justify-between items-center mr-10">
          <div className="text-blue-950 font-bold">
            <Button
              title="Weekly Hours"
              beforeIcon={<FaRotate className="w-4 h-4" />}
              type="secondary"
              extraStyles="bg-none  border-none items-center "
            />
            <p className="pl-2 font-light">
              Set when you are typically available for meetings
            </p>
          </div>
          <div className="text-blue-950 font-bold">
            <Button
              title="Date-specific hours"
              beforeIcon={<FiCalendar className="w-4 h-4" />}
              type="secondary"
              extraStyles="bg-none  border-none items-center "
            />
            <p className="pl-2 font-light">Adjust hours for specific days</p>
          </div>
          <div>
            <Button
              title="Hours"
              beforeIcon={<GoPlus className="w-4 h-4" />}
              type="secondary"
              extraStyles="bg-none  border h-8  items-center "
            />
          </div>
        </div>

        <Days />
      </div>
    </div>
  );
};

export default AvailabilityDash;
