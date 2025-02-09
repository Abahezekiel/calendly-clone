import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Accomplish = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [divsVisible, setDivsVisible] = useState([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("accomplishSection");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timeouts = [];
      for (let i = 0; i < 3; i++) {
        timeouts.push(
          setTimeout(() => {
            setDivsVisible((prev) => {
              const newVisibility = [...prev];
              newVisibility[i] = true;
              return newVisibility;
            });
          }, i * 250) // Add a delay for each div (500ms for each)
        );
      }

      // Cleanup timeouts
      return () => timeouts.forEach((timeout) => clearTimeout(timeout));
    }
  }, [isVisible]);

  return (
    <div id="accomplishSection" className=" text-white pb-5 mt-16">
      {/* Content Section */}
      <div className="m-14 flex gap-10">
        {[
          {
            title: "Create more efficient and productive teams",
            description:
              "Speed up scheduling without disrupting your flow. Calendly connects to the tools, apps, and browsers where your team does their best work.",
            linkText: "View 100+ integrations",
          },
          {
            title: "Improve company performance and customer experience",
            description:
              "Make it easy for qualified leads to reach you. Time-saving automations empower client and candidate-facing teams to convert leads, faster.",
            linkText: "Discover Calendly Routing",
          },
          {
            title: "Reduce the total cost of ownership",
            description:
              "Consolidate your software investments with a single platform that meets the needs of recruiting, sales, and other meeting-heavy teams.",
            linkText: "Learn about team scheduling",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`bg-white w-2/6 rounded-3xl p-9 border-[#D4E0ED] border shadow group transition-opacity duration-500 ease-out ${
              divsVisible[index] ? "opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="font-medium text-[#0B3558] text-2xl">{item.title}</h3>
            <p className="text-xl pt-5 text-[#6E88A2] font-extralight">{item.description}</p>
            <span className="mt-9 text-[#006BFF] font-medium text-lg flex gap-3 items-center group-hover:text-[#0B3558] ">
              {item.linkText}
              <FaArrowRight className="transition-transform duration-300 transform group-hover:translate-x-1" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accomplish;

