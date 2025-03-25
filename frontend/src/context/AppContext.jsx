import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";

// Create Context
export const AppContext = createContext();

// Create Provider Component
const AppContextProvider = (props) => {

    const value = {
        doctors
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
