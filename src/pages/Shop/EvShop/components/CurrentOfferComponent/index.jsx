import React from 'react';

const CurrentOfferComponent = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-16 sm:pt-24 lg:pt-32 text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-popins">Current Offers</h1>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between mt-8 sm:mt-12 lg:mt-16 gap-6 sm:gap-8 lg:gap-12">
                <OfferCard
                    title="Up to $5,000 On-Site Vehicle Bonus"
                    description="For a limited time, up to $5,000 bonus offer is for vehicles available on-site at the time of order¹. Must take delivery by September 30th, 2024."
                />
                <OfferCard
                    title="Up to $5,000 On-Site Vehicle Bonus"
                    description="For a limited time, up to $5,000 bonus offer is for vehicles available on-site at the time of order¹. Must take delivery by September 30th, 2024."
                />
            </div>
        </div>
    );
};

const OfferCard = ({ title, description }) => (
    <div className="bg-white p-6 sm:p-8 lg:p-10 w-full sm:w-1/2 rounded-lg shadow-md">
        <p className="text-xl sm:text-2xl lg:text-3xl font-popins text-center mb-4">
            {title}
        </p>
        <p className="text-sm sm:text-base font-railway text-center">
            {description}
        </p>
    </div>
);

export default CurrentOfferComponent;