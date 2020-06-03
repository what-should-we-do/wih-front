import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import styled from "styled-components/native";
import RNPickerSelect from "react-native-picker-select";
import { Avatar, Badge, Icon, withBadge } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

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

export default () => {
  const [major, setMajor] = useState(null);
  const [mid, setMid] = useState(null);
  const [sub, setSub] = useState(null);

  const [isMajorSelected, setIsMajorSelected] = useState(false);
  const [isMidSelected, setIsMidSelected] = useState(false);
  const [isSubSelected, setIsSubSelected] = useState(false);
  const [isAll, setIsAll] = useState(0);
  useEffect(() => {
    Platform.OS === "ios" ? null : initSelected(major, mid, sub);
  }, [isAll]);
  const [selected, setSelected] = useState(null);

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

  console.log("@@@@@" + major + " " + mid + " " + sub);
  console.log("major : " + isMajorSelected);
  console.log("mid : " + isMidSelected);
  console.log("sub: " + isSubSelected);
  console.log("sel" + selected);

  const isAllSelected = () => {
    if (isMajorSelected === true && isMidSelected === true && isSubSelected === true) {
    }
  };

  const initSelected = (major, mid, sub) => {
    // 사용자가 대분류, 중분류, 소분류를 모두 선택했을 때
    console.log("값이 잘 전달되었다!");

    setIsMajorSelected(false);
    setIsMidSelected(false);
    setIsSubSelected(false);
    if (selected === null && major !== null && mid != null && sub != null)
      setSelected([{ major: major, mid: mid, sub: sub }]);
    else if (major !== null && mid != null && sub != null)
      setSelected([...selected, { major: major, mid: mid, sub: sub }]);
    // setIsSubSelected(false);
  };

  return (
    <Container>
      <CategoryContainer>
        <Category>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              marginHorizontal: 5,
              marginVertical: 10,
            }}
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
            style={pickerSelectStyles}
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
                console.log("qwfqwwfqwfqfw" + isSubSelected);
                setIsAll(isAll + 1);
              } else {
                setIsSubSelected(false);
                value = null;
                setSub(null);
              }
            }}
            placeholder={{
              label: "소분류를 선택하세요",
              value: null,
            }}
            onClose={() => initSelected(major, mid, sub)}
            style={pickerSelectStyles}
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
            {
              /* <Selected key={index} number={index + 1} data={data} />; */
            }
          })}
      </SelectedContainer>
      <Button>
        <ButtonText>다음</ButtonText>
      </Button>
    </Container>
  );
};
