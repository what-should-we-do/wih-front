import React from "react";
import { View, Dimensions, Text, ScrollView } from "react-native";
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
  flex-direction: column;
`;

const Major = styled.View`
  flex: 0.5;
`;

const Mid = styled.View`
  flex: 0.5;
`;

const Sub = styled.View`
  flex: 0.5;
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
  width: ${WIDTH / 4}px;
  height: 32px;
  margin: 0px 5px;
  border-radius: 8px;
  background-color: #ffa726;
  opacity: 0.5;
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
    <CategoryContainer>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Text
          style={{
            textAlign: "center",
            margin: 15,
          }}
        >
          대분류
        </Text>
        <Text style={{ textAlign: "center", margin: 15 }}>중분류</Text>
        <Text style={{ textAlign: "center", margin: 15 }}>소분류</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Major>
          <ScrollView>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>1</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>2</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>3</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>4</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>5</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>6</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>7</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>7</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>7</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>7</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>7</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>7</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>7</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>7</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>7</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>7</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>7</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>7</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>7</Text>
          </ScrollView>
        </Major>
        <Mid>
          <ScrollView>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>sfasafas</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>sfasafas</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>sfasafas</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>sfasafas</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>sfasafas</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>sfasafas</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>sfasafas</Text>
          </ScrollView>
        </Mid>
        <Sub>
          <ScrollView>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>sfasafas</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>sfasafas</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>sfasafas</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>sfasafas</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>sfasafas</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>sfasafas</Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>sfasafas</Text>
          </ScrollView>
        </Sub>
      </View>
    </CategoryContainer>
    <SelectedContainer>
      <View>
        <Text style={{ margin: 15, fontSize: 14 }}>선택한 업종</Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <Selected></Selected>
        <Selected></Selected>
        <Selected></Selected>
      </View>
    </SelectedContainer>
    <Button>
      <ButtonText>다음</ButtonText>
    </Button>
  </Container>
);
