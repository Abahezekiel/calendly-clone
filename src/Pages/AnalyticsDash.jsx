import React from "react";
import DashNav from "./DashNav";
import Button from "../Components/button/Button";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { MdFilterList } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { CiDollar, CiSearch } from "react-icons/ci";

const analyticTemplates = [
  {
    id: 1,

    title: "Created Events",
    description: "0",
    pt: "pt-7",
  },
  {
    id: 2,

    title: "Completed Events",
    description: "0",
  },
  {
    id: 3,

    title: "Recheduled Events",
    description: "0",
    pt: "pt-14",
  },
  {
    id: 4,

    title: "Canceled Events",
    description: "0",
    pt: "pt-14",
  },
];
const AnalyticsDash = () => {
  return (
    <div className="">
      <DashNav />
      <div className="p-3  ">
        <Button
          afterIcon={
            <HiOutlineQuestionMarkCircle className="w-6 h-6 font-extrabold " />
          }
          title="Analytics"
          type="secondary"
          extraStyles="h- hover:bg-transparent rounded-full w- flex items-center justify-center text-black font-semibold text-3xl border-none"
        />
      </div>
      <div className="flex  items-center  ml-3 mr-8 border-b border-gray-200 ">
        <div className="flex ">
          <div className=" ">
            <Button
              title="Events"
              type="secondary"
              extraStyles="hover:bg-white rounded-md w- flex items-center justify-center text-black font-light text-md border-none "
            />
          </div>
          <div className=" flex items-center justify-center">
            <Button
              title="Routing"
              type="secondary"
              extraStyles="hover:bg-white  border-none "
            />
          </div>
        </div>
      </div>
      <div className="shadow-md border border-blue-200 m-7 rounded-md  ">
        <div className=" m-7 flex gap-2 text-gray-500  h-96">
          <div className="] w-1/2 h-96 p-7">
            <p>No Analytics Yet</p>
            <p className="text-xl font-semibold pt-4">
              Improve team scheduling using trends from booked meetings
            </p>

            <ul style={{ listStyleType: "disc" }} className="pt-4 text-sm p-2">
              <li>Easily understand how scheduling impacts your business.</li>
              <li>Demonstrate the value of proposed scheduling changes.</li>
              <li>Get crucial buy-in from leaders and stakeholders.</li>
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
              title="Book your first meeting"
              beforeIcon={
                <GoPlus className="w-6 h-6 font-extrabold text-blue-600" />
              }
              type="secondary"
              extraStyles="bg-blue-100 rounded-full flex items-center justify-center text-black font-light text-sm border-none"
            />
          </div>
          <div className=" w-1/2 h-96">
            <img
              src="https://assets.calendly.com/assets/frontend/media/analytics_events_side-b252d96a4378c85864a1.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 m-7  ">
        {analyticTemplates.map(({ id, image, title, description, pt, pb }) => (
          <div
            key={id}
            className="w-56 hover:shadow-md bg-white border border-gray-100 rounded-lg"
          >
            <div className="m-4">
              <p className="font-semibold text-xl mb-3 text-gray-200 ">
                {title}
              </p>
              <p className="font-light text-xl text-gray-200 pt-5 pb-5">
                {description}
              </p>
              <p className="font-light text-sm text-gray-200">{pb}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="   rounded-lg m-7 flex ">
        <div className="m-4 w-1/2 shadow-sm border border-gray-100">
          <p className="font-bold text-sm mb-3 text-gray-300 m-3">
            Popular Events
          </p>
          <p className="font-light text-sm text-gray-300 pt-10 pb-10 flex items-center justify-center">
            No data available
          </p>
        </div>
        <div className="m-4 w-1/2 shadow-sm border border-gray-100">
          <p className="font-bold text-sm mb-3 text-gray-300 m-3">
            Popular Times
          </p>
          <p className="font-light text-sm text-gray-300 pt-10 pb-10 flex items-center justify-center">
            No data available
          </p>
        </div>
      </div>

      <div className="   rounded-lg m-7 flex ">
        <div className="m-4 w-1/2 shadow-sm border border-gray-100">
          <p className="font-bold text-sm mb-3 text-gray-300 m-3">
            Users with the most Events
          </p>
          <p className="font-light text-sm text-gray-300 pt-10 pb-10 flex items-center justify-center">
            No data available
          </p>
        </div>
        <div className="m-4 w-1/2 shadow-sm border border-gray-100">
          <p className="font-bold text-sm mb-3 text-gray-300 m-3">
          Users with the least Events

          </p>
          <p className="font-light text-sm text-gray-300 pt-10 pb-10 flex items-center justify-center">
            No data available
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDash;
