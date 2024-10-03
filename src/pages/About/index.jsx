// Components
import HeroComponent from "./components/HeroComponent";
import StoryComponent from "./components/StoryComponent";
import FooterComponent from "../../components/FooterComponent";
import NavbarComponent from "../../components/NavbarComponent";
import IntroTextComponent from "./components/IntroTextComponent";
import SendOfferComponent from "../../components/SendOfferComponent";
import StoreLocationComponent from "./components/StoreLocationComponent";

const About = () => {
    return(
        <div>
            <NavbarComponent />
            <HeroComponent />
            <IntroTextComponent />
            <StoryComponent />
            <StoreLocationComponent />
            <SendOfferComponent />
            <FooterComponent />
        </div>
    );
}

export default About;