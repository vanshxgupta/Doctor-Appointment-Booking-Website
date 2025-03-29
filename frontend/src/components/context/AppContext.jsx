import { createContext, useState } from "react";
import { doctors } from "../assets/assets_frontend/assets";

// Create Context
export const AppContext = createContext();

// Create Provider Component
const AppContextProvider = (props) => {

    // State for token (authentication)
    const [token, setToken] = useState(false);

    // Functions to manage token
    const login = () => setToken(true);
    const logout = () => setToken(false);

    // Context value
    const value = {
        doctors,      // Doctor's data
        token,        // Current token state
        setToken,     // For manually setting token if needed
        login,        // Function to login (set token true)
        logout        // Function to logout (set token false)
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
