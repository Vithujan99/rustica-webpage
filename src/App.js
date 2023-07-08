import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Rent from "./pages/Rent/Rent";
import Checkout from "./pages/Checkout/Checkout";
import About from "./pages/About/About";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/rustica-webpage" element={<Home />} />
        <Route path="/rustica-webpage/menu" element={<Menu />} />
        <Route path="/rustica-webpage/rent" element={<Rent />} />
        <Route path="/rustica-webpage/checkout" element={<Checkout />} />
        <Route path="/rustica-webpage/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
