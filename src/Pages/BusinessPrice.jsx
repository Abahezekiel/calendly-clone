import { IoMdCheckmark } from "react-icons/io";
import Button from "../Components/button/Button";
import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import Billed from "./Billed";

const BusinessPrice = () => {
  return (
    <div className="pt-20 bg-white p-7 ">
      <p className="text-xl text-blue-950 pb-4 font-semibold">Business Support</p>
      <div className="flex  border-t border-gray-300 items-center justify-center gap-3  text-gray-500 text-sm ">
        <p className="w-96">Help center access</p>
        <p className="w-72  p-5 bg-slate-100 items-center justify-center text-center">
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
        <p className="w-96">
        Calendly Community access
        </p>
        <p className="w-72  p-5 bg-slate-100 items-center justify-center text-center">
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
        <p className="w-96">
        24/7 Email support
        </p>
        <p className="w-72  p-5 bg-slate-100 items-center justify-center text-center">
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
        <p className="w-96">24/7 Live chat support</p>
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
        <p className="w-96">Data Deletion API</p>
        <p className="w-72  h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem]  p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center">
          
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
        <p className="w-96">Phone support</p>
        <p className="w-72  h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem]  p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center">
          
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
        <p className="w-96">Dedicated Calendly account partner</p>
        <p className="w-72  h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem]  p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center">
          
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
        <p className="w-96">Onboarding and implementation</p>
        <p className="w-72  h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem]  p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center">
          
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
        <p className="w-96">Adoption and outcome guidance</p>
        <p className="w-72  h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem]  p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center">
        
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
        <p className="w-96">Security and legal reviews</p>
        <p className="w-72  h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem]  p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center">
         
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

export default BusinessPrice;
