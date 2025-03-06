import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Components/button/Button";

const ResourceModal = () => {
  return (
    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-full pb-10 pt-0 bg-slate-100">
      <div className="pb-10 bg-white shadow-md rounded-b-md m-7 grid grid-cols-4">
        <div className="  p-8">
          <p className="text-gray-400 ">LEARN</p>

          <div>
            <p className="text-blue-950 pt-3">Customer Stories</p>
            <p className="text-blue-900 font-light text-sm pt-3">
              See how teams around the world are upping their game with
              Calendly.
            </p>
          </div>

          <div className="pt-3">
            <p className="text-blue-950 pt-3">Resource Center</p>
            <p className="text-blue-900 font-light text-sm pt-3">
              Explore e-books. webinars. customer stories. tutorials, and more.
            </p>
          </div>

          <div className="pt-3">
            <p className="text-blue-950 pt-3">Integration</p>
            <p className="text-blue-900 font-light text-sm pt-3">
              Seamless connections to vour favorite calendars, tools, and apps
            </p>
          </div>
        </div>
        <div className="  ">
          <div className="  p-8">
            {/* <p className="text-gray-400 ">LEARN</p> */}

            <div>
              <p className="text-blue-950 pt-9">About</p>
              <p className="text-blue-900 font-light text-sm pt-3">
                Discover our mission, commitment to our customers, and
                leadership team..
              </p>
            </div>

            <div className="pt-3">
              <p className="text-blue-950 pt-3">Blog</p>
              <p className="text-blue-900 font-light text-sm pt-3">
                Learn about the latest Calend product and companv news.
              </p>
            </div>

            <div className="pt-3">
              <p className="text-blue-950 pt-3">Help Center</p>
              <p className="text-blue-900 font-light text-sm pt-3">
                Learn how to use Calendly to get maximum value Tor your
                organization
              </p>
            </div>
          </div>
        </div>

        <div className="  border-l border-gray-300">
          <div className="  p-8">
            <p className="text-gray-400 ">CONNECT</p>

            <div>
              <p className="text-blue-950 pt-3">Community</p>
              <p className="text-blue-900 font-light text-sm pt-3">
                Ask questions, Ind answers, and learn from other scheduling
                enthusiasts.
              </p>
            </div>

            <div className="pt-3">
              <p className="text-blue-950 pt-3">Developers</p>
              <p className="text-blue-900 font-light text-sm pt-3">
                Explore our documentation to create powered apps with Calendly.
              </p>
            </div>

            <div className="pt-3">
              <p className="text-blue-950 pt-3">Contact Us</p>
              <p className="text-blue-900 font-light text-sm pt-3">
                Get in touch and let us know how we can help.
              </p>
            </div>
          </div>
        </div>

        <div className="  border-l border-gray-300 ">
          <div className="pt-3 p-8 bg-blue-50">
            <div className="pt-6">
              <img
                src="https://images.ctfassets.net/k0lk9kiuza3o/1E5c2WISlq38gR8yrUmxVb/fb06130b9b4a3d67fa98853961217b51/2024_State_of_Meetings_report__1_.png?q=85&fm=webp"
                alt=""
              />
            </div>
            <p className="text-blue-950 pt-3">The State of Meetings 2024</p>
            <p className="text-blue-900 font-light text-sm pt-3">
              Calendy's 2024 report explores the evolving nature of meetings.
              Discover insights on productivity, engagement and efficiency
              across roles, industries, regions, and other demographics, and
              uncover strategies for improving meetings for evervone
            </p>
            <div className="pt-4">
              <Button
                title="Read the report"
                afterIcon={<FaArrowRight />}
                type="secondary"
                extraStyles="text-white rounded-md flex items-center justify-center bg-blue-600 text-sm border-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourceModal
