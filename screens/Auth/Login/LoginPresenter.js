import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";

const Container = styled.View`
  flex: 1;
`;

const LogoContainer = styled.View`
  flex: 4;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const Logo = styled.Image`
  width: 128px;
  height: 148px;
`;

const InputContainer = styled.View`
  flex: 6;
  align-items: center;
  justify-content: space-evenly;
`;

const EmptyView = styled.View``;

const TextInput = styled.TextInput`
  padding: 16px;
  border: 1px solid gray;
  border-radius: 8px;
  margin: 4px 0px 8px;
  width: 320px;
`;

const AdditionalLink = styled.TouchableOpacity`
  margin-top: 8px;
  margin-bottom: 12px;
`;

const AdditionalText = styled.Text`
  font-size: 16px;
  color: #0091ff;
  text-align: center;
`;

const LogInButton = styled.TouchableOpacity`
  margin: 10px;
  padding: 16px;
  background-color: #ffa726;
  width: 320px;
  border-radius: 8px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: white;
`;

function LoginPresenter({ email, password, onSignUp, onSubmit }) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Container>
          <LogoContainer>
            <Logo source={require("../../../assets/logo.png")} />
          </LogoContainer>
          <InputContainer>
            <EmptyView>
              <TextInput
                placeholder="Email"
                textContentType="emailAddress"
                keyboardType="email-address"
                {...email}
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                textContentType="password"
                onSubmitEditing={onSubmit}
                {...password}
              />
              <AdditionalLink onPress={onSignUp}>
                <AdditionalText>Not having account?</AdditionalText>
              </AdditionalLink>
              <AdditionalLink>
                <AdditionalText>Forgot password?</AdditionalText>
              </AdditionalLink>
            </EmptyView>
            <LogInButton onPress={onSubmit}>
              <ButtonText>Log In</ButtonText>
            </LogInButton>
          </InputContainer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

LoginPresenter.propTypes = {
  email: PropTypes.object.isRequired,
  password: PropTypes.object.isRequired,
  onSignUp: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default LoginPresenter;
