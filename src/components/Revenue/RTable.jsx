import React, { useState } from "react";
import { ReactComponent as Dustbin } from "../../assets/dustbin.svg";
import { ReactComponent as Expand } from "../../assets/expand.svg";

const RTable = () => {
  const [data, setData] = useState();
  // const [toggle, setToggle] = useState(false);
  const [time, setTime] = useState("year");
  const yearList = ["2023", "2024", "2025", "2026", "2027", "2028", "2029"];
  const [yr, setYr] = useState(yearList);

  const values = [
    {
      id: 1,
      yr: "2023",
      month: [
        "2023",
        "jan",
        "feb",
        "mar",
        "aprl",
        "may",
        "june",
        "july",
        "aug",
      ],
      score: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
      test: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
    },
    {
      id: 2,
      yr: "2024",
      month: [
        "2024",
        "jan",
        "feb",
        "mar",
        "aprl",
        "may",
        "june",
        "july",
        "aug",
      ],
      score: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
      test: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
    },
    {
      id: 3,
      yr: "2025",
      month: [
        "2025",
        "jan",
        "feb",
        "mar",
        "aprl",
        "may",
        "june",
        "july",
        "aug",
      ],
      score: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
      test: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
    },
    {
      id: 4,
      yr: "2026",
      month: [
        "2026",
        "jan",
        "feb",
        "mar",
        "aprl",
        "may",
        "june",
        "july",
        "aug",
      ],
      score: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
      test: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
    },
    {
      id: 5,
      yr: "2027",
      month: [
        "2027",
        "jan",
        "feb",
        "mar",
        "aprl",
        "may",
        "june",
        "july",
        "aug",
      ],
      score: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
      test: ["1", "2", "3", "4", "5", "6", "7", "8", "8"],
    },
  ];
  const [details, setDetails] = useState(values);
  const [details2, setDetails2] = useState(values);

  function Get(id) {
    console.log(id);
    setData(
      [details.find((e) => e.id === id)].map((val) => {
        console.log(val);
        setYr(val.month);
        setDetails2(val.data);
        console.log("details", details);
      })
    );
    setToggle(!toggle);
    if (!toggle) {
      setYr(yearList);
    }
  }
  return (
    <div className="container shadow-md bg-white rounded-lg pb-4 ">
      <div className="overflow-x-auto">
        <table className="w-full ">
          <thead className="border-b  border-customGreen-200">
            <tr>
              <th className="w-32 px-1 py-4 text-sm font-bold lg:px-3 text-customGreen-200 capitalized">
                {"Source"}
              </th>
              {yr.map((item, i) => (
                <TableHeadingItem centerTitle={true} title={item} key={i} />
              ))}
            </tr>
          </thead>
          {/* <tbody>
                        <tr className='border-b'>
                            <td className='px-2 py-4 text-sm  font-semibold text-center text-customBlue-darkest'>Apple</td>
                            {Values.map((item, i) => (
                                 <TableDataItem value={item} key={i}/>
                            ))}
                        </tr>
                 

                </tbody> */}
          <tbody>
            <tr className="border-b">
              <td className="px-2 py-4 text-sm  font-semibold text-center text-customBlue-darkest">
                Apple
              </td>
              {/* {details.map((item, i) => (
                    <TableDataItem
                    
                      value={item.val}
                      key={i}
                      onclick={() => Get(item.id)}
                    />
                  ))} */}

              {details.map((item, id) => (
                <td
                  key={id}
                  onClick={() => Get(item.id)}
                  className="px-1 py-4 text-sm font-semibold text-center lg:px-3 text-customBlue-100 hover:bg-customGreen-200 hover:text-white"
                >
                  {item.val}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RTable;

function Connector({ time, onClick, head, test2 }) {
  if (time == "year") {
    return <YearTable head={head} test2={test2} />;
  } else {
    return console.log("hello");
  }
}

function YearTable({ head, test2 }) {
  return (
    <>
      <table className="w-full bg-white">
        <thead className="border-b border-customGreen-200">
          <tr>
            <th></th>
            <th className="w-32 px-1 py-4 text-sm font-bold lg:px-3 text-customGreen-200">
              Source
            </th>
            {head.map((item) => (
              <th className="w-32 px-1 py-4 text-sm font-bold lg:px-3 text-customGreen-200">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-2">
            <td className="w-8 px-2 py-4">
              <div className="flex justify-center">
                <Dustbin className="cursor-not-allowed opacity-40" />
              </div>
            </td>
            <td className="px-2 py-4 text-sm font-semibold text-[#252F40]">
              Source
            </td>
            {test2.map((x) => (
              <td className="px-2 py-4 text-sm font-normal text-center text-[#252F40] hover:bg-[#1FC39E] hover:text-white cursor-auto">
                <div className="flex justify-center gap-2">
                  {x}
                  <Expand />
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}
