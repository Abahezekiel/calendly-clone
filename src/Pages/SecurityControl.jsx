import React from "react";
import Button from "../Components/button/Button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiInfo } from "react-icons/fi";
import { FaCheckCircle, FaRegCheckCircle } from "react-icons/fa";
import { AiOutlineExport } from "react-icons/ai";

const SecurityControl = () => {
  return (
    <>
      <div className="flex w-full border-l border-r ">
        {/* Meeting Polls */}
        <div className="flex justify-between   pl-3 pb-3 pt-10  font-semibold items-center ">
          <div className="">
            <p className=" w-full">Security and Control</p>
          </div>{" "}
        </div>
      </div>
      <div className="border">
        <div className="flex w-full  ">
          {/* Meeting Polls */}
          <div className="flex justify-between  w-72 p-3 text-base font-light items-center ">
            <div>
              <p className="text-light w-full">Data deletion for compliance</p>
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
              <p className="text-light w-full">Data deletion API</p>
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
          <div className="w-48 flex justify-center items-center border-l "></div>
          <div className="w-48 flex justify-center items-center  border-l"></div>
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
              <p className="text-light w-full">SAML single sign-on (SSO)</p>
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
            <p className="font-light">Add-on</p>
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
                Automate and secure user identities using SCIM
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
          <div className="w-48 flex justify-center items-center border-l "></div>
          <div className="w-48 flex justify-center items-center  border-l"></div>
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
                Domain control and account oversight
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
          <div className="w-48 flex justify-center items-center border-l"></div>
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
              <p className="text-light w-full">Automate group provisioning</p>
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
          <div className="w-48 flex justify-center items-center border-l "></div>
          <div className="w-48 flex justify-center items-center  border-l"></div>
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

export default SecurityControl;
