// import React, { useState } from "react";
// import Logo from "./Logo";
// import Button from "../Components/button/Button";
// import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
// import { GoPlus } from "react-icons/go";
// import { RiFlowChart, RiLinkM, RiVipCrown2Line } from "react-icons/ri";
// import { SlCalender } from "react-icons/sl";
// import { LuClock3 } from "react-icons/lu";
// import { IoMdContacts } from "react-icons/io";
// import { GrAppsRounded } from "react-icons/gr";
// import { CiDollar, CiRoute } from "react-icons/ci";
// import { HiOutlineChartBarSquare } from "react-icons/hi2";
// import { FaRegQuestionCircle } from "react-icons/fa";
// import RightDashboard from "./RightDashboard";

// const LeftDashboard = () => {
//   const [clickedIndex, setClickedIndex] = useState(null);
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   // Toggle the collapsed state
//   const handleCollapseToggle = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const buttonItems = [
//     {
//       title: "Event Types",
//       icon: (
//         <RiLinkM
//           className={`w-4 h-4 font-semibold ${isCollapsed ? "mb-3" : ""}`}
//         />
//       ),
//       extraStyles: isCollapsed
//         ? "w-10 flex text-blue-900"
//         : "w-56 flex text-blue-900",
//     },
//     {
//       title: "Meetings",
//       icon: (
//         <SlCalender
//           className={`w-4 h-4 font-semibold ${isCollapsed ? "mb-3" : ""}`}
//         />
//       ),
//       extraStyles: "w-56 flex text-blue-900 mt-4",
//     },
//     {
//       title: "Availability",
//       icon: (
//         <LuClock3
//           className={`w-4 h-4 font-semibold ${isCollapsed ? "mb-3" : ""}`}
//         />
//       ),
//       extraStyles: isCollapsed
//         ? "w-10 flex text-blue-900 mt-4 pb-4 border-b border-blue-100 rounded-none"
//         : "w-56 flex text-blue-900 mt-4 pb-4 border-b border-blue-100 rounded-none",
//     },
//     {
//       title: "Contacts",
//       icon: (
//         <IoMdContacts
//           className={`w-4 h-4 font-semibold ${isCollapsed ? "mb-3" : ""}`}
//         />
//       ),
//       extraStyles: isCollapsed
//         ? "w-10 flex text-blue-900  mt-4"
//         : "w-56 flex text-blue-900 mt-4 ",
//     },
//     {
//       title: "Workflows",
//       icon: (
//         <RiFlowChart
//           className={`w-4 h-4 font-semibold ${isCollapsed ? "mb-3" : ""}`}
//         />
//       ),
//       extraStyles: isCollapsed
//         ? "w-10 flex text-blue-900  mt-4"
//         : "w-56 flex text-blue-900 mt-4 ",
//     },
//     {
//       title: "Integration & Apps",
//       icon: (
//         <GrAppsRounded
//           className={`w-4 h-4 font-semibold ${isCollapsed ? "mb-3" : ""}`}
//         />
//       ),
//       extraStyles: isCollapsed
//         ? "w-10 flex text-blue-900  mt-4"
//         : "w-56 flex text-blue-900 mt-4 ",
//     },
//     {
//       title: "Routing",
//       icon: (
//         <CiRoute
//           className={`w-4 h-4 font-semibold ${isCollapsed ? "mb-3" : ""}`}
//         />
//       ),
//       extraStyles: "w-56 flex text-blue-900 mt-4",
//       extraStyles: isCollapsed
//         ? "w-10 flex text-blue-900  mt-4"
//         : "w-56 flex text-blue-900 mt-4 ",
//     },
//     {
//       title: "Upgrade Plan",
//       icon: (
//         <CiDollar
//           className={`w-4 h-4 font-semibold ${isCollapsed ? "mb-3" : ""}`}
//         />
//       ),
//       extraStyles: isCollapsed
//         ? "w-10 flex text-blue-900  mt-4"
//         : "w-56 flex text-blue-900 mt-4 ",
//     },
//     {
//       title: "Analytics",
//       icon: (
//         <HiOutlineChartBarSquare
//           className={`w-4 h-4 font-semibold ${isCollapsed ? "mb-3" : ""}`}
//         />
//       ),
//       extraStyles: isCollapsed
//         ? "w-10 flex text-blue-900  mt-4"
//         : "w-56 flex text-blue-900 mt-4 ",
//     },
//     {
//       title: "Admin Center",
//       icon: (
//         <RiVipCrown2Line
//           className={`w-4 h-4 font-semibold ${isCollapsed ? "mb-3" : ""}`}
//         />
//       ),
//       extraStyles: isCollapsed
//         ? "w-10 flex text-blue-900  mt-4"
//         : "w-56 flex text-blue-900 mt-4 ",
//     },
//     {
//       title: "Help",
//       icon: (
//         <FaRegQuestionCircle
//           className={`w-4 h-4 font-semibold ${isCollapsed ? "mb-3" : ""}`}
//         />
//       ),
//       extraStyles: isCollapsed
//         ? "w-10 flex text-blue-900  mt-4"
//         : "w-56 flex text-blue-900 mt-4 ",
//     },
//   ];

