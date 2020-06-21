import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
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
  flex: 1;
  width: ${WIDTH * 0.85}px;
  /* background-color: #f0f0f0; */
  margin-top: 30px;
  border-radius: 8px;
  flex-direction: column;
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

const OverlayButton = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  height: 50px;
  background-color: #f9a825;
  margin: 18px 5px;
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
  const [visible, setVisible] = useState(false);
  const [selectedOverlay, setSelectedOverlay] = useState(-1);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [category, setCategory] = useState([]);
  const [business, setBusiness] = useState([]);
  const [selected, setSelected] = useState([]);

  const buttons = [];

  for (let i in route.params.selected) {
    buttons.push(route.params.selected[i].sub);
  }

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    setCategory(buttons);
    () => {
      if (route.params.loc.sigungu === "동구" && route.params.loc.dong === "좌천동") {
        setBusiness(require("./busan.json"));
      } else if (route.params.loc.sigungu === "하남시" && route.params.loc.dong === "덕풍동") {
        setBusiness(require("./hanam.json"));
      } else if (route.params.loc.sigungu === "제주시" && route.params.loc.dong === "연동") {
        setBusiness(require("./jeju.json"));
      } else if (route.params.loc.sigungu === "강남구" && route.params.loc.dong === "역삼동") {
        setBusiness(require("./seoul.json"));
      }
    };
  }, []);

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
          {business.map((data, index) => {
            if (data.sub === category[selectedIndex]) {
              return (
                <View key={index}>
                  <ListItem
                    leftAvatar={
                      <Avatar
                        size="medium"
                        icon={{ name: "location-pin", color: "black", type: "simple-line-icon" }}
                      />
                    }
                    title={data.business_name}
                    subtitle={
                      <Rating
                        imageSize={14}
                        readonly
                        startingValue={data.rating * 1}
                        coun
                        style={{
                          alignItems: "flex-start",
                        }}
                      />
                    }
                    rightSubtitle={
                      <View style={{}}>
                        <TouchableOpacity
                          onPress={() => {
                            setSelected([...selected, data]);
                          }}
                        >
                          <Icon name="plus" type="simple-line-icon" color="black" size={20} />
                        </TouchableOpacity>
                      </View>
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
                    onPress={() => {
                      setSelectedOverlay(index);
                      toggleOverlay();
                    }}
                  />

                  {index === selectedOverlay ? (
                    <Overlay
                      isVisible={visible}
                      onBackdropPress={() => {
                        toggleOverlay();
                      }}
                      overlayStyle={{
                        width: WIDTH * 0.85,
                        height: HEIGHT * 0.5,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "lightgrey",
                      }}
                    >
                      <View
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <Text style={{ marginBottom: 12, fontSize: 20 }}>{data.business_name}</Text>
                        <Image
                          source={require("./sample.png")}
                          style={{ width: 120, height: 120 }}
                          PlaceholderContent={<ActivityIndicator />}
                        />
                        <View>
                          <Text style={{ marginTop: 10, fontSize: 14 }}>
                            주소 : {data.roadName_address}
                          </Text>
                          <Text style={{ marginTop: 10, fontSize: 14 }}>
                            건물명 : {data.building_name}
                          </Text>
                          <Text style={{ marginTop: 10, fontSize: 14 }}>동 : {data.building}</Text>
                          <Text style={{ marginTop: 10, fontSize: 14 }}>층 : {data.floor}</Text>
                          <Text style={{ marginTop: 10, fontSize: 14 }}>호 : {data.room_no}</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                          <OverlayButton>
                            <ButtonText
                              onPress={() => {
                                toggleOverlay();
                                setSelected([...selected, data]);
                              }}
                            >
                              선택
                            </ButtonText>
                          </OverlayButton>
                        </View>
                      </View>
                    </Overlay>
                  ) : (
                    <></>
                  )}
                </View>
              );
            }
          })}
        </ScrollView>
      </BusinessContainer>
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
                    {data.business_name}
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
      <Button onPress={() => navigation.navigate("Category")}>
        <ButtonText>다음</ButtonText>
      </Button>
    </Container>
  );
};
