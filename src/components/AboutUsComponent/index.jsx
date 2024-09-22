import { useState } from 'react';
import { Link } from 'react-router-dom';

import { sectionContent } from '../../data/about';

const AboutUsComponent = () => {
    const [activeSection, setActiveSection] = useState('About Us');
    const [fadeIn, setFadeIn] = useState(true);

    const handleSectionChange = (section) => {
        setFadeIn(false);
        setTimeout(() => {
            setActiveSection(section);
            setFadeIn(true);
        }, 300);
    };

    return (
        <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-4 py-10 lg:px-6">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-6 mt-24 md:mt-32 font-kaushan">
                The Ultimate Electric Car Experience
            </h1>

            <p className="text-base md:text-lg lg:text-2xl text-center mb-8 mt-5 lg:mt-7 font-popins">
                Expertly crafted for drivers who demand innovation.
            </p>

            <div className="flex flex-wrap justify-center space-x-4 mb-8 mt-6 lg:mt-10">
                {Object.keys(sectionContent).map((section) => (
                    <button
                        key={section}
                        className={`px-3 md:px-4 py-2 text-white border-b-2 font-railway ${
                            activeSection === section ? 'border-white' : 'border-transparent'
                        } hover:border-white transition-all`}
                        onClick={() => handleSectionChange(section)}
                    >
                        {section}
                    </button>
                ))}
            </div>

            <div
                className={`flex flex-col lg:flex-row items-center justify-center mt-10 lg:mt-14 transform transition-all duration-500 ${
                    fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
                key={activeSection}
            >
                <div className="relative w-full lg:w-1/2 mb-6 lg:mb-0 lg:mr-8">
                    <img
                        src={sectionContent[activeSection].imgSrc}
                        alt={activeSection}
                        className="w-full rounded-lg shadow-lg object-cover"
                        style={{ maxHeight: '500px', maxWidth: '100%' }}
                    />
                    
                    <div className="lg:hidden absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center p-4 rounded-lg">
                        <h2 className="text-xl md:text-2xl font-bold font-popins">
                            {sectionContent[activeSection].title}
                        </h2>
                        <p className="text-sm md:text-md text-gray-300 font-railway mt-2">
                            {sectionContent[activeSection].description}
                        </p>
                        <Link
                            to={sectionContent[activeSection].linkText}
                            className="text-sm md:text-md text-blue-400 hover:text-blue-300 transition-all mt-4"
                        >
                            {sectionContent[activeSection].linkText}
                        </Link>
                    </div>
                </div>

                <div className="hidden lg:block w-full lg:w-1/2 text-left space-y-4 lg:ml-6">
                    <h2 className="text-xl md:text-3xl lg:text-5xl font-bold font-popins">
                        {sectionContent[activeSection].title}
                    </h2>
                    <p className="text-sm md:text-md lg:text-lg text-gray-300 font-railway">
                        {sectionContent[activeSection].description}
                    </p>
                    <Link
                        to={sectionContent[activeSection].linkText}
                        className="text-sm md:text-md lg:text-lg text-slate-500 hover:text-slate-800 transition-all font-railway"
                    >
                        {sectionContent[activeSection].linkText}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUsComponent;
