import React, { useState } from "react";
import { View, Dimensions, Text, ScrollView } from "react-native";
import styled from "styled-components/native";

import Selected from "../screens/Selected";
import { withTheme } from "react-native-elements";

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

const Header = styled.View`
  flex-direction: row;
  justify-content: space-around;
  border-bottom-width: 1px;
  border-bottom-color: lightgrey;
`;

const Options = styled.View`
  flex: 1;
  flex-direction: row;
`;

const Option = styled.Text`
  text-align: center;
  margin: 10px 0;
`;

const SelectedContainer = styled.View`
  flex: 3;
  width: ${WIDTH * 0.85}px;
  background-color: #f0f0f0;
  margin-top: 20px;
  border-radius: 8px;
  flex-direction: column;
`;

const SelectedContainerHeader = styled.View``;

const SelectedContainerBody = styled.View`
  flex-flow: row wrap;
  justify-content: space-evenly;
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
export default () => {
  const [category, setCategory] = useState({
    major: "",
    mid: "",
    sub: "",
  });
  const [majorPressed, setMajorPressed] = useState(false);
  const [midPressed, setMidPressed] = useState(false);
  const [minorPressed, setMinorPressed] = useState(false);
  return (
    <Container>
      <CategoryContainer>
        <Header>
          <Text style={{ textAlign: "center", fontSize: 16, margin: 15 }}>대분류</Text>
          <Text style={{ textAlign: "center", fontSize: 16, margin: 15 }}>중분류</Text>
          <Text style={{ textAlign: "center", fontSize: 16, margin: 15 }}>소분류</Text>
        </Header>
        <Options>
          <View style={{ flex: 0.5 }}>
            <ScrollView style={{ borderRightWidth: 1, borderRightColor: "lightgrey" }}>
              <Option>1</Option>
              <Option>2</Option>
              <Option>3</Option>
              <Option>4</Option>
              <Option>5</Option>
              <Option>6</Option>
              <Option>7</Option>
              <Option>8</Option>
              <Option>9</Option>
              <Option>10</Option>
              <Option>11</Option>
              <Option>12</Option>
              <Option>13</Option>
              <Option>14</Option>
              <Option>15</Option>
              <Option>16</Option>
              <Option>17</Option>
              <Option>18</Option>
              <Option>19</Option>
              <Option>20</Option>
            </ScrollView>
          </View>
          <View style={{ flex: 0.5 }}>
            <ScrollView style={{ borderRightWidth: 1, borderRightColor: "lightgrey" }}>
              <Option>1</Option>
              <Option>2</Option>
              <Option>3</Option>
              <Option>4</Option>
              <Option>5</Option>
              <Option>6</Option>
              <Option>7</Option>
              <Option>8</Option>
              <Option>9</Option>
              <Option>10</Option>
              <Option>11</Option>
              <Option>12</Option>
              <Option>13</Option>
              <Option>14</Option>
              <Option>15</Option>
              <Option>16</Option>
              <Option>17</Option>
              <Option>18</Option>
              <Option>19</Option>
              <Option>20</Option>
            </ScrollView>
          </View>
          <View style={{ flex: 0.5 }}>
            <ScrollView>
              <Option>1</Option>
              <Option>2</Option>
              <Option>3</Option>
              <Option>4</Option>
              <Option>5</Option>
              <Option>6</Option>
              <Option>7</Option>
              <Option>8</Option>
              <Option>9</Option>
              <Option>10</Option>
              <Option>11</Option>
              <Option>12</Option>
              <Option>13</Option>
              <Option>14</Option>
              <Option>15</Option>
              <Option>16</Option>
              <Option>17</Option>
              <Option>18</Option>
              <Option>19</Option>
              <Option>20</Option>
            </ScrollView>
          </View>
        </Options>
      </CategoryContainer>
      <SelectedContainer>
        <SelectedContainerHeader>
          <Text style={{ margin: 9, fontSize: 14 }}>선택한 업종</Text>
        </SelectedContainerHeader>
        <SelectedContainerBody>
          <Selected number={1}></Selected>
          <Selected number={1}></Selected>
          <Selected number={1}></Selected>
          <Selected number={1}></Selected>
          <Selected number={1}></Selected>
        </SelectedContainerBody>
      </SelectedContainer>
      <Button>
        <ButtonText>다음</ButtonText>
      </Button>
    </Container>
  );
};
