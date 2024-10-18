import React from 'react';

const CurrentOfferComponent = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-16 sm:pt-24 lg:pt-32 text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-popins">Current Offers</h1>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between mt-8 sm:mt-12 lg:mt-16 gap-6 sm:gap-8 lg:gap-12">
                <OfferCard
                    title="Save up to $4,500 on Your Next Vehicle"
                    description="For a limited time, enjoy up to $4,500 off select vehicles in stock. Offer applies to purchases made before October 31st, 2024, with immediate delivery."
                />
                <OfferCard
                    title="Get $3,000 Off Instantly on Select Models"
                    description="Limited-time offer! Receive $3,000 off on select models when you purchase and take delivery by November 15th, 2024. Don’t miss out on this exclusive deal!"
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