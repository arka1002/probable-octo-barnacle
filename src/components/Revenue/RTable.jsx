import React, { useState } from "react";

const RTable = () => {
  const [data, setData] = useState();
  // const [toggle, setToggle] = useState(false);
  const [time, setTime] = useState('year')
  const yearList = ["2023", "2024", "2025", "2026", "2027", "2028", "2029"];
  const [yr, setYr] = useState(yearList);

  const values = [
    {
      id: 1,
      yr: "2023",
      val: "04501",
      month: ["2023","jan", "feb", "mar", "aprl", "may", "june", "july", "aug"],
      score: ["1", "2", "3", "4", "5", "6", "7", "8"],
      test: ["1", "2", "3", "4", "5", "6", "7", "8"],
    },
    {
      id: 2,
      yr: "2024",
      val: "04502",
      month: ["2024","jan", "feb", "mar", "aprl", "may", "june", "july", "aug"],
      score: ["1", "2", "3", "4", "5", "6", "7", "8"],
      test: ["1", "2", "3", "4", "5", "6", "7", "8"],
    },
    {
      id: 3,
      yr: "2025",
      val: "04501",
      month: ["2025","jan", "feb", "mar", "aprl", "may", "june", "july", "aug"],
      score: ["1", "2", "3", "4", "5", "6", "7", "8"],
      test: ["1", "2", "3", "4", "5", "6", "7", "8"],
    },
    {
      id: 4,
      yr: "2026",
      val: "04501",
      month: ["2026","jan", "feb", "mar", "aprl", "may", "june", "july", "aug"],
      score: ["1", "2", "3", "4", "5", "6", "7", "8"],
      test: ["1", "2", "3", "4", "5", "6", "7", "8"],
    },
    {
      id: 5,
      yr: "2027",
      val: "04501",
      month: ["2027","jan", "feb", "mar", "aprl", "may", "june", "july", "aug"],
      score: ["1", "2", "3", "4", "5", "6", "7", "8"],
      test: ["1", "2", "3", "4", "5", "6", "7", "8"],
    },
  ];
  const [details, setDetails] = useState(values);
  function Change(id) {
    if (time === 'year') {
      setTime('month')
      const found = values.find(item => item.id === id)
      console.log(values.map(x => x.yr));
    } else {
      setTime('year')
    }
  }
  return (
    <div className="container shadow-md bg-white rounded-lg pb-4 ">
      <div className="overflow-x-auto">
        
      </div>
    </div>
  );
};

export default RTable;









