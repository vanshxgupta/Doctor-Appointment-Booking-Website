import React, { createContext, useState } from "react";
import { doctors } from "../assets/assets_frontend/assets";

// Create Context
export const AppContext = createContext();

// Create Provider Component
const AppContextProvider = (props) => {
  const [token, settoken] = useState(false); // Manage token state here

  const value = {
    doctors,
    token,
    settoken,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;