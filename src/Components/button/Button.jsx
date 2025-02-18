

import React from "react";

function Button({ title, onClick, beforeIcon, afterIcon, type, extraStyles, logo }) {
  const buttonStyles = {
    neutral: "",
    primary: "bg-blue-500 hover:bg-blue-800 text-white",
    secondary: "border border-blue-700 hover:bg-sky-100 ",
  };

  return (
    <button
      onClick={onClick}
      className={`flex gap-3 items-center p-2  rounded-full ${buttonStyles[type]} ${extraStyles}`}
    >
      <span>{beforeIcon}</span>
      <span> {title}</span>
      <span>{afterIcon}</span>
      {/* Always render the logo if passed */}
      {logo && <span>{logo}</span>}
    </button>
  );
}

export default Button;
