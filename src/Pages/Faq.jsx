import React, { useState } from "react";
import Button from "../Components/button/Button";
import { MdKeyboardArrowRight } from "react-icons/md";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState({
    trial: false,
    plan: false,
    users: false,
    renewal: false,
    upgrade: false,
    nonprofit: false,
    payment: false,
  });

  const toggleOpen = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
      <div className="flex items-center justify-center pt-20 mt-20 flex-col">
        <p className="text-blue-950 text-5xl font-bold w-11/12 flex item-center justify-center">
          Frequently Asked Questions
        </p>
      </div>

      <div className="flex flex-col pt-10 w-full max-w-3xl mx-auto">
        {" "}
        {/* Added max-w-3xl and mx-auto */}
        {[
          {
            id: "trial",
            question: "What happens at the end of my trials?",
            answer:
              "At the end of your 14-day trial, you'll automatically be downgraded to the Free tier and you’ll be able to continue to use Calendly as long as you’d like. If you decide to upgrade to a paid plan, you can do so from the billing page in your account at any time during or after your trial.",
          },
          {
            id: "plan",
            question: "Which plan is best for me and my team?",
            answer:
              "Check out this video to compare our different paid plans and select the one that best fits your needs. You can use the chapters in the play bar to jump ahead to specific plans.",
          },
          {
            id: "users",
            question: "Can we try Calendly with multiple users?",
            answer:
              "Absolutely! You can invite team members to join your trial account at no cost. At the end of your 14-day trial, all members will be automatically downgraded to the Free plan.",
          },
          {
            id: "renewal",
            question: "What does the renewal process looks like?",
            answer:
              "Paid subscriptions automatically renew for the same subscription period unless you downgrade your plan before your renewal date.",
          },
          {
            id: "upgrade",
            question: "How do I upgrade or downgrade?",
            answer:
              "Visit your billing page by going to My Account > Billing. From there, you can change your plan, add or remove user seats, and update your payment information.",
          },
          {
            id: "nonprofit",
            question:
              "We are a non-profit organization, is there a special pricing available?",
            answer:
              "Yes, we offer special pricing to qualified non-profit organizations. Contact our customer support specialists for details: support@calendly.com.",
          },
          {
            id: "payment",
            question: "What payment methods do you accept?",
            answer:
              "We accept Visa, Mastercard, American Express, Discover, JCB, and Diners Club credit and debit cards. Payment via PayPal is accepted for customers located outside the United States. Payment via invoice is available on the Standard or Teams plan for $5,000 and Enterprise plan for $15,000.",
          },
        ].map((faq) => (
          <div
            key={faq.id}
            className="items-center justify-center flex flex-col border-gray-300 border-b-2 pb-2"
          >
            <div
              className="flex gap-5 m-5 items-center justify-center w-full max-w-4xl mx-auto" // Adjusted width
              onClick={() => toggleOpen(faq.id)}
            >
              <p className="bg-blue-100 rounded-full h-12 w-12 flex items-center justify-center">
                <MdKeyboardArrowRight
                  className={`text-blue-950 transform ${
                    isOpen[faq.id] ? "rotate-240" : ""
                  }`}
                />
              </p>
              <p className="text-2xl text-blue-950 flex-grow">{faq.question}</p>
            </div>
            {isOpen[faq.id] && (
              <div>
                <p className="text-lg text-blue-950 font-light">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;
