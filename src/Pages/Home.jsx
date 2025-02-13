import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import ImageSwitcher from "./ImageSwitcher";
import ImageSlider from "../Components/ImageSlider";
import Slider from "./Slider";
import { FaArrowRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import MultipleItems from "../Components/SliderTwo";

const Home = () => {
  return (
    <div className="mt-32">
      <div className="flex gap-2 mx-12">
        <div>
          <h1 className="text-blue-950 text-7xl">Easy Scheduling ahead</h1>
          <p>
            Join 20 million professionals who easily book meetings with the #1
            scheduling tool
          </p>

          <Link className="bg-blue-500 p-2 flex rounded text-white items-center gap-4 text-[1.1rem] font-bold mb-2 hover:bg-blue-800">
            <div className="bg-white p-2 w-16">
              <img
                src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
                alt=""
              />
            </div>
            <p>Sign up with Google</p>
          </Link>
          <Link className="bg-blue-950 p-2 flex rounded text-white items-center gap-4 text-[1.1rem] font-bold hover:bg-gray-500">
            <div className="bg-white p-2 w-16">
              <img
                src="https://img.icons8.com/?size=100&id=22989&format=png&color=000000"
                alt=""
              />
            </div>
            <p>Sign up with Microsoft</p>
          </Link>
          <div class="flex items-center my-2">
            <div class="flex-grow border-t border-gray-500"></div>
            <p class="mx-4">OR</p>
            <div class="flex-grow border-t border-gray-500"></div>
          </div>
          <p>
            <Link className="text-blue-600 underline">
              Sign up free with email
            </Link>{" "}
            No Credit Card Required
          </p>
        </div>
        <div className="flex  justify-center items-center ">
          <ImageSwitcher />
        </div>
      </div>
      <div>
        <p className="text-blue-950 font-semibold text-xl text-center my-4">
          Trusted by more than{" "}
          <strong className="text-blue-800 font-extrabold">100,000</strong> of
          the world’s leading organizations
        </p>
      </div>

      <div>
        <Slider />
      </div>
      <div className="flex flex-col items-center justify-center  px-6 py-12  w-[50%] m-auto text-center">
        <h1 className="text md:text-6xl lg:text-7xl text-blue-950 font-bold text-center mb-4 leading-7">
          Calendly makes scheduling simple
        </h1>
        <p className="text-lg md:text-xl text-blue-950 text-center mb-8 max-w-3xl">
          Calendly’s easy enough for individual users, and powerful enough to
          meet the needs of enterprise organizations — including 86% of the
          Fortune 500 companies.
        </p>
        <Link
          className="bg-blue-800 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700"
          to="/signup"
        >
          Sign up for free
        </Link>
      </div>

      <div className=" mx-12">
        <div className="grid grid-cols-2 items-center gap-3 leading-9">
          <h1 className="text-5xl text-blue-950 font-bold ">
            Connect Calendly to the tools you already use
          </h1>
          <div className="text-xl leading-9">
            <p className="text-gray-500">
              Boost productivity with 100+ integrations
            </p>
            <Link className="flex items-center gap-4 text-blue-950 hover:text-gray-500 transform hover:translate-x-2 transition duration-300">
              View all integrations
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-9 gap-4 my-12">
          <Link className="flex justify-center items-center p-4 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-500 transition-all duration-300 transform hover:scale-110">
            <img
              src="https://img.icons8.com/?size=100&id=7csVZvHoQrLW&format=png&color=000000"
              alt=""
              className="w-14 h-14"
            />
          </Link>

          <Link className="flex justify-center  items-center p-4 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-500 transition-all duration-300 transform hover:scale-110">
            <img
              src="https://img.icons8.com/?size=100&id=38804&format=png&color=000000"
              alt=""
              className="w-12 h-12"
            />
          </Link>
          <Link className="flex justify-center items-center p-4 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-500 transition-all duration-300 transform hover:scale-110">
            <img
              src="https://img.icons8.com/?size=100&id=WKF3bm1munsk&format=png&color=000000"
              alt=""
              className="w-12 h-12"
            />
          </Link>
          <Link className="flex justify-center items-center p-4 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-500 transition-all duration-300 transform hover:scale-110">
            <img
              src="https://img.icons8.com/?size=100&id=4n94I13nDTyw&format=png&color=000000"
              alt=""
              className="w-12 h-12"
            />
          </Link>
          <Link className="flex justify-center items-center p-4 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-500 transition-all duration-300 transform hover:scale-110">
            <img
              src="https://img.icons8.com/?size=100&id=68803&format=png&color=000000"
              alt=""
              className="w-12 h-12"
            />
          </Link>
          <Link className="flex justify-center items-center p-4 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-500 transition-all duration-300 transform hover:scale-110">
            <img
              src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"
              alt=""
              className="w-12 h-12"
            />
          </Link>
          <Link className="flex justify-center items-center p-4 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-500 transition-all duration-300 transform hover:scale-110">
            <img
              src="https://img.icons8.com/?size=100&id=117562&format=png&color=000000"
              alt=""
              className="w-12 h-12"
            />
          </Link>
          <Link className="flex justify-center items-center p-4 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-500 transition-all duration-300 transform hover:scale-110">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/1iXaOfSTG4LH14hl3jhgLV/9c262e7842e1e78a9e595a4477ecde7d/Chrome.svg"
              alt=""
              className="w-12 h-12"
            />
          </Link>
          <Link className="flex justify-center items-center p-4 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-500 transition-all duration-300 transform hover:scale-110">
            <img
              src="https://img.icons8.com/?size=100&id=995Ah2Szp29l&format=png&color=000000"
              alt=""
              className="w-12 h-12"
            />
          </Link>
          <Link className="flex justify-center items-center p-4 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-500 transition-all duration-300 transform hover:scale-110">
            <img
              src="https://img.icons8.com/?size=100&id=Xq3RA1kWzz3X&format=png&color=000000"
              alt=""
              className="w-12 h-12"
            />
          </Link>
          <Link className="flex justify-center items-center p-4 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-500 transition-all duration-300 transform hover:scale-110">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/42r0sVudnFRBVKsZH5MKRv/e71cb6443dc2ffe75a4f990ce0af5ead/zapier-icon.svg"
              alt=""
              className="w-12 h-12"
            />
          </Link>
          <Link className="flex justify-center items-center p-4 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-500 transition-all duration-300 transform hover:scale-110">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/3L8hrM2H4gJLD7s2UFhhxE/75734eb6c87362ba5386ef33c4760d3d/Logomark.svg"
              alt=""
              className="w-12 h-12"
            />
          </Link>
          <Link className="flex justify-center items-center p-4 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-500 transition-all duration-300 transform hover:scale-110">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/nirfrq5tMDzXegZJxZHYr/626c4f558a197d841e926a6f53603aa3/linkedin.svg"
              alt=""
              className="w-12 h-12"
            />
          </Link>
          <Link className="flex justify-center items-center p-4 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-500 transition-all duration-300 transform hover:scale-110">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/68QvXpmECJZjUTvmk1Qbxk/7c2198e75bf4761ccf6677fdb960a14d/stripe-logo.svg"
              alt=""
              className="w-12 h-12"
            />
          </Link>
          <Link className="flex justify-center items-center p-4 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-500 transition-all duration-300 transform hover:scale-110">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/3YVXIhGtUTAzHkrMdGeEWh/f6ccde01983215ca45ba04a9aa57e7b1/Typeform-Icon.svg"
              alt=""
              className="w-12 h-12"
            />
          </Link>
          <Link className="flex justify-center items-center p-4 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-500 transition-all duration-300 transform hover:scale-110">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/5iPdwT125pfQPNafr27mny/e866d175ee0169c23f90a3e438b65b21/intercom.svg"
              alt=""
              className="w-12 h-12"
            />
          </Link>
          <Link className="flex justify-center items-center p-4 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-500 transition-all duration-300 transform hover:scale-110">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/5f4urpcDfUzxVFsvqHeuC/24ce8cc6a9e5269f5f749e4de21ad03b/activecampaign-logo-icon.svg"
              alt=""
              className="w-12 h-12"
            />
          </Link>
          <Link className="flex justify-center items-center p-4 border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-500 transition-all duration-300 transform hover:scale-110">
            <img
              src="https://images.ctfassets.net/k0lk9kiuza3o/263kzYvoG2EGkeRpsrnkrA/90dd1ddda05b6fe9a4e5010f99308c0d/paypal-icon.svg"
              alt=""
              className="w-12 h-12"
            />
          </Link>
        </div>

        <div className="flex gap-16">
          <Link
            className="w-full md:w-1/2 border-2 border-gray-300 p-6 rounded-lg shadow-lg bg-white transition-all hover:scale-105"
            to=""
          >
            <div className="flex items-center justify-between mb-4">
              <img
                src="https://images.ctfassets.net/k0lk9kiuza3o/x2WxpmYJVcwMjBJy0Bb1u/1d05b8113da8d7cefe0e9e8c72d46da6/Google__G__Logo.svg"
                alt=""
                className="w-14 h-12"
              />
              <MdArrowOutward className="text-3xl text-gray-600 transition-transform duration-300 transform group-hover:translate-x-2 " />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-gray-800">
              Google Suite
            </h3>
            <p className="text-gray-500 text-sm">
              Get your job done faster by connecting Calendly to Google
              Calendar, MeeT, Analytics, and more.
            </p>
          </Link>

          <Link
            className="w-full md:w-1/2 border-2 border-gray-300 p-6 rounded-lg shadow-lg bg-white transition-all hover:scale-105"
            to=""
          >
            <div className="flex items-center justify-between mb-4">
              <img
                src="https://images.ctfassets.net/k0lk9kiuza3o/7yrXYudS3YKuKWtyU5Bj81/10d99f35d1f31142ab4c49c5a9c22035/microsoftLogo.svg"
                alt=""
                className="w-14 h-12"
              />
              <MdArrowOutward className="text-3xl text-gray-600 transition-transform duration-300 transform group-hover:translate-x-2" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-gray-800">
              Microsoft Suite{" "}
            </h3>
            <p className="text-gray-500 text-sm">
              Male your day easier with Calendly integrations for Microsoft
              Teams,Outlook,Azure SSO, and more.
            </p>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center  px-6 py-12  w-[50%] m-auto text-center">
          <h1 className="text md:text-6xl lg:text-7xl text-blue-950 font-bold text-center mb-4 leading-7">
            More than a scheduling link
          </h1>
          <p className="text-lg md:text-xl text-blue-900 text-center mb-8 max-w-3xl">
            Calendly’s functionality goes way beyond just a scheduling link,
            with customizable, automated features to help you and your team
            achieve goals faster.
          </p>
          <Link
            className="bg-blue-800 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700"
            to="/signup"
          >
            Sign up for free
          </Link>
        </div>

        <div className="">
          <h1 className="text-5xl text-blue-950 font-bold  mb-4 leading-1  w-[45%] p-4">
            Pick the perfect plan for your team{" "}
          </h1>
          <div className="flex items-center gap-3">
            <Link className="text-gray-500">Billed Monthly</Link>
            <span className="font-bold text-gray-600">|</span>
            <Link className="text-blue-700 font-bold">Billed Yearly</Link>
            <p className="text-blue-600 bg-blue-200 p-1 rounded-lg text-sm">
              Save up to 20%
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {/* Free Plan */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-300">
            {/* Top Gray Bar */}
            <div className="bg-gray-300 w-full h-4 rounded-t-lg"></div>

            {/* Content Section */}
            <div className="bg-white p-6 flex flex-col">
              {/* Inner Gray Bar (Optional for design consistency) */}

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Free
              </h2>
              <p className="text-gray-500  mb-28">
                For individuals starting out with basic scheduling
              </p>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Always free
              </h3>
              <Link className="text-gray-700 py-2 px-6 rounded-lg transition duration-300 w-[70%] text-center border border-blue-950">
                Get started
              </Link>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="bg-white rounded-lg shadow-lg border border-blue-950">
            {/* Top Gray Bar */}
            <div className="bg-blue-950 w-full h-4 rounded-t-lg"></div>

            {/* Content Section */}
            <div className="bg-white p-6 flex flex-col">
              <h2 className="text-3xl font-bold text-blue-950 mb-4">
                Standard
              </h2>
              <p className="text-blue-950  mb-24 ">
                For those with more sophisticated scheduling needs
              </p>
              <div className="flex gap-2">
                <h3 className="text-5xl font-bold text-blue-950 mb-4">
                  $10
                  <Link className="text-sm font-normal border-b-2 border-dotted border-blue-950">
                    /seat/mo
                  </Link>
                </h3>
              </div>

              <Link className="text-white py-2 px-6 rounded-lg transition duration-300 w-[70%] text-center  bg-blue-950 hover:bg-slate-600">
                Get started
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg border border-blue-500">
            {/* Top Gray Bar */}
            <div className="bg-blue-500 w-full h-4 rounded-t-lg"></div>

            {/* Content Section */}
            <div className="bg-white p-6 flex flex-col">
              <div className="flex gap-3 items-center">
                {" "}
                <h2 className="text-3xl font-bold text-blue-500 mb-4">Teams</h2>
                <span className="p-1 rounded-lg bg-blue-50 text-blue-500 text-xs">
                  popular
                </span>
              </div>
              <p className="text-blue-950  mb-24 ">
                When your team needs to align on a scheduling process and
                collaborate efficiently
              </p>
              <div className="flex gap-2">
                <h3 className="text-5xl font-bold text-blue-950 mb-4">
                  $16
                  <Link className="text-sm font-normal border-b-2 border-dotted border-blue-950">
                    /seat/mo
                  </Link>
                </h3>
              </div>

              <Link className="text-white py-2 px-6 rounded-lg transition duration-300 w-[70%] text-center  bg-blue-500 hover:bg-blue-800">
                Get started
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg border border-blue-950">
            {/* Top Gray Bar */}
            <div className="bg-blue-900 w-full h-4 rounded-t-lg"></div>

            {/* Content Section */}
            <div className="bg-blue-950 text-white p-6 flex flex-col">
              <h2 className="text-3xl font-bold  mb-4">Enterprise</h2>
              <p className="  mb-20 ">
                For teams who need enterprise-level security, admin control, and
                support. Includes enterprise-grade procurement
              </p>
              <div className="flex gap-2">
                <h3 className="text-5xl font-bold  mb-4">
                  <span className="text-sm font-normal border-b-2 border-dotted border-blue-950">
                    Starts at{" "}
                  </span>
                  $10
                  <span className="text-sm font-normal border-b-2 border-dotted border-blue-950">
                    /seat/mo
                  </span>
                </h3>
              </div>

              <Link className="text-white py-2 px-6 rounded-lg transition duration-300 w-[70%] text-center  bg-blue-950 hover:bg-slate-600 border border-white">
                Talk to sales
              </Link>
            </div>
          </div>
        </div>
        <Link className="flex gap-3 items-center text-blue-400 font-bold hover:text-gray-950">Learn more on our pricing page <FaArrowRight />
        </Link>


        <div className="flex gap-5 w-full mt-6">
            <div className="text-5xl leading-1 text-blue-950 font-bold">
                <h1>Discover how businesses grow with Calendly</h1>
            </div>
            <div>
                <h1 className="text-blue-900 leading-1 text-lg mb-2">Learn how teams of all sizes are using Calendly’s scheduling automation platform to create value.</h1>
                <div>
                <Link className="flex gap-3 items-center text-blue-950 font-bold hover:text-gray-950">View customers stories <FaArrowRight />
                </Link>
                </div>
            </div>
        </div>
<div className="w-44">

{/* <MultipleItems  /> */}
</div>
        
      </div>
    </div>
  );
};

export default Home;
