import React from "react";
import InputLabel from "./InputLabel";
import { ReactComponent as CrossIcon } from "../../assets/X.svg";
import BTable from "./BTable";

const BurnAnalysis = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 py-4">
        <div className="flex flex-col">
          <InputLabel
            symbol="$"
            label="Cash On Hand"
            placeholder="100"
            type="text"
            name={"existingCashOnHand"}
            value=""
            onChange={(e) => onChange(e)}
            min="0"
          />
          <InputLabel
            symbol="$"
            label="Funding Raised"
            placeholder="500"
            type="text"
            name={"existingCashOnHand"}
            value=""
            onChange={(e) => onChange(e)}
            min="0"
          />
          <InputLabel
            symbol="$"
            label="Total Cash Balance"
            placeholder="Calculating..."
            type="number"
            name={"totalCashBalance"}
            value={0}
            onChange={(e) => onChange(e)}
            min="0"
            disabled={true}
          />
          <InputLabel
            symbol="$"
            label="Monthly Gross Burn Rate"
            placeholder="Calculating..."
            type="number"
            name={"monthlyGrossBurnRate"}
            value={0}
            onChange={(e) => onChange(e)}
            min="0"
            disabled={true}
          />
          <InputLabel
            symbol=""
            label="Implied Cash Runway"
            placeholder="Calculating..."
            type="number"
            name={"impliedCashRunway"}
            value={0}
            onChange={(e) => onChange(e)}
            min="0"
            disabled={true}
          />
        </div>
        <div className="flex flex-col border-l-2 pl-3">
          <InputLabel
            symbol="$"
            label="Total Monthly Revenue"
            placeholder="Calculating..."
            type="number"
            name={"totalMonthlyRevenue"}
            value={3600}
            onChange={(e) => onChange(e)}
            min="0"
            disabled={true}
          />
          <InputLabel
            symbol="$"
            label="Total Monthly Cash Expanses"
            placeholder="Calculating..."
            type="number"
            name={"totalMonthlyCashExpenses"}
            value={503.65}
            onChange={(e) => onChange(e)}
            min="0"
          />
          <InputLabel
            symbol="$"
            label="Net Cash Inflow / Outflow"
            placeholder="Enter Percentage Conversion"
            type="number"
            name={"netCashFlow"}
            value={0}
            onChange={(e) => onChange(e)}
            min="0"
            disabled={true}
          />
          <InputLabel
            symbol="$"
            label="Monthly Net Burn Rate"
            placeholder="Calculating"
            type="number"
            name={"monthlyNetBurnRate"}
            value={0}
            onChange={(e) => onChange(e)}
            min="0"
            disabled={true}
          />
        </div>
      </div>

      <div className="rounded-md bg-light px-2 py-4">
        <div className="flex justify-between">
          <div className="w-9/12">
            <div className="w-1/2 ">
              <label className="form-label inline-block mb-1.5 font-medium text-[#494D61] text-base">
                Select Revenue Stream
                <span className="text-red-500">*</span>
              </label>
              <select
                className="block w-full px-4 py-2 m-0 text-sm font-medium text-gray-700 transition ease-in-out bg-white bg-no-repeat border rounded-lg appearance-none form-select form-select-lg bg-clip-padding h-11 border-neutral focus:text-black focus:bg-white focus:outline-none"
                aria-label=".form-select-lg example"
                name={"revenue_source"}
                required={true}
                onChange={""}
              >
                <option value="" selected>
                  Select Type
                </option>
                <option value="" disabled>
                  Select Type
                </option>
              </select>
            </div>

            <div>
              <ul className="py-3 flex flex-wrap">
                <li>
                  <div className="mx-3 my-2 chip-bg rounded-full text-customGreen-300 px-4 py-2 flex justify-center items-center">
                    <div className="text-sm mr-2">Payment Fees</div>
                    <div className="cursor-pointer ">
                      <CrossIcon />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="cursor-pointer flex">
            <div>
              <button className=" bg-customGreen-800 px-4 py-2 rounded-md text-black font-semibold">
                Connect to Quickbooks
              </button>
            </div>
          </div>

          <div className="cursor-pointer ">
            <button className="bg-white border-2 border-opacity-100 border-solid border-customGray-3000 px-4 py-2 rounded-md text-customGray-3000 font-semibold">
              Disconnect to Quickbooks
            </button>
          </div>
        </div>

        <div className="px-2">
          <BTable />
        </div>
      </div>
    </div>
  );
};

export default BurnAnalysis;
