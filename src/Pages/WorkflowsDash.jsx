import React from "react";
import DashNav from "./DashNav";
import Button from "../Components/button/Button";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { FaAngleRight } from "react-icons/fa";
import { CiDollar } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import image1 from "../Images/img1.png";
import image2 from "../Images/img2.png";
import image3 from "../Images/img3.png";

const workflowTemplates = [
  {
    id: 1,
    image: image1,
    title: "Email reminder to invitee",
    description: "Reduce no-shows — send automated email reminders to invitees",
    pt: "pt-7",
  },
  {
    id: 2,
    image: image2,
    title: "Text cancellation notification to host",
    description: "Keep hosts up-to-date with canceled events",
  },
  {
    id: 3,
    image: image3,
    title: "Send thank you email",
    description: "Build relationships with a quick thanks",
    pt: "pt-14",
  },
];

const WorkflowsDash = () => {
  return (
    <div className="">
      <DashNav />
      <div className="p-3 flex justify-between mr-5 ">
        <Button
          title="Workflows"
          afterIcon={<HiOutlineQuestionMarkCircle className="w-4 h-4" />}
          type="secondary"
          extraStyles="h- hover:bg-transparent rounded-full w- flex items-center justify-center text-black font-semibold text-3xl border-none"
        />
      </div>
      <div className="shadow-md border-2 border-blue-600 m-7 bg-blue-50 rounded-md flex items-center justify-between p-6">
        <Button
          title="Upgrade to the Standard plan to access this feature and other advanced scheduling tools."
          beforeIcon={
            <CiDollar className="w-6 h-6 font-extrabold text-blue-600" />
          }
          type="secondary"
          extraStyles="h- hover:bg-transparent rounded-full flex items-center justify-center text-black font-light text-sm border-none"
        />
        <Button
          title="Explore the Standard plan"
          type="secondary"
          extraStyles="bg-blue-600 rounded-full flex items-center justify-center text-white font-normal text-sm border-none h-11"
        />
      </div>
      <div className="m-7 w-[50rem] ">
        <Button
          title="My Calendly"
          afterIcon={<MdKeyboardArrowDown className="w-4 h-4" />}
          type="secondary"
          extraStyles="p-10 hover:bg-white rounded-md w- flex items-center justify-center text-black font-light text-md border-gray-300 "
        />
      </div>
      <div className="flex items-center justify-center flex-col ">
        <img
          src="https://assets.calendly.com/assets/frontend/media/workflows_icon-90ccbc36ff93eba360f6.svg"
          alt="Workflows Icon"
        />
        <p className="font-semibold text-xl mb-5 text-blue-950 text-center">
          Automate your meeting communications
        </p>
        <p className="font-light text-blue-900 mb-5 text-center w-3/5 flex items-center justify-center">
          Workflows help you reduce no-shows and have more productive meetings.
          Plus, automated emails and texts save you time before and after
          events.
        </p>
        <Button
          title="Learn More"
          beforeIcon={
            <HiOutlineQuestionMarkCircle className="w-4 h-4 font-thin" />
          }
          afterIcon={<FaAngleRight className="w-4 h-4 font-thin" />}
          type="secondary"
          extraStyles="h- hover:bg-transparent rounded-full flex items-center justify-center text-black font-light text-sm border-none text-blue-700"
        />
      </div>
      <div className="flex justify-center items-center">
        <p className="text-sm">START WITH A WORKFLOW TEMPLATE</p>
      </div>

      <div className="flex gap-4 m-5 pb-5">
        {workflowTemplates.map(({ id, image, title, description, pt, pb }) => (
          <div key={id} className="w-80 shadow-lg bg-white m-">
            <div className="h-16 w-16 pt-2 ml-6 flex justify-center items-center">
              <img
                src={image}
                alt={`Workflow Image ${id}`}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="m-4">
              <p className="font-bold text-lg mb-3">{title}</p>
              <p>{description}</p>
            </div>
            <div className={`flex justify-end m-4 ${pt} ${pb}`}>
              <Button
                title="Add Workflow"
                type="secondary"
                extraStyles="bg-blue-700 rounded-full flex items-center justify-center text-white font-light text-xs border-none text-blue-700"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkflowsDash;
