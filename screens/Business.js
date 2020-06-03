import React, { useState, useEffect } from "react";
import { View, Dimensions, Text, Platform } from "react-native";
import styled from "styled-components/native";
import { ButtonGroup } from "react-native-elements";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
  align-items: center;
  flex: 1;
  background-color: white;
`;

const BusinessContainer = styled.View`
  flex: 3;
  width: ${WIDTH * 0.85}px;
  background-color: #f0f0f0;
  margin-top: 30px;
  border-radius: 8px;
  flex-direction: column;
`;

const Category = styled.View`
  flex: 1;
`;

const SelectedContainer = styled.View`
  flex: 2;
  width: ${WIDTH * 0.85}px;
  background-color: #f0f0f0;
  margin-top: 20px;
  border-radius: 8px;
  flex-direction: column;
`;

const Selected = styled.View`
  background-color: rgba(255, 167, 38, 0.4);
  border-radius: 8px;
  margin: 9px 10px;
`;

const Data = styled.View`
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
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

const iconName = Platform.OS === "ios" ? "ios-close" : "md-close";
const iconSize = Platform.OS === "ios" ? 30 : 20;

export default ({ route, navigation }) => {
  console.log(route.params);
  return (
    <Container>
      <BusinessContainer>
        <Category></Category>
      </BusinessContainer>
      <SelectedContainer>
        <Text style={{ margin: 10, fontSize: 14 }}>선택한 업종</Text>
      </SelectedContainer>
      <Button onPress={() => navigation.navigate("Category")}>
        <ButtonText>다음</ButtonText>
      </Button>
    </Container>
  );
};
