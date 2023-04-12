import React, { useState } from "react";
import { ReactComponent as Dustbin } from "../../assets/dustbin.svg";
import { ReactComponent as Expand } from "../../assets/expand.svg";

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
      month: ["2023", "jan", "feb", "mar", "aprl", "may", "june", "july", "aug"],
      score: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
      test: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
    },
    {
      id: 2,
      yr: "2024",
      month: ["2024", "jan", "feb", "mar", "aprl", "may", "june", "july", "aug"],
      score: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
      test: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
    },
    {
      id: 3,
      yr: "2025",
      month: ["2025", "jan", "feb", "mar", "aprl", "may", "june", "july", "aug"],
      score: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
      test: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
    },
    {
      id: 4,
      yr: "2026",
      month: ["2026", "jan", "feb", "mar", "aprl", "may", "june", "july", "aug"],
      score: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
      test: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
    },
    {
      id: 5,
      yr: "2027",
      month: ["2027", "jan", "feb", "mar", "aprl", "may", "june", "july", "aug"],
      score: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
      test: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
    },
  ];

  const head = values.map(x => x.yr);
  const test2 = values.map(x => x.score[0])
  console.log(test2);



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
        <Connector time={time} onClick={() => Change(id)} head={head} test2={test2} />
      </div>
    </div>
  );
};

export default RTable;

function Connector({ time, onClick, head, test2 }) {
  if (time == 'year') {
    return (<YearTable head={head} test2={test2} />)
  } else {
    return (console.log('hello'))
  }
}

function YearTable({ head, test2 }) {
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
            {test2.map(x => <td className="px-2 py-4 text-sm font-normal text-center text-[#252F40] hover:bg-[#1FC39E] hover:text-white cursor-auto">
              <div className="flex justify-center gap-2">
                {x}
                <Expand />
              </div>
            </td>)}
          </tr>
        </tbody>
      </table>
    </>
  )
}







