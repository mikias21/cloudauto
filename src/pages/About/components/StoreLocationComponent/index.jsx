const StoreLocationComponent = () => {
    return (
      <div className="bg-[#DBD4C5] p-4 sm:p-8 lg:p-12">
        <p className="text-xl sm:text-2xl text-slate-700 font-semibold font-popins text-center lg:text-left">
          Cloud Auto Store
        </p>
  
        <p className="text-md sm:text-lg lg:text-xl leading-relaxed font-railway py-6 sm:py-8 lg:py-10 tracking-wide text-center lg:text-left">
          After evaluating over 60 sites in 13 states for the Cloud Auto factory, we chose a 500-acre property in Casa Grande, Arizona. Located between Phoenix and Tucson — and within easy reach of our Silicon Valley headquarters — the Casa Grande offered close proximity to critical utilities, 
          an established transportation system, and strong support from state and local governments.
        </p>
  
        <p className="text-sm sm:text-base font-railway tracking-wide leading-relaxed text-center lg:text-left">
          This facility is the first greenfield — or purpose-built — EV factory in North America. Designed to our exact specifications, it is being built with such efficiency and speed that we will complete construction of its first phase a mere 12 months after breaking ground. Outfitted with the world’s most advanced production line equipment, the factory will 
          have the initial capacity to produce 10,000 cars a year — and over 300,000 annually with planned expansion.
        </p>
  
        <div className="mt-5 sm:mt-7 w-full">
          <img src="/images/store2.jpg" alt="STORE" className="h-[300px] sm:h-[600px] lg:h-[1000px] w-full object-cover"/>
        </div>
      </div>
    );
  }
  
  export default StoreLocationComponent;
  