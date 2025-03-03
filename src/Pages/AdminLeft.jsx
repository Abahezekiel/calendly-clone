import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Button from "../Components/button/Button";
import { MdLockOutline, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { PiSpeedometer } from "react-icons/pi";
import AdminRight from "./AdminRight";
import CreateModal from "./CreateModal";
import { GiBallPyramid } from "react-icons/gi";
import { BsCurrencyDollar } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { IoCardOutline } from "react-icons/io5";
import { RiFlowChart } from "react-icons/ri";
import { FaRegQuestionCircle } from "react-icons/fa";
import { LuArrowRightToLine, LuUsers } from "react-icons/lu";

const AdminLeft = () => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleBackToHome = () => {
    navigate("/dashboard");
  };

  const buttonItems = [
    {
      title: "Users",
      icon: <LuUsers className="w-4 h-4 font-semibold" />,
      extraStyles: "w-56 flex text-blue-900",
    },
    {
      title: "Groups",
      icon: <GiBallPyramid className="w-4 h-4 font-semibold" />,
      extraStyles: "w-56 flex text-blue-900 mt-4",
    },
    {
      title: "Login",
      icon: <LuArrowRightToLine className="w-4 h-4 font-semibold" />,
      extraStyles: "w-56 flex text-blue-900 mt-4 pb-4 rounded-none",
    },
    {
      title: "Billing",
      icon: <BsCurrencyDollar className="w-4 h-4 font-semibold" />,
      extraStyles: "w-56 flex text-blue-900 mt-4",
    },
    {
      title: "Security",
      icon: <MdLockOutline className="w-4 h-4 font-semibold" />,
      extraStyles: "w-56 flex text-blue-900 mt-4",
    },
    {
      title: "Scheduling settings",
      icon: null,
      extraStyles: "w-56 flex text-gray-500 font-bold mt-4",
      isDisabled: true,  // Disable this button
    },
    {
      title: "Permissions",
      icon: <TbWorld className="w-4 h-4 font-semibold" />,
      extraStyles: "w-56 flex text-blue-900 mt-4",
    },
    {
      title: "Managed Events",
      icon: <IoCardOutline className="w-4 h-4 font-semibold" />,
      extraStyles: "w-56 flex text-blue-900 mt-4",
    },
    {
      title: "Managed Workflows",
      icon: <RiFlowChart className="w-4 h-4 font-bold text-blue-900" />,
      extraStyles: "w-56 flex text-blue-900 mt-4",
    },
    {
      title: "Help",
      icon: <FaRegQuestionCircle className="w-4 h-4 font-semibold" />,
      extraStyles: "w-56 flex text-blue-900 mt-4",
    },
  ];

  const handleButtonClick = (index) => {
    if (buttonItems[index].isDisabled) return; // Prevent click if disabled
    setClickedIndex(index);
  };

  return (
    <>
      <div className="w-64 border-r border-blue-100 ">
        <div className="flex justify-between items-center pt-5 p-3 ">
          <Logo />
        </div>

        <div className="p-1 text-md ">
          <Button
            title="Back to home"
            beforeIcon={<MdOutlineKeyboardArrowLeft className="w-5 h-5" />}
            onClick={handleBackToHome}
            type="secondary"
            extraStyles="hover:bg-transparent rounded-full flex items-center justify-center text-blue-500 font-semibold border-none text-lg"
          />
        </div>

        <div className="p-3 text-md ">
          <p className="text-blue-950 font-bold pl-3">Admin Center</p>
        </div>

        <div className="p-3 text-sm flex justify-between w-16">
          <Button
            title="Dashboard"
            beforeIcon={<PiSpeedometer className="w-5 h-5" />}
            type="secondary"
            extraStyles="px-2 py-2 hover:bg-transparent rounded-full w-60 flex items-center justify-center text-blue-500 font-semibold border-none text-lg"
            onClick={() => handleButtonClick(10)} 
          />
          <button className="bg-blue-950 px-2 py-2 h-8 p-2 text-white rounded-md text-sm font-semibold flex items-center">
            New
          </button>
        </div>

        {/* Added Organization settings */}
        <div className="p-3 text-sm ">
          <p className="text-gray-500 font-bold pl-3">Organization settings</p>
        </div>

        {/* Scrollable Buttons List */}
        <div className="overflow-y-auto max-h-[calc(100vh-150px)] p-4 text-md font-semibold">
  {buttonItems.map((item, index) => (
    <Button
      key={index}
      title={item.title}
      beforeIcon={item.icon}
      onClick={() => handleButtonClick(index)} // Set the clicked index
      type="neutral"
      extraStyles={`${item.extraStyles} ${
        clickedIndex === index ? "bg-blue-50 rounded-md" : ""
      } ${item.isDisabled ? "opacity-50 cursor-not-allowed" : ""}
        ${item.title === "Scheduling settings" ? "cursor-auto" : ""}`} // Add cursor-auto for Scheduling settings
    />
  ))}
</div>

      </div>

      <CreateModal
        isModalOpen={isModalOpen}
        handleModalToggle={handleModalToggle}
      />

      <AdminRight clickedIndex={clickedIndex} />
    </>
  );
};

export default AdminLeft;



