import React, { useState } from "react";
import { ReactComponent as EditIcon } from "../../assets/editIcon.svg";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnly";

const CapTable = () => {
  const [toggle, setToggle] = useState(false);
  const headingList = [
    "Short Name",
    "Class",
    "Profile",
    "Incorporation",
    "Seed Round",
    "Series A",
    "Series B",
    "Series C",
    "Series D",
    "Series E",
  ];

  function ToggleBtn() {
    setToggle(!toggle);
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className=" border-b border-customGreen-200">
          <tr className="bg-slate-300">
            <td></td>
            <td></td>
            
            {headingList.map((item, i) => (
              <th
                className={
                  "py-4 px-1 lg:px-3 font-bold text-sm text-customGreen-200"
                }
              >
                {item}
                <span class="flex justify-center cursor-pointer">
                  {item == "Incorporation" ? (
                    <EditIcon style={{ width: "27px" }} />
                  ) : (
                    " "
                  )}
                </span>
                <span class="flex justify-center cursor-pointer">
                  {item == "Seed Round" ? (
                    <EditIcon style={{ width: "27px" }} />
                  ) : (
                    " "
                  )}
                </span>
                <span class="flex justify-center cursor-pointer">
                  {item == "Series A" ? (
                    <EditIcon style={{ width: "27px" }} />
                  ) : (
                    " "
                  )}
                </span>
                <span class="flex justify-center cursor-pointer">
                  {item == "Series B" ? (
                    <EditIcon style={{ width: "27px" }} />
                  ) : (
                    " "
                  )}
                </span>
                <span class="flex justify-center cursor-pointer">
                  {item == "Series C" ? (
                    <EditIcon style={{ width: "27px" }} />
                  ) : (
                    " "
                  )}
                </span>
                <span class="flex justify-center cursor-pointer">
                  {item == "Series D" ? (
                    <EditIcon style={{ width: "27px" }} />
                  ) : (
                    " "
                  )}
                </span>
                <span class="flex justify-center cursor-pointer">
                  {item == "Series E" ? (
                    <EditIcon style={{ width: "27px" }} />
                  ) : (
                    " "
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="w-full">
            
              {!toggle ? (
                <ReadOnlyRow onClick={() => ToggleBtn()} />
              ) : (
                <EditableRow onClick={() => ToggleBtn()} />
              )}
            
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CapTable;
