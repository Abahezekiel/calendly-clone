import React from "react";
import Button from "../Components/button/Button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiInfo } from "react-icons/fi";
import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";
import { AiOutlineExport } from "react-icons/ai";

const IntegratePlans = () => {
  return (
    <>
      <div className="flex w-full border-l border-r ">
        {/* Meeting Polls */}
        <div className="flex justify-between   pl-3 pb-3 pt-10  font-semibold items-center ">
          <div className="">
            <p className=" w-full">IntegratePlans</p>
            <div className="ml-[-1.2rem] pt-3 font-light text-blue-500">
              <Button
                title="See all 90+ integrations"
                afterIcon={<AiOutlineExport className="" />}
                type="secondary"
                extraStyles="border-none"
              />
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="border">
        <div className="flex w-full  ">
          {/* Meeting Polls */}
          <div className="flex justify-between  w-72 p-3 text-base font-light items-center ">
            <div>
              <p className="text-light w-full">
                Connect Zoom, Google Meet, Microsoft Teams, and other web
                conferencing tools
              </p>
            </div>{" "}
            <div>
              <Button
                afterIcon={<FiInfo />}
                type="secondary"
                extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-black font-light text-md border-none"
              />
            </div>
          </div>
          <div className="w-48 flex justify-center items-center border-l">
            <Button
              afterIcon={<FaCheckCircle />}
              type="secondary"
              extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
            />
          </div>
          <div className="w-48 flex justify-center items-center  border-l">
            <Button
              afterIcon={<FaCheckCircle />}
              type="secondary"
              extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
            />
          </div>
          <div className="w-48 flex justify-center items-center border-l">
            <Button
              afterIcon={<FaCheckCircle />}
              type="secondary"
              extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
            />
          </div>
          <div className="w-48 flex justify-center items-center border-l">
            <Button
              afterIcon={<FaCheckCircle />}
              type="secondary"
              extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
            />
          </div>
        </div>

        <div className="flex w-full bg-slate-50">
          {/* One-on-Ones */}
          <div className="flex justify-between  w-72 p-3 text-base font-light items-center ">
            <div>
              <p className="text-light w-full">Connect multiple calendars</p>
            </div>{" "}
            <div>
              <Button
                afterIcon={<FiInfo />}
                type="secondary"
                extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-black font-light text-md border-none"
              />
            </div>
          </div>
          <div className="w-48 flex justify-center items-center  border-l"></div>
          <div className="w-48 flex justify-center items-center border-l ">
            <Button
              afterIcon={<FaCheckCircle />}
              type="secondary"
              extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
            />
          </div>
          <div className="w-48 flex justify-center items-center  border-l">
            <Button
              afterIcon={<FaCheckCircle />}
              type="secondary"
              extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
            />
          </div>
          <div className="w-48 flex justify-center items-center border-l">
            <Button
              afterIcon={<FaCheckCircle />}
              type="secondary"
              extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
            />
          </div>
        </div>
        <div className="flex w-full ">
          {/* Meeting Polls */}
          <div className="flex justify-between  w-72 p-3 text-base font-light items-center ">
            <div>
              <p className="text-light w-full">
                Create custom webhooks to get Calendly meeting information in
                real-time
              </p>
            </div>{" "}
            <div>
              <Button
                afterIcon={<FiInfo />}
                type="secondary"
                extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-black font-light text-md border-none"
              />
            </div>
          </div>
          <div className="w-48 flex justify-center items-center border-l"></div>
          <div className="w-48 flex justify-center items-center  border-l">
            <Button
              afterIcon={<FaCheckCircle />}
              type="secondary"
              extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
            />
          </div>
          <div className="w-48 flex justify-center items-center border-l">
            <Button
              afterIcon={<FaCheckCircle />}
              type="secondary"
              extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
            />
          </div>
          <div className="w-48 flex justify-center items-center border-l">
            <Button
              afterIcon={<FaCheckCircle />}
              type="secondary"
              extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
            />
          </div>
        </div>

        <div className="flex w-full bg-slate-50">
          {/* One-on-Ones */}
          <div className="flex justify-between  w-72 p-3 text-base font-light items-center ">
            <div>
              <p className="text-light w-full">
                Connect Stripe and PayPal for collecting payments
              </p>
            </div>{" "}
            <div>
              <Button
                afterIcon={<FiInfo />}
                type="secondary"
                extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-black font-light text-md border-none"
              />
            </div>
          </div>
          <div className="w-48 flex justify-center items-center  border-l"></div>
          <div className="w-48 flex justify-center items-center border-l ">
            <Button
              afterIcon={<FaCheckCircle />}
              type="secondary"
              extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
            />
          </div>
          <div className="w-48 flex justify-center items-center  border-l">
            <Button
              afterIcon={<FaCheckCircle />}
              type="secondary"
              extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
            />
          </div>
          <div className="w-48 flex justify-center items-center border-l">
            <Button
              afterIcon={<FaCheckCircle />}
              type="secondary"
              extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
            />
          </div>
        </div>
        <div className="flex w-full  ">
          {/* Meeting Polls */}
          <div className="flex justify-between  w-72 p-3 text-base font-light items-center ">
            <div>
              <p className="text-light w-full">
                Connect HubSpot, Mailchimp, and Zapier to automate work across
                platforms
              </p>
            </div>{" "}
            <div>
              <Button
                afterIcon={<FiInfo />}
                type="secondary"
                extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-black font-light text-md border-none"
              />
            </div>
          </div>
          <div className="w-48 flex justify-center items-center border-l"></div>
          <div className="w-48 flex justify-center items-center  border-l">
            <Button
              afterIcon={<FaCheckCircle />}
              type="secondary"
              extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
            />
          </div>
          <div className="w-48 flex justify-center items-center border-l">
            <Button
              afterIcon={<FaCheckCircle />}
              type="secondary"
              extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
            />
          </div>
          <div className="w-48 flex justify-center items-center border-l">
            <Button
              afterIcon={<FaCheckCircle />}
              type="secondary"
              extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
            />
          </div>
        </div>

        <div className="flex w-full bg-slate-50">
          {/* One-on-Ones */}
          <div className="flex justify-between  w-72 p-3 text-base font-light items-center ">
            <div>
              <p className="text-light w-full">
                Connect to Google Analytics and Meta Pixel to track conversions
                and booking activity
              </p>
            </div>{" "}
            <div>
              <Button
                afterIcon={<FiInfo />}
                type="secondary"
                extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-black font-light text-md border-none"
              />
            </div>
          </div>
          <div className="w-48 flex justify-center items-center  border-l"></div>
          <div className="w-48 flex justify-center items-center border-l ">
            <Button
              afterIcon={<FaCheckCircle />}
              type="secondary"
              extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
            />
          </div>
          <div className="w-48 flex justify-center items-center  border-l">
            <Button
              afterIcon={<FaCheckCircle />}
              type="secondary"
              extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
            />
          </div>
          <div className="w-48 flex justify-center items-center border-l">
            <Button
              afterIcon={<FaCheckCircle />}
              type="secondary"
              extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
            />
          </div>
        </div>
        <div className="flex w-full ">
          {/* Meeting Polls */}
          <div className="flex justify-between  w-72 p-3 text-base font-light items-center ">
            <div>
              <p className="text-light w-full">
                Connect to Salesforce and Marketo to update records
              </p>
            </div>{" "}
            <div>
              <Button
                afterIcon={<FiInfo />}
                type="secondary"
                extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-black font-light text-md border-none"
              />
            </div>
          </div>
          <div className="w-48 flex justify-center items-center border-l"></div>
          <div className="w-48 flex justify-center items-center  border-l"></div>
          <div className="w-48 flex justify-center items-center border-l">
            <Button
              afterIcon={<FaCheckCircle />}
              type="secondary"
              extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
            />
          </div>
          <div className="w-48 flex justify-center items-center border-l">
            <Button
              afterIcon={<FaCheckCircle />}
              type="secondary"
              extraStyles="hover:bg-white rounded-md w-full flex items-center justify-center text-blue-500 text-lg border-none"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IntegratePlans;
