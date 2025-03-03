import React, { useState } from "react";
import Button from "../Components/button/Button";
import DashNav from "./DashNav";
import DatePicker from "./DatePicker";

const PermissionDashSection = () => {
  // State to track which radio button is selected
  const [selectedOption, setSelectedOption] = useState("");

  // Handler to update state when a radio button is selected
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="w-full">
        <DashNav />
        <div className="pl-7 text-base font-semibold text-gray-400">
          <p>Scheduling settings</p>
        </div>
        <div className="p-3">
          <Button
            title="Permissions"
            type="secondary"
            extraStyles="h- hover:bg-transparent rounded-full w- flex items-center justify-center text-black font-bold text-2xl border-none"
          />
        </div>
        <div className="flex items-center ml-3 mr-8 border-b border-gray-200">
          <div className="flex">
            <div className=" ">
              <Button
                title="Event types"
                type="secondary"
                extraStyles="hover:bg-white rounded-md w- flex items-center justify-center text-black font-light text-md border-none "
              />
            </div>
            <div className=" flex items-center justify-center">
              <Button
                title="Workflows"
                type="secondary"
                extraStyles="hover:bg-white border-none "
              />
            </div>
            <div className=" flex items-center justify-center">
              <Button
                title="Invitations"
                type="secondary"
                extraStyles="hover:bg-white border-none "
              />
              <button className="bg-blue-950 px-2 py-2 h-8 p-2 text-white rounded-md text-sm font-semibold flex items-center">
                New
              </button>
            </div>
          </div>
        </div>
        <div className="pl-7 w-3/4 pt-5">
          <p className="font-semibold text-xl mb-5 text-blue-950">
            Event types
          </p>
          <p className="font-semibold text-blue-900 mb-5">
            Access to shared event types
          </p>
          <p className="text-blue-900 mb-7">
            Shared event types allow members of your organization to create
            Round Robin and Co-hosted event types.
          </p>
          <p className="text-blue-900 mb-7 font-semibold">
            Who can create new shared event types?
          </p>
        </div>

        <div className="pl-7 flex gap-5">
          <form action="">
            <input
              type="radio"
              name="eventAccess"
              value="allMembers"
              checked={selectedOption === "allMembers"}
              onChange={handleRadioChange}
              className="mr-2"
            />
            <label htmlFor="html">All members of my organization</label>
            <br />

            <input
              type="radio"
              name="eventAccess"
              value="noOne"
              checked={selectedOption === "noOne"}
              onChange={handleRadioChange}
              className="mr-2"
            />
            <label htmlFor="html">No one</label>
            <br />
          </form>
        </div>

        {selectedOption === "noOne" && (
          <div className="btn border w-3/4 border-gray-200 m-7 bg-orange-50 rounded-md flex items-center justify-between p-5">
            <Button
              title="No one will be able to create new shared event types. Existing shared event types will not be affected."
              type="secondary"
              extraStyles="rounded-full flex text-black font-light text-sm border-none"
            />
          </div>
        )}

        <div className="p-7 flex gap-5">
          <div>
            <Button
              title="Cancel"
              type="secondary"
              extraStyles="bg-white border- rounded-full text-blue-900 font-semibold text-sm p-3"
            />
          </div>
          <Button
            title="Save"
            type="secondary"
            extraStyles="bg-blue-500 border- rounded-full text-white font-semibold text-sm p-3"
          />
        </div>
      </div>
    </>
  );
};

export default PermissionDashSection;
