import React from "react";
import { Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import ShowCartBarProvider from "./context/ShowCartBarContext";
import IngredientsProvider from "./context/IngredientsContext";
import TimeProvider from "./context/TimeContext";
import ServiceProvider from "./context/ServiceContext";
import Navbar from "./components/Navbar/Navbar";
import AskService from "./components/AskService/AskService";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Rent from "./pages/Rent/Rent";
import Checkout from "./pages/Checkout/Checkout";
import About from "./pages/About/About";

function App() {
  return (
    //Everything hass access to the value inside ShppingCartProvider
    <TimeProvider>
      <CartProvider>
        <IngredientsProvider>
          <ServiceProvider>
            <ShowCartBarProvider>
              <Navbar />
              <AskService />
              <Routes>
                <Route path="/rustica-webpage" element={<Home />} />
                <Route path="/rustica-webpage/menu" element={<Menu />} />
                <Route path="/rustica-webpage/rent" element={<Rent />} />
                <Route
                  path="/rustica-webpage/checkout"
                  element={<Checkout />}
                />
                <Route path="/rustica-webpage/about" element={<About />} />
              </Routes>
            </ShowCartBarProvider>
          </ServiceProvider>
        </IngredientsProvider>
      </CartProvider>
    </TimeProvider>
  );
}

export default App;
