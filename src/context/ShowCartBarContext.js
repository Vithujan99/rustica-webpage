import { createContext, useState } from "react";
export const ShowCartBarContext = createContext({
  showBar: true,
  handleClose: () => {},
  handleShow: () => {},
});
export function ShowCartBarProvider({ children }) {
  const [show, setShow] = useState(false);
  function handleClose() {
    setShow(false);
  }
  function handleShow() {
    setShow(true);
  }
  const contextValue = {
    showBar: show,
    handleClose,
    handleShow,
  };
  return (
    <ShowCartBarContext.Provider value={contextValue}>
      {children}
    </ShowCartBarContext.Provider>
  );
}
export default ShowCartBarProvider;
