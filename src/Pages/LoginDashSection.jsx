import React from "react";
import DashNav from "./DashNav";
import Button from "../Components/button/Button";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { CiDollar } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa";
import { GoPlus } from "react-icons/go";

const LoginDashSection = () => {
  return (
    <div className=" h-screen w-full">
      <DashNav />
      <div className="pl-7 text-base font-semibold text-gray-400">
        <p>Organizational Settings</p>
      </div>
      <div className="p-3">
        <Button
          title="Login"
          type="secondary"
          extraStyles="h- hover:bg-transparent rounded-full w- flex items-center justify-center text-black font-bold text-2xl border-none"
        />
      </div>

      <div className="flex  items-center  ml-3 mr-8 border-b border-gray-200 ">
        <div className="flex ">
          <div className=" ">
            <Button
              title="Single sign-on"
              type="secondary"
              extraStyles="hover:bg-white rounded-md w- flex items-center justify-center text-black font-light text-md border-none "
            />
          </div>
          <div className=" flex items-center justify-center">
            <Button
              title="User provisioning"
              type="secondary"
              extraStyles="hover:bg-white  border-none "
            />
          </div>
          <div className=" flex items-center justify-center">
            <Button
              title="Domain control"
              type="secondary"
              extraStyles="hover:bg-white  border-none "
            />
          </div>
        </div>
      </div>

      <div className=" pl-7 w-3/4 pt-5 ">
        <button className="bg-blue-950 px-2 py-2 h-8 p-2 text-white rounded-md text-sm font-semibold flex items-center">
          Enterprise
        </button>
        <p className="font-semibold text-xl mb-5 text-blue-950">
          Single sign-on
        </p>
        <p className="font-light text-blue-900 mb-5">
          Single sign-on (SSO) offers a simple and secure way for users to
          access Calendly. With SSO enabled, users can log in to Calendly with
          their corporate credentials. From a security standpoint, this
          eliminates weak password use, reduces the need to remember passwords,
          and provides more control.
        </p>
        <p className="text-blue-900 mb-7">
          Calendly supports SAML SSO. To learn more about SAML and how to set it
          up,{" "}
          <span className="underline text-blue-500">
            visit our help center.
          </span>
        </p>

        <Button
          title="Contact us"
          type="secondary"
          extraStyles="h- hover:bg-transparent rounded-full  flex items-center justify-center text-white font-light text-sm bg-blue-600 p-3"
        />
      </div>
    </div>
  );
};

export default LoginDashSection;
