import React from "react";
// import { BiSave } from "react-icons/bi";
import { ReactComponent as Save } from "../../assets/save.svg";
import { ReactComponent as EditIcon } from "../../assets/editIcon.svg";

const EditableRow = ({ onClick }) => {
  return (
    <>
      <td className="text-customBlue-darkest py-2 text-center font-semibold px-2">
        <div className="text-center mx-0 cursor-pointer">
          <Save className="text-customGreen-200 flex ml-4" onClick={onClick} />
        </div>
      </td>
      <td className="text-customBlue-darkest py-2 text-center font-semibold  text-sm px-1">
        <input
          id="shortname"
          type="text"
          value="Seed Investors"
          className="border outline-none focus:shadow-outline w-full bg-light px-2 rounded focus:ring-1 focus:ring-gray-300"
        />
      </td>
      <td className="text-customBlue-darkest py-2 text-center font-semibold  text-sm">
        <select value="" id="clas" className="w-full bg-light px-2 rounded">
          <option value="Ordinary">Ordinary</option>
          <option value="Preference">Preference</option>
        </select>
      </td>
      <td className="text-customBlue-darkest py-2 text-center font-semibold  text-sm">
        <select
          value=""
          id="profile"
          className="w-full bg-light px-2 rounded capitalize"
        >
          <option value="founder" className="capitalize">
            Founder
          </option>
          <option value="employee">Employee</option>
          <option value="investor" className="capitalize">
            Investor
          </option>
        </select>
      </td>
      <td className="text-center font-semibold  text-sm py-4 px-2 flex justify-center">
        <EditIcon style={{ width: "27px" }} className="cursor-pointer" />
      </td>
      <td className="text-center font-semibold  text-sm py-4 px-2 ">
        <p className="text-center flex justify-center">
          <EditIcon style={{ width: "27px" }} className="cursor-pointer" />
        </p>
      </td>
      <td className="text-center font-semibold  text-sm py-4 px-2">
        <p className="text-center flex justify-center">
          <EditIcon style={{ width: "27px" }} className="cursor-pointer" />
        </p>
      </td>
      <td className="text-center font-semibold  text-sm py-4 px-2">
        <p className="text-center flex justify-center">
          <EditIcon style={{ width: "27px" }} className="cursor-pointer" />
        </p>
      </td>
      <td className="text-center font-semibold  text-sm py-4 px-2">
        <p className="text-center flex justify-center">
          <EditIcon style={{ width: "27px" }} className="cursor-pointer" />
        </p>
      </td>
      <td className="text-center font-semibold  text-sm py-4 px-2">
        <p className="text-center flex justify-center">
          <EditIcon style={{ width: "27px" }} className="cursor-pointer" />
        </p>
      </td>
      <td className="text-center font-semibold  text-sm py-4 px-2">
        <p className="text-center flex justify-center">
          <EditIcon style={{ width: "27px" }} className="cursor-pointer" />
        </p>
      </td>
    </>
  );
};

export default EditableRow;
