import { Link } from 'react-router-dom';

const LocationStoreComponent = () => {
    return (
        <div className="mt-15 flex flex-col lg:flex-row justify-between items-start space-y-10 lg:space-y-0 lg:space-x-6 py-10 bg-black px-4 lg:px-16">
            <div className="relative flex flex-col items-start">
                <div className="w-full h-[300px] sm:h-[400px] lg:h-[450px] overflow-hidden rounded-lg">
                    <img
                        src="/images/new_images/offer1.jpeg"
                        alt="Current Offers"
                        className="w-full h-full rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110 object-cover"
                    />
                </div>
                <div className="mt-4 text-left">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-popins text-white mb-3">Current Offers</h2>
                    <Link
                        to="/offers"
                        className="text-slate-200 hover:text-gray-300 transition-all text-sm sm:text-md font-railway"
                    >
                        Explore Current Offers
                    </Link>
                </div>
            </div>

            <div className="relative flex flex-col items-start">
                <div className="w-full h-[300px] sm:h-[400px] lg:h-[450px] overflow-hidden rounded-lg">
                    <img
                        src="/images/new_images/location1.webp"
                        alt="Location"
                        className="w-full h-full rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-110 object-cover"
                    />
                </div>
                <div className="mt-4 text-left">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-popins text-white mb-3">Location</h2>
                    <Link
                        to="/about"
                        className="text-slate-200 hover:text-gray-400 transition-all text-sm sm:text-md font-railway"
                    >
                        Explore Location
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LocationStoreComponent;
