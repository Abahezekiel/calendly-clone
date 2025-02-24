import React, { useState, useEffect, useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../Components/button/Button";

const NewEventModal = ({ isModalOpen, handleModalToggle }) => {
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
      <div className="fixed inset-0 bg-opacity-50 flex items-center z-50 ">
        <div
          ref={modalRef}
          className="bg-white border border-blue-100 rounded-lg shadow-md p-3 mt-[13rem] w-96 ml-[50rem] max-h-[80vh] overflow-y-auto "
        >
          <h2 className="text-xs font-semibold  p-3">EVENT TYPES</h2>
          <div className="border-b border-gray-400">
            {adminItems.map((item, index) => (
              <div
                key={index}
                className="mb-1 p-3 hover:bg-blue-100 hover:rounded-md cursor-pointer"
              >
                <div className="font-semibold text-blue-600">{item.title}</div>
                <div className="text-sm text-gray-600 flex items-center gap-2 font-light">
                  {item.textOne} {item.afterIcon} {item.textThree}
                </div>
                <div className="text-sm text-gray-600 font-extralight">
                  {item.textTwo}
                </div>
              </div>
            ))}
          </div>

          <div
            className={`flex justify-between  p-4 border-b border-gray-400 items-center ${
              isAdminVisible ? "border-none" : ""
            }`}
            onClick={() => toggleSectionVisibility("admin")} // Toggle visibility of Admin Templates
          >
            <h2 className="text-xs font-semibold hover:underline">
              ADMIN TEMPLATES
            </h2>
            <Button
              beforeIcon={
                <IoIosArrowDown
                  className={`w-4 h-4 ${isAdminVisible ? "rotate-180" : ""}`} // Rotate icon based on visibility
                />
              }
              onClick={() => toggleSectionVisibility("admin")} // Toggle visibility of Admin Templates
              type="secondary"
              extraStyles="border-none"
            />
          </div>

          {isAdminVisible && (
            <div className="">
              {adminItems.map((item, index) => (
                <div
                  key={index}
                  className="mb-1 p-3 hover:bg-blue-100 hover:rounded-md cursor-pointer admin"
                >
                  <div className="font-semibold text-blue-600">
                    {item.title}
                  </div>
                  <div className="text-sm text-gray-600 flex items-center gap-2 font-light">
                    {item.textOne} {item.afterIcon} {item.textThree}
                  </div>
                  <div className="text-sm text-gray-600 font-extralight">
                    {item.textTwo}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div
            className={`flex justify-between  p-3  items-center ${
              isMoreWaysVisible ? "border-none" : ""
            }`}
            onClick={() => toggleSectionVisibility("moreWays")} // Toggle visibility of More Ways to Meet
          >
            <h2 className="text-xs font-semibold hover:underline">
              MORE WAYS TO MEET
            </h2>
            <Button
              beforeIcon={
                <IoIosArrowDown
                  className={`w-4 h-4 ${isMoreWaysVisible ? "rotate-180" : ""}`} // Rotate icon based on visibility
                />
              }
              onClick={() => toggleSectionVisibility("moreWays")} // Toggle visibility of More Ways to Meet
              type="secondary"
              extraStyles="border-none"
            />
          </div>

          {isMoreWaysVisible && (
            <div className="">
              {moreWaysItems.map((item, index) => (
                <div
                  key={index}
                  className="mb-1 p-3 hover:bg-blue-100 hover:rounded-md cursor-pointer admin"
                >
                  <div className="font-semibold text-blue-600">
                    {item.title}
                  </div>
                  <div className="text-sm text-gray-600 font-extralight">
                    {item.textTwo}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default NewEventModal;
