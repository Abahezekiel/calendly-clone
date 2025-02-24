import React from "react";
import Button from "../Components/button/Button";
import { LiaTimesSolid } from "react-icons/lia";
import { CiCirclePlus } from "react-icons/ci";
import { PiCopySimple } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa";

const days = [
  { day: "S", startPlaceholder: "09:00", endPlaceholder: "17:00" },
  { day: "M", startPlaceholder: "09:00", endPlaceholder: "17:00" },
  { day: "T", startPlaceholder: "09:00", endPlaceholder: "17:00" },
  { day: "W", startPlaceholder: "09:00", endPlaceholder: "17:00" },
  { day: "T", startPlaceholder: "09:00", endPlaceholder: "17:00" },
  { day: "F", startPlaceholder: "09:00", endPlaceholder: "17:00" },
  { day: "S", startPlaceholder: "09:00", endPlaceholder: "17:00" },
];

// This is your DayInput component
const DayInput = ({ day, startPlaceholder, endPlaceholder }) => (
  <div className="flex gap-5 items-center ml-5 pt-2">
    <span className="rounded-full bg-blue-800 text-white w-6 h-6 items-center justify-center flex text-sm">
      {day}
    </span>
    <span>
      <input
        type="text"
        placeholder={startPlaceholder}
        className="w-20 bg-gray-50 p-2 rounded-md"
      />
    </span>
    <span>-</span>
    <span>
      <input
        type="text"
        placeholder={endPlaceholder}
        className="w-20 bg-gray-50 p-2 rounded-md"
      />
    </span>
    <span className="flex w-20">
      <Button
        beforeIcon={<LiaTimesSolid className="w-4 h-4" />}
        type="secondary"
        extraStyles="bg-none border-none items-center "
      />
      <Button
        beforeIcon={<CiCirclePlus className="w-4 h-4" />}
        type="secondary"
        extraStyles="bg-none border-none items-center "
      />
      <Button
        beforeIcon={<PiCopySimple className="w-4 h-4" />}
        type="secondary"
        extraStyles="bg-none border-none items-center "
      />
    </span>
  </div>
);

const TimeZoneButton = () => (
  <div className="p-5 text-blue-800 text-xs flex items-center mb-24">
    <p>West Africa Time</p>
    <Button
      beforeIcon={<FaAngleDown className="w-4 h-4" />}
      type="secondary"
      extraStyles="bg-none border-none items-center "
    />
  </div>
);

const Days = () => {
  return (
    <>
      {days.map((item, index) => (
        <DayInput
          key={index}
          day={item.day}
          startPlaceholder={item.startPlaceholder}
          endPlaceholder={item.endPlaceholder}
        />
      ))}
      
      {/* The TimeZoneButton appears only once, at the bottom */}
      <TimeZoneButton />
    </>
  );
};

export default Days;
