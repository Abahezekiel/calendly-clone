import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const VonageImage = () => {
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

    const element = document.getElementById("vonageSection");
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
    <div id="vonageSection" className="m-14 flex gap-10 pt-10">
      {/* First Div */}
      <div
        className={`bg-white w-2/6 rounded-3xl p-9 border-[#1A4162] border shadow transition-opacity duration-500 ease-out ${
          divsVisible[0] ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="https://images.ctfassets.net/k0lk9kiuza3o/2H4GbF1jpOyD7cNMW0Dv82/85a232765d647c41403ca471fe76589d/VonageLogo.svg"
          alt=""
          className="w-48"
        />
        <p className=" text-6xl text-[#0B3558] font-bold mt-8">160%</p>
        <span className="mt-9 text-[#1A4162] font-semi-bold text-xl flex gap-3 items-center">
          more customers reached
        </span>
        <span className="mt-9 text-[#006BFF] font-semi-bold text-xl flex gap-3 items-center pt-12">
          Read now
          <FaArrowRight />
        </span>
        <div>
          <img src="{image}" alt="" />
        </div>
      </div>

      {/* Second Div */}
      <div
        className={`bg-white w-2/6 rounded-3xl p-9 border-[#FFA701] border shadow transition-opacity duration-500 ease-out ${
          divsVisible[1] ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="https://images.ctfassets.net/k0lk9kiuza3o/5fJRcIQ6go6RJL0BbIrTKX/f259d0363593ac5e7de2bc96e8af3311/stanley-steemer-logo-vector.svg"
          alt=""
          className="w-20"
        />
        <p className=" text-6xl text-[#FFA701] font-bold mt-10">22x</p>
        <span className="mt-9 text-[#1A4162] font-semi-bold text-xl flex gap-3 items-center">
          interviews scheduled
        </span>
        <span className="mt-9 text-[#006BFF] font-semi-bold text-xl flex gap-3 items-center pt-12">
          Read now
          <FaArrowRight />
        </span>
      </div>

      {/* Third Div */}
      <div
        className={`bg-white w-2/6 rounded-3xl p-9 border-[#006BFF] border shadow transition-opacity duration-500 ease-out ${
          divsVisible[2] ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="https://images.ctfassets.net/k0lk9kiuza3o/6MZLRj88JOt71y85PmKQul/530d56a4145c812401abb45c4997d83d/ci-assante-customer-logo.svg"
          alt=""
          className="w-40"
        />
        <p className=" text-6xl text-[#004EBA] font-bold mt-6">323%</p>
        <span className="mt-9 text-[#1A4162] font-semi-bold text-xl flex gap-3 items-center">
          return on investment
        </span>
        <span className="mt-9 text-[#006BFF] font-semi-bold text-xl flex gap-3 items-center pt-12">
          Read now
          <FaArrowRight />
        </span>
      </div>
    </div>
  );
};

export default VonageImage;
