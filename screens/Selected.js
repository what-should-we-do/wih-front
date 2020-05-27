import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import styled from "styled-components/native";
import { Avatar, Badge, Icon, withBadge } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

const SelectedContainer = styled.View`
  flex: 1;
  height: 32px;
  margin: 0px 10px;
  border-radius: 8px;
  background-color: rgba(255, 167, 38, 0.4);
`;

const Data = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  height: 50px;
  justify-content: space-between;
`;

const Selected = ({ number = 0, data = {} }) => {
  const iconName = Platform.OS === "ios" ? "ios-close" : "md-close";
  const iconSize = Platform.OS === "ios" ? 30 : 20;

  return (
    <SelectedContainer>
      <Badge
        value={number}
        status="error"
        containerStyle={{ position: "absolute", top: -12, left: 5 }}
      />
      <Data>
        <Text style={{ marginLeft: 10, marginRight: 5, fontSize: 14 }}>
          {/* {`${data.major}/${data.mid}/${data.sub}/${number}`} */}
          음식/한식/김치찌개
        </Text>
        <TouchableOpacity style={{}}>
          <Ionicons style={{ marginRight: 10 }} name={iconName} size={iconSize}></Ionicons>
        </TouchableOpacity>
      </Data>
    </SelectedContainer>
  );
};

Selected.propTypes = {
  number: PropTypes.number.isRequired,
  data: PropTypes.object,
};

export default Selected;
