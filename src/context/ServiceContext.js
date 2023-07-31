import { createContext, useState } from "react";

export const ServiceContext = createContext({
  sercice: "",
  setService: () => {},
});

export function ServiceProvider({ children }) {
  const [ser, handleService] = useState();

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