//   return (
//     <>
//       <div
//         className={`w-${
//           isCollapsed ? "16" : "1/5"
//         } border-r border-blue-100 transition-all duration-300`}
//       >
//         <div className="flex justify-between items-center pt-5 p-3 ">
//           {/* Logo and collapsed state handling */}
//           {isCollapsed ? (
//             <img
//               src="https://assets.calendly.com/assets/frontend/media/calendly-33a0809afc4c21162dd7.svg"
//               alt="Logo"
//               className="w-25 logo2"
//             />
//           ) : (
//             <Logo />
//           )}

//           <MdKeyboardDoubleArrowLeft
//             onClick={handleCollapseToggle}
//             className={`text-cyan-950 h-5 w-5 hover:bg-blue-200 hover:h-5 hover:w-5 hover:text-cyan-950 hover:rounded flex items-center justify-center absolute transition-all duration-300 ${
//               isCollapsed ? "left-[3.2rem]" : "left-50"
//             } left-[15rem] transform -translate-y- cursor-pointer`}
//           />
//         </div>

//         <div className="p-2 text-md ">
//           {isCollapsed ? (
//             // Small circular button when collapsed
//             <div className="rounded-full border border-blue-800 w-12 h-12 flex items-center justify-center mt-3">
//               <GoPlus className="w-4 h-4" />
//             </div>
//           ) : (
//             // Full button when expanded
//             <Button
//               title="Create"
//               beforeIcon={<GoPlus className="w-4 h-4" />}
//               onClick={() => alert("Create Button Clicked")}
//               type="secondary"
//               extraStyles="px-2 py-2 hover:bg-transparent rounded-full w-60 flex items-center justify-center text-blue-800"
//             />
//           )}
//         </div>

//         {/* Buttons List */}
//         <div className="p-4 text-md font-semibold overflow-y-auto max-h-[calc(100vh-300px)">
//           {buttonItems.map((item, index) => (
//             <Button
//               key={index}
//               title={isCollapsed ? "" : item.title}
//               beforeIcon={item.icon}
//               onClick={() => setClickedIndex(index)} // Set the clicked index
//               type="neutral"
//               extraStyles={`${item.extraStyles} ${
//                 clickedIndex === index ? "bg-blue-50 rounded-md" : ""
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//       <RightDashboard clickedIndex={clickedIndex} />
//     </>
//   );
// };

// export default LeftDashboard;




import React, { useState } from "react";
import Logo from "./Logo";
import Button from "../Components/button/Button";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { RiFlowChart, RiLinkM, RiVipCrown2Line } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { LuClock3 } from "react-icons/lu";
import { IoMdContacts } from "react-icons/io";
import { GrAppsRounded } from "react-icons/gr";
import { CiDollar, CiRoute } from "react-icons/ci";
import { HiOutlineChartBarSquare } from "react-icons/hi2";
import { FaRegQuestionCircle } from "react-icons/fa";
import RightDashboard from "./RightDashboard";

