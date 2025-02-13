import React from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"; // Import Clerk's user-related components

const Nav = () => {
  return (
    <div className="flex items-center justify-between px-4 py-4 bg-gray-100 fixed w-full z-10 top-0">
      <Link className="" to={"/"}>
        <img
          src="https://marketing-assets.calendly.com/media/logo.svg"
          alt="Logo"
          className="w-52"
        />
      </Link>
      <div className="hidden sm:flex justify-between gap-6">
        <Link to={"/product"} className="text-blue-950 font-bold hover:text-blue-600 transition-colors duration-300">
          Product
        </Link>
        <Link to={"/solution"} className="text-blue-950 font-bold hover:text-blue-600 transition-colors duration-300">
          Solution
        </Link>
        <Link to={"/enterprise"} className="text-blue-950 font-bold hover:text-blue-600 transition-colors duration-300">
          Enterprise
        </Link>
        <Link to={"/pricing"} className="text-blue-950 font-bold hover:text-blue-600 transition-colors duration-300">
          Pricing
        </Link>
        <Link to="/resources" className="text-blue-950 font-bold hover:text-blue-600 transition-colors duration-300">
          Resources
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <SignedIn>
          {/* If the user is signed in, show the UserButton */}
          <UserButton />
        </SignedIn>
        <SignedOut>
          {/* If the user is not signed in, show the login and signup links */}
          <Link
            to="/sign-in" // Link to the sign-in page
            className="text-blue-950 font-bold hover:text-gray-500 transition-colors duration-300"
          >
            Log In
          </Link>
          <Link
            to="/signup" // Link to the sign-up page
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-900 transition-colors duration-300"
          >
            Get started
          </Link>
        </SignedOut>
      </div>
    </div>
  );
};

export default Nav;
