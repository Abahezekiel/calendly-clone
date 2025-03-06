import { IoMdCheckmark } from "react-icons/io";
import Button from "../Components/button/Button";
import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import Billed from "./Billed";

const TeamsPrice = () => {
  return (
    <div className="pt-20 bg-white p-7 ">
      <p className="text-xl text-blue-950 pb-4 font-semibold">Teams</p>
      <div className="flex  border-t border-gray-300 items-center justify-center gap-3  text-gray-500 text-sm ">
        <p className="w-96">Manage groups and permissions for your team</p>
        <p className="w-72  h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem]  p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex  border-t border-gray-300 items-center justify-center gap-3  text-gray-500 text-sm ">
        <p className="w-96">
          Assign admin-managed events and workflows across your team
        </p>
        <p className="w-72  h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem]  p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex  border-t border-gray-300 items-center justify-center gap-3  text-gray-500 text-sm ">
        <p className="w-96">
          Route with Calendly forms, or with your own HubSpot, Pardot, or
          Marketo forms
        </p>
        <p className="w-72  h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem]  p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex  border-t border-gray-300 items-center justify-center gap-3  text-gray-500 text-sm ">
        <p className="w-96">Routing form analytics</p>
        <p className="w-72  h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem]  p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex  border-t border-gray-300 items-center justify-center gap-3  text-gray-500 text-sm ">
        <p className="w-96">Route by HubSpot assignment</p>
        <p className="w-72  h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem]  p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex  border-t border-gray-300 items-center justify-center gap-3  text-gray-500 text-sm ">
        <p className="w-96">Route by Salesforce assignment</p>
        <p className="w-72  h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem]  p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex  border-t border-gray-300 items-center justify-center gap-3  text-gray-500 text-sm ">
        <p className="w-96">SAML single sign-on (SSO)</p>
        <p className="w-72  h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem]  p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center">
          Add-On
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex  border-t border-gray-300 items-center justify-center gap-3  text-gray-500 text-sm ">
        <p className="w-96">Advanced user provisioning via SCIM</p>
        <p className="w-72  h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem]  p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex  border-t border-gray-300 items-center justify-center gap-3  text-gray-500 text-sm ">
        <p className="w-96">Domain control and account oversight</p>
        <p className="w-72  h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem]  p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex  border-t border-gray-300 items-center justify-center gap-3  text-gray-500 text-sm ">
        <p className="w-96">Activity (audit) log</p>
        <p className="w-72  h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem]  p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex  border-t border-gray-300 items-center justify-center gap-3  text-gray-500 text-sm ">
        <p className="w-96">Communications archiving</p>
        <p className="w-72  h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem]  p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex  border-t border-gray-300 items-center justify-center gap-3  text-gray-500 text-sm ">
        <p className="w-96">Monitor success on an org- and user-level</p>
        <p className="w-72  h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72   p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex  border-t border-gray-300 items-center justify-center gap-3  text-gray-500 text-sm ">
        <p className="w-96">Connect integrations for your organization</p>
        <p className="w-72  h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem]  p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>
    </div>
  );
};

export default TeamsPrice;
