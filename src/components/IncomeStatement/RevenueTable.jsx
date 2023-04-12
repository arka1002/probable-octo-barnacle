import React, { useState } from "react";

const RevenueTable = () => {
  const yearList = ["2023", "2024", "2025", "2026", "2027"];
  const values = ["$46,200", "$106,800", "$181,800", "$272,700", "$390,300"];
  const yoy = ["46,200", "106,800", "181,800", "272,700", "390,300"];
  return (
    <div className="container shadow-md bg-white rounded-lg pb-4 ">
      <div className="overflow-x-auto">
        <table className="w-full ">
          <thead className="border-b  border-customGreen-200">
            <tr>
              <th className="w-32 px-1 py-4 text-sm font-bold lg:px-3 text-customGreen-200 capitalized">
                {"Source"}
              </th>
              {yearList.map((item, i) => (
                <TableHeadingItem centerTitle={true} title={item} key={i} />
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-2 py-4 text-sm  font-semibold text-center text-customBlue-darkest">
                Apple
              </td>
              {values.map((item, i) => (
                <TableDataItem value={item} key={i} />
              ))}
            </tr>

            <tr className="border-b border-customGreen-200">
              <td className="px-2 py-4 text-sm font-semibold text-center text-customBlue-darkest">
                YOY Growth
              </td>
              {yoy.map((item, i) => (
                <td
                  className="px-1 py-4 text-sm font-semibold text-center lg:px-3"
                  key={i}
                >
                  {item ? parseFloat(item).toFixed(2) : 0} %
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RevenueTable;

const TableHeadingItem = ({ title, centerTitle = true }) => {
  return (
    <th
      className={
        "py-4 px-1 lg:px-3 font-bold text-sm text-customGreen-200 capitalized" +
        (centerTitle ? " text-center" : " text-left")
      }
    >
      {title}
    </th>
  );
};

const TableDataItem = ({ value, onclick }) => {
  return (
    <td
      onClick={onclick}
      className="px-1 py-4 text-sm font-semibold text-center lg:px-3 text-customBlue-100"
    >
      {value}
    </td>
  );
};
