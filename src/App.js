import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import CartProvider from "./context/CartContext";
import ShowProvider from "./context/ShowContext";
import IngredientsProvider from "./context/IngredientsContext";
import TimeProvider from "./context/TimeContext";
import ServiceProvider from "./context/ServiceContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Navbar from "./components/Navbar/Navbar";
import AskService from "./components/AskService/AskService";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Rent from "./pages/Rent/Rent";
import Checkout from "./pages/Checkout/Checkout";
import About from "./pages/About/About";
import Admin from "./pages/Admin/Admin";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const initialOptions = {
    clientId:
      "AQm3IT-QZ9zIZ3b1zlPy-SalBw9UD-6X1M6fXjWv_oymBhg5jkJhaoB3H2f9k68BHTb5jg4ywuVq2aIn",
    currency: "EUR",
    intent: "capture",
    "disable-funding": "credit,card,giropay,sepa,sofort",
  };
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  useEffect(() => {
    if (
      location.pathname === "/rustica-webpage/checkout" ||
      location.pathname === "/rustica-webpage/admin"
    ) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);
  return (
    //Everything hass access to the value inside ShppingCartProvider
    <PayPalScriptProvider options={initialOptions}>
      <TimeProvider>
        <CartProvider>
          <IngredientsProvider>
            <ServiceProvider>
              <ShowProvider>
                {showNavbar && <Navbar />}
                <AskService />
                <Routes>
                  <Route path="/rustica-webpage" element={<Home />} />
                  <Route path="/rustica-webpage/menu" element={<Menu />} />
                  <Route path="/rustica-webpage/rent" element={<Rent />} />
                  <Route path="/rustica-webpage/about" element={<About />} />
                  <Route
                    path="/rustica-webpage/checkout"
                    element={<Checkout />}
                  />
                  <Route path="/rustica-webpage/admin" element={<Admin />} />
                </Routes>
              </ShowProvider>
            </ServiceProvider>
          </IngredientsProvider>
        </CartProvider>
      </TimeProvider>
    </PayPalScriptProvider>
  );
}

export default App;
