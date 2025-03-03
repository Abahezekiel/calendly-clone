import React, { useState } from "react";
import DashNav from "./DashNav";
import AdminDashSection from "./AdminDashSection";
import UsersDashSection from "./UsersDashSection";
import GroupsDashSection from "./GroupsDashSection";
import LoginDashSection from "./LoginDashSection";
import BillDashSection from "./BillDashSection";
import SecurityDashSection from "./SecurityDashSection";
import WorkflowDashSection from "./WorkflowDashSection";
import HelpModal from "./HelpModal";
import CreateModal from "./CreateModal";
import EventModal from "./EventModal";
import NewEventModal from "./NewEventModal";
import CopyModal from "./CopyModal";
import PermissionDashSection from "./PermissionDashSection";
import EventDashSection from "./EventDashSection";
import DashSection from "./DashSection";

const AdminRight = ({ clickedIndex }) => {
  const [openModal, setOpenModal] = useState(null); // State to track which modal is open

  const handleModalToggle = (modal) => {
    // If the same modal is clicked, close it, else open the new one
    setOpenModal(openModal === modal ? null : modal);
  };

  const sections = [
    { index: 0, component: <UsersDashSection /> },
    { index: 1, component: <GroupsDashSection /> },
    { index: 2, component: <LoginDashSection /> },
    { index: 3, component: <BillDashSection /> },
    { index: 4, component: <SecurityDashSection /> },
    // { index: 5, component: < /> },
    { index: 6, component: <PermissionDashSection /> },
    { index: 7, component: <EventDashSection /> },
    { index: 8, component: <WorkflowDashSection /> },
    { index: 9, component: <HelpModal /> },
    { index: 10, component: <DashSection /> },

    
  ];

  return (
    <div className="w-full bg-gray-50">
      {/* Map through the sections and render the one matching the clickedIndex */}
      {sections.map(
        (section) =>
          clickedIndex === section.index && (
            <div key={section.index} className="w-full transition-all duration-300">
              {section.component}
            </div>
          )
      )}
    </div>
  );
};

export default AdminRight;
