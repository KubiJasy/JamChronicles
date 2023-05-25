import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  const storeAccessToken = (accessToken) =>
    localStorage.setItem("accessToken", accessToken);

  const getAccessToken = () => localStorage.getItem("accessToken");

  const removeAccessToken = () => localStorage.removeItem("accessToken");

  const value = {
    authUser,
    setAuthUser,
    getAccessToken,
    storeAccessToken,
    removeAccessToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
