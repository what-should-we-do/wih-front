import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

export default function Result({ route, navigation }) {
  const { selected } = route.params;
  const [region, setRegion] = useState({
    latitude: parseFloat(selected[0].longitude),
    longitude: parseFloat(selected[0].latitude),
    latitudeDelta: 0.03,
    longitudeDelta: 0.03,
  });

  return (
    <>
      <MapView
        region={region}
        style={{
          width: WIDTH,
          height: HEIGHT,
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
    </>
  );
}
