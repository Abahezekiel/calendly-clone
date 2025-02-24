import React, { useState, useEffect, useRef } from "react";

import DashNav from "./DashNav";
import Button from "../Components/button/Button";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import { FaAngleRight, FaChartLine } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { MdFilterList } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { CiDollar, CiSearch } from "react-icons/ci";
import { GrLink } from "react-icons/gr";
import { IoCodeSlashOutline } from "react-icons/io5";

const HelpModal = ({ isModalOpen, handleModalToggle }) => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [isAdminVisible, setIsAdminVisible] = useState(false); // State to track visibility of admin templates
  const [isMoreWaysVisible, setIsMoreWaysVisible] = useState(false); // State to track visibility of "more ways to meet"

  // Ref to track modal container
  const modalRef = useRef(null);

  const toggleSectionVisibility = (section) => {
    if (section === "admin") {
      setIsAdminVisible((prev) => !prev);
      setIsMoreWaysVisible(false); // Close More Ways to Meet when Admin Templates is opened
    } else if (section === "moreWays") {
      setIsMoreWaysVisible((prev) => !prev);
      setIsAdminVisible(false); // Close Admin Templates when More Ways to Meet is opened
    }
  };

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

  
  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center z-50 text-sm">
      <div
        ref={modalRef}
        className="bg-white border border-blue-100 rounded-lg shadow-md p- mt-[25rem] w-64  justify-items-end flex max-h-[80vh] overflow-y-auto "
      >
        <div
          className={` p-  ${isAdminVisible ? "border-none" : ""}`}
          onClick={() => toggleSectionVisibility("admin")} // Toggle visibility of Admin Templates
        >
          <Button
            title="Help Centre"
            beforeIcon={
              <FaChartLine
                className={`w-4 h-4 ${isAdminVisible ? "rotate-180" : ""}`} // Rotate icon based on visibility
              />
            }
            onClick={() => toggleSectionVisibility("admin")} // Toggle visibility of Admin Templates
            type="secondary"
            extraStyles="border-none"
          />
          <Button
            title="Calendly Community"
            beforeIcon={
              <FaChartLine
                className={`w-4 h-4 ${isAdminVisible ? "rotate-180" : ""}`} // Rotate icon based on visibility
              />
            }
            onClick={() => toggleSectionVisibility("admin")} // Toggle visibility of Admin Templates
            type="secondary"
            extraStyles="border-none"
          />
          <Button
            title="Whats New"
            beforeIcon={
              <FaChartLine
                className={`w-4 h-4 ${isAdminVisible ? "rotate-180" : ""}`} // Rotate icon based on visibility
              />
            }
            onClick={() => toggleSectionVisibility("admin")} // Toggle visibility of Admin Templates
            type="secondary"
            extraStyles="border-none"
          />
          <Button
            title="Give Feedback"
            beforeIcon={
              <FaChartLine
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
  );
};

export default HelpModal;
