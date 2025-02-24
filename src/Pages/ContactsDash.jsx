import React from "react";
import DashNav from "./DashNav";
import Button from "../Components/button/Button";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa";

const ContactsDash = () => {
  return (
    <div className="">
      <DashNav />
      <div className="p-3 flex justify-between mr-5 ">
        <Button
          title="Contacts"
          afterIcon={<HiOutlineQuestionMarkCircle className="w-4 h-4" />}
          type="secondary"
          extraStyles="h- hover:bg-transparent rounded-full w- flex items-center justify-center text-black font-semibold text-3xl border-none"
        />

        <Button
          title="New Contacts"
          beforeIcon={<GoPlus className="w-4 h-4 font-thin" />}
          type="secondary"
          extraStyles="h- hover:bg-transparent rounded-full  flex items-center justify-center text-black font-light text-sm border-blue-950"
        />
      </div>
      <div className=" w-full h-52 p-5 flex">
        <div className=" w-1/2  ">
          <p className="font-semibold text-xl mb-5 text-blue-950">
            Strengthen your meeting relationships
          </p>
          <p className="font-light text-blue-900 mb-5">
            Contacts are automatically generated and make it easy to see who
            you're meeting with, review notes and scheduling history, and book
            follow-up engagements.
          </p>
          <Button
            title="Learn More"
            beforeIcon={
              <HiOutlineQuestionMarkCircle className="w-4 h-4 font-thin" />
            }
            afterIcon={<FaAngleRight className="w-4 h-4 font-thin" />}
            type="secondary"
            extraStyles="h- hover:bg-transparent rounded-full  flex items-center justify-center text-black font-light text-sm border-none text-blue-700"
          />
          <Button
            title="Book your first meeting"
            beforeIcon={<GoPlus className="w-4 h-4 font-thin" />}
            type="secondary"
            extraStyles="h- hover:bg-transparent rounded-full  flex items-center justify-center text-white font-light text-sm bg-blue-600"
          />
        </div>
        <div className=" w-1/2  ">
          <img
            src="https://assets.calendly.com/assets/frontend/media/contacts_side-35bb2c639f45b590736f.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ContactsDash;
