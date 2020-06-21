import React, { useState } from "react";
import { Input, Button } from "react-native-elements";
import { ScrollView } from "react-native";

export default function Location({ navigation }) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);
  const districts = require("./districts.json");

  const onChangeText = (value) => {
    setValue(value);
  };

  const onSubmit = (event) => {
    setResult(districts.filter((district) => district.dong.includes(value)));
  };

  return (
    <>
      <Input
        autoFocus
        placeholder="동 단위로 검색해주세요."
        returnKeyType={"search"}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmit}
      />
      <ScrollView>
        {result.map((item) => (
          <Button
            type="outline"
            title={`${item.sido} ${item.sigungu} ${item.dong}`}
            onPress={() => navigation.navigate("Category", { loc: item })}
          />
        ))}
      </ScrollView>
    </>
  );
}
