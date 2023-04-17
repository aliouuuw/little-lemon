import {createContext, useContext, useState} from "react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [toastOn, setToastOn] = useState(false);
  const [bookInfo, setBookInfo] = useState({});

  return (
    <AlertContext.Provider
      value={{ toastOn, setToastOn, bookInfo, setBookInfo}}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
