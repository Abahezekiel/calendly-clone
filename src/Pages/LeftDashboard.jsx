import React, { useState } from "react";
import Logo from "./Logo";
import Button from "../Components/button/Button";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import RightDashboard from "./RightDashboard";
import CreateModal from "./CreateModal";
import useButtonItems from "../Components/useButtonItems";

const LeftDashboard = () => {
  const [clickedIndex, setClickedIndex] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { buttonItems } = useButtonItems(isCollapsed);

  // Toggle the collapsed state
  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div
         className={`fixed top-0 left-0 w-${isCollapsed ? "16" : "1/5"} 
         h-screen border-r border-blue-100  transition-all duration-300`}
>
        <div className="flex justify-between items-center pt-5 p-3 ">
          {/* Logo and collapsed state handling */}
          {isCollapsed ? (
            <img
              src="https://assets.calendly.com/assets/frontend/media/calendly-33a0809afc4c21162dd7.svg"
              alt="Logo"
              className="w-25 logo2"
            />
          ) : (
            <Logo />
          )}

          <MdKeyboardDoubleArrowLeft
            onClick={handleCollapseToggle}
            className={`text-cyan-950 h-5 w-5 hover:bg-blue-200 hover:h-5 hover:w-5 hover:text-cyan-950 hover:rounded flex items-center justify-center absolute transition-all duration-300 ${
              isCollapsed ? "left-[3.2rem]" : "left-50"
            } left-[15rem] transform -translate-y- cursor-pointer`}
          />
        </div>

        <div className="p-2 text-md ">
          {isCollapsed ? (
            // Small circular button when collapsed
            <div className="rounded-full border border-blue-800 w-12 h-12 flex items-center justify-center mt-3">
              <GoPlus className="w-4 h-4" />
            </div>
          ) : (
            // Full button when expanded
            <Button
              title="Create"
              beforeIcon={<GoPlus className="w-4 h-4" />}
              onClick={handleModalToggle}
              type="secondary"
              extraStyles="px-2 py-2 hover:bg-transparent rounded-full w-60 flex items-center justify-center text-blue-800"
            />
          )}
        </div>

        {/* Scrollable Buttons List */}
        <div className="overflow-y-auto max-h-[calc(100vh-150px)] p-4 text-md font-semibold ">
          {buttonItems.map((item, index) => (
            <Button
              key={index}
              title={isCollapsed ? "" : item.title}
              beforeIcon={item.icon}
              onClick={() => setClickedIndex(index)} // Set the clicked index
              type="neutral"
              extraStyles={`${item.extraStyles} ${
                clickedIndex === index ? "bg-blue-50 rounded-md" : ""
              }`}
            />
          ))}
        </div>
      </div>

      <CreateModal
        isModalOpen={isModalOpen}
        handleModalToggle={handleModalToggle}
      />

      <RightDashboard clickedIndex={clickedIndex} />
    </>
  );
};

export default LeftDashboard;
