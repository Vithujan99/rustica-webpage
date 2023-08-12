import { createContext, useState } from "react";

export const ShowContext = createContext({
  showBar: false,
  handleBarClose: () => {},
  handleBarShow: () => {},
  showZusatz: false,
  zusatzName: "",
  handleZusatzClose: () => {},
  handleZusatzShow: () => {},
  handleZusatzName: () => {},
});
export function ShowProvider({ children }) {
  const [showB, setShowB] = useState(false);
  const [showZ, setShowZ] = useState(false);
  const [zusatzN, setZusatzN] = useState();
  function handleBarClose() {
    setShowB(false);
  }
  function handleBarShow() {
    setShowB(true);
  }
  function handleZusatzClose() {
    setShowZ(false);
  }
  function handleZusatzShow() {
    setShowZ(true);
  }
  function handleZusatzName(name) {
    setZusatzN(name);
  }
  const contextValue = {
    showBar: showB,
    handleBarClose,
    handleBarShow,
    showZusatz: showZ,
    zusatzName: zusatzN,
    handleZusatzClose,
    handleZusatzShow,
    handleZusatzName,
  };
  return (
    <ShowContext.Provider value={contextValue}>{children}</ShowContext.Provider>
  );
}
export default ShowProvider;
