import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import ImageSwitcher from "./ImageSwitcher";
import ImageSlider from "../Components/ImageSlider";
import Slider from "./Slider";


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
          <p><Link className="text-blue-600 underline">Sign up free with email</Link> No Credit Card Required</p>
        </div>
        <div className="flex  justify-center items-center ">
          <ImageSwitcher />
        </div>
      </div>
      <div><p className="text-blue-950 font-semibold text-xl text-center my-4">Trusted by more than <strong className="text-blue-800 font-extrabold">100,000</strong> of the world’s leading organizations</p></div>

      <div>
      <Slider />

      </div>
      <div className="flex flex-col items-center justify-center  px-6 py-12  w-[50%] m-auto text-center">
  <h1 className="text md:text-6xl lg:text-7xl text-blue-950 font-bold text-center mb-4 leading-7">
    Calendly makes scheduling simple
  </h1>
  <p className="text-lg md:text-xl text-blue-950 text-center mb-8 max-w-3xl">
    Calendly’s easy enough for individual users, and powerful enough to meet the needs of enterprise organizations — including 86% of the Fortune 500 companies.
  </p>
  <Link
    className="bg-blue-800 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700"
    to="/signup"
  >
    Sign up for free
  </Link>
</div>

    </div>
  );
};

export default Home;
