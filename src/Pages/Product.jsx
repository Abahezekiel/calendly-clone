import React from "react";
import ImageSlider from "../Components/ImageSlider";
import { Link } from "react-router-dom";
import FirstProp from "../Components/FirstProp";
import ConnectDisplay from "../Components/ConnectDisplay";
import CardSlider from "../Components/CardSlider";

const Product = () => {
  return (
    <div className="mt-32">
    

      <FirstProp
        title="Book meetings that work for you"
        description="Automate scheduling to solve any meeting scenario, improve meeting prep and follow-up, route calls to experts, connect all the tools you need, and stay secure."
        signUpText="Sign up for free"
        showDemoButton={true}
      >
        Get a demo {/* This is passed as children for the "Get a demo" button */}
      </FirstProp>

      <div className="flex ">
  <div className="border border-gray-600 rounded-lg p-4 group transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
    <h1 className="text-2xl text-blue-950 p-2 mb-6 font-semibold">Schedule Meetings</h1>

    <div>
      <div className="rounded p-4 bg-gray-100 bg-opacity-50">
        <div className="rounded p-4 bg-gray-300 bg-opacity-50">
          <div className="bg-white rounded-lg  flex gap-4 mb-3 shadow-md">
            <div className="bg-purple-600 w-2 rounded-sm"></div>

            <div className="py-1">
              <p className="text-blue-950 font-semibold text-sm mb-2">Customer call</p>
              <p className="text-gray-500 text-sm">15 min, Round robin</p>
            </div>
          </div>
          <div className="bg-white rounded-lg flex gap-4 shadow-md">
            <div className="bg-blue-600 w-2 rounded-sm"></div>

            <div>
              <p className="text-blue-950 font-semibold text-sm">Manager interview</p>
              <p className="text-gray-500 text-sm">45 min, One-on-one</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-blue-950 text-white text-center p-3 mt-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out transform group-hover:translate-y-0 translate-y-2">
      Learn More
    </div>
  </div>
</div>



<div className="text-center p-1 text-blue-800 bg-blue-200 w-60 mx-auto rounded-full font-semibold">
  Set up scheduling automation
</div>
<FirstProp
        title="Simplify meeting scheduling"
        description="Build your schedule for success and ensure meetings are booked when it’s convenient for everyone involved."
        signUpText="Sign up for free"
        showDemoButton={false}
      >
       
      </FirstProp>
<ConnectDisplay />
<CardSlider />
      <ImageSlider />
    </div>
  );
};

export default Product;
