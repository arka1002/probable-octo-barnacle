import React from "react";
import InputLabel from "../BurnAnalysis/InputLabel";
import LabelSelect from "./LableSelect";
import IconButton from "./IconButton";
import InputIcon from "./InputIcon";

const RevenueStreams = () => {
  return (
    <div className="h-full overflow-auto bg-white ">
      <div className="w-full py-10 mx-auto">
        <div className="">
          <div className="text-[#494D61]  font-semibold text-2xl mb-6">
            Revenue
          </div>
          <form>
            <div className="grid grid-cols-12 gap-x-8 gap-y-6">
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
      </div>
    </div>
  );
};

export default RevenueStreams;
