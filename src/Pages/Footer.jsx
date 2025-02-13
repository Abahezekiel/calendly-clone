import React from "react";
import { FaArrowDown, FaFacebook, FaGlobe, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdArrowOutward, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-32 px-6 sm:px-12 md:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Left Section */}
        <div className="w-full md:w-1/3">
          <h1 className="text-4xl text-gray-800 font-bold relative">
            Easy <span className="text-blue-600">ahead</span>
            <span className="text-sm top-0 absolute">TM</span>
          </h1>
          <p className="text-gray-600 mt-2">
            We take the work out of connecting with others so you can accomplish
            more.
          </p>
        </div>

        {/* Right Section - Featured Report */}
        <Link
          className="w-full md:w-1/2 border-2 border-gray-300 p-6 rounded shadow-lg bg-white hover:bg-gray-100 transition-all"
          to="/featured-report"
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-blue-500 bg-blue-100 rounded p-1 text-sm">
              Featured
            </p>
            <MdArrowOutward className="text-3xl text-gray-600" />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-gray-800">
            2024 Report: The State of Meetings
          </h3>
          <p className="text-gray-500 text-sm">
            See the latest data on meeting culture and productivity.
          </p>
        </Link>
      </div>

      {/* Footer Links Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
        {/* Features */}
        <div>
          <p className="font-bold mb-2 text-gray-700">Features</p>
          <Link className="block text-gray-600 hover:underline mb-1">
            Scheduling automation
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Customizable availability
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Mobile apps
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Browser extensions
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Meeting routing
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Event Types
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Email & website embeds
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Reminders & follow-ups
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Meeting polls
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Analytics
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Admin management
          </Link>
        </div>

        {/* Integrations */}
        <div>
          <p className="font-bold mb-2">Integrations</p>
          <Link className="block text-gray-600 hover:underline mb-1">
            Google ecosystem
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Microsoft ecosystem
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Calendars
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Video conferencing
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Payment
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Sales & CRM
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Recruiting & ATS
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Email messaging
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Embed Calendly
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Analytics
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            API & connectors
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Security & compliance
          </Link>
        </div>

        {/* Calendly */}
        <div>
          <p className="font-bold mb-2">Calendly</p>
          <Link className="block text-gray-600 hover:underline mb-1">
            Pricing
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Product overview
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Solutions
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            For individuals
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            For teams
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            For enterprise
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Compare
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Security
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Sign up for free
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Talk to sales
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Get a demo
          </Link>
        </div>

        {/* Resources */}
        <div>
          <p className="font-bold mb-2">Resources</p>
          <Link className="block text-gray-600 hover:underline mb-1">
            Help center
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Resource center
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">Blog</Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Customer stories
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Calendly
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Developer tools
          </Link>
        </div>

        {/* Company */}
        <div>
          <p className="font-bold mb-2">Company</p>
          <Link className="block text-gray-600 hover:underline mb-1">
            About us
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Leadership
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Careers
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Newsroom
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Become a partner
          </Link>
          <Link className="block text-gray-600 hover:underline mb-1">
            Contact us
          </Link>
        </div>
      </div>
<div className="border-b border-b-gray-300 pb-6">

  <h1 className="text-2xl font-semibold text-gray-800 mb-6">Downloads</h1>
      <div className="flex gap-3 justify-between relative">
  <div className="grid grid-cols-3 gap-4 justify-between ">
    {/* Apple Store */}
    <Link className="flex items-center gap-1 p-2  bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
      <img
        src="https://img.icons8.com/?size=100&id=95294&format=png&color=000000"
        alt="Apple Store"
        className="w-12 h-12"
      />
      <p className="text-gray-700">Apple Store</p>
    </Link>
    
    {/* Google Play */}
    <Link className="flex items-center  gap-1 p-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
      <img
        src="https://img.icons8.com/?size=100&id=L1ws9zn2uD01&format=png&color=000000"
        alt="Google Play"
        className="w-12 h-12"
      />
      <p className="text-gray-700">Google Play</p>
    </Link>
    
    {/* Edge Extension */}
    <Link className="flex items-center  gap-1 p-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
      <img
        src="https://img.icons8.com/?size=100&id=-5h34CbaUb09&format=png&color=000000"
        alt="Edge Extension"
        className="w-12 h-12"
      />
      <p className="text-gray-700">Edge Extension</p>
    </Link>
    
    {/* Chrome Extension */}
    <Link className="flex items-center  gap-1 p-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
      <img
        src="https://images.ctfassets.net/k0lk9kiuza3o/1iXaOfSTG4LH14hl3jhgLV/9c262e7842e1e78a9e595a4477ecde7d/Chrome.svg"
        alt="Chrome Extension"
        className="w-12 h-12"
      />
      <p className="text-gray-700">Chrome Extension</p>
    </Link>
    
    {/* Firefox Extension */}
    <Link className="flex items-center  gap-1 p-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
      <img
        src="https://www.shutterstock.com/image-vector/fox-cartoon-firefox-logo-vector-design-2223273023"
        alt="Firefox Extension"
        className="w-12 h-12"
      />
      <p className="text-gray-700">Firefox Extension</p>
    </Link>
    
    {/* Outlook Add-In */}
    <Link className="flex items-center  gap-1 p-2 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition-all">
      <img
        src="https://images.ctfassets.net/k0lk9kiuza3o/7bQs7qA7sp83HJuE7EUETv/ac34c04b2206d7e049f38f41178ef9b2/outlook.svg"
        alt="Outlook Add-In"
        className="w-12 h-12"
      />
      <p className="text-gray-700">Outlook Add-In</p>
    </Link>
  </div>
  <div className="flex gap-3 justify-it bottom-0 absolute right-0">
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-3xl text-gray-600 hover:text-blue-500 transition-all" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-3xl text-gray-600 hover:text-blue-600 transition-all" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-3xl text-gray-600 hover:text-pink-500 transition-all" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-3xl text-gray-600 hover:text-blue-700 transition-all" />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="text-3xl text-gray-600 hover:text-red-500 transition-all" />
      </a>
  </div>
</div>
</div>
<div className="mt-5 mb-16 flex  text-gray-700 justify-between">
    <div className="flex items-center gap-2 hover:text-blue-500 cursor-pointer font-bold">
        <FaGlobe />
        <p>English</p>
        <MdKeyboardArrowDown />
    </div>
    <div className="flex items-center gap-5 ">
<Link>Provacy Policy</Link>
<Link>Legal</Link>
<Link>Status</Link>
<Link>Cookies Settings</Link>
<Link>Your Privacy Choices</Link>

    </div>
    <div >Copyright Calendly 2025</div>
</div>
    </div>
  );
};

export default Footer;
