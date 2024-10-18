import NoticeComponent from "./components/NoticeComponent";
import StoriesComponent from "./components/StoriesComponent";
import FooterComponent from "../../components/FooterComponent";
import NavbarComponent from "../../components/NavbarComponent";
import SendOfferComponent from "../../components/SendOfferComponent";
import CurrentOfferComponent from "./components/CurrentOfferComponent";
import ProductListComponent from "../../components/ProductListComponent";

// data
import cars from "../../data/cars_main";

const OffersPage = () => {
    const carsOffer = cars.slice(0, 6);
    
    return (
        <div className="bg-[#E4DFD4] min-h-screen">
            <NavbarComponent />
            <div className="px-4 sm:px-6 lg:px-8">
                <CurrentOfferComponent />
                <ProductListComponent title="2024 Models Available Now" cars={carsOffer}/>
                <NoticeComponent />
            </div>
            <StoriesComponent />
            <SendOfferComponent />
            <FooterComponent />
        </div>
    );
};

export default OffersPage;
