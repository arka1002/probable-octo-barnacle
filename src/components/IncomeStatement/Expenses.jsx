export default function Expenses() {
    const data = {
        headers: [
            "Source",
            "2023",
            "2024",
            "2025",
            "2026",
            "2027"
        ],
    };
    const items = [
        {
            source: "2025",
            y2023: "0.40",
            y2024: "0.01",
            y2025: "1.00",
            y2026: "179502",
            y2027: "179502"
        },
        {
            source: "2025",
            y2023: "0.40",
            y2024: "0.01",
            y2025: "1.00",
            y2026: "179502",
            y2027: "179502"
        }
    ]
    return (
        <>
            <div className="p-6 bg-[#f3f3ff]">
                <div className="pb-4 text-xl font-bold text-[#14937E]">Expenses</div>
                <div>
                    <table className="w-full rounded-md shadow-md">
                        <thead className="border-b border-[#1FC39E] bg-white">
                            <tr>
                                {data.headers.map(header => <th scope="col" className="text-center py-4 text-[#1FC39E] font-bold text-sm">{header}</th>)}
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {items.map(item => (
                                <>
                                    <tr className="border-b-2">
                                        <td className="px-2 py-4 text-sm font-semibold text-center text-[#252F40]">{item.source}</td>
                                        <td className="px-2 py-4 text-sm font-normal text-center text-[#252F40]">{item.y2023}</td>
                                        <td className="px-2 py-4 text-sm font-normal text-center text-[#252F40]">{item.y2024}</td>
                                        <td className="px-2 py-4 text-sm font-normal text-center text-[#252F40]">{item.y2025}</td>
                                        <td className="px-2 py-4 text-sm font-normal text-center text-[#252F40]">{item.y2026}</td>
                                        <td className="px-2 py-4 text-sm font-normal text-center text-[#252F40]">{item.y2027}</td>
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
