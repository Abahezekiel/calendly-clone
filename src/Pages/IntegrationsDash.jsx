import React from "react";
import DashNav from "./DashNav";
import Button from "../Components/button/Button";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { MdFilterList } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { CiDollar, CiSearch } from "react-icons/ci";

const integrateTemplates = [
  {
    id: 1,
    image:
      "https://assets.calendly.com/assets/frontend/media/zoom-42d3876ae6a77cd0927f.svg",
    title: "Zoom",
    description: "Include Zoom details in your Calendly events.",
    pt: "pt-7",
  },
  {
    id: 2,
    image:
      "https://assets.calendly.com/assets/frontend/media/salesforce-ace11f773162ac4a253f.svg",
    title: "Salesforce",
    description:
      "Create and update records as meetings are scheduled. Plus, route meetings via real time Salesforce lookup.",
  },
  {
    id: 3,
    image:
      "https://assets.calendly.com/assets/frontend/media/google-meet-74ebbfcacec52008a972.svg",
    title: "Google Meet",
    description: "Include Google Meet details in your Calendly events.",
    pt: "pt-14",
  },
  {
    id: 4,
    image:
      "https://assets.calendly.com/assets/frontend/media/hubspot-947b620ac8ce8d1c8fb4.svg",
    title: "HubSpot",
    description:
      "Sync meeting data to your CRM. Add instant, account-matched scheduling to your routing forms.",
    pt: "pt-14",
  },
  {
    id: 4,
    image:
      "https://assets.calendly.com/assets/frontend/media/google-calendar-9d502e45f709b07b91a1.svg",
    title: "Google Calender",
    description: "Add events to your calendar and prevent double-booking.",
    pt: "pt-14",
  },
  {
    id: 5,
    image:
      "https://assets.calendly.com/assets/frontend/media/microsoft-teams-8af8226c210af918aba2.svg",
    title: "Microsoft Teams Conferencing",
    description: "Include Teams conferencing details in your Calendly events.",
    pt: "pt-14",
  },
  {
    id: 6,
    image:
      "https://assets.calendly.com/assets/frontend/media/chrome-0dd0c283878400e43c08.svg",
    title: "Calendly for Chrome",
    description: "Access and share availability on any web page.",
    pt: "pt-14",
  },
  {
    id: 7,
    image:
      "https://assets.calendly.com/assets/frontend/media/stripe-4b6a6cc4ce4b269bbe04.svg",
    title: "Stripe",
    description: "Collect payment before the meeting.",
    pt: "pt-14",
  },
  {
    id: 8,
    image:
      "https://assets.calendly.com/assets/frontend/media/zapier-e8e0b1a3b21f207102e2.svg",
    title: "Zapier",
    description: "Create no-code automations with the tools you use.",
    pt: "pt-14",
  },
  {
    id: 9,
    image:
      "https://assets.calendly.com/assets/frontend/media/pay-pal-23e8d5edeb8ce0250bf8.svg",
    title: "Paypal",
    description: "Collect payment before the meeting.",
    pt: "pt-14",
  },
  {
    id: 10,
    image:
      "https://assets.calendly.com/assets/frontend/media/slack-4cc01e8ecd1ab0101193.svg",
    title: "Slack",
    description: "Access and share your Calendly links in Slack..",
    pt: "pt-14",
  },
  {
    id: 11,
    image:
      "https://assets.calendly.com/assets/frontend/media/console-56d94e384fad7b090d01.svg",
    title: "API and webhooks",
    description: "Build custom integrations with Calendly data.",
    pt: "pt-14",
  },
  {
    id: 12,
    image:
      "https://assets.calendly.com/assets/frontend/media/apple-0a3d6968721c9ccea820.svg",
    title: "Calendly iPhone app",
    description: "Access meetings and share availability on the go.",
    pt: "pt-14",
  },
  {
    id: 13,
    image:
      "https://assets.calendly.com/assets/frontend/media/android-7b8ea513c8b5c9457bcd.svg",
    title: "Calendly Android app",
    description: "Access meetings and availability on the go.",
    pt: "pt-14",
  },
  {
    id: 14,
    image:
      "https://assets.calendly.com/assets/frontend/media/microsoft-teams-8af8226c210af918aba2.svg",
    title: "Microsoft Teams Chat",
    description: "Get personal notifications for your Calendly events.",
    pt: "pt-14",
  },
  {
    id: 15,
    image:
      "https://assets.calendly.com/assets/frontend/media/microsoft-dynamics-b5b0df8cf1856bb7640f.svg",
    title: "Microsoft Dynamics 365",
    description: "Create and update records as meetings are scheduled.",
    pt: "pt-14",
  },
  {
    id: 16,
    image:
      "https://assets.calendly.com/assets/frontend/media/microsoft-exchange-da0af9f64aa242ee36de.svg",
    title: "Exchange Calendar",
    description: "Add events to your calendar and prevent double-booking.",
    pt: "pt-14",
  },
  {
    id: 17,
    image:
      "https://assets.calendly.com/assets/frontend/media/gmail-d35ec868f510eb930574.svg",
    title: "Gmail for Workflows",
    description: "Send automated emails from your Gmail account.",
    pt: "pt-14",
  },
  {
    id: 18,
    image:
      "https://assets.calendly.com/assets/frontend/media/outlook-d226707be5525615a568.svg",
    title: "Outlook for Workflows",
    description: "Send automated emails from your Outlook account.",
    pt: "pt-14",
  },
  {
    id: 19,
    image:
      "https://assets.calendly.com/assets/frontend/media/microsoft-outlook-86424a866a07be4b2e2c.svg",
    title: "Outlook Calendar",
    description: "Add events to your calendar and prevent double-booking.",
    pt: "pt-14",
  },
  {
    id: 20,
    image:
      "https://assets.calendly.com/assets/frontend/media/microsoft-power-automate-d385174987222236adc9.svg",
    title: "Power Automate",
    description: "Create no-code automations with the tools you use.",
    pt: "pt-14",
  },
  {
    id: 21,
    image:
      "https://assets.calendly.com/assets/frontend/media/google-analytics-cce6ed536a49224ffc0a.svg",
    title: "Google Analytics",
    description: "Track engagement with your booking pages.",
    pt: "pt-14",
  },
  {
    id: 22,
    image:
      "https://assets.calendly.com/assets/frontend/media/facebook-2d1598c5ebcd6885fe59.svg",
    title: "Meta Pixel",
    description: "Track engagement with your booking pages.",
    pt: "pt-14",
  },
  {
    id: 22,
    image:
      "https://assets.calendly.com/assets/frontend/media/marketo-5c2970cb5941e26bb17a.svg",
    title: "Marketo",
    description:
      "Use form responses to qualify and route your leads to the right booking pages and update records as meetings are scheduled.",
    pt: "pt-14",
  },
  {
    id: 23,
    image:
      "https://assets.calendly.com/assets/frontend/media/sso-d987d680603ac9f940c9.svg",
    title: "Single sign-on",
    description:
      "Provision users and enforce single sign-on for their Calendly accounts.",
    pt: "pt-14",
  },
  {
    id: 24,
    image:
      "https://assets.calendly.com/assets/frontend/media/linkedin-b4b18ab275a4b6bc143d.svg",
    title: "LinkedIn Messaging",
    description: "Access and share your availability in LinkedIn.",
    pt: "pt-14",
  },
  {
    id: 25,
    image:
      "https://assets.calendly.com/assets/frontend/media/gong-ff563b4fdc2cc02d8001.svg",
    title: "Gong",
    description: "Access and share your availability in Gong.",
    pt: "pt-14",
  },
  {
    id: 26,
    image:
      "https://assets.calendly.com/assets/frontend/media/mailchimp-0b6601fe96028880520a.svg",
    title: "MailChimp",
    description: "Create and update contacts as meetings are scheduled.",
    pt: "pt-14",
  },
  {
    id: 27,
    image:
      "https://assets.calendly.com/assets/frontend/media/firefox-c5d4b833885dd70fcdfb.svg",
    title: "Calendly for Firefox",
    description: "Access and share availability on any web page.",
    pt: "pt-14",
  },
  {
    id: 28,
    image:
      "https://assets.calendly.com/assets/frontend/media/outlook_extension-3dcb55a85151d4783bf9.svg",
    title: "Calendly for Outlook",
    description: "Access and share availability from your Outlook inbox.",
    pt: "pt-14",
  },
  {
    id: 29,
    image:
      "https://assets.calendly.com/assets/frontend/media/intercom-453d6e4006c850be6ea5.svg",
    title: "Calendly for Intercom",
    description: "Embed your booking page in Intercom chat.",
    pt: "pt-14",
  },
  {
    id: 30,
    image:
      "https://assets.calendly.com/assets/frontend/media/salesforce-pardot-09dabde1d4b36f63611c.svg",
    title: "Pardot",
    description:
      "Use form responses to qualify and route your leads to the right booking pages.",
    pt: "pt-14",
  },

  {
    id: 31,
    image:
      "https://assets.calendly.com/assets/frontend/media/okta-f9353aede88d6a2aa035.svg",
    title: "Okta",
    description:
      "Provision users and enforce single sign-on for their Calendly accounts.",
    pt: "pt-14",
  },
  {
    id: 32,
    image:
      "https://assets.calendly.com/assets/frontend/media/microsoft-azure-11ff8bb118bb90ad1c2d.svg",
    title: "Microsoft Azure",
    description:
      "Provision users and enforce single sign-on for their Calendly accounts.",
    pt: "pt-14",
  },
  {
    id: 33,
    image:
      "https://assets.calendly.com/assets/frontend/media/microsoft-edge-bc393cb394ec6bbb4d75.svg",
    title: "Calendly for Edge",
    description: "Access and share availability on any web page.",
    pt: "pt-14",
  },
  {
    id: 34,
    image:
      "https://assets.calendly.com/assets/frontend/media/microsoft-edge-bc393cb394ec6bbb4d75.svg",
    title: "Webex",
    description: "Include Webex details in your Calendly events.",
    pt: "pt-14",
  },
  {
    id: 35,
    image:
      "https://assets.calendly.com/assets/frontend/media/squarespace-d6a1882f345df63fe334.svg",
    title: "Squarespace",
    description: "Embed your booking page on your website.",
    pt: "pt-14",
  },
  {
    id: 36,
    image:
      "https://assets.calendly.com/assets/frontend/media/wix-7215bbd1c9b90290982c.svg",
    title: "Wix",
    description: "Embed your booking page on your website.",
    pt: "pt-14",
  },
  {
    id: 37,
    image:
      "https://assets.calendly.com/assets/frontend/media/wordpress-fb1f85dd39eaaba5b121.svg",
    title: "Wordpress",
    description: "Embed your booking page on your website.",
    pt: "pt-14",
  },
  {
    id: 38,
    image:
      "https://assets.calendly.com/assets/frontend/media/go-to-meeting-a7a16d8ae03a6e21d8fd.svg",
    title: "GoTo Meeting",
    description: "Include GoTo Meeting details in your Calendly events.",
    pt: "pt-14",
  },
  {
    id: 39,
    image:
      "https://assets.calendly.com/assets/frontend/media/duo-442d304b9f83ad286624.svg",
    title: "Duo",
    description: "Enforce single sign-on for your users' Calendly accounts.",
    pt: "pt-14",
  },
  {
    id: 40,
    image:
      "https://assets.calendly.com/assets/frontend/media/one-login-7cc5444e804fe93f89af.svg",
    title: "OneLogin",
    description:
      "Provision users and enforce single sign-on for their Calendly accounts.",
    pt: "pt-14",
  },
  {
    id: 41,
    image:
      "https://assets.calendly.com/assets/frontend/media/ping-identity-00d6fdf61a492ae6174c.svg",
    title: "Ping Identity",
    description: "Enforce single sign-on for your users' Calendly accounts.",
    pt: "pt-14",
  },
];

