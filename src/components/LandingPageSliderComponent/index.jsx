import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { images } from '../../data/slider';

const LandingPageSliderComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full max-w-full overflow-hidden mt-20">
            <div className="w-full relative overflow-hidden">
                <div 
                    className="flex transition-transform duration-700 ease-in-out" 
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={`Car ${index + 1}`}
                            className="w-full object-cover flex-shrink-0" 
                            style={{ height: '60vh' }}
                        />
                    ))}
                </div>
            </div>

            <div className="mt-4 px-4 text-left text-white max-w-full mb-10 font-railway sm:text-sm md:text-base">
                <p>{images[currentIndex].description}</p>
            </div>

            <div className="absolute bottom-6 right-6 text-white px-4 py-2 bg-black bg-opacity-50 rounded-lg font-railway sm:text-sm md:text-base">
                {`${currentIndex + 1} / ${images.length}`}
            </div>

            <div className="absolute inset-0 flex justify-between items-center px-4">
                <button
                    onClick={goToPreviousSlide}
                    className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition sm:p-2 md:p-3"
                >
                    <FiChevronLeft size={24} />
                </button>
                <button
                    onClick={goToNextSlide}
                    className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition sm:p-2 md:p-3"
                >
                    <FiChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default LandingPageSliderComponent;
