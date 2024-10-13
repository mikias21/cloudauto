import { stories } from "../../data/stories";

const StoriesComponent = () => {

    return (
        <div className="w-full max-w-7xl mx-auto p-4 sm:p-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-left text-white mb-5 sm:mb-7 font-popins">Stories</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {stories.map((story, index) => (
                    <div key={index} className="bg-black text-white shadow-lg">
                        <div className="overflow-hidden">
                            <img
                                src={story.image}
                                alt={story.title}
                                className="w-full object-cover h-40 sm:h-56  transition-transform duration-500 ease-in-out transform hover:scale-110"
                            />
                        </div>

                        <div className="flex flex-col justify-center mt-3">
                            <p className="text-gray-400 text-xs sm:text-sm font-popins">{story.date}</p>

                            <h2 className="text-lg sm:text-xl font-semibold font-popins">{story.title}</h2>

                            <button className="mt-2 self-start border border-gray-500 text-gray-500 py-1 px-2 text-xs sm:text-sm rounded-md hover:text-gray-400 transition duration-300">
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StoriesComponent;
