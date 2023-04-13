import { forwardRef } from "react";
// import { AiFillCheckCircle } from "react-icons/ai";

const InputIcon = forwardRef(
  (
    {
      label,
      placeholder,
      type,
      symbol,
      onChange,
      onInput,
      name,
      value,
      min,
      max,
      step,
    },
    ref
  ) => {
    return (
      <>
        <div className="flex justify-start">
          <div className="w-full ">
            <label className="form-label inline-block mb-1.5 font-medium text-[#494D61] text-base">
              {label}
              <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 font-medium text-black">
                {!!symbol ? symbol : "$"}
              </span>
              {name === "needtoraise" ? (
                <input
                  type={type}
                  onChange={onChange}
                  onInput={onInput}
                  name={name}
                  ref={ref}
                  value={value}
                  className="
                            form-control h-11
                            block
                            w-full
                            pr-3
                            pl-7
                            py-1.5
                            text-sm
                            font-medium
                            text-gray-700
                            bg-gray-100 bg-clip-padding
                            border  border-neutral
                            rounded-lg
                            transition
                            cursor-not-allowed
                            ease-in-out
                            m-0
                            focus:text-black focus:bg-white focus:outline-none
                        "
                  placeholder={placeholder}
                  required
                  min={min}
                  max={max}
                  step={step}
                  disabled
                />
              ) : (
                <input
                  type={type}
                  onChange={onChange}
                  onInput={onInput}
                  name={name}
                  ref={ref}
                  value={value}
                  className="
                          form-control h-11
                          block
                          w-full
                          pr-3
                          pl-7
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
                      "
                  placeholder={placeholder}
                  required
                  min={min}
                  max={max}
                  step={step}
                />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
);

export default InputIcon;
