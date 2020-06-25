import React, { useState, useEffect } from "react";
import { Dimensions, ScrollView, TouchableOpacity, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { ListItem } from "react-native-elements";
import styled from "styled-components";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Number = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: orange;
  margin: 12px;
`;

export default function Result({ route, navigation }) {
  const { selected } = route.params;
  const [region, setRegion] = useState({
    latitude: parseFloat(selected[0].longitude),
    longitude: parseFloat(selected[0].latitude),
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  });

  return (
    <>
      <MapView
        region={region}
        style={{
          width: WIDTH,
          height: HEIGHT / 2,
        }}
      >
        {selected.map((point) => (
          <Marker
            key={point.business_name}
            coordinate={{
              latitude: parseFloat(point.longitude),
              longitude: parseFloat(point.latitude),
            }}
            title={point.business_name}
          />
        ))}
      </MapView>
      <ScrollView
        style={{
          width: WIDTH,
          height: HEIGHT / 2,
          paddingTop: 12,
          backgroundColor: "white",
        }}
      >
        {selected.map((place, index) => (
          <ListItem
            key={place.sub}
            title={place.business_name}
            subtitle={place.roadName_address}
            leftElement={<Number>{index + 1}</Number>}
          />
        ))}
      </ScrollView>
    </>
  );
}
