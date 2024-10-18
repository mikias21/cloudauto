import { useState } from "react";
import { Link } from "react-router-dom";

const AvailableProductListComponent = ({ cars }) => {
    const [visibleCount, setVisibleCount] = useState(9);

    const loadMoreCars = () => {
        setVisibleCount((prevCount) => prevCount + 9);
    };

    return (
        <div className="container -mt-6 mb-10 mx-auto px-4 sm:px-6 lg:px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {cars.slice(0, visibleCount).map((car, index) => (
                    <div key={index} className="max-w-sm lg:w-[290px] bg-white p-6 rounded-sm shadow-sm">
                        <img
                            src={car.image_url}
                            alt={car.title}
                            className="w-full h-32 rounded-lg object-contain"
                        />
                        <p className="font-popins text-xl text-center mt-3 mb-3">
                            {car.title}
                        </p>
                        <div>
                            <div>
                                <p className="text-base font-bold mt-2">{car.price}</p>
                                <p className="text-xs text-gray-400 font-popins mt-3">{car.description}</p>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <Link 
                                to="/details" 
                                style={{ fontSize: "11px" }} 
                                className="w-full bg-black font-popins tracking-widest text-xs text-white uppercase font-semibold py-3 px-8 rounded-sm hover:bg-gray-800 block text-center"
                            >
                                View details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {visibleCount < cars.length && (
                <div className="flex justify-center mt-6">
                    <button 
                        onClick={loadMoreCars} 
                        className="bg-transparent text-black border border-emerald-950 hover:bg-black hover:text-white font-railway w-40 py-2 px-4 rounded-sm"
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default AvailableProductListComponent;
