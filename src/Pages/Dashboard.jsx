import React from "react";
import LeftDashboard from "./LeftDashboard";
import Button from "../Components/button/Button";
import { image1 } from "../Images/gmail.png";
import { GoPlus } from "react-icons/go";
import { FiUserPlus } from "react-icons/fi";
import { TiArrowSortedDown } from "react-icons/ti";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import RightDashboard from "./RightDashboard";

const Dashboard = () => {
  return (
    <div className=" flex w-full ">
      <LeftDashboard />

      {/* <RightDashboard /> */}
    </div>
  );
};

export default Dashboard;
