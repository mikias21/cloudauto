const HeroComponent = () => {
  return (
    <div className="relative w-full h-[35rem] lg:h-[40rem]">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/images/new_images/abmain.jpg"
        alt="PROMO"
      />

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col h-full px-4 sm:px-8 md:px-16">
        <div className="mt-40 sm:mt-48 md:mt-56 lg:mt-64">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-popins text-center">
            Xi'an Yunche Technology
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
