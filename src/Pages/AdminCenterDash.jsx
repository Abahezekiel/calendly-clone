import React from "react";
import Button from "../Components/button/Button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiInfo } from "react-icons/fi";
import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";
import FeatureComparison from "./FeatureComparison";
import Customization from "./Customization";
import TeamTools from "./TeamTools";
import IntegratePlans from "./IntegratePlan";
import SecurityControl from "./SecurityControl";
import SupportPlan from "./SupportPlan";
import Dashboard from "./Dashboard";
import AdminLeft from "./AdminLeft";

const plans = [
  {
    name: "Standard",
    price: "$10 /SEAT/MO",
    description:
      "Eliminate the back-and-forth between you and your customers with automated and personalized scheduling experiences.",
    buttonText: "Select",
    isPopular: false,
  },
  {
    name: "Teams",
    price: "$16 /SEAT/MO",
    description:
      "Collaborate effectively with team members and drive business results with smart automations, reporting, and advanced scheduling options.",
    buttonText: "Select",
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "STARTS AT $15k PER YEAR",
    description:
      "Standardize the scheduling experience for your organization and access enterprise-level security, admin control, and personalized support.",
    buttonText: "Contact Sales",
    isPopular: false,
  },
];

const AdminCenterDash = () => {
  return (
  <div className="flex w-full pt-20">
     <AdminLeft/>
  </div>
  );
};

export default AdminCenterDash;