const IntegrationsDash = () => {
  return (
    <div className="">
      <DashNav />
      <div className="p-3  ">
        <Button
          title="Integrations & apps"
          type="secondary"
          extraStyles="h- hover:bg-transparent rounded-full w- flex items-center justify-center text-black font-semibold text-3xl border-none"
        />
      </div>
      <div className="flex  items-center  ml-3 mr-8 border-b border-gray-200 ">
        <div className="flex ">
          <div className=" ">
            <Button
              title="Discover (41)"
              type="secondary"
              extraStyles="hover:bg-white rounded-md w- flex items-center justify-center text-black font-light text-md border-none "
            />
          </div>
          <div className=" flex items-center justify-center">
            <Button
              title="Manage (2)"
              type="secondary"
              extraStyles="hover:bg-white  border-none "
            />
          </div>
        </div>
      </div>

      <div className="-4 font-bold">
        <p className="ml-7 pt-3 text-xl">Featured</p>
      </div>
      <div className="   m-7   flex gap-5 max-h-96">
        <div className="w-1/2   rounded-lg relative ">
          <img
            src="https://assets.calendly.com/assets/frontend/media/chrome-background-473e5daeea4931147362.png"
            alt=""
            className=""
          />

          <div className="flex gap-2  text-white absolute top-7 left-6">
            <img
              src="https://assets.calendly.com/assets/frontend/media/chrome-icon-4d7b386f7193e9a89aab.svg"
              alt=""
              className=" h-30 w-30"
            />
            <div className=" w-60 ">
              <p className="text-xl font-semibold pb-2 pt-1">
                Calendly for Chrome
              </p>
              <p className="font-light">
                One-Click access to calendly anywhere on the web
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2   rounded-lg relative">
          <img
            src="https://assets.calendly.com/assets/frontend/media/ms-teams-background-7876571789bd7683c703.png"
            alt=""
          />

          <div className="flex gap-2  text-white absolute top-7 left-6">
            <img
              src="https://assets.calendly.com/assets/frontend/media/ms-teams-icon-ba32316210502dcc1fee.svg"
              alt=""
              className=" h-30 w-30"
            />
            <div className=" w-60 ">
              <p className="text-xl font-semibold pb-2 pt-1">
                Microsft Teams Chat
              </p>
              <p className="font-light">
                Get Personal notifications for your Calendly Events
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between m-7">
        <div className="w-1/2 pl-3 flex items-center border border-gray-400 rounded-lg">
          <CiSearch />
          <input
            type="text"
            placeholder="Find Integrations app, and more"
            className="w-full p-3 focus:outline-none"
          />
        </div>
        <div className=" border-gray-400 border rounded-lg  w-42">
          <Button
            title="Most Popular"
            beforeIcon={<MdFilterList className="w-4 h-4" />}
            afterIcon={<IoIosArrowDown className="w-4 h-4" />}
            onClick={() => alert("Hello World")}
            type="secondary"
            extraStyles="p-3 hover:bg-transparent rounded-lg border-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 m-7 pb- w-">
        {integrateTemplates.map(({ id, image, title, description, pt, pb }) => (
          <div
            key={id}
            className="w-56 hover:shadow-md bg-white border border-gray-100 rounded-lg"
          >
            <div className="h-16 w-16 pt-2 ml-6 flex justify-center items-center">
              <img
                src={image}
                alt={`Workflow Image ${id}`}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="m-4">
              <p className="font-semibold text-sm mb-3">{title}</p>
              <p className="font-light text-sm text-gray-500">{description}</p>
              <p className="font-light text-sm text-gray-500">{pb}</p>
            </div>
          </div>
        ))}
      </div>

      <div className=" border border-gray-300 m-7 bg-blue-50 rounded-md flex items-center justify-center p-3 text-blue-950 ">
        <p className="font-semibold">
          Don't see the integration you're looking for?{" "}
          <span className="underline text-blue-600">Let us know!</span>.
        </p>
      </div>
    </div>
  );
};

export default IntegrationsDash;
