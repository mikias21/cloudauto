import FooterComponent from "../../components/FooterComponent";
import NavbarComponent from "../../components/NavbarComponent";
import SendOfferComponent from "../../components/SendOfferComponent";
import ProductDetailsComponent from "../../components/ProductDetailsComponent";

const CarDetailsPage = () => {
    return(
        <div className="bg-[#E4DFD4]">
            <NavbarComponent />
            <div className="px-4 sm:px-6 lg:px-8">
                <ProductDetailsComponent />
            </div>
            <SendOfferComponent />
            <FooterComponent />
        </div>
    );
}

export default CarDetailsPage;