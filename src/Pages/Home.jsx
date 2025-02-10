import React from "react";
import { Link } from "react-router-dom";
import ImageSwitcher from "./ImageSwitcher";
import ImageSlider from "../Components/ImageSlider";

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
        <ImageSlider />
      </div>
    </div>
  );
};

export default Home;
