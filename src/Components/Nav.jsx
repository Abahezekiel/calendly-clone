

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"; // Import Clerk's user-related components
import Logo from "../Pages/Logo";
import ResourceModal from "../Pages/ResourceModal";
import { SIDEBAR } from "./Array";

const Nav = () => {
  const [isResourceModalVisible, setIsResourceModalVisible] = useState(false);
  console.log(SIDEBAR);

  // Show the modal when the user hovers over the 'Resources' link
  const handleMouseEnter = () => setIsResourceModalVisible(true);

  // Hide the modal when the user stops hovering
  const handleMouseLeave = () => setIsResourceModalVisible(false);

  return (
    <div className="flex items-center justify-between px-4 py-4 bg-gray-100 fixed w-full z-10 top-0 h-20">
      <Link className="" to={"/"}>
        <Logo />
      </Link>

      <div className="hidden sm:flex justify-between gap-6 p-7">
        <Link
          to={"/product"}
          className="text-blue-950 font-bold hover:text-blue-600 transition-colors duration-300 h-20 flex items-center"
        >
          Product
        </Link>
        <Link
          to={"/solution"}
          className="text-blue-950 font-bold hover:text-blue-600 transition-colors duration-300 h-20 flex items-center"
        >
          Solution
        </Link>
        <Link
          to={"/enterprise"}
          className="text-blue-950 font-bold hover:text-blue-600 transition-colors duration-300  h-20 flex items-center"
        >
          Enterprise
        </Link>
        <Link
          to={"/pricing"}
          className="text-blue-950 font-bold hover:text-blue-600 transition-colors duration-300  h-20 flex items-center"
        >
          Pricing
        </Link>

        <div
          className="relative h-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            to="/resources"
            className="text-blue-950 font-bold hover:text-blue-600 transition-colors duration-300  h-20 flex items-center"
          >
            Resources
          </Link>

          {/* Conditionally render ResourceModal on hover */}
          {isResourceModalVisible && <ResourceModal />}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <SignedIn>
          {/* If the user is signed in, show the UserButton */}
          <UserButton />
        </SignedIn>
        <SignedOut>
          {/* If the user is not signed in, show the login and signup links */}
          <Link
            to="/sign-in"
            className="text-blue-950 font-bold hover:text-gray-500 transition-colors duration-300"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-900 transition-colors duration-300"
          >
            Get started
          </Link>
        </SignedOut>
      </div>

      {/* Conditionally render ResourceModal on hover */}
      {isResourceModalVisible && <ResourceModal />}
    </div>
  );
};

export default Nav;
