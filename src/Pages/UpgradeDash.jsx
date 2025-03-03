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

const UpgradeDash = () => {
  return (
    <div className=" m-32">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">Choose a plan that fits</h3>
        <div className="bg-blue-50 w-96 flex p-1 rounded-lg gap-5 items-center ">
          <p className="bg-white shadow-md rounded-md p-2 font-bold text-blue-950">
            Bill yearly (save up to 20%)
          </p>
          <p>Bill Monthly</p>
        </div>
      </div>

      <div className="flex gap-5 pt-5 p-2">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-80 h- rounded-md border border-gray-300 p-4 mt-15 ${
              index === 0 || index === plans.length - 1 ? "mt-5" : ""
            } ${plan.isPopular ? "bg-blue- text-white p-0" : ""}`}
          >
            {plan.isPopular && (
              <div className="bg-blue-900 rounded-t flex items-center justify-center text-white text-xs">
                MOST POPULAR
              </div>
            )}
            <div className="p-4">
              <p className="text-blue-950 font-semibold text-2xl">
                {plan.name}
              </p>
              <p className="pt-3 text-blue-950 font-semibold text-xs">
                {plan.price}
              </p>
              <p className="text-xs pt-3 text-blue-950 font-light">
                {plan.description}
              </p>
              <div className="pt-10">
                <button
                  className={`bg-blue-500 rounded-3xl flex items-center justify-center p-1 w-full text-white ${
                    plan.name === "Teams" ? "mt-10" : ""
                  } ${plan.name === "Standard" ? "mt-5" : ""}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=" ">
        <p className="flex justify-center items-center text-2xl text-blue-950 font-semibold pt-10 pb-5 ">
          Compare features by category
        </p>
        <div className="flex  items-center border-b border-gray-200  text-sm">
          <div className="flex  gap-7">
            <div className=" ">
              <Button
                title="View All"
                type="secondary"
                extraStyles="hover:bg-white rounded-md w- flex items-center justify-center text-black font-light text-md border-none "
              />
            </div>
            <div className=" flex items-center justify-center">
              <Button
                title="Core features"
                type="secondary"
                extraStyles="hover:bg-white  border-none "
              />
            </div>
            <div className=" flex items-center justify-center">
              <Button
                title="Customizations"
                type="secondary"
                extraStyles="hover:bg-white  border-none "
              />
            </div>
            <div className=" flex items-center justify-center">
              <Button
                title="Team tools"
                type="secondary"
                extraStyles="hover:bg-white  border-none "
              />
            </div>
            <div className=" flex items-center justify-center">
              <Button
                title="Integrations"
                type="secondary"
                extraStyles="hover:bg-white  border-none "
              />
            </div>
            <div className=" flex items-center justify-center">
              <Button
                title="Security and control"
                type="secondary"
                extraStyles="hover:bg-white  border-none "
              />
            </div>
            <div className=" flex items-center justify-center">
              <Button
                title="Support"
                type="secondary"
                extraStyles="hover:bg-white  border-none "
              />
            </div>
          </div>
        </div>

        <FeatureComparison />
        <Customization/>
        <TeamTools/>
        <IntegratePlans/>
        <SecurityControl/>
        <SupportPlan/>
      </div>
    </div>
  );
};

export default UpgradeDash;
