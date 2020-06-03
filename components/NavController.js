import React from "react";
import Stack from "../navigation/Stack";
import Auth from "../navigation/Auth";
import { useIsLoggedIn } from "../AuthContext";

export default function NavController() {
  const isLoggedIn = useIsLoggedIn();

  return isLoggedIn ? <Stack /> : <Auth />;
}
