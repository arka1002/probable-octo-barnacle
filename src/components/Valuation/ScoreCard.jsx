import { ReactComponent as Plus } from "../../assets/plus.svg";
import { ReactComponent as Pen } from "../../assets/pen.svg";



export default function SC() {
    const data = {
        headers: [
            "Value Driver",
            "Weight",
            "Your Venture Score",
            "Factor"
        ],
    }
    const items = [
        {
            valueDriver: "Strength of the Management Team",
            weight: "30%",
            yvs: "100%",
            factor: "0.3"
        },
        {
            valueDriver: "Size of the Opportunity",
            weight: "15%",
            yvs: "100%",
            factor: "0.15"
        }
    ]
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
                    <tbody>
                        {items.map(item => (
                            <>
                                <tr>
                                    <td className="grid place-items-center py-4"><Pen /></td>
                                    <td className="text-center py-4 px-1 lg:px-3 font-normal text-sm text-gray-600">{item.valueDriver}</td>
                                    <td className="text-center py-4 px-1 lg:px-3 font-normal text-sm text-gray-600">{item.weight}</td>
                                    <td className="text-center py-4 px-1 lg:px-3 font-normal text-sm text-gray-600">{item.yvs}</td>
                                    <td className="text-center py-4 px-1 lg:px-3 font-normal text-sm text-gray-600">{item.factor}</td>
                                </tr>
                            </>
                        ))}
                        <tr>
                            <td></td>
                            <td className="py-4 px-1 lg:px-3 text-center font-bold text-sm text-gray-600">Factor Sum</td>
                            <td className="py-4 px-1 lg:px-3 text-center font-bold text-sm text-gray-600">100%</td>
                            <td></td>
                            <td className="text-center py-4 px-1 lg:px-3 font-normal text-sm text-gray-600">1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
};
