import React, { useState, useEffect, useRef } from "react";
import DashNav from "./DashNav";
import Button from "../Components/button/Button";
import { FaChartLine } from "react-icons/fa";

const HelpModal = ({ isModalOpen, handleModalToggle }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleModalToggle();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen, handleModalToggle]);

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 text-sm">
      <div
        ref={modalRef}
        className="bg-white border border-blue-100 rounded-lg shadow-md w-64 max-h-[80vh] overflow-y-auto absolute top-[80%] left-[10%] transform -translate-x-[50%] -translate-y-[50%]"
      >
        <div>
          <Button
            title="Help Centre"
            beforeIcon={<FaChartLine />}
            type="secondary"
            extraStyles="border-none"
          />
          <Button
            title="Calendly Community"
            beforeIcon={<FaChartLine />}
            type="secondary"
            extraStyles="border-none"
          />
          <Button
            title="Whats New"
            beforeIcon={<FaChartLine />}
            type="secondary"
            extraStyles="border-none"
          />
          <Button
            title="Give Feedback"
            beforeIcon={<FaChartLine />}
            type="secondary"
            extraStyles="border-none"
          />
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
