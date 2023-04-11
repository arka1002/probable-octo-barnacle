import { ReactComponent as Plus } from "../../assets/plus.svg";
import { ReactComponent as Dustbin } from "../../assets/dustbin.svg";


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
            2023: "$1,123",
            2024: "$1,123",
            2025: "$1,123",
            2026: "$1,123",
            2027: "$1,123",
            2028: "$1,123",
            2029: "$1,123",
            2030: "$1,123",
        },
        {
            source: "Salaries",
            2023: "$1,123",
            2024: "$1,123",
            2025: "$1,123",
            2026: "$1,123",
            2027: "$1,123",
            2028: "$1,123",
            2029: "$1,123",
            2030: "$1,123",
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
                    <table className="w-full bg-white">
                        <thead className="border-b border-[#1FC39E]">
                            <tr>
                                <th></th>
                                {data.headers.map(header => <th className="w-32 px-1 py-4 text-sm font-bold lg:px-3 text-[#1FC39E]">{header}</th>)}
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </>
    )
};
