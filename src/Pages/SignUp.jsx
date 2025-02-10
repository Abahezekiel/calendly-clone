import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className=" mt-24 bg-gray-100 py-6">
      <div className=" bg-gray-100 shadow-lg rounded-lg mx-20 ">
        <div className="grid grid-cols-2  gap-8">
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

            <div className=" flex items-center justify-between">
  <Link className="flex items-center justify-center bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300 h-14">
    <img
      className="w-6 h-6 mr-3"
      src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
      alt="Google"
    />
    <p>Sign up with Google</p>
  </Link>
  <Link className="flex items-center justify-center bg-blue-950 text-white p-3 rounded-lg hover:bg-gray-700 transition duration-300 h-14">
    <img
      className="w-6 h-6 mr-3"
      src="https://img.icons8.com/?size=100&id=22989&format=png&color=000000"
      alt="Microsoft"
    />
    <p>Sign up with Microsoft</p>
  </Link>
</div>


            <Link className="block text-center text-blue-600 mt-4 text-xl">Log In</Link>
          </div>

          {/* Right Section */}
          <div className="">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Create your free account</h2>
            <p className="text-gray-700 mb-4">
              Easily schedule with clients and recruits with a free Calendly account. First-time signups get a free 14-day trial of our Teams plan!
            </p>
            <p className="text-gray-700 mb-6">This Teams trial includes upgrades like:</p>

            <div className="space-y-4 ">
              <div className="flex items-center gap-2">
                <img src="https://images.ctfassets.net/k0lk9kiuza3o/3xAhNA94ZNW8SgygWcbKAU/b5eb278284b7528a6f1a125479c9ceef/Check.svg" alt="" className="w-5 h-5" />
                <p>Ability to book meetings as a team with clients and more</p>
              </div>
              <div className="flex items-center gap-2">
                <img src="https://images.ctfassets.net/k0lk9kiuza3o/3xAhNA94ZNW8SgygWcbKAU/b5eb278284b7528a6f1a125479c9ceef/Check.svg" alt="" className="w-5 h-5" />
                <p>Unlimited event types (30-min video call, 15-min phone call)</p>
              </div>
              <div className="flex items-center gap-2">
                <img src="https://images.ctfassets.net/k0lk9kiuza3o/3xAhNA94ZNW8SgygWcbKAU/b5eb278284b7528a6f1a125479c9ceef/Check.svg" alt="" className="w-5 h-5" />
                <p>Remove Calendly branding</p>
              </div>
              <div className="flex items-center gap-2">
                <img src="https://images.ctfassets.net/k0lk9kiuza3o/3xAhNA94ZNW8SgygWcbKAU/b5eb278284b7528a6f1a125479c9ceef/Check.svg" alt="" className="w-5 h-5" />
                <p>Ability to charge for meetings with PayPal and Stripe <span>- plus more</span></p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-6">
  <img
    src="https://images.ctfassets.net/k0lk9kiuza3o/bOnLOncEyDdb8izczJggp/b98f4d8da30cfff0a87e8dce2bced46e/dropbox-customer-logo.svg"
    alt="Dropbox"
    className="filter hue-rotate-180 saturate-100 brightness-0"
  />
  <img
    src="https://images.ctfassets.net/k0lk9kiuza3o/6PFPRWMRMxRXthyXYcDRiR/ee7cc3f3ca0ed78752db06ce662a95f8/compass-customer-logo.svg"
    alt="Compass"
    className="filter hue-rotate-180 saturate-100 brightness-0"
  />
  <img
    src="https://images.ctfassets.net/k0lk9kiuza3o/6aSAknGku3oEB7jL7xEjLs/7004d26e48686e4a2b6e99348e1899fc/ancestry-customer-logo.svg"
    alt="Ancestry"
    className="filter hue-rotate-180 saturate-100 brightness-0"
  />
  <img
    src="https://images.ctfassets.net/k0lk9kiuza3o/4AUQ47IN6ZBtXtWXt65L3D/24dae32ff49baaf8feecf9471804420d/zendesk-customer-logo.svg"
    alt="Zendesk"
    className="filter hue-rotate-180 saturate-100 brightness-0"
  />
  <img
    src="https://images.ctfassets.net/k0lk9kiuza3o/k5u1aoWgLdVtFfc4tsyg3/cae65a31428205e2b46b229963d3b41e/Gong-logo.svg"
    alt="Gong"
    className="filter hue-rotate-180 saturate-100 brightness-0"
  />
  <img
    src="https://images.ctfassets.net/k0lk9kiuza3o/Y595RQBDR1fW5blQZfd9l/b9f3e2557c598b1ea51bb4e55f507833/lyft-customer-logo.svg"
    alt="Lyft"
    className="filter hue-rotate-180 saturate-100 brightness-0"
  />
  <img
    src="https://images.ctfassets.net/k0lk9kiuza3o/42drnxHfXrNOGKnVE9iA3r/a7f1bea3f67ca614e359eb6de12d8ba1/loreal-customer-logo.svg"
    alt="L'Oréal"
    className="filter hue-rotate-180 saturate-100 brightness-0"
  />
  <img
    src="https://images.ctfassets.net/k0lk9kiuza3o/56cjEhKMIFlRPdVUSQqMYD/a33ef976df35d4e240246d5e08bcb610/crocs-customer-logo.svg"
    alt="Crocs"
    className="filter hue-rotate-180 saturate-100 brightness-0"
  />
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
