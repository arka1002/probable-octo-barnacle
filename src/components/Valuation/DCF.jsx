import { ReactComponent as Pen } from "../../assets/pen.svg";


export default function DCF() {
    const data = {
        headers: [
            "Year",
            "Discount Rate",
            "Long Term Growth Rate",
            "Survival Rate",
            "Discounted EBITA"
        ],
    }
    const items = [
        {
            year: "2025",
            discountRate: "0.40",
            ltgr: "0.01",
            sr: "1.00",
            ebita: "179502"
        },
        {
            year: "2025",
            discountRate: "0.40",
            ltgr: "0.01",
            sr: "1.00",
            ebita: "179502"
        }
    ]
    return (
        <>
            <div className="bg-white p-7">
                <div className="text-xs text-[#9F9F9F]">The DCF (Discounted Cash Flow) methods represent the most renown approach to company valuation, recommended by academics and a daily tool for financial analysts. The valuation is the present value of all the free cash flows to equity the startup is going to generate in the future, discounted by its risk. These methods weight the projected free cash flow to equity by the probability the startup will survive. Then, the flows are discounted to present by a rate that represents risks related to industry, size, development stage and profitability. Lastly, an illiquidity discount is applied to the sum of the discounted cash flows to compute the valuation.</div>
                <table className="w-full py-4">
                    <tr>
                        <th scope="col">{` `}</th>
                        {data.headers.map(header => <th scope="col" className="text-center py-4">{header}</th>)}
                    </tr>
                    {items.map(item => (
                        <>
                            <tr>
                                <td className="grid place-items-center py-4"><Pen /></td>
                                <td className="text-center py-4">{item.year}</td>
                                <td className="text-center py-4">{item.discountRate}</td>
                                <td className="text-center py-4">{item.ltgr}</td>
                                <td className="text-center py-4">{item.sr}</td>
                                <td className="text-center py-4">{item.ebita}</td>
                            </tr>
                        </>
                    ))}
                </table>
            </div>
            <div>
            </div>
        </>
    )
};
