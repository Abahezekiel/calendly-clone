import React, { useState } from "react";
import Button from "../Components/button/Button";
import { GoPlus } from "react-icons/go";
import { FiUserPlus } from "react-icons/fi";
import { TiArrowSortedDown } from "react-icons/ti";

const DashNav = () => {
  const [isNameLetterVisible, setIsNameLetterVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <div className="flex justify-end pr-4 p-1 gap-1">
      <div className="m-5 flex">
        <Button
          title="Schedule directly from Gmail"
          beforeIcon={
            <img
              src="https://assets.calendly.com/assets/frontend/media/gmail-d35ec868f510eb930574.svg"
              alt=""
              className="w-4 h-4"
            />
          }
          onClick={() => alert("Schedule Button Clicked")}
          type="secondary"
          extraStyles="text-sm h-9 py- hover:bg-transparent rounded-full w- flex items-center justify-center text-black font-normal bg-gray-100 border-none"
        />
        <Button
          beforeIcon={<FiUserPlus className="w-4 h-4" />}
          onClick={() => alert("Invite Button Clicked")}
          type="secondary"
          extraStyles="h-9 hover:bg-transparent rounded-full w- flex items-center justify-center text-black font-normal text-sm border-none"
        />
        <span
          className={`h-9 flex justify-center items-center w-20 p-1 ${
            isNameLetterVisible ? "" : ""
          }`}
          onClick={() => setIsNameLetterVisible(!isNameLetterVisible)}
        >
          <span
            className={`rounded-full bg-blue-50 p-5 w-10 h-10 items-center justify-center flex ${
              isNameLetterVisible ? "border-2 border-blue-700" : ""
            }`}
          >
            A
          </span>
          <Button
            title=""
            afterIcon={<TiArrowSortedDown className="w-4 h-4" />}
            onClick={() => alert("Profile Button Clicked")}
            type="secondary"
            extraStyles="h-9 hover:bg-transparent rounded-full w- flex items-center justify-center text-black font-normal text-sm border-none"
          />
        </span>


        {isModalVisible && (
          <div className="absolute top-full mt-2 right-0 w-48 bg-white border rounded-md shadow-lg p-4 h-96">
            <h3 className="text-center text-lg font-medium">Profile Settings</h3>
            <ul className="mt-3 space-y-2">
              <li><button onClick={() => alert("View Profile clicked")} className="w-full text-left text-sm text-gray-700">View Profile</button></li>
              <li><button onClick={() => alert("Settings clicked")} className="w-full text-left text-sm text-gray-700">Settings</button></li>
              <li><button onClick={() => alert("Logout clicked")} className="w-full text-left text-sm text-gray-700">Logout</button></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashNav;
