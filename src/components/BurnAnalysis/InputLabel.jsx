import React from "react";

const InputLabel = ({
  label,
  symbol,
  placeholder,
  type,
  onChange,
  onInput,
  name,
  value,
  max,
  min,
  step,
  disabled = false,
}) => {
  return (
    <div className="w-full py-4 ">
      <label className="form-label inline-block mb-1.5 font-medium text-[#494D61] text-base">
        {label}
        <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        {symbol && (
          <span className="absolute left-3 top-2.5 font-medium text-black">
            {symbol}
          </span>
        )}

        <input
          type={type}
          onChange={onChange}
          onInput={onInput}
          name={name}
          value={value}
          className={`
            form-control h-11
            block
            w-full
            px-3
            py-1.5
            text-sm
            font-medium
            text-gray-700
            bg-white bg-clip-padding
            border  border-neutral
            rounded-lg
            transition
            ease-in-out
            m-0
            focus:text-black focus:bg-white focus:outline-none
            ${symbol ? "pl-7" : ""}
                    `}
          placeholder={placeholder}
          required
          max={max}
          min={min}
          step={step}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default InputLabel;
