

// import { IoMdCheckmark } from "react-icons/io";
// import Button from "../Components/button/Button";
// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { GoPlus } from "react-icons/go";

// const Billed = () => {
//   const plans = [
//     {
//       name: "Free",
//       description: "For individuals starting out with basic scheduling",
//       price: "Always free",
//       buttonText: "View features",
//       features: [
//         "One event type with unlimited meetings",
//         "Connect one calendar and basic integrations",
//         "Customize your booking page",
//         "Send confirmation emails",
//         "Embed scheduling on your site",
//         "Mobile app & browser extension",
//       ],
//       isRecommended: false,
//     },
//     {
//       name: "Standard",
//       description: "For those with more sophisticated scheduling needs",
//       price: "$12 /seat/mo",
//       buttonText: "Upgrade to Standard",
//       features: [
//         "Unlimited event types with unlimited meetings",
//         "Multiple calendars for availability and scheduling",
//         "Integrations with HubSpot, PayPal, Stripe, and hundreds more",
//         "Group (1-to-many) and collective (2-on-1) event types",
//         "Automate reminders, reconfirmations, and follow-ups",
//         "More customization of your booking page, emails, and Calendly on your website",
//         "24/7 live chat support",
//       ],
//       isRecommended: true,
//     },
//     {
//       name: "Teams",
//       description:
//         "For teams who need advanced features such as reporting, meeting distribution, and automations",
//       price: "$20 /seat/mo",
//       buttonText: "Upgrade to Teams",
//       features: [
//         "Connect to Salesforce to flow meeting data into the CRM",
//         "Round robin events",
//         "Route leads to the right calendar based on HubSpot lookup and form responses",
//         "Admin features for management of team events and permissions",
//         "Single Sign-on",
//       ],
//       isRecommended: false,
//     },
//     {
//       name: "Enterprise",
//       description:
//         "For teams who need more security, admin control, support, and enterprise-grade procurement",
//       price: "Starts at $15k /yr",
//       buttonText: "Talk to Sales",
//       features: [
//         "Enable Single Sign-On and advanced user provisioning",
//         "Claim your domain and work in one account",
//         "Use the full suite of Salesforce routing features",
//         "Ensure compliance with an audit log and data deletion API",
//         "Access expedited support, onboarding and implementation",
//         "Connect to Microsoft Dynamics 365 and Power Automate",
//         "Security and legal reviews",
//       ],
//       isRecommended: false,
//     },
//   ];

//   return (
//     <div className="grid grid-cols-4 gap-4 m-8">
//       {plans.map((plan, index) => (
//         <div key={index} className="w-full bg-white rounded-2xl shadow-sm p-7 relative">
//           {plan.isRecommended && (
//             <p className="flex justify-end bg-blue-600 rounded-tr-2xl rounded-bl-lg w- text-white text-xs p-1 items-end absolute top-0 right-0">
//               Recommended
//             </p>
//           )}
//           <p className="text-blue-950 font-bold text-xl">{plan.name}</p>

//           {/* Apply mt-40 to Free plan description */}
//           <p
//             className={`text-blue-900 text-xs ${
//               plan.name === "Free" ? "mt-" : ""
//             } ${
//               plan.description === "Free" || plan.description === "Standard"
//                 ? "mt-40"
//                 : ""
//             }`}
//           >
//             {plan.description}
//           </p>

//           <p
//             className={`text-blue-950 font-bold pt-8 text-2xl ${
//               plan.name === "Free" ? "mt-5" : ""
//             } ${
//               plan.name === "Standard"
//                 ? "mt-5"
//                 : ""
//             }`}
//           >
//             {plan.price}
//           </p>

//           {/* <p className="text-blue-950 font-bold pt-8 text-2xl">{plan.price}</p> */}

//           <button className="bg-blue-600 px-10 py-3 text-white rounded-md mt-8 font-semibold whitespace-nowrap">
//             {plan.buttonText}
//           </button>

//           <div className="pt-5 text-gray-500">
//             <p className="font-semibold text-lg text-gray-900">
//               {plan.name} features
//             </p>
//             {plan.features.map((feature, idx) => (
//               <div key={idx} className="flex gap-2 items-center pt-2">
//                 <IoMdCheckmark className="text-lg" />{" "}
//                 {/* Adjust the icon size */}
//                 <p className="underline decoration-dotted text-sm">{feature}</p>
//               </div>
//             ))}
//           </div>

//           {plan.name !== "Free" && (
//             <div
//               className={`mt-14 flex-grow flex items-end ${
//                 plan.name === "Teams" ? "mt-36" : ""
//               } ${plan.name === "Enterprise" ? "mt-[4.5rem]" : ""}`}
//             >
//               <Button
//                 title="See all features"
//                 afterIcon={<FaArrowRight />}
//                 type="secondary"
//                 extraStyles="rounded-full flex items-center justify-center text-blue-900 font-light text-xs border-none h-6"
//               />
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Billed;



