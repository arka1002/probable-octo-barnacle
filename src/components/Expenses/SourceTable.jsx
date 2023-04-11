import { ReactComponent as Plus } from "../../assets/plus.svg";
import { ReactComponent as Dustbin } from "../../assets/dustbin.svg";
import { ReactComponent as Expand } from "../../assets/expand.svg";


export default function SourceTable() {
    const data = {
        headers: [
            "Source",
            "2023",
            "2024",
            "2025",
            "2026",
            "2027",
            "2028",
            "2029",
            "2030"
        ],
    }
    const items = [
        {
            source: "Cost of Sales",
            y2023: "$1,123",
            y2024: "$1,123",
            y2025: "$1,123",
            y2026: "$1,123",
            y2027: "$1,123",
            y2028: "$1,123",
            y2029: "$1,123",
            y2030: "$1,123",
        },
        {
            source: "Salaries",
            y2023: "$1,123",
            y2024: "$1,123",
            y2025: "$1,123",
            y2026: "$1,123",
            y2027: "$1,123",
            y2028: "$1,123",
            y2029: "$1,123",
            y2030: "$1,123",
        }
    ]
    return (
        <>
            <div className="p-6 bg-[#F3F3FF]">
                <div className="text-2xl font-bold text-[#1FC39E]">Expenses</div>
                <div className="py-4 flex justify-end">
                    <button className="bg-white rounded-3xl text-[#14937E] flex justify-center items-center gap-2 hover:opacity-80 px-4 py-2 w-full lg:w-1/3">
                        <div className="inline-block">Add Source</div>
                        <div className="inline-block"><Plus /></div>
                    </button>
                </div>
                <div>
                    <table className="w-full bg-white rounded-lg shadow-md">
                        <thead className="border-b border-[#1FC39E]">
                            <tr>
                                <th></th>
                                {data.headers.map(header => <th className="w-32 px-1 py-4 text-sm font-bold lg:px-3 text-[#1FC39E]">{header}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                                <>
                                    <tr className="border-b-2">
                                        <td className="w-8 px-2 py-4"><div className="flex justify-center"><Dustbin className="cursor-not-allowed opacity-40" /></div></td>
                                        <td className="px-2 py-4 text-sm font-semibold text-[#252F40]">{item.source}</td>
                                        <td className="px-2 py-4 text-sm font-normal text-center text-[#252F40] hover:bg-[#1FC39E] hover:text-white cursor-auto">
                                            <div className="flex justify-center">
                                                {item.y2023}
                                                <Expand />
                                            </div>
                                        </td>
                                        <td className="px-2 py-4 text-sm font-normal text-center text-[#252F40] hover:bg-[#1FC39E] hover:text-white cursor-auto">
                                            <div className="flex justify-center">
                                                {item.y2024}
                                                <Expand />
                                            </div>
                                        </td>
                                        <td className="px-2 py-4 text-sm font-normal text-center text-[#252F40] hover:bg-[#1FC39E] hover:text-white cursor-auto">
                                            <div className="flex justify-center">
                                                {item.y2025}
                                                <Expand />
                                            </div>
                                        </td>
                                        <td className="px-2 py-4 text-sm font-normal text-center text-[#252F40] hover:bg-[#1FC39E] hover:text-white cursor-auto">
                                            <div className="flex justify-center">
                                                {item.y2026}
                                                <Expand />
                                            </div>
                                        </td>
                                        <td className="px-2 py-4 text-sm font-normal text-center text-[#252F40] hover:bg-[#1FC39E] hover:text-white cursor-auto">
                                            <div className="flex justify-center">
                                                {item.y2027}
                                                <Expand />
                                            </div>
                                        </td>
                                        <td className="px-2 py-4 text-sm font-normal text-center text-[#252F40] hover:bg-[#1FC39E] hover:text-white cursor-auto">
                                            <div className="flex justify-center">
                                                {item.y2028}
                                                <Expand />
                                            </div>
                                        </td>
                                        <td className="px-2 py-4 text-sm font-normal text-center text-[#252F40] hover:bg-[#1FC39E] hover:text-white cursor-auto">
                                            <div className="flex justify-center">
                                                {item.y2029}
                                                <Expand />
                                            </div>
                                        </td>
                                        <td className="px-2 py-4 text-sm font-normal text-center text-[#252F40] hover:bg-[#1FC39E] hover:text-white cursor-auto">
                                            <div className="flex justify-center">
                                                {item.y2030}
                                                <Expand />
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};
