import axios from "axios";
import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
    const [status, setStatus] = useState(false)
    const [token, setToken] = useState('')
    const [name, setName] = useState('')



    const statusChangeToggle = () => {
        //  set token back to " " once logged out
        setStatus(true)

    };

    const handleLogout = () => {
        setToken('')
    }

    const value = { status, statusChangeToggle, token, setToken, handleLogout, name, setName };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };