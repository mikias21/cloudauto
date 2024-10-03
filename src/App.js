import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EvShop from "./pages/Shop/EvShop";
import LandingPage from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/shop/ev" element={<EvShop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
