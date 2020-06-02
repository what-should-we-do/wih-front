import React, { useState } from "react";
import { View, Dimensions, Text, StyleSheet, ScrollView } from "react-native";
import styled from "styled-components/native";
import RNPickerSelect from "react-native-picker-select";

import Selected from "../screens/Selected";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
  align-items: center;
  flex: 1;
  background-color: white;
`;

const CategoryContainer = styled.View`
  flex: 1;
  width: ${WIDTH * 0.85}px;
  margin-top: 30px;
  border-radius: 8px;
  flex-direction: column;
`;

const Category = styled.View`
  flex: 1;
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
  flex: 1;
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
  const [major, setMajor] = useState("");
  const [mid, setMid] = useState("");
  const [sub, setSub] = useState("");

  const [isMajorSelected, setIsMajorSelected] = useState(false);
  const [isMidSelected, setIsMidSelected] = useState(false);
  const [isSubSelected, setIsSubSelected] = useState(false);

  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState([]);

  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 18,
      borderWidth: 1,
      borderRadius: 4,
      color: "black",
      padding: 10, // to ensure the text is never behind the icon
      textAlign: "center",
    },
    inputAndroid: {
      fontSize: 14,
      borderWidth: 1,
      borderRadius: 5,
      color: "black",
      padding: 10,
      textAlign: "center",
    },
  });

  const pickerDisabledStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 18,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: "lightgrey",
      color: "black",
      padding: 10, // to ensure the text is never behind the icon
      textAlign: "center",
    },
    inputAndroid: {
      fontSize: 14,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "lightgrey",
      color: "black",
      padding: 10,
      textAlign: "center",
    },
  });

  // if (isMajorSelected === true && isMidSelected === true && isSubSelected === true) {
  //   setSelected([...selected].push({ major: major, mid: mid, sub: sub }));
  // }

  // const mapToComponent = (selected) => {
  //   return selected.map((number, data, i) => (
  //     <Selected key={i} number={number} data={{ data }}></Selected>
  //   ));
  // };

  return (
    <Container>
      <CategoryContainer>
        <Category>
          <Text
            style={{ fontSize: 18, fontWeight: "bold", marginHorizontal: 5, marginVertical: 10 }}
          >
            대분류
          </Text>
          <RNPickerSelect
            onValueChange={(value) => {
              if (value !== null) {
                setMajor(`${value}`);
                console.log("major = " + major);
                setIsMajorSelected(!isMajorSelected);
              } else {
                setIsMajorSelected(false);
                value = null;
              }
            }}
            placeholder={{
              label: "대분류를 선택하세요",
            }}
            style={pickerSelectStyles}
            items={[
              { label: "대분류1", value: "대분류1" },
              { label: "대분류2", value: "대분류2" },
              { label: "대분류3", value: "대분류3" },
              { label: "대분류4", value: "대분류4" },
              { label: "대분류5", value: "대분류5" },
              { label: "대분류6", value: "대분류6" },
              { label: "대분류7", value: "대분류7" },
              { label: "대분류8", value: "대분류8" },
              { label: "대분류9", value: "대분류9" },
              { label: "대분류10", value: "대분류10" },
            ]}
          />
        </Category>
        <Category>
          <Text
            style={{ fontSize: 18, fontWeight: "bold", marginHorizontal: 5, marginVertical: 10 }}
          >
            중분류
          </Text>
          <RNPickerSelect
            onValueChange={(value) => {
              if (value !== null) {
                setIsMidSelected(!isMidSelected);
                setMid(value);
                console.log(mid);
              } else {
                setIsMidSelected(false);
                value = null;
              }
            }}
            placeholder={{
              label: "중분류를 선택하세요",
            }}
            style={isMajorSelected ? pickerSelectStyles : pickerDisabledStyles}
            items={[
              { label: "중분류1", value: "중분류1" },
              { label: "중분류2", value: "중분류2" },
              { label: "중분류3", value: "중분류3" },
              { label: "중분류4", value: "중분류4" },
              { label: "중분류5", value: "중분류5" },
              { label: "중분류6", value: "중분류6" },
              { label: "중분류7", value: "중분류7" },
              { label: "중분류8", value: "중분류8" },
              { label: "중분류9", value: "중분류9" },
              { label: "중분류10", value: "중분류10" },
            ]}
            disabled={!isMajorSelected}
          />
        </Category>
        <Category>
          <Text
            style={{ fontSize: 18, fontWeight: "bold", marginHorizontal: 5, marginVertical: 10 }}
          >
            소분류
          </Text>
          <RNPickerSelect
            onValueChange={(value) => {
              if (value !== null) {
                setIsSubSelected(!isSubSelected);
                setSub(value);
                console.log(sub);
              } else {
                setIsSubSelected(false);
                value = null;
              }
            }}
            placeholder={{
              label: "소분류를 선택하세요",
            }}
            style={isMidSelected ? pickerSelectStyles : pickerDisabledStyles}
            items={[
              { label: "소분류1", value: "소분류1" },
              { label: "소분류2", value: "소분류2" },
              { label: "소분류3", value: "소분류3" },
              { label: "소분류4", value: "소분류4" },
              { label: "소분류5", value: "소분류5" },
              { label: "소분류6", value: "소분류6" },
              { label: "소분류7", value: "소분류7" },
              { label: "소분류8", value: "소분류8" },
              { label: "소분류9", value: "소분류9" },
              { label: "소분류10", value: "소분류10" },
            ]}
            disabled={!isMidSelected}
          />
        </Category>
      </CategoryContainer>
      <SelectedContainer>
        <Text style={{ margin: 10, fontSize: 14 }}>선택한 업종</Text>
        {/* {mapToComponent(selected)} */}
        <Selected number={count} data={{ major: major, mid: mid, sub: sub }}></Selected>
      </SelectedContainer>
      <Button>
        <ButtonText>다음</ButtonText>
      </Button>
    </Container>
  );
};
