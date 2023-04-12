import React, { useState } from "react";
import { ReactComponent as Dustbin } from "../../assets/dustbin.svg";
import { ReactComponent as Expand } from "../../assets/expand.svg";

const RTable = () => {
  const [time, setTime] = useState('year')
  const [month, setMonth] = useState('')

  const values = [
    {
      id: 1,
      yr: "2023",
      val: "23",
      month: ["2023", "jan", "feb", "mar", "aprl", "may", "june", "july", "aug"],
      score: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
      test: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
    },
    {
      id: 2,
      yr: "2024",
      val: "24",
      month: ["2024", "jan", "feb", "mar", "aprl", "may", "june", "july", "aug"],
      score: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
      test: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
    },
    {
      id: 3,
      yr: "2025",
      val: "25",
      month: ["2025", "jan", "feb", "mar", "aprl", "may", "june", "july", "aug"],
      score: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
      test: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
    },
    {
      id: 4,
      yr: "2026",
      val: "26",
      month: ["2026", "jan", "feb", "mar", "aprl", "may", "june", "july", "aug"],
      score: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
      test: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
    },
    {
      id: 5,
      yr: "2027",
      val: "27",
      month: ["2027", "jan", "feb", "mar", "aprl", "may", "june", "july", "aug"],
      score: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
      test: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
    },
  ];

  const head = values.map(x => x.yr);
  const test2 = values.map(x => x.val);
  const yearIDS = values.map(x => x.id);

  function GetDetails(id) {
    if (time === 'year') {
      setTime('month')
      const map_1 = values.find(x => x.id === id);
      setMonth(map_1.month);
    } else {
      setTime('year')
    }
  }


  return (
    <div className="container shadow-md bg-white rounded-lg pb-4 ">
      <div className="overflow-x-auto">
        <Connector
          time={time}
          head={head}
          test2={test2}
          yearIDS={yearIDS}
          change={(id) => GetDetails(id)}
          month={month} />
      </div>
    </div>
  );
};

export default RTable;

function Connector({ time, head, test2, yearIDS, change, month }) {
  if (time == 'year') {
    return (<YearTable head={head} test2={test2} yearIDS={yearIDS} change={change} />)
  } else {
    return (<MonthTable month={month} />)
  }
}

function YearTable({ head, test2, yearIDS, change }) {

  const mapArrays = (options, values) => {
    const res = [];
    for (let i = 0; i < options.length; i++) {
      res.push({
        id: options[i],
        val: values[i]
      });
    };
    return res;
  };
  const test = mapArrays(yearIDS, test2)
  return (
    <>
      <table className="w-full bg-white">
        <thead className="border-b border-customGreen-200">
          <tr>
            <th></th>
            <th className="w-32 px-1 py-4 text-sm font-bold lg:px-3 text-customGreen-200">Source</th>
            {
              head.map(item => <th className="w-32 px-1 py-4 text-sm font-bold lg:px-3 text-customGreen-200">{item}</th>)
            }
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-2">
            <td className="w-8 px-2 py-4"><div className="flex justify-center"><Dustbin className="cursor-not-allowed opacity-40" /></div></td>
            <td className="px-2 py-4 text-sm font-semibold text-[#252F40]">Source</td>
            {test.map(x => <td className="px-2 py-4 text-sm font-normal text-center text-[#252F40] hover:bg-[#1FC39E] hover:text-white cursor-auto">
              <div className="flex justify-center gap-2">
                {x.val}
                <Expand onClick={() => change(x.id)} />
              </div>
            </td>)}
          </tr>
        </tbody>
      </table>
    </>
  )
}


function MonthTable({ month }) {
  return (
    <>
      <table className="w-full bg-white">
        <thead className="border-b border-customGreen-200">
          <tr>
            <th className="w-32 px-1 py-4 text-sm font-bold lg:px-3 text-customGreen-200">Source</th>
            <td className="w-32 px-1 py-4 text-sm font-bold lg:px-3 text-customGreen-200">{month[0]}</td>
            {
              month.slice(1).map(item => <th className="w-32 px-1 py-4 text-sm font-bold lg:px-3 text-customGreen-200">{item}</th>)
            }
          </tr>
        </thead>
      </table>
    </>
  )
}







