import React from "react";
import AcccordianItem from "./AccordianItem";
import RevenueStreams from "./RevenueStreams";

const OnBoardingData = () => {
  return (
    <div>
      <AcccordianItem title="Revenue Stream">
        <RevenueStreams />
      </AcccordianItem>
    </div>
  );
};

export default OnBoardingData;
