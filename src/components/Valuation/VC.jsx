export default function VC() {
    return (
        <>
            <div className="bg-white p-7 shadow-md">
                <div className="flex justify-end py-2">
                    <select id="series" class="w-[110px] bg-[#F3F3FF] text-sm font-semibold bg-light text-[#1FC39E] px-2 py-2 rounded">
                        <option value="revenue">use Revenue </option>
                        <option value="ebita">use EBITA </option>
                        <option value="both">use both </option>
                    </select>
                </div>
            </div>
        </>
    )
};
