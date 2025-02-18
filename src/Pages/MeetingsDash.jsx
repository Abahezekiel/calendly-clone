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

const MeetingsDash = ({ clickedIndex }) => {
  return (
    <div className="h-screen w-full  ">
      <DashNav />
      <div className="p-3">
        <Button
          title="Meetings"
          afterIcon={<HiOutlineQuestionMarkCircle className="w-4 h-4" />}
          type="secondary"
          extraStyles="h- hover:bg-transparent rounded-full w- flex items-center justify-center text-black font-bold text-2xl border-none"
        />
      </div>
      <div className="flex pr-8 items-center justify-between">
        <div className="flex">
          <div className="m-7 ">
            <Button
              title="My Calendly"
              afterIcon={<MdKeyboardArrowDown className="w-4 h-4" />}
              type="secondary"
              extraStyles="hover:bg-white rounded-md w- flex items-center justify-center text-black font-light text-md border-blue-200 "
            />
          </div>
          <div className=" flex items-center justify-center">
            <Button
              title="Show buffers"
              afterIcon={<IoMdInformationCircleOutline className="w-4 h-4" />}
              type="secondary"
              extraStyles="hover:bg-white  border-none "
            />
            <p>
              <ToggleSwitch />
            </p>
          </div>
        </div>
        <div>
          <p className="text-gray-500">Displaying 0 – 0 of 0 Events</p>
        </div>
      </div>
      <div className="shadow-md border border-blue-200 m-7 rounded-md ">
        <div className="border-blue-200 border-b p-3 flex gap-2 text-gray-500 items-center justify-between">
         <div className="flex">
         <Button
            title="Upcoming"
            type="secondary"
            extraStyles="hover:bg-white  border-none font-light"
          />
          <Button
            title="Pending"
            type="secondary"
            extraStyles="hover:bg-white  border-none font-light"
          />
          <Button
            title="Past"
            type="secondary"
            extraStyles="hover:bg-white  border-none font-light"
          />
          <Button
            title="Date Range"
            afterIcon={<MdArrowDropDown className="w-4 h-4" />}
            type="secondary"
            extraStyles="hover:bg-white  border-none "
          />
         </div>
         <div className="flex gap-2 pr-4">
         <Button
            title="Export"
            beforeIcon={<CgImport className="w-4 h-4" />}
            type="secondary"
            extraStyles=" hover:bg-transparent rounded-full h-8 border border-blue-900"
          />
          <Button
            title="Filter"
            beforeIcon={<MdFilterList className="w-4 h-4" />}
            afterIcon={<IoIosArrowDown className="w-4 h-4" />}
            type="secondary"
            extraStyles=" hover:bg-transparent rounded-full h-8 border border-blue-900"
          />
         </div>
        </div>
        <div className="flex items-center justify-center flex-col pt-14">
          <img src="https://assets.calendly.com/assets/frontend/media/no-events-2ed89b6c6379caebda4e.svg" alt="" className="w-24"/>
          <p className="text-blue-900 text-xl font-semibold">No Events Yet</p>
          <p className="pt-4 text-gray-500">Share Event Type links to schedule events.</p>
         <div className="pt-8 pb-10">
         <Button
              title="View Events Types"
              type="secondary"
              extraStyles="bg-blue-600 text-white   h-8 font-semibold w-54 text-sm "
            />
         </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingsDash;
