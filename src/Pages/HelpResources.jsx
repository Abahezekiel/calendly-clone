import React, { useEffect, useState, useRef } from "react";
import Button from "../Components/button/Button";

const HelpResources = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in the viewport
    );

    const element = document.getElementById("accomplishSection");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // Utility function to handle dynamic class generation based on visibility
  const getVisibilityClass = () => {
    return isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-12";
  };

  return (
    <div  className="bg-blue-50 flex gap-10 p-7 pt-20 pb-20">
      <div className="flex gap-10">
        <div className="w-4/5">
          <p
            id="accomplishSection"
            className={`pt-3 pb-10 text-blue-950 font-bold text-5xl transition-all duration-1000 ease-out transform ${getVisibilityClass()}`}
            style={{ willChange: "opacity, transform" }} // Added for better performance
          >
            Looking for help?
          </p>
          <p
            className={`text-gray-500 font-light text-lg transition-all duration-1000 ease-out transform ${getVisibilityClass()}`}
            style={{ willChange: "opacity, transform" }}
          >
            Get instant access to all of these features and more, so you can
            have more productive meetings without the back-and-forth.
          </p>
        </div>
        <div
          className={`flex gap-4 items-center transition-all duration-1000 ease-out transform ${getVisibilityClass()}`}
          style={{ willChange: "opacity, transform" }}
        >
          <Button
            title="Help Center"
            type="secondary"
            extraStyles="rounded-md flex items-center justify-center bg-blue-600 text-white font-normal text-xl border-none h-14 whitespace-nowrap"
          />
          <Button
            title="Contact Us"
            type="secondary"
            extraStyles="rounded-md flex items-center justify-center bg-white text-gray-500 font-normal text-xl border-gray-500 h-14 whitespace-nowrap"
          />
        </div>
      </div>
    </div>
  );
};

export default HelpResources;
