// Components
import HeroComponent from "../../components/HeroComponent";
import FooterComponent from "../../components/FooterComponent";
import NavbarComponent from "../../components/NavbarComponent";
import AboutUsComponet from "../../components/AboutUsComponent";
import StoriesComponent from "../../components/StoriesComponent";
import SendOfferComponent from "../../components/SendOfferComponent";
import LocationStoreComponent from "../../components/LocationStoreComponent";
import LandingPageSliderComponent from "../../components/LandingPageSliderComponent";

const LandingPage = () => {
    return(
        <div className="bg-black">
            <NavbarComponent />
            <HeroComponent />
            <AboutUsComponet />
            <LocationStoreComponent />
            <LandingPageSliderComponent />
            <StoriesComponent />
            <SendOfferComponent />
            <FooterComponent />
        </div>
    );
}

export default LandingPage;