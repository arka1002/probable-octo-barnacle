import React from "react";
// import { AiFillCheckCircle } from "react-icons/ai";

function LabelSelect({
  label,
  dataOptions,
  placeholder,
  name,
  onChange,
  value,
}) {
  return (
    <>
      <div className="flex justify-start">
        <div className="w-full ">
          <label className="form-label inline-block mb-1.5 font-medium text-[#494D61] text-base">
            {label}
            <span className="text-red-500">*</span>
          </label>
          <select
            className="block w-full px-4 py-2 m-0 text-sm font-medium text-gray-700 transition ease-in-out bg-white bg-no-repeat border rounded-lg appearance-none form-select form-select-lg bg-clip-padding h-11 border-neutral focus:text-black focus:bg-white focus:outline-none"
            aria-label=".form-select-lg example"
            name={name}
            onChange={onChange}
            value={value}
            required
          >
            <option selected value="" disabled>
              {placeholder}
            </option>
            <option value="">Select Type</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default LabelSelect;
