import { IoMdCheckmark } from "react-icons/io";
import Button from "../Components/button/Button";
import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { GoPlus } from "react-icons/go";

const CoreFeat = () => {
  return (
    <>
    <div className="p-7 bg-white ">
      <p className="text-xl text-blue-950 pb-4 font-semibold">Core Features</p>
      <div className="flex  border-t border-gray-300 items-center justify-center gap-3  text-gray-500 text-sm ">
        <p className="w-96">Event types</p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          1
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          Unlimited
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          Unlimited
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          Unlimited
        </p>
      </div>
      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">Calendar connections per person</p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          1
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          6
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          6
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          6
        </p>
      </div>
      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">Number of meetings that can be booked</p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          Unlimited
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          Unlimited
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          Unlimited
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          Unlimited
        </p>
      </div>
      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">
          Create one-on-one events, meeting polls, and one-off meetings
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">Customize your booking link</p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">View contact profiles and scheduling activity</p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">
          Share availability directly from contact profiles
        </p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">
          Book meetings on behalf of others with event type permissions
        </p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">Create group events</p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">Create collective events</p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">Create round robin events</p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">
          Automate reminders, reconfirmations, and follow-ups
        </p>
        <p className="w-72 p-5 h-[4.7rem] bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">Update your cancellation policy</p>
        <p className="w-72 p-5 h-[4.7rem] bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">
          View analytics and insights about your scheduled meetings
        </p>
        <p className="w-72 p-5 h-[4.7rem] bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex m-  border-t border-gray-200  border-b items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">Mobile app & browser extension</p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>






    
    </div>
    </>
  );
};

export default CoreFeat;
