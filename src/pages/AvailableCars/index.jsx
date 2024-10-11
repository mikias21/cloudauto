import FilterComponent from "./components/FilterComponent";
import FooterComponent from "../../components/FooterComponent";
import NavbarComponent from "../../components/NavbarComponent";
import AvailableProductListComponent from "../../components/AvailableProductListComponent";

// data
import cars from "../../data/cars1";

const AvailableCarsPage = () => {
    return (
        <div className="bg-[#EDEDED] min-h-screen">
            <NavbarComponent />
            <div className="px-4 sm:px-6 lg:px-8">
                <p className="font-popins text-2xl mt-14 p-10">Available Cars</p>
                <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-6 lg:space-y-0">
                    <div className="w-full lg:w-1/4">
                        <FilterComponent />
                    </div>
                    <div className="w-full lg:w-3/4 -mt-10 mb-10">
                        <AvailableProductListComponent cars={cars} />
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    );
}

export default AvailableCarsPage;