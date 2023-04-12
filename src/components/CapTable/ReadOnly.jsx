import React from "react";
import { ReactComponent as EditIcon } from "../../assets/editIcon.svg";
// import { ReactComponent as PreviewIcon } from "../../../assets/previewIcon.svg";
//import { ReactComponent as UploadIcon } from "../../assets/uploadIcone.svg";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
// import { ReactComponent as NotDelete } from "../../../assets/notdelete.svg";

const ReadOnlyRow = () => {
  return (
    <tr className="border-b-2 flex items-center">
      <td>
        <DeleteIcon className="cursor-pointer ml-3" />
      </td>
      <td className="text-customBlue-darkest capitalize text-center font-semibol py-4 px-2">
        <div className="text-center mx-0 flex justify-center">
          <EditIcon
            size="1.5rem"
            className="text-customGreen-200 mx-2 text-center cursor-pointer"
          />
        </div>
      </td>
      <td className="text-customBlue-darkest text-center capitalize font-semibold  text-sm py-4 px-2">
        Seed Investors
      </td>
      <td className="text-customBlue-darkest capitalize text-center font-semibold  text-sm py-4 px-2">
        Ordinary
      </td>
      <td className="text-customBlue-darkest capitalize text-center font-semibold  text-sm py-4 px-2">
        Investor
      </td>

      <td className="text-center font-semibold  text-sm py-4 px-2">---</td>
      <td className="text-center font-semibold  text-sm py-4 px-2">
        <p className="text-center ">---</p>
      </td>
      <td className="text-center font-semibold  text-sm py-4 px-2">
        <p className="text-center ">---</p>
      </td>
      <td className="text-center font-semibold  text-sm py-4 px-2">
        <p className="text-center ">---</p>
      </td>
      <td className="text-center font-semibold  text-sm py-4 px-2">
        <p className="text-center ">---</p>
      </td>
      <td className="text-center font-semibold  text-sm py-4 px-2">
        <p className="text-center ">---</p>
      </td>
      <td className="text-center font-semibold  text-sm py-4 px-2">
        <p className="text-center ">---</p>
      </td>
      {/* <td className="text-customGreen-200 capitalize text-center font-semibold  text-sm py-4 px-2">
        <div className="flex">
          {data.filepath.length !== 0 ? (
            // <a href={`${BASE_URL}${data.filepath}`} target="_blank" className="cursor-pointer mx-2 bg-customGreen-100 rounded-lg p-2 flex items-center">
            <a
              onClick={() => showPopUp("seedRound")}
              target="_blank"
              className="cursor-pointer mx-2 bg-customGreen-100 rounded-lg p-2 flex items-center"
            >
              Preview
              <span className="pl-2">
                <PreviewIcon />
              </span>
            </a>
          ) : null}
        </div>
      </td> */}
    </tr>
  );
};

export default ReadOnlyRow;
