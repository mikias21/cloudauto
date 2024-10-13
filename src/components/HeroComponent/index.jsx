import { Link } from "react-router-dom";

const HeroComponent = () => {
  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/images/new_images/hero1.mp4"
        autoPlay
        loop
        muted
      ></video>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col h-full px-8 md:px-16">
        <div className="mt-56 w-full md:w-2/3 text-left">
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold font-kaushan">
            Drive the Future Today
          </h1>
          <p className="text-[whitesmoke] mt-10 text-base md:text-lg lg:text-4xl font-popins">
            Unleash the Power of Innovation with Our Premium Cars.
          </p>
        </div>

        <div className="flex-grow"></div>

        <div className="flex flex-col md:flex-row items-center justify-end space-y-4 md:space-y-0 md:space-x-4 mb-10">
          <Link to="/available" className="px-6 py-3 border-[1px] border-white text-white rounded-md hover:bg-[#FAFAF9] hover:text-[#111] transition duration-300 ease-in-out text-md font-railway w-full md:w-auto">
            Order Now
          </Link>

          <Link to="/contact" className="px-6 py-3 bg-white text-black rounded-md shadow-md hover:bg-gray-200 transition duration-300 ease-in-out text-md font-railway w-full md:w-auto">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
