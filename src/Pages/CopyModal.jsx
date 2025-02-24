import React, { useState, useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../Components/button/Button";
import { GrLink } from "react-icons/gr";
import { IoCodeSlashOutline } from "react-icons/io5";

const CopyModal = ({ isModalOpen, handleModalToggle }) => {
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



  // More ways to meet (meeting polls, one-off meetings, etc.)
  const moreWaysItems = [
    {
      title: "One-off meeting",
      textTwo: "Offer time outside your normal schedule.",
    },
    {
      title: "Meeting poll",
      textTwo: "Let invitees vote on a time to meet.",
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
      <div className="fixed inset-0 bg-opacity-50 flex items-center z-50 text-sm">
        <div
          ref={modalRef}
          className="bg-white border border-blue-100 rounded-lg shadow-md p- mt-[-12rem]  ml-[67rem] max-h-[80vh] overflow-y-auto "
        >
          <div
            className={` p-  ${isAdminVisible ? "border-none" : ""}`}
            onClick={() => toggleSectionVisibility("admin")} // Toggle visibility of Admin Templates
          >
            <Button
              title="Copy Link"
              beforeIcon={
                <GrLink
                  className={`w-4 h-4 ${isAdminVisible ? "rotate-180" : ""}`} // Rotate icon based on visibility
                />
              }
              onClick={() => toggleSectionVisibility("admin")} // Toggle visibility of Admin Templates
              type="secondary"
              extraStyles="border-none"
            />
            <Button
              title="Add to Website"
              beforeIcon={
                <IoCodeSlashOutline
                  className={`w-4 h-4 ${isAdminVisible ? "rotate-180" : ""}`} // Rotate icon based on visibility
                />
              }
              onClick={() => toggleSectionVisibility("admin")} // Toggle visibility of Admin Templates
              type="secondary"
              extraStyles="border-none"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default CopyModal;
