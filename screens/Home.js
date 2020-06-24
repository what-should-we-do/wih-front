import React, { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity, Text, Dimensions, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import BottomSheet from "reanimated-bottom-sheet";
import { Input, Icon, Card, Button, ListItem } from "react-native-elements";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import { ScrollView } from "react-native-gesture-handler";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
`;

const MainButton = styled.TouchableOpacity`
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
`;

const Desc = styled.View`
  width: 100%;
  height: 180px;
  border-width: 1px;
  border-color: lightgrey;
  margin-bottom: 18px;
  border-radius: 8px;
  display: flex;
`;

const Header = styled.View`
  background-color: white;
  padding-top: 10px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const PanelHeader = styled.View`
  align-items: center;
`;

const PanelHandler = styled.View`
  width: 60px;
  height: 6px;
  border-radius: 4px;
  background-color: lightgrey;
  margin-bottom: 2px;
`;

const renderHeader = (navigation) => {
  const curLoc = {
    sido: "용인시",
    sigungu: "처인구",
    dong: "남동",
  };
  return (
    <Header>
      <PanelHeader>
        <PanelHandler />
        <MainButton onPress={() => navigation.navigate("Category", curLoc)}>
          <ButtonText>여기 뭐 있지?</ButtonText>
        </MainButton>
      </PanelHeader>
    </Header>
  );
};

const renderContent = () => (
  <RecommendList>
    <Title>맞춤 추천 - 20대 </Title>
    <Card
      containerStyle={{
        marginHorizontal: 0,
        marginTop: 8,
        marginBottom: 16,
        padding: 12,
        justifyContent: "center",
      }}
      image={require("../assets/party.jpeg")}
      imageProps={{
        PlaceholderContent: <ActivityIndicator />,
        placeholderStyle: { backgroundColor: "white" },
      }}
      imageStyle={{ width: "100%" }}
    >
      <Text
        style={{
          fontSize: 14,
          marginBottom: 10,
        }}
      >
        무더위가 내리쬐는 여름, 스트레스를 한 방에 해소할 수 있는 20대 맞춤 유흥 관련 경로를
        소개합니다.
      </Text>
      <Button
        title="자세히 보기"
        type="outline"
        titleStyle={{
          color: "#f9a825",
        }}
        buttonStyle={{
          borderColor: "#f9a825",
          borderRadius: "100%",
          borderWidth: 1,
        }}
      />
    </Card>
    <Title>테마 - 데이트</Title>
    <Card
      containerStyle={{
        marginHorizontal: 0,
        marginTop: 8,
        marginBottom: 16,
        padding: 12,
        justifyContent: "center",
      }}
      image={require("../assets/game.jpeg")}
      imageProps={{
        PlaceholderContent: <ActivityIndicator />,
        placeholderStyle: { backgroundColor: "white" },
      }}
      imageStyle={{ width: "100%" }}
    >
      <Text
        style={{
          fontSize: 14,
          marginBottom: 10,
        }}
      >
        코로나바이러스로 돌아다니기 힘든 요즘 실내에서 안전하게 놀 수 있는 데이트 코스를 소개합니다.
      </Text>
      <Button
        title="자세히 보기"
        type="outline"
        titleStyle={{
          color: "#f9a825",
        }}
        buttonStyle={{
          borderColor: "#f9a825",
          borderRadius: "100%",
          borderWidth: 1,
        }}
      />
    </Card>
    <Title>진행중인 이벤트</Title>
    <ScrollView
      style={{ marginTop: 8, marginBottom: 80, borderWidth: 1, borderColor: "lightgrey" }}
    >
      <ListItem title="이벤트 1" bottomDivider chevron />
      <ListItem title="이벤트 2" bottomDivider chevron />
      <ListItem title="이벤트 3" bottomDivider chevron />
    </ScrollView>
  </RecommendList>
);

export default function({ navigation }) {
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

  useEffect(() => {
    navigation.closeDrawer();
  }, []);

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
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
          inputContainerStyle={{
            paddingLeft: 8,
            borderBottomWidth: 0,
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
        snapPoints={["65%", "12%"]}
        initialSnap={0}
        renderHeader={() => renderHeader(navigation)}
        renderContent={renderContent}
      />
    </Container>
  );
}
