// Components
import HeroComponent from "../../components/HeroComponent";
import NavbarComponent from "../../components/NavbarComponent";
import AboutUsComponet from "../../components/AboutUsComponent";

const LandingPage = () => {
    return(
        <div>
            <NavbarComponent />
            <HeroComponent />
            <AboutUsComponet />
        </div>
    );
}

export default LandingPage;