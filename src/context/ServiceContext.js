import { createContext, useState } from "react";

export const ServiceContext = createContext({
  service: {},
  setService: () => {},
});

export function ServiceProvider({ children }) {
  const [ser, handleService] = useState("null");

  function setService(choosenService) {
    handleService(choosenService);
  }

  const contextValue = {
    service: ser,
    setService,
  };
  return (
    <ServiceContext.Provider value={contextValue}>
      {children}
    </ServiceContext.Provider>
  );
}
export default ServiceProvider;
