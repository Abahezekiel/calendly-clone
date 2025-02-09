import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { CiStar } from "react-icons/ci";


const NextGen = () => {
  const [inView, setInView] = useState(false);

  // Scroll detection hook
  const { ref, inView: isVisible } = useInView({
    triggerOnce: true, // Trigger once when it enters the viewport
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  useEffect(() => {
    if (isVisible) {
      setInView(true);
    }
  }, [isVisible]);


const [inViewBottom, setInViewBottom] = useState(false);
const { ref: bottomRef, inView: isBottomVisible } = useInView({
  triggerOnce: true,
  threshold: 0.5,
});

useEffect(() => {
  if (isBottomVisible) {
    setInViewBottom(true);
  }
}, [isBottomVisible]);


const [inViewStars, setInViewStars] = useState(false);
const { ref: starsRef, inView: isStarsVisible } = useInView({
  triggerOnce: true,
  threshold: 0.5,
});

useEffect(() => {
  if (isStarsVisible) {
    setInViewStars(true);
  }
}, [isStarsVisible]);
  return (
    <>
      <div className="flex gap-7 m-20">
        <div className="flex flex-col">
          <div className="h-[40rem]">
            <div
              className={`pr-9 rounded-lg p-9 border-[#D4E0ED] border transform transition-all duration-1000 ease-out ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              ref={ref}
            >
              <div>
                <img
                  src="https://images.ctfassets.net/k0lk9kiuza3o/9zAMBtYIdjwDxTOI65UVR/b7c10f6c1b97f7e0aa8d2cad976f094c/nextgen.svg"
                  alt="David W."
                  className="w-28"
                />
                <p className="pt-5 text-[#6E88A2] font-bold w-72">David W.</p>
                <p className="text-[#6E88A2] w-72">
                  Sr. Director, Managed Cloud Services
                </p>
              </div>
              <p className="text-xl pt-5 text-[#6E88A2] font-normal w-72">
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

          {/* Additional Content */}
          <div className="bg-[red] h-[rem]"></div>
          <div  className={`bg-[#F8F9FB] h-[15rem] mt-20 flex flex-col items-center justify-center transform transition-all duration-1000 ease-out ${
              inViewStars
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            ref={starsRef}>
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
        
          <div  
           className={`h-[30rem]  mt-10 transform transition-all duration-1000 ease-out ${
              inViewStars
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            ref={starsRef}
            >
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

        <div className="h-[30rem]">
          <div className="flex gap-7">
            <div className="h-[35rem]">
              <div
                className={`h-[30rem] pr-9 rounded-lg p-9 border-[#D4E0ED] border transform transition-all duration-1000 ease-out ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                ref={ref}
              >
                <div>
                  <img
                    src="https://images.ctfassets.net/k0lk9kiuza3o/1S547qhfsvRkuf2lUK92uz/43881b37e45760545b68bc5858df566d/TransPerfect.svg"
                    alt="Alice M."
                    className="w-48"
                  />
                  <p className="pt-5 text-[#6E88A2] font-bold w-72">Alice M.</p>
                  <p className="text-[#6E88A2] w-72">Senior Growth Analyst</p>
                </div>

                <p className="text-xl pt-5 text-[#6E88A2] font-normal w-72">
                  Calendly streamlines the appointment scheduling process in my
                  department by removing the need for manual back-and-forth
                  communication. By integrating Calendly into our sales process,
                  clients can easily book appointments with a sales
                  representative at any stage of their engagement with our
                  products and services.
                </p>
              </div>
            </div>

            <div className="h-[35rem]">
              <div
                className={`h-[30rem] pr-9 rounded-lg p-9 border-[#D4E0ED] border transform transition-all duration-1000 ease-out ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                ref={ref}
              >
                <div>
                  <img
                    src="https://images.ctfassets.net/k0lk9kiuza3o/7EOEAbFa9sZPZCVwL3F4hh/5a06c8ebd829abbaaf1e5e105a078b28/airwallex-customer-logo.svg"
                    alt="Leena S."
                    className="w-36"
                  />
                  <p className="pt-5 text-[#6E88A2] font-bold w-72">Leena S.</p>
                  <p className="text-[#6E88A2] w-88">
                    Product Lifecycle Management Specialist
                  </p>
                </div>
                <p className="text-xl pt-5 text-[#6E88A2] font-normal w-72">
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

                <div  className={`h-[38rem] pr-9 rounded-lg p-9 border-[#D4E0ED] border transform transition-all duration-1000 ease-out ${
              inViewBottom
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          ref={bottomRef}>
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
            <div className=" h-[40rem] ">
              <div className=" h-[40rem]  ">

                <div  className={`h-[38rem] pr-9 rounded-lg p-9 border-[#D4E0ED] border transform transition-all duration-1000 ease-out ${
              inViewBottom
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            ref={bottomRef}>
                   <div>
                     <img
                      src="https://images.ctfassets.net/k0lk9kiuza3o/6MZLRj88JOt71y85PmKQul/530d56a4145c812401abb45c4997d83d/ci-assante-customer-logo.svg"
                      alt=""
                      className=" w-32"
                    />
                    <div className="flex items-center gap- pt-8 text-xs ">
                      <img
                        src="https://images.ctfassets.net/k0lk9kiuza3o/7aKrtfxR5uuugbznkA4MzV/ffe7f147d49dd97c906098449ff7ed91/Asiya_Khan.png?h=100&q=85&fm=webp"
                        alt=""
                        className="rounded-full w-10"
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
      </div>

     
    </>
  );
};

export default NextGen;




