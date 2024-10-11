import { useState } from "react";

const ProductDetailsComponent = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [secondActivteTab, setSecondActiveTab] = useState("overview");

  const tabs1 = [
    { id: "overview", label: "Overview" },
    { id: "main", label: "Parameters" },
    { id: "body", label: "Body" },
    { id: "engine", label: "Engine" },
    { id: "electric", label: "Electric motor" },
    { id: "transmission", label: "Transmission" },
  ];

  const tabs2 = [
    { id: "steering", label: "Chassis steering" },
    { id: "wheel", label: "Wheel brake" },
    { id: "safety", label: "Safety equipment" },
    { id: "help", label: "Control configuration" },
    { id: "theft", label: "Anti-theft configuration" },
  ];

  const renderContent = (tab) => {
    switch (tab) {
      case "overview":
        return (
          <div>
            <h3 className="text-base font-popins font-bold mb-2">Overview</h3>
            <p className="font-popins text-xs">This is the overview of the car. You can put a placeholder description here. This section will describe the car's design, history, and overall details.</p>
          </div>
        );
      case "specs":
        return (
            <div>
                <h3 className="text-base font-popins font-bold mb-2">Overview</h3>
                <p className="font-popins text-xs">This is the overview of the car. You can put a placeholder description here. This section will describe the car's design, history, and overall details.</p>
            </div>
        );
      case "features":
        return (
            <div>
                <h3 className="text-base font-popins font-bold mb-2">Overview</h3>
                <p className="font-popins text-xs">This is the overview of the car. You can put a placeholder description here. This section will describe the car's design, history, and overall details.</p>
            </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4 mt-16 mb-10">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <img
            src="/images/webp/ab5.webp"
            alt="Car"
            className="w-full lg:w-[470px] h-[600px] rounded-md shadow-md object-cover"
          />
        </div>

        <div className="flex flex-col w-full lg:w-[80%] lg:ml-10">
            <div className="w-full">
                <div className="mb-4 flex flex-wrap border-b border-gray-200">
                    {tabs1.map((tab) => (
                    <button
                        key={tab.id}
                        className={`flex-1 text-center p-2 font-railway text-xs ${
                        activeTab === tab.id
                            ? "border-b-2 border-[#362f20] text-[#a37c1f]"
                            : "text-gray-500 hover:text-[#a37c1f]"
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                    ))}
                </div>

                <div className="p-4 bg-white rounded-md shadow-sm h-auto lg:h-[200px]">
                    {renderContent(activeTab)}
                </div>
            </div>

            <div className="mt-14">
                <div className="mb-4 flex flex-wrap border-b border-gray-200">
                    {tabs2.map((tab) => (
                    <button
                        key={tab.id}
                        className={`flex-1 text-center p-2 font-railway text-xs ${
                        secondActivteTab === tab.id
                            ? "border-b-2 border-[#362f20] text-[#a37c1f]"
                            : "text-gray-500 hover:text-[#a37c1f]"
                        }`}
                        onClick={() => setSecondActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                    ))}
                </div>

                <div className="p-4 bg-white rounded-md shadow-sm h-auto lg:h-[200px]">
                    {renderContent(secondActivteTab)}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailsComponent;
