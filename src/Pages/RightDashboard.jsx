import React, { useState } from "react";
import Button from "../Components/button/Button";
import { GoPlus } from "react-icons/go";
import { FiUserPlus } from "react-icons/fi";
import { TiArrowSortedDown } from "react-icons/ti";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { PiCopySimple } from "react-icons/pi";
import MeetingsDash from "./MeetingsDash";
import DashNav from "./DashNav";
import AvailabilityDash from "./AvailabilityDash";
import ContactsDash from "./ContactsDash";
import WorkflowsDash from "./WorkflowsDash";
import IntegrationsDash from "./IntegrationsDash";
import RoutingDash from "./RoutingDash";
import AnalyticsDash from "./AnalyticsDash";
import CreateModal from "./CreateModal";
import EventModal from "./EventModal";
import NewEventModal from "./NewEventModal";
import CopyModal from "./CopyModal";
import HelpModal from "./HelpModal";

const RightDashboard = ({ clickedIndex }) => {
  const [openModal, setOpenModal] = useState(null); // State to track which modal is open

  const handleModalToggle = (modal) => {
    // If the same modal is clicked, close it, else open the new one
    setOpenModal(openModal === modal ? null : modal);
  };

  return (
    <>
      <div className=" w-full bg-gray-50">
        {/* First Tab (Index 0) */}
        <div
          className={` w-full ${
            clickedIndex === 0 ? "bg-gray-50" : "hidden"
          } transition-all duration-300`}
        >
          <DashNav />
          <div className="p-3">
            <Button
              title="Event types"
              afterIcon={<HiOutlineQuestionMarkCircle className="w-4 h-4" />}
              type="secondary"
              extraStyles="h- hover:bg-transparent rounded-full w- flex items-center justify-center text-black font-bold text-2xl border-none"
            />
          </div>

          <div className="flex justify-between border-b m-7 pb-5">
            <div className="flex gap-6">
              <span className="rounded-full bg-blue-50 w-10 h-10 items-center justify-center flex">
                A
              </span>
              <div className="leading-5">
                <p className="font-thin">Abah Ezekiel</p>
                <span className="text-blue-700 font-light">
                  https://calendly.com/abahezekiel75
                </span>
              </div>
            </div>
            <div className="flex">
              <Button
                title="New Event types"
                beforeIcon={<GoPlus className="w-5 h-5 font-thin" />}
                onClick={() => handleModalToggle("newEvent")} // Open NewEventModal
                type="secondary"
                extraStyles="h-8 hover:bg-transparent rounded-full w- flex items-center justify-center text-black font-light text-sm border-blue-900"
              />
              <Button
                beforeIcon={<IoSettingsOutline className="w-5 h-5 font-thin" />}
                onClick={() => handleModalToggle("copy")} // Open NewEventModal
                type="secondary"
                extraStyles="h-8 hover:bg-transparent rounded-full w- flex items-center justify-center text-black font-light border-none"
              />
            </div>
          </div>

          <div className="border-gray-300 border w-72 m-7 rounded shadow-md hover:scale-105">
            <p className="bg-purple-600 h-2 rounded-t"></p>
            <div className="m-4 flex justify-between">
              <input type="checkbox" />
              <Button
                beforeIcon={<IoSettingsOutline className="w-4 h-4" />}
                afterIcon={<TiArrowSortedDown className="w-4 h-4" />}
                onClick={() => handleModalToggle("event")} // Open EventModal
                type="secondary"
                extraStyles="h- hover:bg-transparent rounded-full w- flex items-center justify-center text-black font-bold text-2xl border-none"
              />
            </div>
            <div className="m-4">
              <p className="text-xl font-light text-blue-950">
                30 Minutes Meeting
              </p>
              <p className="text-sm text-blue-950 font-extralight">
                30min, One-on-One
              </p>
              <p className="text-md text-blue-700 font-light hover:underline">
                View booking page
              </p>
            </div>
            <p className="border-t"></p>

            <div className="flex justify-between m-4 ml-10 items-center text-sm">
              <Button
                title="Copy link"
                beforeIcon={
                  <PiCopySimple className="w-4 h-4 text-[#6DA5FF] font-bold" />
                }
                type="secondary"
                extraStyles="h-8 hover:bg-transparent rounded-full w- flex items-center justify-center font-light text-blue-700 text-md border-none"
              />
              <Button
                title="Share"
                type="secondary"
                extraStyles="h-8 hover:bg-transparent rounded-full w- flex items-center justify-center font-light text-blue-700 text-md"
              />
            </div>
          </div>
        </div>

        <div className={` w-full ${clickedIndex === 1 ? "" : "hidden"}`}>
          <MeetingsDash />
        </div>

        <div className={` w-full ${clickedIndex === 2 ? "" : "hidden"}`}>
          <AvailabilityDash />
        </div>

        <div className={` w-full ${clickedIndex === 3 ? "" : "hidden"}`}>
          <ContactsDash />
        </div>

        <div className={` w-full ${clickedIndex === 4 ? "" : "hidden"}`}>
          <WorkflowsDash />
        </div>

        <div className={` w-full ${clickedIndex === 5 ? "" : "hidden"}`}>
          <IntegrationsDash />
        </div>

        <div className={` w-full ${clickedIndex === 6 ? "" : "hidden"}`}>
          <RoutingDash />
        </div>

        <div className={` w-full ${clickedIndex === 7 ? "" : "hidden"}`}>
          {/* <UpgradeDash /> */}
        </div>

        <div className={` w-full ${clickedIndex === 8 ? "" : "hidden"}`}>
          <AnalyticsDash />
        </div>

        <div className={` w-full ${clickedIndex === 9 ? "" : "hidden"}`}>
          {/* <AdminDash /> */}
        </div>

        <div
          className={` w-full ${clickedIndex === 10 ? "" : "hidden"}`}>
        
          <HelpModal />
        
        </div>
      </div>

      {/* Render the correct modal based on state */}
      {openModal === "event" && (
        <EventModal
          isModalOpen={openModal === "event"}
          handleModalToggle={() => handleModalToggle("event")}
        />
      )}
      {openModal === "newEvent" && (
        <NewEventModal
          isModalOpen={openModal === "newEvent"}
          handleModalToggle={() => handleModalToggle("newEvent")}
        />
      )}
      {openModal === "copy" && (
        <CopyModal
          isModalOpen={openModal === "copy"}
          handleModalToggle={() => handleModalToggle("copy")}
        />
      )}
        {/* {openModal === "help" && (
        <HelpModal
          isModalOpen={openModal === "help"}
          handleModalToggle={() => handleModalToggle("help")}
        />
      )} */}
    </>
  );
};

export default RightDashboard;
