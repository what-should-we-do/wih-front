import React, { useState, useEffect } from "react";
import { Dimensions, Text, TouchableOpacity, StyleSheet, Platform, Alert } from "react-native";
import styled from "styled-components/native";
import RNPickerSelect from "react-native-picker-select";
import { Badge } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import Toast from "react-native-root-toast";

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

const SelectedContainer = styled.View`
  flex: 1;
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
  const loc = route.params.result;
  const [major, setMajor] = useState(null);
  const [mid, setMid] = useState(null);
  const [sub, setSub] = useState(null);
  const [isMajorSelected, setIsMajorSelected] = useState(false);
  const [isMidSelected, setIsMidSelected] = useState(false);
  const [isSubSelected, setIsSubSelected] = useState(false);
  const [isAll, setIsAll] = useState(0);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    Platform.OS === "ios" ? null : initSelected(major, mid, sub);
  }, [isAll]);

  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 18,
      borderWidth: 2,
      borderRadius: 4,
      borderColor: "#f9a825",
      padding: 10,
      textAlign: "center",
    },
    inputAndroid: {
      fontSize: 14,
      borderWidth: 1,
      borderRadius: 5,
      color: "#f9a825",
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
      padding: 10,
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

  const initSelected = (major, mid, sub) => {
    setMajor(null);
    setMid(null);
    setSub(null);
    setIsMajorSelected(false);
    setIsMidSelected(false);
    setIsSubSelected(false);
    if (selected === null && major !== null && mid != null && sub != null)
      setSelected([{ major: major, mid: mid, sub: sub }]);
    else if (major !== null && mid != null && sub != null)
      setSelected([...selected, { major: major, mid: mid, sub: sub }]);
  };

  const handleSelected = () => {
    if (selected.length < 2) {
      Alert.alert("업종 선택", "업종을 최소 2개 이상 선택해주세요", [
        {
          text: "Cancel",

          style: "cancel",
        },
        { text: "OK" },
      ]);
    } else {
      navigation.navigate("Business", { selected: selected, loc: loc });
    }
  };

  const toast =
    selected.length === 5
      ? Toast.show("업종은 5개까지 선택할 수 있습니다.", {
          duration: Toast.durations.SHORT,
          position: Toast.positions.CENTER,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
        })
      : null;

  console.log(route.params);
  return (
    <Container>
      <CategoryContainer>
        <Category>
          <Text
            style={
              selected.length < 5
                ? {
                    fontSize: 18,
                    fontWeight: "600",
                    marginHorizontal: 5,
                    marginVertical: 10,
                  }
                : {
                    fontSize: 18,
                    fontWeight: "600",
                    marginHorizontal: 5,
                    marginVertical: 10,
                    color: "lightgrey",
                  }
            }
          >
            대분류
          </Text>
          <RNPickerSelect
            onValueChange={(value) => {
              if (value !== null) {
                setMajor(value);
                setIsMajorSelected(true);
              } else {
                setIsMajorSelected(false);
                value = null;
                setMajor(null);
              }
            }}
            placeholder={{
              label: "대분류를 선택하세요",
              value: null,
            }}
            style={pickerSelectStyles}
            items={require("./major.json")}
            disabled={selected.length >= 5}
            value={major}
          />
        </Category>
        <Category>
          <Text
            style={
              isMajorSelected
                ? {
                    fontSize: 18,
                    fontWeight: "600",
                    marginHorizontal: 5,
                    marginVertical: 10,
                  }
                : {
                    fontSize: 18,
                    fontWeight: "600",
                    marginHorizontal: 5,
                    marginVertical: 10,
                    color: "lightgrey",
                  }
            }
          >
            중분류
          </Text>
          <RNPickerSelect
            onValueChange={(value) => {
              if (value !== null) {
                setIsMidSelected(true);
                setMid(value);
              } else {
                setIsMidSelected(false);
                value = null;
                setMid(null);
              }
            }}
            placeholder={{
              label: "중분류를 선택하세요",
              value: null,
            }}
            style={isMajorSelected ? pickerSelectStyles : pickerDisabledStyles}
            items={require("./mid.json").filter((row) => row.parent === major)}
            disabled={!isMajorSelected || selected.length >= 5}
            value={mid}
          />
        </Category>
        <Category>
          <Text
            style={
              isMidSelected
                ? {
                    fontSize: 18,
                    fontWeight: "600",
                    marginHorizontal: 5,
                    marginVertical: 10,
                  }
                : {
                    fontSize: 18,
                    fontWeight: "600",
                    marginHorizontal: 5,
                    marginVertical: 10,
                    color: "lightgrey",
                  }
            }
          >
            소분류
          </Text>
          <RNPickerSelect
            onValueChange={(value) => {
              if (value !== null) {
                setSub(value);
                setIsSubSelected(true);
                setIsAll(isAll + 1);
              } else {
                setIsSubSelected(false);
                value = null;
              }
            }}
            placeholder={{
              label: "소분류를 선택하세요",
              value: null,
            }}
            onClose={() => initSelected(major, mid, sub)}
            style={isMidSelected ? pickerSelectStyles : pickerDisabledStyles}
            items={require("./sub.json").filter((row) => row.parent === mid)}
            disabled={!isMidSelected || selected.length >= 5}
            value={sub}
          />
        </Category>
      </CategoryContainer>
      <SelectedContainer>
        <Text style={{ margin: 10, fontSize: 14 }}>선택한 업종</Text>
        {selected &&
          selected.map((data, index) => {
            return (
              <Selected key={index}>
                <Badge
                  value={index + 1}
                  status="error"
                  containerStyle={{ position: "absolute", top: -12, left: 5 }}
                />
                <Data>
                  <Text style={{ marginLeft: 10, marginRight: 5, fontSize: 14 }}>
                    {`${data.major} - ${data.mid} - ${data.sub}`}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setSelected(selected.filter((_, i) => i !== index));
                    }}
                  >
                    <Ionicons
                      style={{ marginRight: 10 }}
                      name={iconName}
                      size={iconSize}
                    ></Ionicons>
                  </TouchableOpacity>
                </Data>
              </Selected>
            );
          })}
      </SelectedContainer>
      <Button onPress={handleSelected}>
        <ButtonText>다음</ButtonText>
      </Button>
    </Container>
  );
};
