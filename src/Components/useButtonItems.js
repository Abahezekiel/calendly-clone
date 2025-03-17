import { CiDollar, CiRoute } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GrAppsRounded } from "react-icons/gr";
import { HiOutlineChartBarSquare } from "react-icons/hi2";
import { IoMdContacts } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import { RiFlowChart, RiLink, RiVipCrown2Line } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";

function useButtonItems(isCollapsed) {
  const buttonItems = [
    {
      title: "Event Types",
      icon: (
        <RiLink
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
          className={`w-4 h-4 font-bold ${
            isCollapsed ? "mb-3 " : "text-blue-900"
          }`}
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
  return { buttonItems };
}

export default useButtonItems;
