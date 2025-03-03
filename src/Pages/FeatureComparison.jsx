import React from 'react'
import Button from "../Components/button/Button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiInfo } from "react-icons/fi";
import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";

const FeatureComparison = () => {
  return (
    <div className="border border-gray-200 h-auto w-full mt-8 flex text-xs text-blue-950 font-semibold flex-col">
    {/* Pricing Section */}
    <div className="flex w-full">
      <div className="w-72 pt-3 p-3 text-lg border-b-gray-200 border">
        Core features
      </div>
      <div className="w-48 pt-3 flex flex-col items-center border-b-gray-200 border">
        <p>FREE</p>
        <span>$0</span>
      </div>
      <div className="w-48 pt-3 flex flex-col items-center border-b-gray-200 border">
        <p>STANDARD</p>
        <span>$10</span>
        <div className="font-light text-sm pt-3 pb-2 border-b-gray-200">
          <Button
            title="Select"
            afterIcon={<MdOutlineKeyboardArrowRight />}
            type="secondary"
            extraStyles="border-none"
          />
        </div>
      </div>
      <div className="w-48 pt-3 flex flex-col items-center border-b-gray-200 border">
        <p>TEAMS</p>
        <span>$16</span>
        <div className="font-light text-sm pt-3 pb-2">
          <Button
            title="Select"
            afterIcon={<MdOutlineKeyboardArrowRight />}
            type="secondary"
            extraStyles="border-none"
          />
        </div>
      </div>
      <div className="w-48 pt-3 flex flex-col items-center border-b-gray-200 border">
        <p>ENTERPRISE</p>
        <span>Starts at $15k</span>
        <div className="font-light text-sm pt-3 pb-2 border-b-gray-200">
          <Button
            title="Select"
            afterIcon={<MdOutlineKeyboardArrowRight />}
            type="secondary"
            extraStyles="border-none"
          />
        </div>
      </div>
    </div>

    {/* Feature Section */}
    <div className="flex w-full ">
      {/* Meeting Polls */}
       <div className="flex justify-between  w-72 p-3 text-base font-light items-center ">
        <div>
          <p className="text-light w-full">Meeting Polls</p>
        </div>{" "}
        <div>
          <Button
            afterIcon={<FiInfo />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-black font-light text-md border-none"
          />
        </div>
      </div>
      <div className="w-48 flex justify-center items-center border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center  border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
    </div>

    <div className="flex w-full bg-slate-50">
      {/* One-on-Ones */}
       <div className="flex justify-between  w-72 p-3 text-base font-light items-center ">
        <div>
          <p className="text-light w-full">One-on-Ones</p>
        </div>{" "}
        <div>
          <Button
            afterIcon={<FiInfo />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-black font-light text-md border-none"
          />
        </div>
      </div>
      <div className="w-48 flex justify-center items-center  border-l">
        <p className="font-light text-base">Only 1</p>
        
      </div>
      <div className="w-48 flex justify-center items-center border-l ">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center  border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
    </div>
    <div className="flex w-full ">
      {/* Meeting Polls */}
       <div className="flex justify-between  w-72 p-3 text-base font-light items-center ">
        <div>
          <p className="text-light w-full">Group event types</p>
        </div>{" "}
        <div>
          <Button
            afterIcon={<FiInfo />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-black font-light text-md border-none"
          />
        </div>
      </div>
      <div className="w-48 flex justify-center items-center border-l">
      
      </div>
      <div className="w-48 flex justify-center items-center  border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
    </div>

    <div className="flex w-full bg-slate-50">
      {/* One-on-Ones */}
       <div className="flex justify-between  w-72 p-3 text-base font-light items-center ">
        <div>
          <p className="text-light w-full">Collective event types</p>
        </div>{" "}
        <div>
          <Button
            afterIcon={<FiInfo />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-black font-light text-md border-none"
          />
        </div>
      </div>
      <div className="w-48 flex justify-center items-center  border-l">
      
      </div>
      <div className="w-48 flex justify-center items-center border-l ">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center  border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
    </div>
    <div className="flex w-full ">
      {/* Meeting Polls */}
       <div className="flex justify-between  w-72 p-3 text-base font-light items-center ">
        <div>
          <p className="text-light w-full">Round robin event types</p>
        </div>{" "}
        <div>
          <Button
            afterIcon={<FiInfo />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-black font-light text-md border-none"
          />
        </div>
      </div>
      <div className="w-48 flex justify-center items-center border-l">
       
      </div>
      <div className="w-48 flex justify-center items-center  border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
    </div>

    <div className="flex w-full bg-slate-50">
      {/* One-on-Ones */}
       <div className="flex justify-between  w-72 p-3 text-base font-light items-center ">
        <div>
          <p className="text-light w-full">Email notifications for bookings and cancellations</p>
        </div>{" "}
        <div>
          <Button
            afterIcon={<FiInfo />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-black font-light text-md border-none"
          />
        </div>
      </div>
      <div className="w-48 flex justify-center items-center  border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center border-l ">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center  border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
    </div>
    <div className="flex w-full ">
      {/* Meeting Polls */}
       <div className="flex justify-between  w-72 p-3 text-base font-light items-center ">
        <div>
          <p className="text-light w-full">Email notifications for reminders and follow-ups
          </p>
        </div>{" "}
        <div>
          <Button
            afterIcon={<FiInfo />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-black font-light text-md border-none"
          />
        </div>
      </div>
      <div className="w-48 flex justify-center items-center border-l">
       
      </div>
      <div className="w-48 flex justify-center items-center  border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
    </div>

    <div className="flex w-full bg-slate-50">
      {/* One-on-Ones */}
       <div className="flex justify-between  w-72 p-3 text-base font-light items-center ">
        <div>
          <p className="text-light w-full">Customize workflows for all forms of notifications</p>
        </div>{" "}
        <div>
          <Button
            afterIcon={<FiInfo />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-black font-light text-md border-none"
          />
        </div>
      </div>
      <div className="w-48 flex justify-center items-center  border-l">
      
      </div>
      <div className="w-48 flex justify-center items-center border-l ">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center  border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
    </div>
    <div className="flex w-full ">
      {/* Meeting Polls */}
       <div className="flex justify-between  w-72 p-3 text-base font-light items-center ">
        <div>
          <p className="text-light w-full">View Contact profiles and scheduling activity</p>
        </div>{" "}
        <div>
          <Button
            afterIcon={<FiInfo />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-black font-light text-md border-none"
          />
        </div>
      </div>
      <div className="w-48 flex justify-center items-center border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center  border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
    </div>

    <div className="flex w-full bg-slate-50">
      {/* One-on-Ones */}
       <div className="flex justify-between  w-72 p-3 text-base font-light items-center ">
        <div>
          <p className="text-light w-full">Share availability directly from Contact profiles</p>
        </div>{" "}
        <div>
          <Button
            afterIcon={<FiInfo />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-black font-light text-md border-none"
          />
        </div>
      </div>
      <div className="w-48 flex justify-center items-center  border-l">
      
      </div>
      <div className="w-48 flex justify-center items-center border-l ">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center  border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
    </div>
    <div className="flex w-full ">
      {/* Meeting Polls */}
       <div className="flex justify-between  w-72 p-3 text-base font-light items-center ">
        <div>
          <p className="text-light w-full">Add links or redirect users from confirmation page</p>
        </div>{" "}
        <div>
          <Button
            afterIcon={<FiInfo />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-black font-light text-md border-none"
          />
        </div>
      </div>
      <div className="w-48 flex justify-center items-center border-l">
       
      </div>
      <div className="w-48 flex justify-center items-center  border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
    </div>

    <div className="flex w-full bg-slate-50">
      {/* One-on-Ones */}
       <div className="flex justify-between  w-72 p-3 text-base font-light items-center ">
        <div>
          <p className="text-light w-full">Create forms and route invitees based on answers</p>
        </div>{" "}
        <div>
          <Button
            afterIcon={<FiInfo />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-black font-light text-md border-none"
          />
        </div>
      </div>
      <div className="w-48 flex justify-center items-center  border-l">
       
      </div>
      <div className="w-48 flex justify-center items-center border-l ">
       
      </div>
      <div className="w-48 flex justify-center items-center  border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
    </div>
    <div className="flex w-full ">
      {/* Meeting Polls */}
       <div className="flex justify-between  w-72 p-3 text-base font-light items-center ">
        <div>
          <p className="text-light w-full">Route invitees with 3rd party forms like Marketo, HubSpot, and Pardot
          </p>
        </div>{" "}
        <div>
          <Button
            afterIcon={<FiInfo />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-black font-light text-md border-none"
          />
        </div>
      </div>
      <div className="w-48 flex justify-center items-center border-l">
       
      </div>
      <div className="w-48 flex justify-center items-center  border-l">
       
      </div>
      <div className="w-48 flex justify-center items-center border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
      <div className="w-48 flex justify-center items-center border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
    </div>

    <div className="flex w-full bg-slate-50">
      {/* One-on-Ones */}
      <div className="flex justify-between  w-72 p-3 text-base font-light items-center ">
        <div>
          <p className="text-light w-full">Route invitees with Salesforce account owner lookup</p>
        </div>{" "}
        <div>
         
        </div>
      </div>
      <div className="w-48 flex justify-center items-center  border-l">
      
      </div>
      <div className="w-48 flex justify-center items-center border-l ">
      
      </div>
      <div className="w-48 flex justify-center items-center  border-l">
        
      </div>
      <div className="w-48 flex justify-center items-center border-l">
        <Button
          afterIcon={<FaCheckCircle />}
          type="secondary"
          extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
        />
      </div>
    </div>
  </div>
  )
}

export default FeatureComparison
