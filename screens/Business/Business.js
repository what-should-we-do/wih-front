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
import Toast from "react-native-root-toast";

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

  const initBusiness = () => {
    const { sigungu, dong } = route.params.loc;

    if (sigungu === "동구" && dong === "좌천동") {
      setBusiness(require("./busan.json"));
    } else if (sigungu === "하남시" && dong === "덕풍동") {
      setBusiness(require("./hanam.json"));
    } else if (sigungu === "제주시" && dong === "연동") {
      setBusiness(require("./jeju.json"));
    } else if (sigungu === "강남구" && dong === "역삼동") {
      setBusiness(require("./seoul.json"));
    }
  };

  useEffect(() => {
    setCategory(buttons);
    initBusiness();
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
                    title={data.business_name + " " + data.branch_name}
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
                      <View
                        style={{
                          height: "120%",
                          width: "60%",
                          justifyContent: "center",
                        }}
                      >
                        <TouchableOpacity
                          onPress={() => {
                            if (selected.length < category.length) {
                              setSelected([...selected, data]);
                              if (selectedIndex < category.length - 1) {
                                setSelectedIndex(selectedIndex + 1);
                              }
                            } else {
                            }
                          }}
                        >
                          <Icon name="plus" type="simple-line-icon" color="black" size={20} />
                        </TouchableOpacity>
                      </View>
                    }
                    titleStyle={{
                      color: "black",
                      fontSize: 14,
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
                        height: HEIGHT * 0.4,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "lightgrey",
                        borderRadius: 12,
                      }}
                    >
                      <View style={{ display: "flex", alignItems: "center" }}>
                        <View style={{ flex: 3, flexDirection: "row", marginTop: 10 }}>
                          <Text style={{ fontSize: 18 }}>
                            {data.business_name} {data.branch_name}
                          </Text>
                        </View>

                        <View style={{ flex: 10, flexDirection: "row", justifyContent: "center" }}>
                          <View
                            style={{
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <Image
                              source={require("./sample.jpeg")}
                              style={{
                                width: 160,
                                height: 120,
                                marginBottom: 12,
                                borderRadius: 12,
                              }}
                              PlaceholderContent={<ActivityIndicator />}
                            />
                            <Text style={{ marginTop: 10, fontSize: 14, textAlign: "center" }}>
                              {data.roadName_address} {"\n"}
                              {data.building_name}
                              {data.building ? `${data.building}동 ` : ""}
                              {data.floor ? `${data.floor}층 ` : ""}
                              {data.room_no ? `${data.room_no}호 ` : ""}
                            </Text>
                          </View>
                        </View>

                        <View style={{ flex: 4, flexDirection: "row", marginBottom: 8 }}>
                          <OverlayButton>
                            <ButtonText
                              onPress={() => {
                                toggleOverlay();
                                setSelected([...selected, data]);
                                if (selectedIndex < category.length - 1) {
                                  setSelectedIndex(selectedIndex + 1);
                                }
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
        <Text style={{ margin: 10, fontSize: 14 }}>선택한 업소</Text>
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
                    {data.business_name} {data.branch_name}
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
