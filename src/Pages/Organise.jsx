import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

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

  // Function to handle border animation end and trigger the next border's animation
  const handleBorderAnimationEnd = (section) => {
    setTimeout(() => {
      // If the section is closed, reset the border width to 0%
      if (visibleSection !== section) {
        setBordersWidth((prevState) => ({
          ...prevState,
          [section]: "w-[0%]", // Reset the border width
        }));
      } else {
        // If the section is open, animate the next border's width to 100%
        const nextSection = section === 4 ? 0 : section + 1;
        setBordersWidth((prevState) => ({
          ...prevState,
          [nextSection]: "w-[100%]",
        }));
        setVisibleSection(nextSection);
      }
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
        {/* Section 1 */}
        <div
          className={`bg-white pb-8 cursor-pointer relative ${
            visibleSection !== 0 ? "text-[#A6BBD1]" : ""
          }`} // Add background color for inactive sections
          onClick={() => handleToggle(0)}
        >
          <h3
            className={`text-3xl font-medium mt-4 ${
              visibleSection !== 0 ? "text-[#A6BBD1]" : "text-[#0B3558]"
            }`} // Apply color to h3 for inactive sections
          >
            Automated SSO and SCIM workflows
          </h3>
          <div
            className={`transition-all duration-[1000ms] max-h-0 overflow-hidden ${
              visibleSection === 0 ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <p className="text-xl w-5/6 pt-6 font-thin">
              Control access, simplify password management, and connect to your
              Identity Provider to ensure your organization follows IT policies.
            </p>
            <span className="mt-5 text-[#0B3558] font-semi-bold text-xl flex gap-3 items-center w-5/6">
              Learn more
              <FaArrowRight />
            </span>
          </div>
          <div
            className={`border-b-2 absolute bottom-0 left-0 ${
              bordersWidth[0]
            } ${
              visibleSection === 0 ? "bg-blue-500" : "text-[#A6BBD1]"
            } h-2 transition-all duration-[1000ms]`}
            onTransitionEnd={() => handleBorderAnimationEnd(0)}
          ></div>
        </div>

        {/* Section 2 */}
        <div
          className={`bg-white border-b-2 pb-8 cursor-pointer relative ${
            visibleSection !== 1 ? "text-[#A6BBD1]" : ""
          }`} // Add background color for inactive sections
          onClick={() => handleToggle(1)}
        >
          <h3
            className={`text-3xl font-medium mt-4 ${
              visibleSection !== 1 ? "text-[#A6BBD1]" : "text-[#0B3558]"
            }`} // Apply color to h3 for inactive sections
          >
            Domain control and account visibility
          </h3>
          <div
            className={`transition-all duration-[1000ms] max-h-0 overflow-hidden ${
              visibleSection === 1 ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <p className="text-xl w-5/6 pt-6 font-thin">
              Direct employee signups to your primary account where they can use
              team features and keep company activity in one location.
            </p>
            <span className="mt-5 text-[#0B3558] font-semi-bold text-xl flex gap-3 items-center w-5/6">
              Learn more
              <FaArrowRight />
            </span>
          </div>
          <div
            className={`border-b-2 absolute bottom-0 left-0 ${
              bordersWidth[1]
            } ${
              visibleSection === 1 ? "bg-blue-500" : "text-[#A6BBD1]"
            } h-2 transition-all duration-[1000ms]`}
            onTransitionEnd={() => handleBorderAnimationEnd(1)}
          ></div>
        </div>

        {/* Section 3 */}
        <div
          className={`bg-white border-b-2 pb-8 cursor-pointer relative ${
            visibleSection !== 2 ? "text-[#A6BBD1]" : ""
          }`} // Add background color for inactive sections
          onClick={() => handleToggle(2)}
        >
          <h3
            className={`text-3xl font-medium mt-4 ${
              visibleSection !== 2 ? "text-[#A6BBD1]" : "text-[#0B3558]"
            }`} // Apply color to h3 for inactive sections
          >
            Gated permissions and user roles
          </h3>
          <div
            className={`transition-all duration-[1000ms] max-h-0 overflow-hidden ${
              visibleSection === 2 ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <p className="text-xl w-5/6 pt-6 font-thin">
              Assign role-based permissions for users, group and account admins,
              and account owners so everyone has the right level of
              responsibility.
            </p>
            <span className="mt-5 text-[#0B3558] font-semi-bold text-xl flex gap-3 items-center w-5/6">
              Learn more
              <FaArrowRight />
            </span>
          </div>
          <div
            className={`border-b-2 absolute bottom-0 left-0 ${
              bordersWidth[2]
            } ${
              visibleSection === 2 ? "bg-blue-500" : "text-[#A6BBD1]"
            } h-2 transition-all duration-[1000ms]`}
            onTransitionEnd={() => handleBorderAnimationEnd(2)}
          ></div>
        </div>

        {/* Section 4 */}
        <div
          className={`bg-white border-b-2 pb-8 cursor-pointer relative ${
            visibleSection !== 3 ? "text-[#A6BBD1]" : ""
          }`} // Add background color for inactive sections
          onClick={() => handleToggle(3)}
        >
          <h3
            className={`text-3xl font-medium mt-4 ${
              visibleSection !== 3 ? "text-[#A6BBD1]" : "text-[#0B3558]"
            }`} // Apply color to h3 for inactive sections
          >
            Audit log and email auditing capabilities
          </h3>
          <div
            className={`transition-all duration-[1000ms] max-h-0 overflow-hidden ${
              visibleSection === 3 ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <p className="text-xl w-5/6 pt-6 font-thin">
              Assign role-based permissions for users, group and account admins,
              and account owners so everyone has the right level of
              responsibility.
            </p>
            <span className="mt-5 text-[#0B3558] font-semi-bold text-xl flex gap-3 items-center w-5/6">
              Learn more
              <FaArrowRight />
            </span>
          </div>
          <div
            className={`border-b-2 absolute bottom-0 left-0 ${
              bordersWidth[3]
            } ${
              visibleSection === 3 ? "bg-blue-500" : "text-[#A6BBD1]"
            } h-2 transition-all duration-[1000ms]`}
            onTransitionEnd={() => handleBorderAnimationEnd(3)}
          ></div>
        </div>

        {/* Section 5 */}
        <div
          className={`bg-white border-b-2 pb-8 cursor-pointer relative ${
            visibleSection !== 4 ? "text-[#A6BBD1]" : ""
          }`} // Add background color for inactive sections
          onClick={() => handleToggle(4)}
        >
          <h3
            className={`text-3xl font-medium mt-4 ${
              visibleSection !== 4 ? "text-[#A6BBD1]" : "text-[#0B3558]"
            }`} // Apply color to h3 for inactive sections
          >
            Enterprise-grade data governance
          </h3>
          <div
            className={`transition-all duration-[1000ms] max-h-0 overflow-hidden ${
              visibleSection === 4 ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <p className="text-xl w-5/6 pt-6 font-thin">
              Maintain compliance and mitigate risk with capabilities like
              global retention policies, custom ToS, data deletion, auditing,
              and more.
            </p>
            <span className="mt-5 text-[#0B3558] font-semi-bold text-xl flex gap-3 items-center w-5/6">
              Learn more
              <FaArrowRight />
            </span>
          </div>
          <div
            className={`border-b-2 absolute bottom-0 left-0 ${
              bordersWidth[4]
            } ${
              visibleSection === 4 ? "bg-blue-500" : "text-[#A6BBD1]"
            } h-2 transition-all duration-[1000ms]`}
            onTransitionEnd={() => handleBorderAnimationEnd(4)}
          ></div>
        </div>
      </div>

      <div className="bg-white w-1/2 pt-[50px]">
        {/* Optionally, you can display images or other content when a section is clicked */}
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
