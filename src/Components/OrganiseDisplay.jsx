import React from "react";
import Organise from "../Pages/Organise";
// import Organise from "./Organise";

const OrganiseDisplay = () => {
  const items = [
    {
      id: 0,
      title: "Automated SSO and SCIM workflows",
      desc: "Control access, simplify password management, and connect to your Identity Provider to ensure your organization follows IT policies.",
      buttonText: "Learn More",
      borderColor: "blue-500",
    },
    {
      id: 1,
      title: "Domain control and account visibility",
      desc: "Direct employee signups to your primary account where they can use team features and keep company activity in one location.",
      buttonText: "Learn More",
      borderColor: "green-500",
    },
    {
      id: 2,
      title: "Gated permissions and user roles",
      desc: "Assign role-based permissions for users, group and account admins, and account owners so everyone has the right level of responsibility.",
      buttonText: "Learn More",
      borderColor: "red-500",
    },
    {
      id: 3,
      title: "Audit log and email auditing capabilities",
      desc: "Assign role-based permissions for users, group and account admins, and account owners so everyone has the right level of responsibility.",
      buttonText: "Learn More",
      borderColor: "purple-500",
    },
    {
      id: 4,
      title: "Enterprise-grade data governance",
      desc: "Maintain compliance and mitigate risk with capabilities like global retention policies, custom ToS, data deletion, auditing, and more.",
      buttonText: "Learn More",
      borderColor: "yellow-500",
    },
  ];

  const images = [
    "https://images.ctfassets.net/k0lk9kiuza3o/6ooJOE407ik4uCRvHaSytu/d45504bb751be34bb8c0497052d2e42a/Calendly-Secure-User-Management-2__1_.png?w=1300&q=85&fm=webp",
    "https://images.ctfassets.net/k0lk9kiuza3o/6230jRXviY4QkLC1qpuWm8/db735bf3e7b40b3d9182a25dd319bed8/Calendly-Domain-Control-Desktop.png?w=1300&q=85&fm=webp",
    "https://images.ctfassets.net/k0lk9kiuza3o/18KtLtGwzdCdr3fimx01oG/3d777c0d234571a63ff3534b97bf1add/Calendly-Security-Management__1_.png?w=1300&q=85&fm=webp",
    "https://images.ctfassets.net/k0lk9kiuza3o/2I8g34aXSPJWazxj5Gv55K/9e34a4e03014d7230871e9f1e2eb8cc8/Calendly-Collab-with-control.png?w=1300&q=85&fm=webp",
    "https://images.ctfassets.net/k0lk9kiuza3o/7PCaAWAnbmYkKlR3R9bAF/6e12525cbb1d1aeb4ed0bc67e19187a8/Calendly-IT-workflows__2_.png?w=1300&q=85&fm=webp",
  ];

  return (
    <div>
      <Organise items={items} images={images} />
    </div>
  );
};

export default OrganiseDisplay;
