import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("loggedInUser");

        return storedUser
            ? JSON.parse(storedUser)
            : null;
    });

    const login = (userData) => {

        localStorage.setItem(
            "loggedInUser",
            JSON.stringify(userData)
        );

        setUser(userData);
    };

    const logout = () => {

        localStorage.removeItem("loggedInUser");

        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};