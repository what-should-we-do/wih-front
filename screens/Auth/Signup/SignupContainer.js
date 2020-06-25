import React from "react";
import Toast from "react-native-root-toast";
import SignupPresenter from "./SignupPresenter";

export default function SignupContainer({ navigation }) {
  function onCancel() {
    navigation.navigate("Log In");
  }

  function onComplete() {
    const toast = Toast.show("가입 성공!", {
      duration: Toast.durations.SHORT,
      position: Toast.positions.CENTER,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
    navigation.navigate("Log In");
  }

  return <SignupPresenter onCancel={onCancel} onComplete={onComplete} />;
}
