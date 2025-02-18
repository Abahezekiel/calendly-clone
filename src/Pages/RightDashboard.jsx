import React, { useState } from "react";
import Button from "../Components/button/Button";
import { GoPlus } from "react-icons/go";
import { FiUserPlus } from "react-icons/fi";
import { TiArrowSortedDown } from "react-icons/ti";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { PiCopySimple } from "react-icons/pi";
import MeetingsDash from "./MeetingsDash";
import DashNav from "./DashNav";

const RightDashboard = ({ clickedIndex }) => {
  return (
    <div className="h-screen w-full">
      {/* First Tab (Index 0) */}
      <div
        className={`h-screen w-full ${
          clickedIndex === 0 ? "bg" : "hidden"
        } transition-all duration-300`}
      >

        <DashNav />
        <div className="p-3">
          <Button
            title="Event types"
            afterIcon={<HiOutlineQuestionMarkCircle className="w-4 h-4" />}
            type="secondary"
            extraStyles="h- hover:bg-transparent rounded-full w- flex items-center justify-center text-black font-bold text-2xl border-none"
          />
        </div>

        <div className="flex justify-between border-b m-7 pb-5">
          <div className="flex gap-6">
            <span className="rounded-full bg-blue-50 w-10 h-10 items-center justify-center flex">
              A
            </span>
            <div className="leading-5">
              <p className="font-thin">Abah Ezekiel</p>
              <span className="text-blue-700 font-light">
                https://calendly.com/abahezekiel75
              </span>
            </div>
          </div>
          <div className="flex">
            <Button
              title="New Event types"
              beforeIcon={<GoPlus className="w-5 h-5 font-thin" />}
              onClick={() => alert("New Event Button Clicked")}
              type="secondary"
              extraStyles="h-8 hover:bg-transparent rounded-full w- flex items-center justify-center text-black font-light text-sm border-blue-900"
            />
            <Button
              beforeIcon={<IoSettingsOutline className="w-5 h-5 font-thin" />}
              onClick={() => alert("Create Button Clicked")}
              type="secondary"
              extraStyles="h-8 hover:bg-transparent rounded-full w- flex items-center justify-center text-black font-light border-none"
            />
          </div>
        </div>

        <div className="border-gray-300 border w-72 m-7 rounded shadow-md hover:scale-105">
          <p className="bg-purple-600 h-2 rounded-t"></p>
          <div className="m-4 flex justify-between">
            <input type="checkbox" />
            <Button
              beforeIcon={<IoSettingsOutline className="w-4 h-4" />}
              afterIcon={<TiArrowSortedDown className="w-4 h-4" />}
              onClick={() => alert("Create Button Clicked")}
              type="secondary"
              extraStyles="h- hover:bg-transparent rounded-full w- flex items-center justify-center text-black font-bold text-2xl border-none"
            />
          </div>
          <div className="m-4">
            <p className="text-xl font-light text-blue-950">
              30 Minutes Meeting
            </p>
            <p className="text-sm text-blue-950 font-extralight">
              30min, One-on-One
            </p>
            <p className="text-md text-blue-700 font-light hover:underline">
              View booking page
            </p>
          </div>
          <p className="border-t"></p>

          <div className="flex justify-between m-4 ml-10 items-center text-sm">
            <Button
              title="Copy link"
              beforeIcon={
                <PiCopySimple className="w-4 h-4 text-[#6DA5FF] font-bold" />
              }
              onClick={() => alert("Create Button Clicked")}
              type="secondary"
              extraStyles="h-8 hover:bg-transparent rounded-full w- flex items-center justify-center font-light text-blue-700 text-md border-none"
            />
            <Button
              title="Share"
              onClick={() => alert("Create Button Clicked")}
              type="secondary"
              extraStyles="h-8 hover:bg-transparent rounded-full w- flex items-center justify-center font-light text-blue-700 text-md"
            />
          </div>
        </div>
      </div>

      {/* Second Tab (Index 1) */}
      <div
        className={`h-screen w-full ${
          clickedIndex === 1 ? "" : "hidden"
        }`}
      >
        <MeetingsDash />
      </div>

      {/* Third Tab (Index 2) */}
      <div
        className={`h-screen w-full ${
          clickedIndex === 2 ? "bg-green-500" : "hidden"
        }`}
      >
        Availability
      </div>
    </div>
  );
};

export default RightDashboard;
