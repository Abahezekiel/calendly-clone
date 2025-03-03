import React from "react";
import Organise from "../Pages/Organise";
// import Organise from "./Organise";

const ConnectDisplay = () => {
  const items = [
    {
      id: 0,
      title: "Connect calenders",
      desc: "Sync with Google, Outlook, and Exchange calendars to avoid double-booking and keep your schedule organized and manageable.",
      buttonText: "Learn More",
      borderColor: "blue-500",
    },
    {
      id: 1,
      title: "Set availability",
      desc: "Manage the hours you're available for meetings, add buffers between meetings, and limit the number of meetings per day.",
      buttonText: "Learn More",
      borderColor: "green-500",
    },
    {
      id: 2,
      title: "Intergrate video conferecing",
      desc: "Connect Zoom, Google Meet, or Microsoft Teams and automatically generate unique video conferencing links for each meeting.",
      buttonText: "See all video conferencing integrations",
      borderColor: "red-500",
    },
    {
      id: 3,
      title: "Customize event types",
      desc: "Create different meeting types to solve your needs, such as a 30-minute one-on-one or a 45-minute meeting you co-host with teammates.",
      buttonText: "Learn More",
      borderColor: "yellow-500",
    },
    {
      id: 4,
      title: "Sharing your scheduling link",
      desc: "Add your personalized Calendly link to your website, email, social outreach, and event promotions to book more meetings.",
      buttonText: "Learn More",
      borderColor: "purple-500",
    },
  ];

  const images = [
    "https://images.ctfassets.net/k0lk9kiuza3o/6DdJ4lXRemqLdQDpUMhRHZ/3a73580790d096afc661956134a44849/calendar_connection.png?w=1300&q=85&fm=webp",
    "https://images.ctfassets.net/k0lk9kiuza3o/2cn5nHXfE3lsVLgl2yEyBb/02f8c5991e3398273df6c1ab54378792/add-your-availability.png?w=1300&q=85&fm=webp",
    "https://images.ctfassets.net/k0lk9kiuza3o/6GCkhCh4EAYkBwhpUV2RgF/37e56cd9db3e138752449668374d9927/conferencing_tools.png?w=1300&q=85&fm=webp",
    "https://images.ctfassets.net/k0lk9kiuza3o/1A5NQRpFsuSRHD0t4eMt7i/791fd0b3f138845f5e3ed072a1aff28a/conferencing_tools.png?w=1300&q=85&fm=webp",
    "https://images.ctfassets.net/k0lk9kiuza3o/75cglu7QuPCqMRAAHM8Gtv/175650bcbee37f204b03682f2e5969a8/share_link.png?w=1300&q=85&fm=webp",
  ];

  return (
    <div>
      <Organise items={items} images={images} />
    </div>
  );
};

export default ConnectDisplay;
