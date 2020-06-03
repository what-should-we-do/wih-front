import React from "react";
import LoginPresenter from "./LoginPresenter";
import useInput from "../../../hooks/useInput";
import { useLogIn } from "../../../AuthContext";

export default function LoginContainer({ navigation }) {
  const email = useInput("");
  const password = useInput("");
  const login = useLogIn();
  async function onSubmit() {
    if (email.value === "test@gmail.com" && password.value === "1234") {
      login();
    } else {
    }
  }

  return <LoginPresenter email={email} password={password} onSubmit={onSubmit} />;
}
