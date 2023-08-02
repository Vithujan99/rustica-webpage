import { createContext, useState } from "react";

export const ServiceContext = createContext({
  service: {},
  plz: {},
  setService: () => {},
  setPlz: () => {},
  getPlz: () => {},
  testPlz: () => {},
});

const Posleitzahlen = ["41238", "41236", "41061"];

export function ServiceProvider({ children }) {
  const [ser, handleService] = useState("null");
  const [posleitzahl, handlePlz] = useState("");

  function setService(choosenService) {
    handleService(choosenService);
  }
  function setPlz(newPlz) {
    handlePlz(newPlz);
  }
  function getPlz() {
    return posleitzahl;
  }

  function testPlz() {
    return Posleitzahlen.includes(posleitzahl);
  }

  const contextValue = {
    service: ser,
    plz: posleitzahl,
    setService,
    setPlz,
    getPlz,
    testPlz,
  };
  return (
    <ServiceContext.Provider value={contextValue}>
      {children}
    </ServiceContext.Provider>
  );
}
export default ServiceProvider;
