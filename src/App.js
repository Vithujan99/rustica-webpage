import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import CartProvider from "./context/CartContext";
import ShowProvider from "./context/ShowContext";
import IngredientsProvider from "./context/IngredientsContext";
import TimeProvider from "./context/TimeContext";
import ServiceProvider from "./context/ServiceContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
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
import Impressum from "./pages/FooterP/Impressum/Impressum";
import Datenschutz from "./pages/FooterP/Datenschutz/Datenschutz";
import ZusatzstoffeUndAllergene from "./pages/FooterP/ZusatzstoffeUndAllergene/ZusatzstoffeUndAllergene";

function App() {
  //client-id ist erlaubt in public
  const initialOptions = {
    "client-id":
      "AQm3IT-QZ9zIZ3b1zlPy-SalBw9UD-6X1M6fXjWv_oymBhg5jkJhaoB3H2f9k68BHTb5jg4ywuVq2aIn",
    currency: "EUR",
    intent: "capture",
    "disable-funding": "credit,card,giropay,sepa,sofort",
  };
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  useEffect(() => {
    if (
      location.pathname === "/checkout" ||
      location.pathname === "/orders" ||
      location.pathname === "/admin/orders" ||
      location.pathname === "/login" ||
      location.pathname === "/impressum" ||
      location.pathname === "/datenschutz" ||
      location.pathname === "/zusatzstoffe-und-allergene"
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
                  <Route path="/" element={<Home />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/rent" element={<Rent />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/impressum" element={<Impressum />} />
                  <Route path="/datenschutz" element={<Datenschutz />} />
                  <Route
                    path="/zusatzstoffe-und-allergene"
                    element={<ZusatzstoffeUndAllergene />}
                  />
                  <Route path="/login" element={<Login />} />
                  {/*private routes*/}
                  <Route path="/admin/orders" element={<Aorders />} />
                  <Route path="/orders" element={<Orders />} />
                </Routes>
                {showNavbar && <Footer />}
              </ShowProvider>
            </ServiceProvider>
          </IngredientsProvider>
        </CartProvider>
      </TimeProvider>
    </PayPalScriptProvider>
  );
}

export default App;
