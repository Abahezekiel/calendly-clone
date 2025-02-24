

import React from "react";

function Invite({ title, textOne, textTwo, textThree, onClick, beforeIcon, afterIcon, type, extraStyles,   }) {
  const buttonStyles = {
    neutral: "",
    primary: "bg-blue-500 hover:bg-blue-800 text-white",
    secondary: "border border-blue-700 hover:bg-sky-100 ",
  };

  return (
    <button
      onClick={onClick}
      className={` gap-3 items-center p-4  rounded-md ${buttonStyles[type]} ${extraStyles}`}
    >
      <span> {title}</span>
      <span> {textOne}</span>
      <span> {textTwo}</span>
      <span> {textThree}</span>
      <span>{afterIcon}</span>
    </button>
  );
}

export default Invite;
