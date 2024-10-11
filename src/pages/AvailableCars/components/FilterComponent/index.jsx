import { CiFilter } from "react-icons/ci";

const FilterComponent = () => {
    return (
        <div className="p-4 lg:p-10 w-full lg:w-[340px] bg-white">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <p className="font-railway text-lg lg:text-xl tracking-wide">Filter</p>
                    <CiFilter size={22} />
                </div>
                <p className="font-railway tracking-widest underline underline-offset-4 text-xs lg:text-sm cursor-pointer">
                    Clear all filters
                </p>
            </div>

            <hr className="border border-b-[#dfdfdf] mt-6 lg:mt-10" />

            <div className="mt-5 lg:mt-7">
                <div className="flex flex-col">
                    <label className="mb-3 lg:mb-5 font-railway tracking-widest uppercase text-xs lg:text-sm" htmlFor="mile-select">Search Within</label>
                    <select id="mile-select" className="p-2 border outline-none font-railway">
                        <option>200</option>
                        <option>300</option>
                        <option>400</option>
                    </select>
                </div>
            </div>

            <hr className="border border-b-[#dfdfdf] mt-6 lg:mt-10" />

            <div className="mt-5 lg:mt-7">
                <div className="flex flex-col items-start">
                    <p className="mb-3 lg:mb-5 font-railway tracking-widest uppercase text-xs lg:text-sm">Type</p>
                    <div className="flex items-center space-x-4 mb-3">
                        <input type="checkbox" className="custom-checkbox" />
                        <p className="font-railway uppercase tracking-wide text-sm">SUV</p>
                    </div>
                    <div className="flex items-center space-x-4 mb-3">
                        <input type="checkbox" className="custom-checkbox" />
                        <p className="font-railway uppercase tracking-wide text-sm">Sedan</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <input type="checkbox" className="custom-checkbox" />
                        <p className="font-railway uppercase tracking-wide text-sm">Truck</p>
                    </div>
                </div>
            </div>

            <hr className="border border-b-[#dfdfdf] mt-6 lg:mt-10" />

            <div className="mt-5 lg:mt-7">
                <div className="flex flex-col">
                    <label className="mb-3 lg:mb-5 font-railway tracking-widest uppercase text-xs lg:text-sm" htmlFor="model-select">Model Year</label>
                    <select id="model-select" className="p-2 border outline-none font-railway">
                        <option>2024</option>
                        <option>2023</option>
                        <option>2022</option>
                    </select>
                </div>
            </div>

            <hr className="border border-b-[#dfdfdf] mt-6 lg:mt-10" />

            <div className="mt-5 lg:mt-7">
                <div className="flex flex-col items-start">
                    <p className="mb-3 lg:mb-5 font-railway tracking-widest uppercase text-xs lg:text-sm">Color</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div>
                            <div className="w-32 h-16 bg-gradient-to-r from-[#C4E0E5] to-[#4CA1AF]"></div>
                            <p className="font-railway tracking-widest text-xs mt-2">Purple</p>
                        </div>
                        <div>
                            <div className="w-32 h-16 bg-gradient-to-r from-[#434343] to-[#000000]"></div>
                            <p className="font-railway tracking-widest text-xs mt-2">Black</p>
                        </div>
                        <div>
                            <div className="w-32 h-16 bg-gradient-to-r from-[#2a5298] to-[#1e3c72]"></div>
                            <p className="font-railway tracking-widest text-xs mt-2">Blue</p>
                        </div>
                        <div>
                            <div className="w-32 h-16 bg-gradient-to-r from-[#1F1C18] to-[#8E0E00]"></div>
                            <p className="font-railway tracking-widest text-xs mt-2">Red</p>
                        </div>
                        <div>
                            <div className="w-32 h-16 bg-gradient-to-r from-[#e35d5b] to-[#e53935]"></div>
                            <p className="font-railway tracking-widest text-xs mt-2">Red</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterComponent;
