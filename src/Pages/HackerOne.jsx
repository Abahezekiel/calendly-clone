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
    // <div className="bg-[#0B3558] text-white pb-5 mt-16">
    //   <div
    //     id="accomplishText4"
    //     className={`pt-20 transition-all duration-1000 ease-out transform ${
    //       isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
    //     }`}
    //   >
    //     <h2 className="text-4xl font-semibold flex justify-center">
    //       The trusted platform for scheduling automation
    //     </h2>
    //     <p className="font-thin text-xl mt-8 flex justify-center">
    //       Calendly ranked #1 in G2’s 2024 Fall Report for Online Appointment Scheduling
    //     </p>
    //     <p className="flex items-center justify-center gap-5 mt-8">
    //       Check out Calendly's reviews here
    //       <FaArrowRight />
    //     </p>
    //   </div>

    //   <div className="flex gap-14 m-14 justify-center">
    //     {[
    //       "https://images.ctfassets.net/k0lk9kiuza3o/4Np7PCbw5E0oCAlTsL9Q6J/0959480de09ebc6a691bd5a758d6d666/BusinessScheduling_EasiestToUse_Enterprise_EaseOfUse.svg",
    //       "https://images.ctfassets.net/k0lk9kiuza3o/1QukQgQitVzqKLfCt3Re1J/654de955b00dfd10d01f32f5d026c191/OnlineAppointmentScheduling_BestResults_Small-Business_Total.svg",
    //       "https://images.ctfassets.net/k0lk9kiuza3o/3ZyUpH3zxxWiOQmUe3XFqK/4c6a1f434feabe7c7417dc13719787f4/OnlineAppointmentScheduling_Leader_Enterprise_Leader.svg",
    //       "https://images.ctfassets.net/k0lk9kiuza3o/5O1fDHAdPbJt7S6fe0lvD1/422864d748f9c3a4584816a6b09576e7/OnlineAppointmentScheduling_Leader_Leader.svg",
    //       "https://images.ctfassets.net/k0lk9kiuza3o/2eiZooMmOHTRJ8uqyPMexP/06d1155866ae7f7e15ec2b9566ed8ebc/OnlineAppointmentScheduling_Leader_Mid-Market_Leader.svg",
    //       "https://images.ctfassets.net/k0lk9kiuza3o/1BRgtroPFAWYbejPO8Qqgc/0f98e36e195216d8d353030b46bf3567/OnlineAppointmentScheduling_Leader_Small-Business_Leader.svg",
    //     ].map((src, index) => (
    //       <img
    //         key={index}
    //         src={src}
    //         alt={`Image ${index + 1}`}
    //         className={`w-28 transition-opacity duration-500 ease-out ${
    //           imageVisible[index] ? "opacity-100" : "opacity-0"
    //         }`}
    //       />
    //     ))}
    //   </div>
    // </div>


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
