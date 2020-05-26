import React from "react";
import { View, Dimensions, Text } from "react-native";
import styled from "styled-components/native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
  align-items: center;
  flex: 1;
  background-color: white;
`;

const CategoryContainer = styled.View`
  flex: 6;
  width: ${WIDTH * 0.85}px;
  background-color: #f0f0f0;
  margin-top: 30px;
  border: solid grey;
  border-radius: 8px;
`;

const Major = styled.View`
  background-color: red;
`;

const Mid = styled.View`
  background-color: blue;
`;

const Sub = styled.View`
  background-color: green;
`;

const SelectedContainer = styled.View`
  flex: 2;
  width: ${WIDTH * 0.85}px;
  background-color: #f0f0f0;
  margin-top: 20px;
  border-radius: 8px;
`;

const SelectedHeaderText = styled.Text`
  margin: 10px 15px;
  font-size: 14px;
`;

const Button = styled.TouchableOpacity`
  width: ${WIDTH * 0.85}px;
  height: 50px;
  background-color: #f9a825;
  margin: 18px 0;
  padding: 12px 0;
  border-radius: 8px;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  text-align: center;
`;

export default () => (
  <Container>
    <CategoryContainer></CategoryContainer>
    <SelectedContainer>
      <SelectedHeaderText>선택한 업종</SelectedHeaderText>
    </SelectedContainer>
    <Button>
      <ButtonText>다음</ButtonText>
    </Button>
  </Container>
);
