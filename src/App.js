import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import OffersPage from "./pages/Offers";
import LandingPage from "./pages/Landing";
import CarDetailsPage from "./pages/CarDetails";
import AvailableCarsPage from "./pages/AvailableCars";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<LandingPage />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/details" element={<CarDetailsPage />}/>
        <Route path="/available" element={<AvailableCarsPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
