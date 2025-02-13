import { SignUpButton } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="mt-24 bg-gray-100 py-6">
      <div className="bg-gray-100 shadow-lg rounded-lg mx-20">


      <SignUpButton redirectUrl="/" /> 

        <div className="grid grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold text-blue-950 mb-4">Sign up for your Calendly account</h1>
            <p className="text-gray-700 mb-6">Always free. No credit card required.</p>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
                Sign Up
              </button>
            </form>

            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <p className="mx-4 text-gray-600">OR</p>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <p className="text-gray-700 mb-4">
              Easily connect your calendar by signing up with your Google, Microsoft Office 365, or Outlook account.
            </p>

            <div className="flex items-center justify-between">
              <Link
                className="flex items-center justify-center bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300 h-14"
                to="#"
              >
                <img
                  className="w-6 h-6 mr-3"
                  src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
                  alt="Google"
                />
                <p>Sign up with Google</p>
              </Link>
              <Link
                className="flex items-center justify-center bg-blue-950 text-white p-3 rounded-lg hover:bg-gray-700 transition duration-300 h-14"
                to="#"
              >
                <img
                  className="w-6 h-6 mr-3"
                  src="https://img.icons8.com/?size=100&id=22989&format=png&color=000000"
                  alt="Microsoft"
                />
                <p>Sign up with Microsoft</p>
              </Link>
            </div>

            <Link className="block text-center text-blue-600 mt-4 text-xl" to="/login">
              Log In
            </Link>
          </div>

          {/* Right Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Create your free account</h2>
            <p className="text-gray-700 mb-4">
              Easily schedule with clients and recruits with a free Calendly account. First-time signups get a free 14-day trial of our Teams plan!
            </p>
            <p className="text-gray-700 mb-6">This Teams trial includes upgrades like:</p>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src="https://images.ctfassets.net/k0lk9kiuza3o/3xAhNA94ZNW8SgygWcbKAU/b5eb278284b7528a6f1a125479c9ceef/Check.svg" alt="Check" className="w-5 h-5" />
                <p>Ability to book meetings as a team with clients and more</p>
              </div>
              <div className="flex items-center gap-2">
                <img src="https://images.ctfassets.net/k0lk9kiuza3o/3xAhNA94ZNW8SgygWcbKAU/b5eb278284b7528a6f1a125479c9ceef/Check.svg" alt="Check" className="w-5 h-5" />
                <p>Unlimited event types (30-min video call, 15-min phone call)</p>
              </div>
              <div className="flex items-center gap-2">
                <img src="https://images.ctfassets.net/k0lk9kiuza3o/3xAhNA94ZNW8SgygWcbKAU/b5eb278284b7528a6f1a125479c9ceef/Check.svg" alt="Check" className="w-5 h-5" />
                <p>Remove Calendly branding</p>
              </div>
              <div className="flex items-center gap-2">
                <img src="https://images.ctfassets.net/k0lk9kiuza3o/3xAhNA94ZNW8SgygWcbKAU/b5eb278284b7528a6f1a125479c9ceef/Check.svg" alt="Check" className="w-5 h-5" />
                <p>Ability to charge for meetings with PayPal and Stripe - plus more</p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-6">
              {/* Customer Logos */}
              {[
                "dropbox-customer-logo.svg",
                "compass-customer-logo.svg",
                "ancestry-customer-logo.svg",
                "zendesk-customer-logo.svg",
                "Gong-logo.svg",
                "lyft-customer-logo.svg",
                "loreal-customer-logo.svg",
                "crocs-customer-logo.svg"
              ].map((logo, index) => (
                <img
                  key={index}
                  src={`https://images.ctfassets.net/k0lk9kiuza3o/${logo}`}
                  alt="Customer Logo"
                  className="filter hue-rotate-180 saturate-100 brightness-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vonage Stats Card */}
      {/* <div className="p-6 bg-white rounded-lg shadow-lg mt-8">
        <a className="flex flex-col items-center" href="#">
          <div className="flex justify-center mb-4">
            <div className="relative w-24 h-24 flex justify-center items-center">
              <img
                src="https://images.ctfassets.net/k0lk9kiuza3o/2H4GbF1jpOyD7cNMW0Dv82/85a232765d647c41403ca471fe76589d/VonageLogo.svg"
                alt="Vonage Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="text-center mb-4">
            <p className="text-4xl font-semibold text-blue-950">
              <span className="text-blue-600">160</span>
              <span className="text-blue-600 text-sm">%</span>
            </p>
            <p className="text-lg text-gray-700">more customers reached</p>
          </div>
          <button className="flex items-center justify-center bg-blue-950 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300">
            <span className="mr-2">Read now</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </a>
      </div> */}

      
    </div>
  );
};

export default SignUp;
