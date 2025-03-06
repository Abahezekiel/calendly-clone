import { IoMdCheckmark } from "react-icons/io";
import Button from "../Components/button/Button";
import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import Billed from "./Billed";

const IntegratePrice = () => {
  return (
    <div className="pt-20 bg-white p-7 ">
      <p className="text-xl text-blue-950 pb-4 font-semibold">Integrations</p>
      <div className="flex  border-t border-gray-300 items-center justify-center gap-3  text-gray-500 text-sm ">
        <p className="w-96">
          Connect to Google Meet, GoToMeeting, Microsoft Teams, Slack, Webex,
          and Zoom
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

      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">Add Calendly to your website</p>
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

      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">Collect payments with Stripe and PayPal</p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
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
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">
          Access over 700 app integrations with Zapier and more with webhooks
        </p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">Connect to Mailchimp</p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">Connect to HubSpot CRM</p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">Sync Event data to Marketo</p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">Connect to Salesforce CRM</p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">
          Connect to Microsoft Dynamics 365 and Power Automate
        </p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">Route by HubSpot assignment</p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">Route by Salesforce assignment</p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">Route from HubSpot, Pardot, and Marketo forms</p>
        <p className="w-72 p-5 h-[4.7rem] bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">Track with Google Analytics and Meta Pixel</p>
        <p className="w-72 p-5 h-[4.7rem] bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">Integrate Gmail and Outlook for workflows</p>
        <p className="w-72 p-5 h-[4.7rem] bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
      </div>

      <div className="flex m-  border-t border-gray-200  items-center justify-center gap-3 text-gray-500 text-sm">
        <p className="w-96">Connect integrations for your organization</p>
        <p className="w-72  h-[4.7rem] p-5 bg-slate-100 items-center justify-center text-center"></p>
        <p className="w-72 h-[4.7rem]  p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
          <Button
            afterIcon={<FaCheckCircle />}
            type="secondary"
            extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
          />
        </p>
        <p className="w-72 p-5 bg-slate-100 items-center justify-center text-center">
          {" "}
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

export default IntegratePrice;
