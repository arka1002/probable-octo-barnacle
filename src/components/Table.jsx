import React, { useState } from "react";

const Table = () => {
    const [toggle, setToggle] = useState('year');
    const yearList = ["2023", "2024", "2025", "2026", "2027", "2028", "2029"];
    const [time, setTime] = useState(yearList);
    const values = [
        {
            id: 1,
            yr: "2023",
            val: "04501",
            month: ["2023", "jan", "feb", "mar", "aprl", "may", "june", "july", "aug"],
            data: ["2023", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        {
            id: 2,
            yr: "2024",
            val: "04502",
            month: ["2024", "jan", "feb", "mar", "aprl", "may", "june", "july", "aug"],
            data: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        {
            id: 3,
            yr: "2025",
            val: "04501",
            month: ["2025", "jan", "feb", "mar", "aprl", "may", "june", "july", "aug"],
            data: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        {
            id: 4,
            yr: "2026",
            val: "04501",
            month: ["2026", "jan", "feb", "mar", "aprl", "may", "june", "july", "aug"],
            data: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        {
            id: 5,
            yr: "2027",
            val: "04501",
            month: ["2027", "jan", "feb", "mar", "aprl", "may", "june", "july", "aug"],
            data: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        {
            id: 6,
            yr: "2028",
            val: "04501",
            month: ["2028", "jan", "feb", "mar", "aprl", "may", "june", "july", "aug"],
            data: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        {
            id: 7,
            yr: "2029",
            val: "04501",
            month: ["2029", "jan", "feb", "mar", "aprl", "may", "june", "july", "aug"],
            data: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
    ];
    // const map1 = values.map(x => x.val)
    // const [details, setDetails] = useState(map1);
    function Get(id) {
        if (toggle === 'year') {
            setToggle('month')
            const test = values.find((e) => e.id === id);
            // console.log(test.data);
            setTime(test.month)
            // setDetails(test.data)
        } else {
            setToggle('year')
            setTime(yearList)
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
                            {time.map((item, i) => (
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
                                <TableDataItem
                                    value={item.val}
                                    key={i}
                                    onclick={() => Get(item.id)}
                                />
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
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
            className="px-1 py-4 text-sm font-semibold text-center lg:px-3 text-customBlue-100 hover:bg-blue-200 hover:text-white"
        >
            {value}
        </td>
    );
};