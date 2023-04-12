import React from "react";
import { Formik } from "formik";

const BTable = () => {
  return (
    <div>
      <Formik>
        <form onSubmit={(e) => onSubmit(e)}>
          <table className="w-full ">
            <thead className="border-b  border-gray-400">
              <tr>
                <th className="w-32 px-1 py-4 text-sm font-bold lg:px-3 text-customGreen-200 capitalized">
                  Revenue Stream
                </th>
                <th className="w-32 px-1 py-4 text-sm font-bold lg:px-3 text-customGreen-200 capitalized">
                  Past month projected vs Actual (Mar)
                </th>
                <th className="w-32 px-1 py-4 text-sm font-bold lg:px-3 text-customGreen-200 capitalized">
                  Current Month Projected Vs Actual (Apr)
                </th>
                <th className="w-32 px-1 py-4 text-sm font-bold lg:px-3 text-customGreen-200 capitalized">
                  Current Month +1 Projected (May)
                </th>
                <th className="w-32 px-1 py-4 text-sm font-bold lg:px-3 text-customGreen-200 capitalized">
                  Current Month +2 Projected (Jun)
                </th>
              </tr>
            </thead>
            <tbody className="pb-4">
              <tr className="border-b-2 border-gray-400">
                <td className="px-2 py-4 text-center capitalize font-semibol">
                  Payment Fees
                </td>
                <td>
                  <InputTableData />
                </td>
                <td>
                  <InputTableData />
                </td>

                <td className="px-2 py-4 text-center capitalize font-semibol">
                  <input
                    type="text"
                    className="w-16 text-center bg-white border-2"
                    pattern="[0-9]"
                    name="value"
                    value={0}
                    disabled
                    required
                  />
                </td>
                <td className="px-2 py-4 text-center capitalize font-semibol">
                  <input
                    type="text"
                    className="w-16 text-center bg-white border-2"
                    pattern="[0-9]"
                    name="value"
                    value={0}
                    disabled
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </Formik>
    </div>
  );
};

export default BTable;
const InputTableData = ({
  value,
  actual,
  onActualChange,
  type,
  source,
  quickBookValue,
}) => {
  return (
    <td className="px-2 py-4 text-center capitalize font-semibol">
      <div className="grid">
        <div className="flex justify-center">
          <input
            type="text"
            className="w-16 text-center bg-white border-2"
            pattern="[0-9]"
            value={66}
            disabled
            required
          />
          <span className="px-4 lowercase">vs</span>
          <input
            type="text"
            className="w-16 text-center bg-white border-2"
            pattern="[0-9]"
            name="value"
            placeholder="$$$"
            value={345}
            required
          />
        </div>
        <div className="flex justify-center mt-2">
          <input
            type="text"
            className="w-16 text-center bg-white border-2"
            pattern="[0-9]"
            name="value"
            value={422.73}
            required
          />
          %
        </div>
      </div>
    </td>
  );
};
