import React, { useState } from "react";
import { ReactComponent as ArrowDown } from "../../assets/ArrowDown.svg";

const AcccordianItem = () => {
  const [toggle, setToggle] = useState(false);

  function TogAccordian() {
    setToggle(!toggle);
  }

  return (
    <div
      className={
        "  py-2 mb-8 px-3  rounded-lg shadow-lg " +
        (toggle === true ? " bg-white text-black " : " gradient-bg text-white")
      }
    >
      <div
        className={
          "block py-2 px-2 relative " +
          (toggle === true && " border-b-2 border-customGreen-300")
        }
      >
        <h2 className={"inline text-xl  font-semi"}>
          Revenue Streams
          <span className=" float-right">
            {toggle === true ? (
              <ArrowDown
                onClick={() => TogAccordian()}
                className="text-customGreen-100  transform rotate-180   cursor-pointer"
              />
            ) : (
              <ArrowDown
                onClick={() => TogAccordian()}
                className="text-customGreen-100 cursor-pointer"
              />
            )}
          </span>
        </h2>
      </div>
      {toggle === true && <div className="mx-0">ON-Boarding data</div>}
    </div>
  );
};

export default AcccordianItem;
