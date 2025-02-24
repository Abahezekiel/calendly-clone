import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import VideoThumbnail from "./VideoThumbnail";

const HackerOne = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState([false, false, false, false, false, false]);

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

    const element = document.getElementById("accomplishText4");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timeouts = [];
      for (let i = 0; i < 6; i++) {
        timeouts.push(
          setTimeout(() => {
            setImageVisible((prev) => {
              const newVisibility = [...prev];
              newVisibility[i] = true;
              return newVisibility;
            });
          }, i * 150) // Add a delay for each image (500ms for each)
        );
      }

      // Cleanup timeouts
      return () => timeouts.forEach((timeout) => clearTimeout(timeout));
    }
  }, [isVisible]);

  return (
   


 <div id="accomplishText4"
        className={`m-14 p-10  h-96 shadow-xl flex gap-20 transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
   
<div className="   rounded-xl w-[40%]">
  <VideoThumbnail/>
</div>
<div className="   w-[50%] p-6 text-[#0B3558]">
  <img
    src="https://images.ctfassets.net/k0lk9kiuza3o/1ofedJdNCvuUawxTPCMH5X/e7de389fb655b08e4bfe013e0b3b263c/hackerone-customer-logo.svg"
    alt=""
  />
  <p className="pt-8 text-xl font-light">
    “Calendly is the easiest to use, the friendliest, and has the best
    UX for a large chunk of our org to use without the burden of IT
    requests & security reviews”
  </p>
  <div className="flex items-center gap-5 pt-8 ">
    <img
      src="https://images.ctfassets.net/k0lk9kiuza3o/2NhhuUdi3S6YoDopWyk2Tl/0865c2d2ba50ee3ade8bb029ffbb7555/aaron_zander_-_hackerone.jpeg?h=144&w=144&q=85&fm=webp"
      alt=""
      className="rounded-full w-20"
    />
    <p className="flex flex-col">
      <span className="font-medium text-xl">Aaron Zander</span>
      <span className="font-extralight">
        Head of IT & Workplaces, HackerOne
      </span>
    </p>
  </div>
</div>
</div>
  );
};

export default HackerOne;
