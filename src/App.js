import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Shop from "./pages/Shop";
import LandingPage from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/shop" element={<Shop />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
