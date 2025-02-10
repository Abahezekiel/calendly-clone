import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex items-center justify-between px-4 py-4 bg-gray-100 fixed w-full z-10 top-0">
      <Link className="" to={"/"}>
        <img
          src="https://marketing-assets.calendly.com/media/logo.svg"
          alt=""
          className="w-52"
        />
      </Link>
      <div className="hidden sm:flex justify-between gap-6">
        <Link
          to={"/product"}
          className="text-blue-950 font-bold hover:text-blue-600 transition-colors duration-300"
        >
          Product
        </Link>
        <Link
          to={"/solution"}
          className="text-blue-950 font-bold hover:text-blue-600 transition-colors duration-300"
        >
          Solution
        </Link>
        <Link
          to={"/enterprise"}
          className="text-blue-950 font-bold hover:text-blue-600 transition-colors duration-300"
        >
          Enterprise
        </Link>
        <Link
          to={"/pricing"}
          className="text-blue-950 font-bold hover:text-blue-600 transition-colors duration-300"
        >
          Pricing
        </Link>
        <Link
          to="/resources"
          className="text-blue-950 font-bold hover:text-blue-600 transition-colors duration-300"
        >
          Resources
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <Link
          className="text-blue-950 font-bold hover:text-gray-500 transition-colors duration-300"
        >
          Log In
        </Link>
        <Link className="bg-blue-600 text-white p-2 rounded hover:bg-blue-900 transition-colors duration-300">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Nav;
