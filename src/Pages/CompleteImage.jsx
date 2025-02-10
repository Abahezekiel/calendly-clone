import React, { useState, useEffect } from "react";

const CompleteImage = () => {
  // State to manage which section is visible
  const [visibleSection, setVisibleSection] = useState(0);

  // State to manage the visibility of divs
  const [divsVisible, setDivsVisible] = useState([false, false, false, false]);

  // Function to handle section visibility with delay
  useEffect(() => {
    const timeouts = [];
    for (let i = 0; i < 4; i++) {
      timeouts.push(
        setTimeout(() => {
          setDivsVisible((prev) => {
            const updatedVisibility = [...prev];
            updatedVisibility[i] = true; // Show the current div
            return updatedVisibility;
          });
        }, i * 800) // Adjust the delay for each div (1000ms for each)
      );
    }

    // Cleanup timeouts
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, []);

  return (
    <div className="m-14 flex gap-10 pt-10">
      {/* First Div */}
      <div
        className={`${
          divsVisible[0] ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000 ease-in-out`}
      >
        <img
          src="https://images.ctfassets.net/k0lk9kiuza3o/6xveJVYC5HOuyIs0duRvHA/2e53d2c7c8ece478bf2c682eb6e0fa89/legal-and-security.png?q=85&fm=webp"
          alt=""
          className="rounded-3xl"
        />
        <p className="text-[#0B3558] font-bold mt-6 text-xl">
          Complete legal and security reviews
        </p>
        <span className="text-[#0B3558] font-thin mt-3">
          Our team ensures that your organization's requirements are met.
        </span>
      </div>

      {/* Second Div */}
      <div
        className={`${
          divsVisible[1] ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000 ease-in-out`}
      >
        <img
          src="https://images.ctfassets.net/k0lk9kiuza3o/3EwAWbTQmnirlcIMiAiC3U/29bc4d1f9c5c6d312b6019094f4eb44e/set-up-account-for-scale.png?q=85&fm=webp"
          alt=""
          className="rounded-3xl"
        />
        <p className="text-[#0B3558] font-bold mt-6 text-xl">
          Set up your account for scale
        </p>
        <span className="text-[#0B3558] font-thin mt-3">
          Implementation experts customize onboarding and guide setup.
        </span>
      </div>

      {/* Third Div */}
      <div
        className={`${
          divsVisible[2] ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000 ease-in-out`}
      >
        <img
          src="https://images.ctfassets.net/k0lk9kiuza3o/6oBwjyiGqyr19KFMgKQ7uD/7b3efeb9276d763ad77eaba6de6b3c1d/establish-and-hit-goals.png?q=85&fm=webp"
          alt=""
          className="rounded-3xl"
        />
        <p className="text-[#0B3558] font-bold mt-6 text-xl">
          Establish and hit your goals
        </p>
        <span className="text-[#0B3558] font-thin mt-3">
          Success partners help you get the most out of your subscription.
        </span>
      </div>

      {/* Fourth Div */}
      <div
        className={`${
          divsVisible[3] ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000 ease-in-out`}
      >
        <img
          src="https://images.ctfassets.net/k0lk9kiuza3o/7MkmYwCJAv7EUTJTKBLPhI/280dc0edf3a9e9e02d80d296f8b2b451/skip-the-line-if-anything-comes-up.png?q=85&fm=webp"
          alt=""
          className="rounded-3xl"
        />
        <p className="text-[#0B3558] font-bold mt-6 text-xl">
          Skip the line if anything comes up
        </p>
        <span className="text-[#0B3558] font-thin mt-3">
          Product specialists are available 24/7 to support your team.
        </span>
      </div>
    </div>
  );
};

export default CompleteImage;

