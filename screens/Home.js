import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
`;

const DataContainer = styled.View`
  flex: 3;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  width: 256px;
  background-color: #f9a825;
  margin: 18px 0;
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
  width: 90%;
  height: 100%;
  background-color: #ddd;
  margin-bottom: 18px;
  padding: 12px;
  border-radius: 8px;
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

export default function ({ navigation }) {
  return (
    <Container>
      <View style={{ flex: 2, backgroundColor: "gray" }}>
        <Text style={{ fontSize: 24 }}>지도 API holder</Text>
      </View>
      <DataContainer>
        <Button>
          <ButtonText>여기 뭐 있지?</ButtonText>
        </Button>
        <RecommendList>
          <Title>제목 1</Title>
          <Desc />
          <Title>제목 2</Title>
          <Desc />
          <Title>제목 3</Title>
          <Desc />
        </RecommendList>
      </DataContainer>
    </Container>
  );
}
