import React, { useState, useEffect } from "react";
import OrganizationItem from "./OrganizationItem";

const items = [
  {
    id: 0,
    title: "Automated SSO and SCIM workflows",
    desc: "Control access, simplify password management, and connect to your Identity Provider to ensure your organization follows IT policies.",
  },
  {
    id: 1,
    title: "Domain control and account visibility",
    desc: "Direct employee signups to your primary account where they can use team features and keep company activity in one location.",
  },
  {
    id: 2,
    title: "Gated permissions and user roles",
    desc: "  Assign role-based permissions for users, group and account admins, and account owners so everyone has the right level of responsibility.",
  },
  {
    id: 3,
    title: "Audit log and email auditing capabilities",
    desc: "Assign role-based permissions for users, group and account admins,and account owners so everyone has the right level of responsibility.",
  },
  {
    id: 4,
    title: "Enterprise-grade data governance",
    desc: "Maintain compliance and mitigate risk with capabilities like global retention policies, custom ToS, data deletion, auditing, and more.",
  },
];

const Organise = () => {
  // State to manage which section is visible
  const [visibleSection, setVisibleSection] = useState(0);

  // State to manage the width of borders for each section
  const [bordersWidth, setBordersWidth] = useState({
    0: "w-[0%]",
    1: "w-[0%]",
    2: "w-[0%]",
    3: "w-[0%]",
    4: "w-[0%]",
  });
  const [isVisible, setIsVisible] = useState({
    oraganiseText: false,
  });
  // Handle the section toggle and animate the border
  const handleToggle = (section) => {
    // Toggle the visibility of the section
    setVisibleSection(visibleSection === section ? null : section);

    // Animate the border expansion for the clicked section
    setBordersWidth((prevState) => ({
      ...prevState,
      [section]: "w-[100%]",
    }));
  };

  const handleBorderAnimationEnd = (section) => {
    setTimeout(() => {
      const nextSection = section === 4 ? 0 : section + 1;

      // Set the next section's width to 100% to animate the next border
      setBordersWidth((prevState) => ({
        ...prevState,
        [nextSection]: "w-[100%]",
      }));

      // Make the next section visible
      setVisibleSection(nextSection);
    }, 1000); // Adjust the timeout to match the animation duration (1000ms)
  };

  // Use useEffect to trigger the loop automatically
  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleSection((prev) => {
        const nextSection = prev === 4 ? 0 : prev + 1;
        setBordersWidth((prevState) => ({
          ...prevState,
          [nextSection]: "w-[100%]",
        }));
        return nextSection;
      });
    }, 4000); // Change this interval time to your desired duration for each section

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    const elements = [{ id: "oraganiseText", key: "oraganiseText" }];

    const observers = elements.map(({ id, key }) => {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [key]: true }));
          }
        },
        { threshold: 0.5 }
      );

      const element = document.getElementById(id);
      if (element) observer.observe(element);

      return observer;
    });

    // Clean up observers
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div
      id="oraganiseText"
      className={`flex p-10 pt-[50px] gap-10 transition-all duration-1000 ease-out transform ${
        isVisible.oraganiseText
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
    >
      <div className="w-1/2">
        {items.map((item) => {
          return (
            <OrganizationItem
              key={item.id}
              item={item}
              isVisible={item.id === visibleSection}
              handleToggle={handleToggle}
              handleBorderAnimationEnd={handleBorderAnimationEnd}
              bordersWidth={bordersWidth}
            />
          );
        })}
      </div>

      <div className="bg-white w-1/2 pt-[50px]">
        {visibleSection === 0 && (
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/6ooJOE407ik4uCRvHaSytu/d45504bb751be34bb8c0497052d2e42a/Calendly-Secure-User-Management-2__1_.png?w=1300&q=85&fm=webp"
            alt="Image 1"
          />
        )}
        {visibleSection === 1 && (
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/6230jRXviY4QkLC1qpuWm8/db735bf3e7b40b3d9182a25dd319bed8/Calendly-Domain-Control-Desktop.png?w=1300&q=85&fm=webp"
            alt="Image 2"
          />
        )}
        {visibleSection === 2 && (
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/18KtLtGwzdCdr3fimx01oG/3d777c0d234571a63ff3534b97bf1add/Calendly-Security-Management__1_.png?w=1300&q=85&fm=webp"
            alt="Image 3"
          />
        )}
        {visibleSection === 3 && (
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/2I8g34aXSPJWazxj5Gv55K/9e34a4e03014d7230871e9f1e2eb8cc8/Calendly-Collab-with-control.png?w=1300&q=85&fm=webp"
            alt="Image 4"
          />
        )}
        {visibleSection === 4 && (
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/7PCaAWAnbmYkKlR3R9bAF/6e12525cbb1d1aeb4ed0bc67e19187a8/Calendly-IT-workflows__2_.png?w=1300&q=85&fm=webp"
            alt="Image 5"
          />
        )}
      </div>
    </div>
  );
};

export default Organise;