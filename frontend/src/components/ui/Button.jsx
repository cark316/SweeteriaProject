import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="flex items-center justify-center py-3 px-8 text-lg bg-orange-800 hover:bg-orange-600 transition-colors"
    >
      {props.text} {"->"}
    </button>
  );
};

export default Button;
