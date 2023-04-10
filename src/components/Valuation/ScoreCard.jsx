import { ReactComponent as Plus } from "../../assets/plus.svg";



export default function SC() {
    const data = {
        headers: [
            "Value Driver",
            "Weight",
            "Your Venture Score",
            "Factor"
        ],
    }
    return (
        <>
            <div className="p-7 bg-white">
                <div className="flex flex-row-reverse pb-4 items-center">
                    <div className="flex gap-2 cursor-pointer items-center text-[#14937E]">
                        <div>Add Value Driver</div>
                        <div><Plus /></div>
                    </div>
                </div>
                <table className="w-full py-4">
                    <thead className="border-b border-[#1FC39E]">
                        <tr>
                            <th scope="col">{` `}</th>
                            {data.headers.map(header => <th scope="col" className="text-center py-4 text-[#1FC39E] font-bold text-sm">{header}</th>)}
                        </tr>
                    </thead>
                </table>
            </div>
        </>
    )
};
