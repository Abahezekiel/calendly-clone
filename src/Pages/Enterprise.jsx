import React, { useEffect, useState } from "react";
import { HiOutlinePlayCircle } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import VideoThumbnail from "./VideoThumbnail";
import { CiStar } from "react-icons/ci";
import EnterpriseForm from "./EnterpriseForm";
import Slider from "./Slider";
import Organise from "./Organise";
import Ranks from "./Ranks";
import Accomplish from "./Accomplish";
import VonageImage from "./VonageImage";
import CompleteImage from "./CompleteImage";
import HackerOne from "./HackerOne";
import NextGen from "./NextGen";

const Enterprise = () => {
  const [isVisible, setIsVisible] = useState({
    accomplishText1: false,
    accomplishText2: false,
    accomplishText3: false,
    accomplishText4: false,
    accomplishText5: false,
  });

  useEffect(() => {
    const elements = [
      { id: "accomplishText1", key: "accomplishText1" },
      { id: "accomplishText2", key: "accomplishText2" },
      { id: "accomplishText3", key: "accomplishText3" },
      { id: "accomplishText4", key: "accomplishText4" },
      { id: "accomplishText5", key: "accomplishText5" },
    ];

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
    <>
      <div className="flex p-10 pt-[50px] mt-20">
        <div className="bg-white w-1/2">
          <h2 className="text-[#0B3558] text-5xl font-bold w-3/5 leading-tight">
            Solve external scheduling for enterprise
          </h2>
          <p className="text-xl w-5/6 pt-6">
            Calendly powers scheduling for over 4 out of 5 Fortune 500
            companies.
          </p>
          <div className="gap-3 flex pt-5 text-lg font-medium">
            <button className="bg-[#006BFF] px-7 py-3 rounded-lg flex justify-center items-center gap-3">
              <span>
                <HiOutlinePlayCircle className="text-white text-3xl" />
              </span>
              <span className="text-white">Learn more</span>
            </button>
            <button className="bg-white px-6 py-2 rounded-md border-black border text-[#476788]">
              contact sales
            </button>
          </div>
        </div>
        <div className="bg-white w-1/2">
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/3Fgpa0Cv4OKGxd58IhpBY7/04746f5c6fd384f715d0a0d30f5d778a/enterprise-hero-g2.png?q=85&fm=webp"
            alt=""
          />
        </div>
      </div>
      <Slider />

      <div className="flex items-center justify-center">
        <h2
          id="accomplishText1"
          className={`text-[#0B3558] flex text-center justify-center mt-32 text-5xl w-3/5 font-semibold transition-all duration-1000 ease-out transform ${
            isVisible.accomplishText1
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          Accomplish goals that matter to your business
        </h2>
      </div>

      <Accomplish />

      <div className="flex items-center justify-center">
        <h2
          id="accomplishText2"
          className={`text-[#0B3558] flex text-center justify-center mt-32 text-5xl w-3/5 font-semibold transition-all duration-1000 ease-out transform ${
            isVisible.accomplishText2
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          Equip teams to exceed expectations
        </h2>
      </div>

      <VonageImage />

      <div className="flex items-center justify-center">
        <h2
          id="accomplishText5"
          className={`text-[#0B3558] flex text-center justify-center mt-32 text-5xl w-3/5 font-semibold transition-all duration-1000 ease-out transform ${
            isVisible.accomplishText5
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          Built to keep your organization secure
        </h2>
      </div>
      <Organise />

      <div className="flex items-center justify-center">
        <h2
          id="accomplishText3"
          className={`text-[#0B3558] flex text-center justify-center mt-32 text-5xl w-3/5 font-semibold transition-all duration-1000 ease-out transform ${
            isVisible.accomplishText3
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          Consider Calendly an extension of your team
        </h2>
      </div>

      <CompleteImage />

      <HackerOne />
      <div className="bg-[#0B3558] text-white h-16 flex items-center justify-center rounded-b-3xl m-14 mt-[-3.5rem]">
        <p className=" text-2xl flex items-center justify-center gap-5">
          Hear from more customers
          <FaArrowRight />
        </p>
      </div>

      <Ranks />
      <div className="flex items-center justify-center text-[#0B3558] text-center font-semi-bold mt-28 mb-14 text-6xl">
        <p className="w-3/6">See what customers have to say</p>
      </div>

     

      <NextGen/>


      <div className="bg-[#F8F9FB] mt-20 p-28 flex ">
        <div className="flex p-10 pt-[50px] w-full  gap-10 ">
          <div className=" w-1/2 ">
            <button className="bg-[#E6F0FF] text-[#3672CA] rounded-2xl px-3 py-1 mt-2">
              Contact our sales team
            </button>
            <h3 className="text-[#0B3558] text-3xl font-bold mt-4 w-2/3">
              Schedule a personalized demo
            </h3>
            <div className="flex justify-center items-center gap-4 mt-10">
              <p className="text-6xl font-bold text-[#0B3558]">20m</p>
              <span className="text-xl w-5/6 pt-6 font- text-[#0B3558]">
                users worldwide
              </span>
            </div>
            <span className="mt-5 text-[#0B3558] font-semi-bold text-xl flex gap-3 items-center pb- border-b-2 border-[#006BFF] "></span>
            <div className="flex justify-center items-center gap-4 mt-10">
              <p className="text-6xl font-bold text-[#0B3558]">100k</p>
              <span className="text-xl w-5/6 pt-6 font- text-[#0B3558]">
                companies use Calendly
              </span>
            </div>
            <span className="mt-5 text-[#0B3558] font-semi-bold text-xl flex gap-3 items-center pb- border-b-2 border-[#006BFF] "></span>
            <div className="flex justify-center items-center gap-4 mt-10">
              <p className="text-6xl font-bold text-[#0B3558]">230+</p>
              <span className="text-xl  pt-6 font- text-[#0B3558]">
                countries with active users
              </span>
            </div>
            <span className="mt-5 text-[#0B3558] font-semi-bold text-xl flex gap-3 items-center pb- border-b-2 border-[#006BFF] "></span>
            <span className="mt-9 text-[#006BFF] font-semi-bold text-xl flex gap-3 items-center ">
              contact support
              <FaArrowRight />
            </span>
          </div>
          <div className="bg- w ">
            <div className="bg-[#FFFFFF]  rounded-2xl m-5 shadow-2xl p-8 border-[#E7EDF6]">
              <h3 className="text-4xl text-[#0B3558]">Let's Chat</h3>
              <p className="text-md mt-3 text-[#0B3558] font-light">
                A Calendly expert will reach out to discuss your needs.
              </p>
              <EnterpriseForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Enterprise;
