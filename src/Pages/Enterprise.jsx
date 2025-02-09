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
      <div className="flex p-10 pt-[50px]">
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

      {/* <div className="flex gap-7 m-20 ">
        <div className="  ">
          <div className=" h-[40rem] ">
            <div className="   pr-9 rounded-lg p-9 border-[#D4E0ED] border ">
              <div>
                <img
                  src="https://images.ctfassets.net/k0lk9kiuza3o/9zAMBtYIdjwDxTOI65UVR/b7c10f6c1b97f7e0aa8d2cad976f094c/nextgen.svg"
                  alt=""
                  className=" w-28"
                />
                <p className="pt-5 text-[#6E88A2] font-bold w-72">David W.</p>
                <p className="text-[#6E88A2] w-72">
                  Sr. Director, Managed Cloud Services
                </p>
              </div>
              <p className=" text-xl pt-5 text-[#6E88A2] font-normal w-72">
                {" "}
                "Using Calendly has made my life as a recruiter much easier by
                speeding up the process of scheduling the multiple interviews I
                have each week. One feature that stands out is the ability to
                type in all the questions for potential candidates before
                speaking to a potential candidate - it really saves time!
                Another great convenience is that when I make changes in
                Outlook, my schedule automatically updates. It's an easy-to-use
                platform and I'd be completely disorganised without it."
              </p>
            </div>
          </div>
          <div className="bg-[#F8F9FB] h-[15rem]  mt-20 flex flex-col items-center justify-center">
            <img
              src="https://marketing-assets.calendly.com/media/testimonials/G2_Crowd_logo.svg"
              alt=""
            />
            <div className="flex gap">
              <p>
                <CiStar className="fill-[#FFA601] w-10 h-12" />
              </p>
              <p>
                <CiStar className="fill-[#FFA601] w-10 h-12" />
              </p>
              <p>
                <CiStar className="fill-[#FFA601] w-10 h-12" />
              </p>
              <p>
                <CiStar className="fill-[#FFA601] w-10 h-12" />
              </p>
              <p>
                <CiStar className="fill-[#FFA601] w-10 h-12" />
              </p>
            </div>
            <span>4.7 out of 5</span>
          </div>
          <div className=" h-[30rem]  mt-10">
            <div className=" h-[35rem]  ">
              <div className=" h-[30rem]  pr-9 rounded-lg p-9 border-[#D4E0ED] border ">
                <div>
                  <p className="pt-5 text-[#6E88A2] font-bold w-72">
                    Heather S.
                  </p>
                  <p className="text-[#6E88A2] w-72">
                    Learning & Communications Specialist
                  </p>
                </div>
                <p className=" text-xl pt-5 text-[#6E88A2] font-normal w-72">
                  {" "}
                  It does a marvelous job of putting my whole sales process in
                  order. I really appreciate the automated data flows of several
                  other applications that Salesforce enables us to use. With
                  these apps, I will work in Salesforce and send mass emailing
                  When I am reading, these emails are still being watched.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[30rem] ">
          <div className="flex gap-7">
            <div className=" h-[35rem]  ">
              <div className=" h-[30rem]  pr-9 rounded-lg p-9 border-[#D4E0ED] border ">
                <div>
                  <img
                    src="https://images.ctfassets.net/k0lk9kiuza3o/1S547qhfsvRkuf2lUK92uz/43881b37e45760545b68bc5858df566d/TransPerfect.svg"
                    alt=""
                    className=" w-48"
                  />
                  <p className="pt-5 text-[#6E88A2] font-bold w-72">Alice M.</p>
                  <p className="text-[#6E88A2] w-72">Senior Growth Analyst</p>
                </div>
                <p className=" text-xl pt-5 text-[#6E88A2] font-normal w-72">
                  {" "}
                  Calendly streamlines the appointment scheduling process in my
                  department by removing the need for manual back-and-forth
                  communication. By integrating Calendly into our sales process,
                  clients can easily book appointments with a sales
                  representative at any stage of their engagement with our
                  products and services.
                </p>
              </div>
            </div>
            <div className=" h-[35rem] ">
              <div className=" h-[30rem]   pr-9 rounded-lg p-9 border-[#D4E0ED] border ">
                <div>
                  <img
                    src="https://images.ctfassets.net/k0lk9kiuza3o/7EOEAbFa9sZPZCVwL3F4hh/5a06c8ebd829abbaaf1e5e105a078b28/airwallex-customer-logo.svg"
                    alt=""
                    className=" w-36"
                  />
                  <p className="pt-5 text-[#6E88A2] font-bold w-72">Leena S.</p>
                  <p className="text-[#6E88A2] w-88">
                    Product Lifecycle Management Specialist
                  </p>
                </div>
                <p className=" text-xl pt-5 text-[#6E88A2] font-normal w-72 ">
                  {" "}
                  Calendly is instrumental in providing our customers with a
                  seamless scheduling experience when interacting with our team.
                  By taking the burden of scheduling off our shoulders, Calendly
                  has enabled us to accelerate our sales cycle and streamline
                  the scheduling process with the greater goal of continuous
                  business growth.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-7 mt-[-3rem]">
            <div className="   ">
              <div className=" h-[40rem] ">
                <div className=" h-[38rem]  pr-9 rounded-lg p-9 border-[#D4E0ED] border ">
                  <div>
                    <img
                      src="https://images.ctfassets.net/k0lk9kiuza3o/4kVtPjhDkHCRsh0ApgUqm7/48a7ab70444c359d1a9a929d6427a904/etisalat-logo.svg"
                      alt=""
                      className=" w-28"
                    />
                    <p className="pt-5 text-[#6E88A2] font-bold w-72">
                      Bolaji H.
                    </p>
                    <p className="text-[#6E88A2] w-72">Senior Data Scientist</p>
                  </div>
                  <p className=" text-xl pt-5 text-[#6E88A2] font-normal w-72">
                    {" "}
                    Coordinating and setting up meetings with stakeholders and
                    team members in an organization like mine, is one task I
                    find very cumbersome. Thanks to Calendly, I am having to do
                    less in this aspect by setting up automated reminders and
                    notifications for scheduled meetings. This eliminates the
                    need for manual follow-ups and ensures that all participants
                    are well-prepared and punctual for every scheduled meeting.
                  </p>
                </div>
              </div>
            </div>
            <div className=" h-[35rem] ">
              <div className=" h-[35rem]  ">
                <div className=" h-[rem]  pr-9 rounded-lg p-9 border-[#D4E0ED] border ">
                  <div>
                    <img
                      src="https://images.ctfassets.net/k0lk9kiuza3o/6MZLRj88JOt71y85PmKQul/530d56a4145c812401abb45c4997d83d/ci-assante-customer-logo.svg"
                      alt=""
                      className=" w-32"
                    />
                    <div className="flex items-center gap-2 pt-8 text-sm ">
                      <img
                        src="https://images.ctfassets.net/k0lk9kiuza3o/7aKrtfxR5uuugbznkA4MzV/ffe7f147d49dd97c906098449ff7ed91/Asiya_Khan.png?h=100&q=85&fm=webp"
                        alt=""
                        className="rounded-full w-12"
                      />
                      <p className="flex flex-col">
                        <p className="pt- text-[#6E88A2] font-bold w-72">
                          Asiya Khan
                        </p>
                        <p className="text-[#6E88A2] w-72">
                          Manager, Branch and Business Practice
                        </p>
                      </p>
                    </div>
                  </div>
                  <p className=" text-xl pt-5 text-[#6E88A2] font-normal w-72">
                    {" "}
                    The biggest BIGGEST thing that Calendly is solving for us is
                    saving us an enormous amount of time when it comes to
                    scheduling meetings - from the back and forth of finding a
                    time that works, to actually sending an invite to the
                    meeting with meeting details, to reminders/notifications to
                    clients and hosts. For peace of mind, Calendly is worth
                    every penny.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

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
