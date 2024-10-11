import { Link } from "react-router-dom";

const AvailableProductListComponent = ({cars}) => {
    return (
        <div className="container -mt-6 mb-10 mx-auto px-4 sm:px-6 lg:px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {cars.map((car, index) => (
                    <div key={index} className="max-w-sm lg:w-[290px] bg-white p-6 rounded-sm shadow-sm">
                        <img
                            src={car.image}
                            alt={car.shortName}
                            className="w-full h-32 rounded-lg object-contain"
                        />

                        <p className="font-popins text-3xl text-center mt-3 mb-3">
                            {car.shortName}
                        </p>

                        <div className="flex justify-stretch items-start pt-4">
                            <div className="text-center">
                                <p className="font-semibold text-base font-railway">Lease</p>
                                <p className="text-xs text-gray-400 font-railway">
                                    {car.lease.time}
                                </p>
                                <p className="text-3xl font-bold mt-2">${car.lease.amount}</p>
                                <p className="text-xs text-gray-400 font-popins mt-1">
                                    {car.lease.routine}
                                </p>
                                <p className="text-xs text-gray-400 font-popins mt-7">Including</p>
                                <p className="text-lg font-semibold">${car.lease.include_amount}</p>
                                {car.lease.include_comment.map((comment, i) => (
                                    <p key={i} className="text-xs text-gray-400 font-popins">
                                        {comment}
                                    </p>
                                ))}
                            </div>

                            <div className="border-l h-24 mt-7 border-gray-200 mx-auto"></div>

                            <div className="text-center">
                                <p className="font-semibold text-base">Finance</p>
                                <p className="text-xs text-gray-400">{car.finance.currency}</p>
                                <p className="text-3xl font-bold mt-2">{car.finance.amount}%</p>
                                <p className="text-xs text-gray-400 mt-1">{car.finance.rate}</p>
                                <p className="text-xs text-gray-400 mt-7">Plus</p>
                                <p className="text-lg font-semibold">${car.finance.plus_amount}</p>
                                <p className="text-xs text-gray-400">{car.finance.include_comment}</p>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <Link 
                                to="/details" 
                                style={{fontSize: "11px"}} 
                                className="w-full bg-black font-popins tracking-widest text-xs text-white uppercase font-semibold py-3 px-8 rounded-sm hover:bg-gray-800 block text-center"
                                >
                                View details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AvailableProductListComponent;