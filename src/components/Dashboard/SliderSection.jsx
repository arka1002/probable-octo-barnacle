import InputRange from "./InputRange";

export default function SliderSection() {
    return (
        <>
            <div className="rounded-xl bg-[#f3f3ff] p-6 mt-10">
                <div className="text-center green-gradient font-semibold text-xl">Weighted Average</div>
                <div className="p-2 text-center text-xl lg:text-3xl font-medium">$8,72,309</div>
                <div className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                        <div className="text-center font-medium text-xl green-gradient">DCF</div>
                        <InputRange />
                        <div className="text-center font-semibold text-md pt-2">$1,88,422</div>
                    </div>
                    <div>
                        <div className="text-center font-medium text-xl green-gradient">VC</div>
                        <InputRange />
                        <div className="text-center font-semibold text-md pt-2">$6,00,815</div>
                    </div>
                    <div>
                        <div className="text-center font-medium text-xl green-gradient">Scorecard</div>
                        <InputRange />
                        <div className="text-center font-semibold text-md pt-2">$13,50,000</div>
                    </div>
                    <div>
                        <div className="text-center font-medium text-xl green-gradient">Comparables</div>
                        <InputRange />
                        <div className="text-center font-semibold text-md pt-2">$13,50,000</div>
                    </div>
                </div>
            </div>
        </>
    );
};
