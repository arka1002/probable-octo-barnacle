import React, { useState } from "react";
import InputLabel from "../BurnAnalysis/InputLabel";
import LabelSelect from "./LableSelect";
import IconButton from "./IconButton";
import InputIcon from "./InputIcon";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
import { ReactComponent as EditIcon } from "../../assets/editIcon.svg";
import { ReactComponent as Save } from "../../assets/save.svg";

const RevenueStreams = () => {
  const [revenue, setRevenue] = useState(true);

  function RevenueData() {
    setRevenue(!revenue);
  }

  return (
    <div className="h-full overflow-auto bg-white ">
      <div className="w-full py-10 mx-auto">
        <div className="">
          <div className="text-[#494D61]  font-semibold text-2xl mb-6">
            Revenue
          </div>
          <form>
            <div className="grid grid-cols-12 items-center gap-x-8 gap-y-6">
              <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6">
                <InputLabel
                  label="Revenue Stream"
                  placeholder="Enter Revenue stream"
                  type="text"
                  value=""
                  name={"revenue_name"}
                />
              </div>
              <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6">
                <LabelSelect
                  label="Revenue Type"
                  name={"revenue_type"}
                  value=""
                  //   dataOptions={options}
                  placeholder={"Select Type"}
                />
              </div>
              <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6">
                <InputLabel
                  label="Start Date"
                  type="date"
                  value=""
                  placeholder="mm/dd/yyy"
                  name={"start_date"}
                />
              </div>
              <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6">
                <InputIcon
                  label="ARPU Per Year"
                  placeholder="Enter ARPU"
                  type="number"
                  name={"arpu"}
                  value=""
                  step="0.01"
                />
                <div className="pt-1 text-sm font-medium text-green1">
                  Recommendation: Hey! App Subscription typically are $100
                </div>
              </div>
            </div>
            <div className="flex justify-center mx-auto mt-8">
              <IconButton type="submit" text="Add Revenue Stream" />
            </div>
          </form>
        </div>
        <div className="px-2 my-16">
          <div className="flex flex-col shadow-lg rounded-xl ">
            <div className="overflow-x-auto ">
              <div className="inline-block min-w-full py-2 sm:px-6 ">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-white border-b">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-left text-gray-400"
                        >
                          Sr.No
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-left text-gray-400"
                        >
                          Source
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-left text-gray-400"
                        >
                          Type
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-left text-gray-400"
                        >
                          Start Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-left text-gray-400"
                        >
                          Revenue Per Year (In $)
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-left text-gray-400"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="transition duration-300 ease-in-out bg-white border-b hover:bg-gray-100">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                          1
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                          {!revenue ? (
                            <input
                              type="text"
                              name="revenue_name"
                              value=""
                              placeholder="Enter"
                              className="p-2 rounded focus:outline-none"
                            ></input>
                          ) : (
                            "apple"
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                          {!revenue ? (
                            <select
                              name="revenue_type"
                              value=""
                              className="p-2 rounded focus:outline-none"
                            >
                              <option>One Time</option>
                            </select>
                          ) : (
                            "One Time"
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                          {!revenue ? (
                            <input
                              type="date"
                              name="start_date"
                              value=""
                              className="p-2 rounded focus:outline-none"
                              //   onChange={(e) => updateHandler(e, key)}
                            ></input>
                          ) : (
                            " 01 / 02 / 2023"
                            // moment(item.start_date).format("DD/MM/YYYY")
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                          {!revenue ? (
                            <input
                              type="number"
                              name="revenue_per_year"
                              placeholder="Enter ARPU."
                              value=""
                              className="p-2 rounded focus:outline-none"
                              step="0.01"
                            ></input>
                          ) : (
                            "$ " + "100"
                          )}
                        </td>
                        <td className="flex justify-center gap-4 py-2">
                          <DeleteIcon
                            className="cursor-pointer"
                            onClick={() => deleteRevenue(key)}
                          />
                          {!revenue ? (
                            <Save
                              className="mt-1 text-gray-500 cursor-pointer"
                              onClick={() => RevenueData()}
                            />
                          ) : (
                            <EditIcon
                              onClick={() => RevenueData()}
                              className="cursor-pointer"
                            />
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueStreams;
