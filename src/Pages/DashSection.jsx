import React, { useState } from "react";
import Button from "../Components/button/Button";
import DashNav from "./DashNav";
import DatePicker from "./DatePicker";
import { MdArrowDropDown, MdFilterList, MdOutlineArrowRightAlt } from "react-icons/md";
import { CgImport } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { CiDollar } from "react-icons/ci";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { FaAngleRight, FaCaretUp } from "react-icons/fa";
import { GoPlus } from "react-icons/go";

const analyticTemplates = [
{
  id: 1,

  title: "0",
  description: "Created Events",
  pt: "pt-7",
},
{
  id: 2,

  title: "0",
  description: "Completed events",
},

{
  id: 3,

  title: "Canceled events",
  description: "0",
  pt: "pt-14",
},
];

const DashSection = () => {
  return (
    <>
      <div className="w-full">
        <DashNav />

        <div className="shadow-md border-2 w- border-blue-600 m-7 bg-blue-50 rounded-md flex items-center justify-between p-6">
          <Button
            title="Upgrade to the Standard plan to access this feature and other advanced scheduling tools."
            beforeIcon={
              <CiDollar className="w-6 h-6 font-extrabold text-blue-600" />
            }
            type="secondary"
            extraStyles=" rounded-full flex   text-black font-light text-sm border-none"
          />
          <Button
            title="Explore the Standard plan"
            type="secondary"
            extraStyles="bg-blue-600  rounded-full flex items-center justify-center text-white font-normal text-sm border-none h-10"
          />
        </div>

        <div className="shadow-md border border-blue-200 m-7 rounded-md  ">
          <div className=" m-7 flex gap-2 text-gray-500  h-96">
            <div className="] w-1/2 h-96 p-7">
              <p>NO ANALYTICS YET</p>
              <p className="text-xl font-semibold pt-4">
                Monitor your organization in one place
              </p>

              <ul
                style={{ listStyleType: "disc" }}
                className="pt-4 text-sm p-2"
              >
                <li className="pt-3">
                  Identify if new users need help with setup tasks.
                </li>
                <li className="pt-2">
                  Track your team's weekly meeting activity.
                </li>
                <li className="pt-2">
                  Use quick links to view team and analytics details.
                </li>
              </ul>
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
                title="Invite a teammate"
                beforeIcon={
                  <GoPlus className="w-6 h-6 font-extrabold text-blue-600" />
                }
                type="secondary"
                extraStyles="bg-blue-100 rounded-full flex items-center justify-center text-black font-light text-sm border-none"
              />
            </div>
            <div className=" w-1/2 h-96">
              <img
                src="https://assets.calendly.com/assets/frontend/media/admin_dashboard_side-dd237f1cd10014891a81.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between m-7">
              <p className="text-gray-400 text-sm">ACTIVITY LAST WEEK</p>
              <Button
                  afterIcon={
                    <MdOutlineArrowRightAlt className="w-6 h-6 font-extrabold text-gray-400" />
                  }
                  title="VIEW ANALYTICS"
                  type="secondary"
                  extraStyles="  rounded-full flex items-center justify-center text-gray-400 font-normal text-sm border-none h-10"
                />
              </div>
        <div className="grid grid-cols-3 gap-6 m-7  ">
          {analyticTemplates.map(({ id, title, description, pb }) => (
            <div
              key={id}
              className="w- hover:shadow-md bg-white border border-gray-100 rounded-lg"
            >
            
              <div className="m-4">
                <p className="font-semibold text-xl mb-3 text-gray-200 ">
                  {title}
                </p>
                <p className="font-light text-xl text-gray-200 pt-5 pb-5">
                  {description}
                </p>
               
                <Button
                  beforeIcon={
                    <FaCaretUp className="w-6 h-6 font-extrabold text-gray-400" />
                  }
                  title="0%"
                  type="secondary"
                  extraStyles="  rounded-full flex items-center justify-center text-gray-400 font-normal text-sm border-none h-10"
                />
                <p className="font-light text-sm text-gray-200">
                  {pb}
                  </p>
              </div>
            </div>
           ))} 
        </div>
      </div>
    </>
  );
};

export default DashSection;
