import React, { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity, TextInput, Dimensions } from "react-native";
import styled from "styled-components/native";
import BottomSheet from "reanimated-bottom-sheet";
import { Input, Icon } from "react-native-elements";
import * as Location from "expo-location";
import MapView from "react-native-maps";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
`;

const Button = styled.TouchableOpacity`
  width: 95%;
  background-color: #f9a825;
  margin: 8px 0;
  padding: 12px 0;
  border-radius: 8px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const RecommendList = styled.ScrollView`
  width: 100%;
  height: 100%;
  background-color: white;
  margin-bottom: 18px;
  padding: 12px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const Desc = styled.View`
  width: 100%;
  height: 180px;
  background-color: gray;
  margin-bottom: 18px;
  border-radius: 8px;
`;

const Header = styled.View`
  background-color: white;
  /* shadow-color: '#000000'; */
  padding-top: 10px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const PanelHeader = styled.View`
  align-items: center;
`;

const PanelHandler = styled.View`
  width: 60px;
  height: 6px;
  border-radius: 4px;
  background-color: lightgrey;
  margin-bottom: 5px;
`;

const renderHeader = (navigation) => (
  <Header>
    <PanelHeader>
      <PanelHandler />
      <Button onPress={() => navigation.navigate("Category")}>
        <ButtonText>여기 뭐 있지?</ButtonText>
      </Button>
    </PanelHeader>
  </Header>
);

const renderContent = () => (
  <RecommendList>
    <Title>제목 1</Title>
    <Desc />
    <Title>제목 2</Title>
    <Desc />
    <Title>제목 3</Title>
    <Desc />
  </RecommendList>
);

export default function ({ navigation }) {
  // const [searchValue, setSearchValue] = useState("");
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLocaLoading, setIsLocaLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setIsLocaLoading(false);
    })();

    if (errorMsg) {
      console.log(errorMsg);
    }
  });

  return (
    <Container>
      <View style={{ position: "absolute", marginHorizontal: 12, zIndex: 1000 }}>
        <Input
          placeholder={"경기도 용인시 처인구 남동"}
          leftIcon={
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon type="simple-line-icon" name="menu" iconStyle={{ marginRight: 8 }} />
            </TouchableOpacity>
          }
          rightIcon={
            <TouchableOpacity>
              <Icon type="simple-line-icon" name="microphone" iconStyle={{ color: "grey" }} />
            </TouchableOpacity>
          }
          containerStyle={{
            width: WIDTH - 24,
            position: "absolute",
            backgroundColor: "white",
            marginTop: 48,
            height: 48,
            borderRadius: 4,
          }}
          inputContainerStyle={{
            paddingLeft: 8,
          }}
          onFocus={() => navigation.navigate("Location")}
        />
      </View>
      {!isLocaLoading && (
        <MapView
          initialRegion={{
            latitude: location?.coords?.latitude || 37.226,
            longitude: location?.coords?.longitude || 127.19336,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation
          style={{
            width: WIDTH,
            height: HEIGHT,
          }}
        />
      )}
      <BottomSheet
        snapPoints={["65%", "13%"]}
        initialSnap={1}
        renderHeader={() => renderHeader(navigation)}
        renderContent={renderContent}
      />
    </Container>
  );
}
