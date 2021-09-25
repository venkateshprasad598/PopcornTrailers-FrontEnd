import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

const myContext = createContext();

export const AppProvider = ({ children }) => {
  const [trailer, setTrailer] = useState([]);
  return (
    <myContext.Provider value={{ trailer, setTrailer }}>
      {children}
    </myContext.Provider>
  );
};

export const useAppProvider = () => useContext(myContext);
