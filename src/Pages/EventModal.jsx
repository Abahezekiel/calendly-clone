import React, { useState, useEffect, useRef } from "react";
import { FaArrowRightLong, FaRegNoteSticky } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../Components/button/Button";
import { FiEdit2, FiEyeOff } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { PiCopySimple } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import ToggleSwitch from "../Images/ToggleSwitch";

const EventModal = ({ isModalOpen, handleModalToggle }) => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [isAdminVisible, setIsAdminVisible] = useState(false); // State to track visibility of admin templates
  const [isMoreWaysVisible, setIsMoreWaysVisible] = useState(false); // State to track visibility of "more ways to meet"

  // Ref to track modal container
  const modalRef = useRef(null);

  // Close the modal if the user clicks outside of the modal
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleModalToggle();
      }
    };

    // Add event listener to detect clicks outside
    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen, handleModalToggle]);

  // Admin items only (no "Round Robin" or "Collective")
  const adminItems = [
    {
      title: "One-on-One",
      textOne: "1 host",
      textTwo: "Good for coffee chats, 1:1 interviews, etc.",
      textThree: "1 invitee",
      afterIcon: <FaArrowRightLong className="w-4 h-4 font-semibold" />,
    },
    {
      title: "Group",
      textOne: "1 host",
      textTwo: "Webinars, Online classes, etc.",
      textThree: "Multiple invitees",
      afterIcon: <FaArrowRightLong className="w-4 h-4 font-semibold" />,
    },
    {
      title: "Round Robin",
      textOne: "1 host",
      textTwo: "Webinars, Online classes, etc.",
      textThree: "Multiple invitees",
      afterIcon: <FaArrowRightLong className="w-4 h-4 font-semibold" />,
    },
  ];

  // Toggle visibility logic for Admin Templates and More Ways to Meet
  const toggleSectionVisibility = (section) => {
    if (section === "admin") {
      setIsAdminVisible((prev) => !prev);
      setIsMoreWaysVisible(false); // Close More Ways to Meet when Admin Templates is opened
    } else if (section === "moreWays") {
      setIsMoreWaysVisible((prev) => !prev);
      setIsAdminVisible(false); // Close Admin Templates when More Ways to Meet is opened
    }
  };
  return (
    isModalOpen && (
      <div className="fixed inset-0 bg-opacity-50 flex items-center z-50 ">
        <div
          ref={modalRef}
          className=" border border-blue-100 bg-white rounded-lg shadow-md p- mt-60 ml-[23rem] max-h-[vh] overflow-y-auto "
        >
          <div className="  m-2">
            <Button
              title="Edit"
              beforeIcon={
                <FiEdit2 className="w-6 h-6 font-extrabold text-black" />
              }
              type="secondary"
              extraStyles=" rounded-full flex items-center justify-center text-black font-light text-sm border-none"
            />
            <Button
              title="Change Language"
              textTwo="English"
              beforeIcon={
                <BiWorld className="w-6 h-6 font-extrabold text-black" />
              }
              type="secondary"
              extraStyles=" rounded-full flex items-center justify-center text-black font-light text-sm border-none"
            />

            <Button
              title="Add internal notes"
              beforeIcon={
                <FaRegNoteSticky className="w-6 h-6 font-extrabold text-black" />
              }
              type="secondary"
              extraStyles=" rounded-full flex items-center justify-center text-black font-light text-sm border-none"
            />

            <Button
              title="Make secret"
              beforeIcon={
                <FiEyeOff className="w-6 h-6 font-extrabold text-black" />
              }
              type="secondary"
              extraStyles=" rounded-full flex items-center justify-center text-black font-light text-sm border-none"
            />
            <Button
              title="Clone"
              beforeIcon={
                <PiCopySimple className="w-6 h-6 font-extrabold text-black" />
              }
              type="secondary"
              extraStyles=" rounded-full flex items-center justify-center text-black font-light text-sm border-none"
            />
            <Button
              title="Delete"
              beforeIcon={
                <RiDeleteBin6Line className="w-6 h-6 font-extrabold text-black" />
              }
              type="secondary"
              extraStyles=" rounded-full flex items-center justify-center text-black font-light text-sm border-none"
            />
            <div className="flex justify-between items-center m-3 border-t border-gray-400">
              <p>On/Off</p>
              <ToggleSwitch />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default EventModal;
