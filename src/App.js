import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home Page/Home";
import PortfolioDetails from "./components/Portfolio Details/PortfolioDetails";
import MyCv from "./components/MyCv/MyCv";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/portfolio-details" element={<PortfolioDetails />} />
        <Route path="/my-cv" element={<MyCv />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
