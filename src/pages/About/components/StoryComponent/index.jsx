import about from "../../../../data/about2";

const StoryComponent = () => {
  return (
    <>
      {about.map((ab) => (
        <div className="flex flex-col lg:flex-row p-2 bg-[#DBD4C5]">
          <div className="w-full lg:w-1/2">
            <img
              src={ab.image}
              alt="story"
              className="h-[300px] sm:h-[400px] lg:h-[500px] w-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 bg-black text-white p-10 sm:p-16 lg:p-20">
            <p className="text-xl sm:text-2xl lg:text-3xl mb-3 font-popins">
              {ab.title}
            </p>
            <p className="leading-relaxed font-railway text-md sm:text-lg lg:text-xl">
              {ab.paragraph}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default StoryComponent;
