import { IoMdCheckmark } from "react-icons/io";
import Button from "../Components/button/Button";
import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import Billed from "./Billed";

const CustomPrice = () => {
  return (
    <div className="pt-20 bg-white p-7 ">
      <p className="text-xl text-blue-950 pb-4 font-semibold">Customizations</p>

      <div className="flex  border-t border-gray-300 items-center justify-center gap-3  text-gray-500 text-sm ">
        <p className="w-96">Add branding to your booking page</p>
        <p className="w-72   p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72   p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex  border-t border-gray-300 items-center justify-center gap-3  text-gray-500 text-sm ">
        <p className="w-96">Remove Calendly branding</p>
        <p className="w-72  h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72  p-5 bg-slate-100 items-center justify-center text-center">
        <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex  border-t border-gray-300 items-center justify-center gap-3  text-gray-500 text-sm ">
        <p className="w-96">
          Customize colors when you add Calendly to your website
        </p>
        <p className="w-72  h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72   p-5 bg-slate-100 items-center justify-center text-center">
        <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex  border-t border-gray-300 items-center justify-center gap-3  text-gray-500 text-sm ">
        <p className="w-96">
          Customize your confirmation page with links and redirects
        </p>
        <p className="w-72  h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72   p-5 bg-slate-100 items-center justify-center text-center">
        <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>
    </div>
  );
};

export default CustomPrice;
