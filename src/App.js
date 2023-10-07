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
import Aorders from "./pages/Admin/Aorders/Aorders";
import Orders from "./pages/Orders/Orders";
import Login from "./pages/Login/Login";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const initialOptions = {
    currency: "EUR",
    intent: "capture",
    "disable-funding": "credit,card,giropay,sepa,sofort",
  };
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  useEffect(() => {
    if (
      location.pathname === "/rustica-webpage/checkout" ||
      location.pathname === "/rustica-webpage/orders" ||
      location.pathname === "/rustica-webpage/admin/orders" ||
      location.pathname === "/rustica-webpage/login"
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
                  {/*public routes*/}
                  <Route path="/rustica-webpage" element={<Home />} />
                  <Route path="/rustica-webpage/menu" element={<Menu />} />
                  <Route path="/rustica-webpage/rent" element={<Rent />} />
                  <Route path="/rustica-webpage/about" element={<About />} />
                  <Route
                    path="/rustica-webpage/checkout"
                    element={<Checkout />}
                  />
                  <Route path="/rustica-webpage/login" element={<Login />} />
                  {/*private routes*/}
                  <Route
                    path="/rustica-webpage/admin/orders"
                    element={<Aorders />}
                  />
                  <Route path="/rustica-webpage/orders" element={<Orders />} />
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
