import React from "react";
// import { AiFillCheckCircle } from "react-icons/ai";

function IconButton({ text, onClick, type, faIcon }) {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className="flex items-center px-4 text-white rounded-lg h-11 w-fit"
        style={{
          background:
            " linear-gradient(89.09deg, #0E7469 3.31%, #2BAE95 95.19%)",
        }}
      >
        <i className={`pr-3 text-white fa-solid ${faIcon}`}></i>
        <span>{text}</span>
      </button>
    </>
  );
}

IconButton.defaultProps = {
  fsIcon: "fa-plus",
};

export default IconButton;
