"use client";
import { createContext, useState, useContext, useEffect } from "react";

// Create Context
const UserContext = createContext();

// Provider Component
export const UserProvider = ({ children }) => {
  const [userCrendential, setUserCrendential] = useState({
    email: "",
    password: "",
    isRememberMe: false,
  });
  const [newUserCrendential, setNewUserCrendential] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isRememberMe, setISRememberMe] = useState(false);
  const [isLoginLoadingButton, setIsLoginLoadingButton] = useState(false);

  const [isVerifyEmail, setIsVerifyEmail] = useState(false);
  const [verifyMessage, setVerifyMessage] = useState("");
  const [updatePwdCrendential, setUpdatePwdCrendential] = useState({
    _id: "",
    email: "",
    password: "",
  });

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
        isVerifyEmail,
        setIsVerifyEmail,
        verifyMessage,
        setVerifyMessage,
        updatePwdCrendential,
        setUpdatePwdCrendential,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook to use App Context
export const useUserContext = () => useContext(UserContext);
