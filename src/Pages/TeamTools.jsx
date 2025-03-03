import React from "react";
import Button from "../Components/button/Button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiInfo } from "react-icons/fi";
import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";

const TeamTools = () => {
  return (
    <>
      <div className="flex w-full border-l border-r ">
        {/* Meeting Polls */}
        <div className="flex justify-between   pl-3 pb-3 pt-10  font-bold items-center ">
          <div>
            <p className=" w-full">TeamTools</p>
          </div>{" "}
        </div>
      </div>
      <div className="border">
        <div className="flex w-full  ">
          {/* Meeting Polls */}
          <div className="flex justify-between  w-72 p-3 text-base font-light items-center ">
            <div>
              <p className="text-light w-full">
              View analytics and insights

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
              <p className="text-light w-full">Enforce branding for the entire organization</p>
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
              Organize team members into groups and assign group admins
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
              Create, sync, and lock managed events to distribute across the organization
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
      </div>
    </>
  );
};

export default TeamTools;
