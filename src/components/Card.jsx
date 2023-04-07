import { ReactComponent as Icon } from "../assets/person.svg"


export default function Card() {
    return (
        <div className="p-5 bg-[#F3F3FF] rounded-md flex gap-10 items-center">
            <div><Icon/></div>
            <div className="grow">
                <div className="text-center text-[#333333] font-semibold">Total no. of Guest Users</div>
                <div className="mt-2 text-[#333333] font-semibold text-center text-xl">28</div>
            </div>
        </div>
    )
};
