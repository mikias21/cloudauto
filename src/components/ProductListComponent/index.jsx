import { Link } from "react-router-dom";

const ProductListComponent = ({title, cars}) => {
    return (
        <div className="container mt-16 mx-auto px-4 sm:px-6 lg:px-8">
            <div>
                <p className="text-2xl">{title}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {cars.map((car, index) => (
                    <div key={index} className="max-w-sm bg-white p-6 rounded-sm shadow-sm">
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

export default ProductListComponent;