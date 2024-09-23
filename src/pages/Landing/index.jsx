// Components
import HeroComponent from "../../components/HeroComponent";
import NavbarComponent from "../../components/NavbarComponent";
import AboutUsComponet from "../../components/AboutUsComponent";
import StoriesComponent from "../../components/StoriesComponent";
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
        </div>
    );
}

export default LandingPage;