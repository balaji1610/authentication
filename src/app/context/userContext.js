"use client";
import { createContext, useState, useContext } from "react";

// Create Context
const UserContext = createContext();

// Provider Component
export const UserProvider = ({ children }) => {
  const [userCrendential, setUserCrendential] = useState({
    email: "",
    password: "",
  });
  const [newUserCrendential, setNewUserCrendential] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isRememberMe, setISRememberMe] = useState(false);
  const [isLoginLoadingButton, setIsLoginLoadingButton] = useState(false);
  return (
    <UserContext.Provider
      value={{
        userCrendential,
        setUserCrendential,
        isRememberMe,
        setISRememberMe,
        newUserCrendential,
        setNewUserCrendential,
        isLoginLoadingButton,
        setIsLoginLoadingButton,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook to use App Context
export const useUserContext = () => useContext(UserContext);
