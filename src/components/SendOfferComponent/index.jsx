const SendOfferComponent = () => {
    return (
        <div className="bg-[#FFF7ED] w-full py-20 px-8 sm:px-16 lg:px-32 mt-10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
                <div className="text-left lg:w-1/2 mb-8 lg:mb-0">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 leading-tight font-popins">
                        Stay up to Speed on the latest at Cloud Auto.
                    </h1>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col sm:flex-row items-center lg:justify-end">
                    <input
                        type="email"
                        placeholder="john@gmail.com"
                        className="font-popins w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 text-base md:text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-shadow duration-200 shadow-md lg:mr-4 mb-4 sm:mb-0"
                    />
                    <button className="bg-black text-white font-medium py-3 md:py-4 px-6 md:px-8 text-base md:text-lg hover:bg-gray-800 transition-transform duration-300 transform hover:scale-105 shadow-lg">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SendOfferComponent;