import { IoMdCheckmark } from "react-icons/io";
import Button from "../Components/button/Button";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoPlus } from "react-icons/go";

const Billed = () => {
  const plans = [
    {
      name: "Free",
      description: "For individuals starting out with basic scheduling",
      price: "Always free",
      buttonText: "View features",
      features: [
        "One event type with unlimited meetings",
        "Connect one calendar and basic integrations",
        "Customize your booking page",
        "Send confirmation emails",
        "Embed scheduling on your site",
        "Mobile app & browser extension",
      ],
      isRecommended: false,
    },
    {
      name: "Standard",
      description: "For those with more sophisticated scheduling needs",
      price: "$12 /seat/mo",
      buttonText: "Upgrade to Standard",
      features: [
        "Unlimited event types with unlimited meetings",
        "Multiple calendars for availability and scheduling",
        "Integrations with HubSpot, PayPal, Stripe, and hundreds more",
        "Group (1-to-many) and collective (2-on-1) event types",
        "Automate reminders, reconfirmations, and follow-ups",
        "More customization of your booking page, emails, and Calendly on your website",
        "24/7 live chat support",
      ],
      isRecommended: true,
    },
    {
      name: "Teams",
      description:
        "For teams who need advanced features such as reporting, meeting distribution, and automations",
      price: "$20 /seat/mo",
      buttonText: "Upgrade to Teams",
      features: [
        "Connect to Salesforce to flow meeting data into the CRM",
        "Round robin events",
        "Route leads to the right calendar based on HubSpot lookup and form responses",
        "Admin features for management of team events and permissions",
        "Single Sign-on",
      ],
      isRecommended: false,
    },
    {
      name: "Enterprise",
      description:
        "For teams who need more security, admin control, support, and enterprise-grade procurement",
      price: "Starts at $15k /yr",
      buttonText: "Talk to Sales",
      features: [
        "Enable Single Sign-On and advanced user provisioning",
        "Claim your domain and work in one account",
        "Use the full suite of Salesforce routing features",
        "Ensure compliance with an audit log and data deletion API",
        "Access expedited support, onboarding and implementation",
        "Connect to Microsoft Dynamics 365 and Power Automate",
        "Security and legal reviews",
      ],
      isRecommended: false,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 m-8">
      {plans.map((plan, index) => (
        <div key={index} className="w-full bg-white rounded-2xl shadow-sm p-7 relative">
          {/* Conditionally add the "Current Plan" label to the first plan */}
          {index === 0 && (
            <p className="flex justify-end bg-gray-600 rounded-tr-2xl rounded-bl-lg text-white text-xs p-1 items-end absolute top-0 right-0">
              Current Plan
            </p>
          )}

          {plan.isRecommended && (
            <p className="flex justify-end bg-blue-600 rounded-tr-2xl rounded-bl-lg text-white text-xs p-1 items-end absolute top-0 right-0">
              Recommended
            </p>
          )}

          <p className="text-blue-950 font-bold text-xl">{plan.name}</p>

          {/* Apply mt-40 to Free plan description */}
          <p
            className={`text-blue-900 text-xs ${
              plan.name === "Free" ? "mt-" : ""
            } ${
              plan.description === "Free" || plan.description === "Standard"
                ? "mt-4"
                : ""
            }`}
          >
            {plan.description}
          </p>

          <p
            className={`text-blue-950 font-bold pt-8 text-2xl ${
              plan.name === "Free" ? "mt-5" : ""
            } ${plan.name === "Standard" ? "mt-5" : ""}`}
          >
            {plan.price}
          </p>

          <button className="bg-blue-600 px-10 py-3 text-white rounded-md mt-8 font-semibold whitespace-nowrap">
            {plan.buttonText}
          </button>

          <div className="pt-5 text-gray-500">
            <p className="font-semibold text-lg text-gray-900">
              {plan.name} features
            </p>
            {plan.features.map((feature, idx) => (
              <div key={idx} className="flex gap-2 items-center pt-2">
                <IoMdCheckmark className="text-lg" />{" "}
                {/* Adjust the icon size */}
                <p className="underline decoration-dotted text-sm">{feature}</p>
              </div>
            ))}
          </div>

          {plan.name !== "Free" && (
            <div
              className={`mt-14 flex-grow flex items-end ${
                plan.name === "Teams" ? "mt-44" : ""
              } ${plan.name === "Enterprise" ? "mt-[4.5rem]" : ""}`}
            >
              <Button
                title="See all features"
                afterIcon={<FaArrowRight />}
                type="secondary"
                extraStyles="rounded-full flex items-center justify-center text-blue-900 font-light text-xs border-none h-6"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Billed;
