import InputIcon from "./InputIcon";

export default function Expenses() {
    return (
        <>
            <div className="font-semibold text-2xl py-6">Expenses</div>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <div><InputIcon label={`Payment Processing Fees Per Transaction`} symbol={`%`} type={`number`} placeholder={`2`}/></div>
                <div><InputIcon label={`Customer Support Outsourced`} symbol={`%`} type={`number`} placeholder={`3`}/></div>
                <div><InputIcon label={`Effective Annual Growth`} symbol={`%`} type={`number`} placeholder={`0`}/>
                <div className="pt-1 text-[#10786C] text-sm font-medium">We’re Calculating Your Effective Annual Growth</div></div>
                <div><InputIcon label={`Hourly Tickets per agent hour`} symbol={`#`} type={`number`} placeholder={`3`}/></div>
                <div></div>
                <div><InputIcon label={`Hourly Cost`} symbol={`#`} type={`number`} placeholder={`4`}/></div>
                <div><InputIcon label={`Hosting Cost Per User`} symbol={`$`} type={`text`} placeholder={`4`}/></div>
                <div><InputIcon label={`Employee Onboarding Cost`} symbol={`$`} type={`text`} placeholder={`33`}/></div>
                <div><InputIcon label={`Rent Monthly`} symbol={`$`} type={`text`} placeholder={`33`}/></div>
                <div></div>
            </div>
            <div className="grid place-items-center">
                <button className="rounded-lg h-11 w-[166px]">Add More Expenses</button>
            </div>
        </>
    )
};
