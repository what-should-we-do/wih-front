import React, { useState, useEffect } from "react";
import { View, Dimensions, Text, TouchableOpacity, Platform, ScrollView } from "react-native";
import styled from "styled-components/native";
import { ListItem, Badge, ButtonGroup, Rating, Avatar, Icon, Overlay } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
  align-items: center;
  flex: 1;
  background-color: white;
`;

const BusinessContainer = styled.View`
  flex: 3;
  width: ${WIDTH * 0.85}px;
  margin-top: 30px;
  border-radius: 8px;
  flex-direction: column;
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

const updateIndex = (selectedIndex) => {
  setSelectedIndex(selectedIndex);
};

export default ({ route, navigation }) => {
  const [visible, setVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [category, setCategory] = useState([]);
  // const [business, setBusiness] = useState([]);

  const buttons = [];

  for (let i in route.params.selected) {
    buttons.push(route.params.selected[i].sub);
  }

  useEffect(() => {
    setCategory(buttons);
  }, []);

  console.log(category);

  const initBusiness = () => {};

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <Container>
      <BusinessContainer>
        <ButtonGroup
          onPress={(index) => setSelectedIndex(index)}
          selectedIndex={selectedIndex}
          buttons={category}
          selectedButtonStyle={{ backgroundColor: "rgb(255, 167, 38)" }}
          containerStyle={{ height: 36 }}
        />
        <ScrollView>
          {/* 예시를 들기 위함. component mapping 예정 */}
          <ListItem
            leftAvatar={
              <Avatar
                size="medium"
                icon={{ name: "location-pin", color: "black", type: "simple-line-icon" }}
              />
            }
            title="투썸플레이스 역북점"
            subtitle={
              <Rating
                imageSize={14}
                readonly
                startingValue={1}
                coun
                style={{
                  alignItems: "flex-start",
                }}
              />
            }
            rightSubtitle={
              <TouchableOpacity>
                <Icon name="plus" type="simple-line-icon" color="black" size={16} />
              </TouchableOpacity>
            }
            titleStyle={{
              color: "black",
              fontSize: 16,
              marginBottom: 4,
              width: "140%",
            }}
            subtitleStyle={{ color: "black", fontWeight: "300" }}
            containerStyle={{ height: 64 }}
            bottomDivider
            onPress={toggleOverlay}
          />

          <ListItem
            leftAvatar={
              <Avatar
                size="medium"
                icon={{ name: "location-pin", color: "black", type: "simple-line-icon" }}
              />
            }
            title="스타벅스 김량장점"
            subtitle={
              <Rating
                imageSize={14}
                readonly
                startingValue={2}
                coun
                style={{ alignItems: "flex-start" }}
              />
            }
            rightSubtitle={
              <TouchableOpacity>
                <Icon name="plus" type="simple-line-icon" color="black" size={16} />
              </TouchableOpacity>
            }
            titleStyle={{
              color: "black",
              fontSize: 16,
              marginBottom: 4,
              width: "140%",
            }}
            subtitleStyle={{ color: "black", fontWeight: "300" }}
            containerStyle={{ height: 64 }}
            bottomDivider
            onPress={toggleOverlay}
          />

          <ListItem
            leftAvatar={
              <Avatar
                size="medium"
                icon={{ name: "location-pin", color: "black", type: "simple-line-icon" }}
              />
            }
            title="커피테이너 명지대점"
            subtitle={
              <Rating
                imageSize={14}
                readonly
                startingValue={3}
                coun
                style={{ alignItems: "flex-start" }}
              />
            }
            rightSubtitle={
              <TouchableOpacity>
                <Icon name="plus" type="simple-line-icon" color="black" size={16} />
              </TouchableOpacity>
            }
            titleStyle={{
              color: "black",
              fontSize: 16,
              marginBottom: 4,
              width: "140%",
            }}
            subtitleStyle={{ color: "black", fontWeight: "300" }}
            containerStyle={{ height: 64 }}
            bottomDivider
            onPress={toggleOverlay}
          />
          <Overlay
            isVisible={visible}
            onBackdropPress={toggleOverlay}
            overlayStyle={{
              width: WIDTH * 0.85,
              height: HEIGHT * 0.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <Text>업소 정보 창</Text>
            </View>
          </Overlay>
        </ScrollView>
      </BusinessContainer>
      <SelectedContainer>
        <Text style={{ margin: 10, fontSize: 14 }}>선택한 업종</Text>
        <Selected>
          <Badge
            value={1}
            status="error"
            containerStyle={{ position: "absolute", top: -12, left: 5 }}
          />
          <Data>
            <Text style={{ marginLeft: 10, marginRight: 5, fontSize: 14 }}>스타벅스 김량장점</Text>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons style={{ marginRight: 10 }} name={iconName} size={iconSize}></Ionicons>
            </TouchableOpacity>
          </Data>
        </Selected>
      </SelectedContainer>
      <Button onPress={() => navigation.navigate("Category")}>
        <ButtonText>다음</ButtonText>
      </Button>
    </Container>
  );
};
