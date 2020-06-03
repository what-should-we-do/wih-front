import React, { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";

export const AuthContext = createContext();

export function AuthProvider({ isLoggedIn: isLoggedInProp, children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInProp);

  async function logUserIn() {
    try {
      await AsyncStorage.setItem("loginStatus", "true");
      setIsLoggedIn(true);
    } catch (e) {
      console.log(e);
    }
  }

  async function logUserOut() {
    try {
      await AsyncStorage.setItem("loginStatus", "false");
      setIsLoggedIn(false);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, logUserIn, logUserOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useIsLoggedIn() {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn;
}

export function useLogIn() {
  const { logUserIn } = useContext(AuthContext);
  return logUserIn;
}

export function useLogOut() {
  const { logUserOut } = useContext(AuthContext);
  return logUserOut;
}
