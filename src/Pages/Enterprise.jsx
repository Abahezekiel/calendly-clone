import React from "react";
import { useState } from "react";
import { HiOutlinePlayCircle } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import VideoThumbnail from "./VideoThumbnail";
import { CiStar } from "react-icons/ci";
import EnterpriseForm from "./EnterpriseForm";

const Enterprise = () => {
  return (
    <>
      <div className="flex p-10 pt-[50px]">
        <div className="bg-white w-1/2">
          <h2 className="text-[#0B3558] text-5xl font-bold w-3/5  leading-tight">
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
        <div className="bg-white w-1/2 ">
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/3Fgpa0Cv4OKGxd58IhpBY7/04746f5c6fd384f715d0a0d30f5d778a/enterprise-hero-g2.png?q=85&fm=webp"
            alt=""
          />
        </div>
      </div>

      {/* <div className="  h-8 flex gap-20">
        <img
          src="https://images.ctfassets.net/k0lk9kiuza3o/6PFPRWMRMxRXthyXYcDRiR/ee7cc3f3ca0ed78752db06ce662a95f8/compass-customer-logo.svg"
          alt=""
        />
        <img
          src="https://images.ctfassets.net/k0lk9kiuza3o/4ILKtyUxeFLLrcKYTDJCDI/500c6c102fba1f345571d7282f5bd409/Loreal.svg"
          alt=""
        />
        <img
          src="https://images.ctfassets.net/k0lk9kiuza3o/4AUQ47IN6ZBtXtWXt65L3D/24dae32ff49baaf8feecf9471804420d/zendesk-customer-logo.svg"
          alt=""
        />
        <img
          src="https://images.ctfassets.net/k0lk9kiuza3o/bOnLOncEyDdb8izczJggp/b98f4d8da30cfff0a87e8dce2bced46e/dropbox-customer-logo.svg"
          alt=""
        />
        <img
          src="https://images.ctfassets.net/k0lk9kiuza3o/GHRKNEZzkpc1oTM6LoqE5/9d721c69136d48216029728235378338/Bit.ly_Logo.svg"
          alt=""
        />
        <img
          src="https://images.ctfassets.net/k0lk9kiuza3o/6ijOBKg2TK8bv06ue2lKQR/370fcc82cb8b05b66bde06bb7e892394/G2_Crowd_logo_1__Traced_.svg"
          alt=""
        />
        <img
          src="https://images.ctfassets.net/k0lk9kiuza3o/6uZEcOnBdmUELQgHDU5sCh/5ac167058dcb5a4fbe5910afdd1ca894/Pendo.svg"
          alt=""
        />
        <img
          src="https://images.ctfassets.net/k0lk9kiuza3o/56cjEhKMIFlRPdVUSQqMYD/a33ef976df35d4e240246d5e08bcb610/crocs-customer-logo.svg"
          alt=""
        />
        <img
          src="https://images.ctfassets.net/k0lk9kiuza3o/6fo1ntHspDIwlAN45IgxRU/fbba98755d036e6d87631d0c5eccab25/doordash-customer-logo.svg"
          alt=""
        />
        <img
          src="https://images.ctfassets.net/k0lk9kiuza3o/Y595RQBDR1fW5blQZfd9l/b9f3e2557c598b1ea51bb4e55f507833/lyft-customer-logo.svg"
          alt=""
        />
      </div> */}

      <div className="flex items-center justify-center">
        <h2 className="text-[#0B3558] flex text-center justify-center  mt-32 text-5xl w-3/5 font-semibold">
          Accomplish goals that matter to your business
        </h2>
      </div>

      <div className="m-14 flex gap-10">
        <div className="bg-white  w-2/6 rounded-3xl p-9 border-[#D4E0ED] border shadow">
          <h3 className="font-medium text-[#0B3558] text-2xl">
            Create more efficient and productive teams
          </h3>
          <p className=" text-xl pt-5 text-[#6E88A2] font-extralight">
            {" "}
            Speed up scheduling without disrupting your flow. Calendly connects
            to the tools, apps, and browsers where your team does their best
            work.
          </p>
          {/* <br/> */}
          <span className="mt-9 text-[#006BFF] font-semi-bold text-xl flex gap-3 items-center">
            View 100+ integrations
            <FaArrowRight />
          </span>
        </div>

        <div className="bg-white  w-2/6 rounded-3xl p-9 border-[#D4E0ED] border shadow">
          <h3 className="font-medium text-[#0B3558] text-2xl">
            Improve company performance and customer experience
          </h3>
          <p className=" text-xl pt-5 text-[#6E88A2] font-extralight">
            {" "}
            Make it easy for qualified leads to reach you. Time-saving
            automations empower client and candidate-facing teams to convert
            leads, faster.
          </p>
          <span className="mt-9 text-[#006BFF] font-semi-bold text-xl flex gap-3 items-center">
            Discover Calendly Routing
            <FaArrowRight />
          </span>
        </div>

        <div className="bg-white  w-2/6 rounded-3xl p-9 border-[#D4E0ED] border shadow">
          <h3 className="font-medium text-[#0B3558] text-2xl">
            Reduce the total cost of ownership
          </h3>
          <p className=" text-xl pt-5 text-[#6E88A2] font-extralight">
            Consolidate your software investments with a single platform that
            meets the needs of recruiting, sales, and other meeting-heavy teams.
          </p>
          <span className="mt-9 text-[#006BFF] font-semi-bold text-xl flex gap-3 items-center">
            Learn about team scheduling
            <FaArrowRight />
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <h2 className="text-[#0B3558] flex text-center justify-center  mt-32 text-5xl w-2/5 font-semibold">
          Equip teams to exceed expectations
        </h2>
      </div>

      <div className="m-14 flex gap-10 pt-10">
        <div className="bg-white  w-2/6  rounded-3xl p-9 border-[#1A4162] border shadow">
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/2H4GbF1jpOyD7cNMW0Dv82/85a232765d647c41403ca471fe76589d/VonageLogo.svg"
            alt=""
            className="w-48"
          />

          <p className=" text-6xl  text-[#0B3558] font-bold mt-8"> 160%</p>
          <span className="mt-9 text-[#1A4162] font-semi-bold text-xl flex gap-3 items-center">
            more customers reached
          </span>
          <span className="mt-9 text-[#006BFF] font-semi-bold text-xl flex gap-3 items-center pt-12">
            Read now
            <FaArrowRight />
          </span>
        </div>

        <div className="bg-white  w-2/6 rounded-3xl p-9 border-[#FFA701] border shadow">
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/5fJRcIQ6go6RJL0BbIrTKX/f259d0363593ac5e7de2bc96e8af3311/stanley-steemer-logo-vector.svg"
            alt=""
            className="w-20"
          />

          <p className=" text-6xl  text-[#FFA701] font-bold mt-10"> 22x</p>
          <span className="mt-9 text-[#1A4162] font-semi-bold text-xl flex gap-3 items-center">
            interviews scheduled
          </span>

          <span className="mt-9 text-[#006BFF] font-semi-bold text-xl flex gap-3 items-center pt-12">
            Read now
            <FaArrowRight />
          </span>
        </div>

        <div className="bg-white  w-2/6 rounded-3xl p-9 border-[#006BFF] border shadow">
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/6MZLRj88JOt71y85PmKQul/530d56a4145c812401abb45c4997d83d/ci-assante-customer-logo.svg"
            alt=""
            className="w-40"
          />

          <p className=" text-6xl  text-[#004EBA] font-bold mt-6">323%</p>
          <span className="mt-9 text-[#1A4162] font-semi-bold text-xl flex gap-3 items-center">
            return on investment
          </span>
          <span className="mt-9 text-[#006BFF] font-semi-bold text-xl flex gap-3 items-center pt-12">
            Read now
            <FaArrowRight />
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <h2 className="text-[#0B3558] flex text-center justify-center  mt-32 text-5xl  font-semibold">
          Built to keep your organization secure
        </h2>
      </div>

      <div className="flex p-10 pt-[50px]">
        <div className="bg-white w-1/2 ">
          <h3 className="text-[#0B3558] text-3xl font-medium mt-4">
            Automated SSO and SCIM workflows
          </h3>
          <p className="text-xl w-5/6 pt-6 font-thin">
            control access, simplify password management, and connect to your
            Identify Provider to ensure your organization follows IT policies.
          </p>

          <span className="mt-5 text-[#0B3558] font-semi-bold text-xl flex gap-3 items-center pb-8 border-b-2 border-[#006BFF] w-5/6">
            Learn more
            <FaArrowRight />
          </span>

          <div className="bg-white  ">
            <h3 className="text-[#0B3558] text-3xl font-medium mt-4">
              Domain control and account visibility
            </h3>
            <p className="text-xl w-5/6 pt-6 font-thin">
              Direct employee signups to your primary account where they can use
              team features and keep company activity in one location.
            </p>

            <span className="mt-5 text-[#0B3558] font-semi-bold text-xl flex gap-3 items-center pb-8 border-b-2 border-[#006BFF] w-5/6">
              Learn more
              <FaArrowRight />
            </span>
          </div>

          <div className="bg-white  ">
            <h3 className="text-[#0B3558] text-3xl font-medium mt-4">
              Gated permissions and user roles
            </h3>
            <p className="text-xl w-5/6 pt-6 font-thin">
              Assign role-based permissions for users, group and account admins,
              and account owners so everyone has the right level of
              responsibility.
            </p>

            <span className="mt-5 text-[#0B3558] font-semi-bold text-xl flex gap-3 items-center pb-8 border-b-2 border-[#006BFF] w-5/6">
              Learn more
              <FaArrowRight />
            </span>
          </div>
          <div className="bg-white  ">
            <h3 className="text-[#0B3558] text-3xl font-medium mt-4">
              Audit log and email auditing capabilities
            </h3>
            <p className="text-xl w-5/6 pt-6 font-thin">
              Assign role-based permissions for users, group and account admins,
              and account owners so everyone has the right level of
              responsibility.
            </p>

            <span className="mt-5 text-[#0B3558] font-semi-bold text-xl flex gap-3 items-center pb-8 border-b-2 border-[#006BFF] w-5/6">
              Learn more
              <FaArrowRight />
            </span>
          </div>
          <div className="bg-white  ">
            <h3 className="text-[#0B3558] text-3xl font-medium mt-4">
              Enterprise-grade data governance
            </h3>
            <p className="text-xl w-5/6 pt-6 font-thin">
              Maintain compliance and mitigate risk with capabilities like
              global retention policies, custom ToS, data deletion, auditing,
              and more.
            </p>

            <span className="mt-5 text-[#0B3558] font-semi-bold text-xl flex gap-3 items-center pb-8 border-b-2 border-[#006BFF] w-5/6">
              Learn more
              <FaArrowRight />
            </span>
          </div>
        </div>

        <div className="bg-white w-1/2 ">
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/6ooJOE407ik4uCRvHaSytu/d45504bb751be34bb8c0497052d2e42a/Calendly-Secure-User-Management-2__1_.png?w=1300&q=85&fm=webp"
            alt=""
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <h2 className="text-[#0B3558] flex text-center justify-center  mt-32 text-5xl  font-semibold w-3/5">
          Consider Calendly an extension of your team
        </h2>
      </div>

      <div className="m-14 flex gap-10 pt-10">
        <div className="   ">
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/6xveJVYC5HOuyIs0duRvHA/2e53d2c7c8ece478bf2c682eb6e0fa89/legal-and-security.png?q=85&fm=webp"
            alt=""
            className="rounded-3xl"
          />
          <p className="text-[#0B3558] font-bold mt-6 text-xl ">
            {" "}
            Complete legal and security reviews
          </p>
          <span className="text-[#0B3558] font-thin mt-3 ">
            Our team ensures that your organization's requirements are met.
          </span>
        </div>
        <div className="   ">
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/3EwAWbTQmnirlcIMiAiC3U/29bc4d1f9c5c6d312b6019094f4eb44e/set-up-account-for-scale.png?q=85&fm=webp"
            alt=""
            className="rounded-3xl"
          />
          <p className="text-[#0B3558] font-bold mt-6 text-xl ">
            {" "}
            Set up your account for scale
          </p>
          <span className="text-[#0B3558] font-thin mt-3 ">
            Implementation experts customize onboarding and guide setup.
          </span>
        </div>
        <div className="   ">
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/6oBwjyiGqyr19KFMgKQ7uD/7b3efeb9276d763ad77eaba6de6b3c1d/establish-and-hit-goals.png?q=85&fm=webp"
            alt=""
            className="rounded-3xl"
          />
          <p className="text-[#0B3558] font-bold mt-6 text-xl ">
            {" "}
            Establish and hit your goals
          </p>
          <span className="text-[#0B3558] font-thin mt-3 ">
            Success partners help you get the most out of your subscription.
          </span>
        </div>
        <div className="   ">
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/7MkmYwCJAv7EUTJTKBLPhI/280dc0edf3a9e9e02d80d296f8b2b451/skip-the-line-if-anything-comes-up.png?q=85&fm=webp"
            alt=""
            className="rounded-3xl"
          />
          <p className="text-[#0B3558] font-bold mt-6 text-xl ">
            {" "}
            Skip the line if anything comes up
          </p>
          <span className="text-[#0B3558] font-thin mt-3 ">
            Product specialists are available 24/7 to support your team.
          </span>
        </div>
      </div>

      <div className="m-14 p-10  h-96 shadow-xl flex gap-20">
        <div className="   rounded-xl w-[40%]">
          <VideoThumbnail />
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

      <div className="bg-[#0B3558] text-white h-16 flex items-center justify-center rounded-b-3xl m-14 mt-[-3.5rem]">
        <p className=" text-2xl flex items-center justify-center gap-5">
          Hear from more customers
          <FaArrowRight />
        </p>
      </div>

      <div className="bg-[#0B3558] text-white   pt-20 pb-5 mt-16">
        <h2 className="text-4xl font-semibold flex justify-center">
          The trusted platform for scheduling automation
        </h2>
        <p className="font-thin text-xl mt-8 flex justify-center">
          Calendly ranked #1 in G2’s 2024 Fall Report for Online Appointment
          Scheduling
        </p>
        <p className="flex items-center justify-center gap-5 mt-8">
          Check out Calendly's reviews here
          <FaArrowRight />
        </p>
        <div className="flex gap-14 m-14 justify-center   ">
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/4Np7PCbw5E0oCAlTsL9Q6J/0959480de09ebc6a691bd5a758d6d666/BusinessScheduling_EasiestToUse_Enterprise_EaseOfUse.svg"
            alt=""
            className="w-28"
          />
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/1QukQgQitVzqKLfCt3Re1J/654de955b00dfd10d01f32f5d026c191/OnlineAppointmentScheduling_BestResults_Small-Business_Total.svg"
            alt=""
            className="w-28"
          />
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/3ZyUpH3zxxWiOQmUe3XFqK/4c6a1f434feabe7c7417dc13719787f4/OnlineAppointmentScheduling_Leader_Enterprise_Leader.svg"
            alt=""
            className="w-28"
          />
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/5O1fDHAdPbJt7S6fe0lvD1/422864d748f9c3a4584816a6b09576e7/OnlineAppointmentScheduling_Leader_Leader.svg"
            alt=""
            className="w-28"
          />
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/2eiZooMmOHTRJ8uqyPMexP/06d1155866ae7f7e15ec2b9566ed8ebc/OnlineAppointmentScheduling_Leader_Mid-Market_Leader.svg"
            alt=""
            className="w-28"
          />
          <img
            src="https://images.ctfassets.net/k0lk9kiuza3o/1BRgtroPFAWYbejPO8Qqgc/0f98e36e195216d8d353030b46bf3567/OnlineAppointmentScheduling_Leader_Small-Business_Leader.svg"
            alt=""
            className="w-28"
          />
        </div>
      </div>

      <div className="flex items-center justify-center text-[#0B3558] text-center font-semi-bold mt-28 mb-14 text-6xl">
        <p className="w-3/6">See what customers have to say</p>
      </div>

      <div className="flex gap-10 m-7">
        <div className="  w-">
          <div className=" h-[40rem] w-96">
            <div className="  w-96 pr-9 rounded-lg p-9 border-[#D4E0ED] border shadow pb-">
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
          <div className="bg-[#F8F9FB] h-[15rem] w-96 mt-20 flex flex-col items-center justify-center">
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
          <div className=" h-[30rem] w-96 mt-10">
            <div className=" h-[35rem] w-96 ">
              <div className=" h-[30rem] w-96 pr-9 rounded-lg p-9 border-[#D4E0ED] border shadow pb-">
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
          <div className="flex gap-10">
            <div className=" h-[35rem] w-96 ">
              <div className=" h-[30rem] w-96 pr-9 rounded-lg p-9 border-[#D4E0ED] border shadow pb-">
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
            <div className=" h-[35rem] w-96">
              <div className=" h-[30rem]  w-96 pr-9 rounded-lg p-9 border-[#D4E0ED] border shadow pb-">
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
          <div className="flex gap-10 mt-[-3rem]">
            <div className="  w-96 ">
              <div className=" h-[40rem] w-96">
                <div className=" h-[38rem] w-96 pr-9 rounded-lg p-9 border-[#D4E0ED] border shadow pb-">
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
            <div className=" h-[35rem] w-96">
              <div className=" h-[35rem] w-96 ">
                <div className=" h-[rem] w-96 pr-9 rounded-lg p-9 border-[#D4E0ED] border shadow pb-">
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
      </div>

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
