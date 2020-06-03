import React from "react";
import SignupPresenter from "./SignupPresenter";

export default function SignupContainer({ navigation }) {
  function onCancel() {
    navigation.navigate("Log In");
  }

  function onComplete() {
    navigation.navigate("Log In");
  }

  return <SignupPresenter onCancel={onCancel} onComplete={onComplete} />;
}
