import React, { useState, useEffect } from "react"; // Added missing imports
import { FaArrowRight } from "react-icons/fa";

const Ancestry = () => {
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

    // Cleanup observer on unmount
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  // Utility function to handle dynamic class generation based on visibility
  const getVisibilityClass = () => {
    return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12";
  };

  return (
    <div
      className={`shadow-xl m-7 rounded-2xl transition-all duration-1000 ease-out transform ${getVisibilityClass()}`}
    >
      <div id="accomplishSection" className="pt-10 m-10">
        <img
          src="https://images.ctfassets.net/k0lk9kiuza3o/6aSAknGku3oEB7jL7xEjLs/7004d26e48686e4a2b6e99348e1899fc/ancestry-customer-logo.svg"
          alt="Ancestry Logo"
        />
      </div>
      <p className="m-10 text-3xl text-blue-950 ">
        I wanted something that was elegant so that when people click on it,
        they’re not immediately turned off. With Calendly, there's a sense of
        aesthetics and pared-back cleanliness that I really like.
      </p>
      <p
        className="m-10 text-blue-950"
      >
        Ancestry
      </p>
      <div className="bg-[#0B3558] text-white h-16 flex items-center justify-center rounded-b-3xl">
        <p className="text-2xl flex items-center justify-center gap-5">
          Read all Customer stories
          <FaArrowRight />
        </p>
      </div>
    </div>
  );
};

export default Ancestry;