const LeftDashboard = () => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Toggle the collapsed state
  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const buttonItems = [
    {
      title: "Event Types",
      icon: (
        <RiLinkM
          className={`w-4 h-4 font-semibold ${isCollapsed ? "mb-3" : ""}`}
        />
      ),
      extraStyles: isCollapsed
        ? "w-10 flex text-blue-900"
        : "w-56 flex text-blue-900",
    },
    {
      title: "Meetings",
      icon: (
        <SlCalender
          className={`w-4 h-4 font-semibold ${isCollapsed ? "mb-3" : ""}`}
        />
      ),
      extraStyles: "w-56 flex text-blue-900 mt-4",
    },
    {
      title: "Availability",
      icon: (
        <LuClock3
          className={`w-4 h-4 font-semibold ${isCollapsed ? "mb-3" : ""}`}
        />
      ),
      extraStyles: isCollapsed
        ? "w-10 flex text-blue-900 mt-4 pb-4 border-b border-blue-100 rounded-none"
        : "w-56 flex text-blue-900 mt-4 pb-4 border-b border-blue-100 rounded-none",
    },
    {
      title: "Contacts",
      icon: (
        <IoMdContacts
          className={`w-4 h-4 font-semibold ${isCollapsed ? "mb-3" : ""}`}
        />
      ),
      extraStyles: isCollapsed
        ? "w-10 flex text-blue-900  mt-4"
        : "w-56 flex text-blue-900 mt-4 ",
    },
    {
      title: "Workflows",
      icon: (
        <RiFlowChart
          className={`w-4 h-4 font-semibold ${isCollapsed ? "mb-3" : ""}`}
        />
      ),
      extraStyles: isCollapsed
        ? "w-10 flex text-blue-900  mt-4"
        : "w-56 flex text-blue-900 mt-4 ",
    },
    {
      title: "Integration & Apps",
      icon: (
        <GrAppsRounded
          className={`w-4 h-4 font-semibold ${isCollapsed ? "mb-3" : ""}`}
        />
      ),
      extraStyles: isCollapsed
        ? "w-10 flex text-blue-900  mt-4"
        : "w-56 flex text-blue-900 mt-4 ",
    },
    {
      title: "Routing",
      icon: (
        <CiRoute
          className={`w-4 h-4 font-semibold ${isCollapsed ? "mb-3" : ""}`}
        />
      ),
      extraStyles: "w-56 flex text-blue-900 mt-4",
      extraStyles: isCollapsed
        ? "w-10 flex text-blue-900  mt-4"
        : "w-56 flex text-blue-900 mt-4 ",
    },
    {
      title: "Upgrade Plan",
      icon: (
        <CiDollar
          className={`w-4 h-4 font-bold ${isCollapsed ? "mb-3 " : "text-blue-900"}`}
        />
      ),
      extraStyles: isCollapsed
        ? "w-10 flex text-blue-900  mt-4 "
        : "w-56 flex text-blue-900 mt-4 bg-blue-100 rounded-lg border border-blue-300",
    },
    {
      title: "Analytics",
      icon: (
        <HiOutlineChartBarSquare
          className={`w-4 h-4 font-semibold ${isCollapsed ? "mb-3" : ""}`}
        />
      ),
      extraStyles: isCollapsed
        ? "w-10 flex text-blue-900  mt-4"
        : "w-56 flex text-blue-900 mt-4 ",
    },
    {
      title: "Admin Center",
      icon: (
        <RiVipCrown2Line
          className={`w-4 h-4 font-semibold ${isCollapsed ? "mb-3" : ""}`}
        />
      ),
      extraStyles: isCollapsed
        ? "w-10 flex text-blue-900  mt-4"
        : "w-56 flex text-blue-900 mt-4 ",
    },
    {
      title: "Help",
      icon: (
        <FaRegQuestionCircle
          className={`w-4 h-4 font-semibold ${isCollapsed ? "mb-3" : ""}`}
        />
      ),
      extraStyles: isCollapsed
        ? "w-10 flex text-blue-900  mt-4"
        : "w-56 flex text-blue-900 mt-4 ",
    },
  ];

  return (
    <>
      <div
        className={`w-${
          isCollapsed ? "16" : "1/5"
        } border-r border-blue-100 transition-all duration-300`}
      >
        <div className="flex justify-between items-center pt-5 p-3 ">
          {/* Logo and collapsed state handling */}
          {isCollapsed ? (
            <img
              src="https://assets.calendly.com/assets/frontend/media/calendly-33a0809afc4c21162dd7.svg"
              alt="Logo"
              className="w-25 logo2"
            />
          ) : (
            <Logo />
          )}

          <MdKeyboardDoubleArrowLeft
            onClick={handleCollapseToggle}
            className={`text-cyan-950 h-5 w-5 hover:bg-blue-200 hover:h-5 hover:w-5 hover:text-cyan-950 hover:rounded flex items-center justify-center absolute transition-all duration-300 ${
              isCollapsed ? "left-[3.2rem]" : "left-50"
            } left-[15rem] transform -translate-y- cursor-pointer`}
          />
        </div>

        <div className="p-2 text-md ">
          {isCollapsed ? (
            // Small circular button when collapsed
            <div className="rounded-full border border-blue-800 w-12 h-12 flex items-center justify-center mt-3">
              <GoPlus className="w-4 h-4" />
            </div>
          ) : (
            // Full button when expanded
            <Button
              title="Create"
              beforeIcon={<GoPlus className="w-4 h-4" />}
              onClick={() => alert("Create Button Clicked")}
              type="secondary"
              extraStyles="px-2 py-2 hover:bg-transparent rounded-full w-60 flex items-center justify-center text-blue-800"
            />
          )}
        </div>

        {/* Scrollable Buttons List */}
        <div className="overflow-y-auto max-h-[calc(100vh-150px)] p-4 text-md font-semibold ">
          {buttonItems.map((item, index) => (
            <Button
              key={index}
              title={isCollapsed ? "" : item.title}
              beforeIcon={item.icon}
              onClick={() => setClickedIndex(index)} // Set the clicked index
              type="neutral"
              extraStyles={`${item.extraStyles} ${
                clickedIndex === index ? "bg-blue-50 rounded-md" : ""
              }`}
            />
          ))}
        </div>
      </div>
      <RightDashboard clickedIndex={clickedIndex} />
    </>
  );
};

export default LeftDashboard;
