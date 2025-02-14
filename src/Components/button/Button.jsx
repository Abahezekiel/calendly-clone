import React from "react";

function Button({ title, onClick, beforeIcon, afterIcon, type, extraStyles }) {
  const buttonStyles = {
    neutral: "",
    primary: "bg-blue-500 hover:bg-blue-800 text-white",
    secondary: "border border-gray-500 hover:bg-sky-100",
  };

  return (
    <button
      onClick={onClick}
      className={`flex gap-2 items-center p-2 text-xs rounded-full ${buttonStyles[type]} ${extraStyles}`}
    >
      <span>{beforeIcon}</span>
      <span> {title}</span>
      <span>{afterIcon}</span>
    </button>
  );
}

export default Button;
