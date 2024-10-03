import FooterComponent from "../../components/FooterComponent";
import NavbarComponent from "../../components/NavbarComponent";
import ContactsComponent from "./components/ContactsComponent";
import SendOfferComponent from "../../components/SendOfferComponent";

const Contact = () => {
    return(
        <div>
            <NavbarComponent />
            <ContactsComponent />
            <SendOfferComponent />
            <FooterComponent />
        </div>
    );
}

export default Contact;