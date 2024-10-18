import { Link } from "react-router-dom";

// data
import stories from "../../../../data/carStories";

import React from 'react';

const StoriesComponent = () => {
    return (
        <div className="bg-[#F0F0F0] w-full mt-16 h-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                    <p className="font-popins text-3xl sm:text-4xl lg:text-5xl font-semibold text-center pt-14">Driving the Future of Electric Mobility</p>
                </div>
                <div>
                    <p className="text-center font-railway w-full sm:w-3/4 lg:w-1/2 mx-auto mt-7">
                    Experience the pinnacle of luxury with Cloud Auto, now starting at $69,900. Enjoy a $1,000 
                    Charging Bonus and two years of complimentary scheduled maintenance when you purchase or lease today.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 pb-14">
                    {stories.map((story, index) => (
                        <StoryCard key={index} story={story} />
                    ))}
                </div>
            </div>
        </div>
    );
}

const StoryCard = ({ story }) => (
    <div className="relative bg-gray-100 rounded-md overflow-hidden shadow-lg h-[400px]">
        <img
            src={story.image} 
            alt="Car Promo"
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-black to-transparent text-white">
            <p className="font-popins text-lg sm:text-xl text-center font-semibold mb-1">{story.title}</p>
            <p className="text-xs sm:text-xs mb-3 text-center font-popins">
                {story.exp}
            </p>
            <Link href="#" className="block underline text-white uppercase font-popins tracking-widest text-xs font-semibold hover:no-underline text-center">
                Learn More
            </Link>
        </div>
    </div>
);

export default StoriesComponent;