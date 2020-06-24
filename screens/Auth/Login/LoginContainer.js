import React from "react";
import { Alert } from "react-native";
import Toast from "react-native-root-toast";
import LoginPresenter from "./LoginPresenter";
import useInput from "../../../hooks/useInput";
import { useLogIn } from "../../../AuthContext";

export default function LoginContainer({ navigation }) {
  const email = useInput("");
  const password = useInput("");
  const login = useLogIn();

  function onSignUp() {
    navigation.navigate("Sign Up");
  }

  async function onSubmit() {
    if (email.value === "test@gmail.com" && password.value === "1234") {
      const toast = Toast.show("로그인 성공!", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.CENTER,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
      login();
    } else {
      Alert.alert("로그인", "아이디 또는 비밀번호가 틀렸습니다", [{ text: "OK" }]);
    }
  }

  return (
    <LoginPresenter email={email} password={password} onSignUp={onSignUp} onSubmit={onSubmit} />
  );
}
