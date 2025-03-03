import React from "react";
import { Link } from "react-router-dom";

const FirstProp = ({ title, description, signUpText, children,showDemoButton }) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 w-[50%] m-auto text-center">
      <h1 className="text md:text-6xl lg:text-7xl text-blue-950 font-bold text-center mb-4 leading-7">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-blue-950 text-center mb-8 max-w-3xl">
        {description}
      </p>
      <div className="flex gap-3">
        <Link
          className="bg-blue-800 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700"
          to="/signup"
        >
          {signUpText}
        </Link>
        {/* Conditionally render the "Get a demo" button based on showDemoButton prop */}
        {showDemoButton && (
          <Link
            className="text-blue-950 text-lg font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 border border-blue-950"
            to="/signup"
          >
            {children} {/* Display the children prop here */}
          </Link>
        )}
      </div>
    </div>
  );
};

export default FirstProp;
 
