const HeroComponent = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/hero4.mp4"
        autoPlay
        loop
        muted
      ></video>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col h-full px-8 md:px-16">
        <div className="mt-56 w-full md:w-1/2 text-left">
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold font-kaushan">
            Accelerating the EV Experience
          </h1>
          <p className="text-[whitesmoke] mt-4 text-base md:text-lg lg:text-xl font-popins">
            Discover the future of driving. Embrace sustainability and power in one package.
          </p>
        </div>

        <div className="flex-grow"></div>

        <div className="flex flex-col md:flex-row items-center justify-end space-y-4 md:space-y-0 md:space-x-4 mb-10">
          <button className="px-6 py-3 border-[1px] border-white text-white rounded-md hover:bg-[#FAFAF9] hover:text-[#111] transition duration-300 ease-in-out text-md font-railway w-full md:w-auto">
            Order Now
          </button>

          <button className="px-6 py-3 bg-white text-black rounded-md shadow-md hover:bg-gray-200 transition duration-300 ease-in-out text-md font-railway w-full md:w-auto">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
