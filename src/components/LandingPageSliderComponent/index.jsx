import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Importing icons

const LandingPageSliderComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const images = [
        { src: "/images/slider1.jpg", description: "This is car 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." },
        { src: "/images/slider2.jpg", description: "This is car 2. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed." },
        { src: "/images/slider3.jpg", description: "This is car 3. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam." },
        { src: "/images/slider4.jpg", description: "This is car 4. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor." },
    ];

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
