import React from "react";
import Button from "../Components/button/Button";
import DashNav from "./DashNav";
import DatePicker from "./DatePicker";

const SecurityDashSection = () => {
  return (
    <div className="  w-full">
      <DashNav />
      <div className="pl-7 text-base font-semibold text-gray-400">
        <p>Organizational Settings</p>
      </div>
      <div className="p-3">
        <Button
          title="Security"
          type="secondary"
          extraStyles="h- hover:bg-transparent rounded-full w- flex items-center justify-center text-black font-bold text-2xl border-none"
        />
      </div>
      <div className="flex  items-center  ml-3 mr-8 border-b border-gray-200 ">
        <div className="flex ">
          <div className=" ">
            <Button
              title="Data deletion"
              type="secondary"
              extraStyles="hover:bg-white rounded-md w- flex items-center justify-center text-black font-light text-md border-none "
            />
          </div>
          <div className=" flex items-center justify-center">
            <Button
              title="Activity log"
              type="secondary"
              extraStyles="hover:bg-white  border-none "
            />
          </div>
        </div>
      </div>
      <div className=" pl-7 w-3/4 pt-5 ">
        <p className="font-semibold text-xl mb-5 text-blue-950">
          Data deletion
        </p>
        <p className="font-light text-blue-900 mb-5">
          Delete information from your organization
        </p>
        <p className="text-blue-900 mb-7">
          When anyone in your organization schedules an event with an invitee,
          information about the event and everyone part of it is saved in
          Calendly. If you need to delete this information from Calendly and its
          vendors for compliance reasons, you can do so without contacting
          support.
        </p>

        <Button
          title="Once you delete information, you won't be able to recover it"
          type="secondary"
          extraStyles="bg-orange-200 w-full border-none rounded-md   text-black font-light text-sm  p-4"
        />
      </div>
      <div className=" pl-7 pt-5  mb-3 w-3/4">
        <p className="font-light text-blue-900 pb-5 border-b border-gray-400 ">
          Invitee data will be deleted 7 days from the date you make the request
        </p>
      </div>

      <div className=" pl-7 w-3/4 pt-5 ">
        <p className="font-light text-blue-900 mb-5">
          Delete information for specific invitees
        </p>
        <p className="text-blue-900 mb-7">
          Enter an invitee’s email to delete all of their personally
          identifiable information from your organization and integrations.
          During the data deletion process, Calendly removes the deleted invitee
          from their spot on group events and cancels both pending and upcoming
          events with them.
        </p>

        <input
          type="text"
          className="w-full border-gray-400 border rounded-md h-20"
        />
      </div>

      <div className="p-7 ">
        <Button
          title="Delete"
          type="secondary"
          extraStyles="bg-orange-700  border-none rounded-full   text-white font-semibold text-sm  p-3"
        />
        <p className="w-3/4 pb-5 border-b border-gray-400 "></p>
      </div>

      <div className=" pl-7 w-3/4 pt-5 ">
        <p className="font-light text-blue-900 mb-5">
          Delete information within a period of time
        </p>
        <p className="text-blue-900 mb-7">
          Choose a date range to delete all information from scheduled events
          within that period of time. Information for events that begin after
          00:00:00 UTC on the chosen start date to 23:59:59 UTC on the end date
          will be deleted.
        </p>

      
      </div>
    

      <DatePicker />
      <div className=" pl-7 w-3/4 pt-5  font-light">
        <p className="font-light text-black mb-5">
        Delete your account
        </p>
        <p className="text-black mb-7">
        You can delete your account in your <span className="underline text-blue-900">account settings.</span>
        </p>

      
      </div>
    </div>
  );
};

export default SecurityDashSection;
