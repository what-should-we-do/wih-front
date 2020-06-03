import { useState } from "react";

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function onChangeText(text) {
    setValue(text);
  }
  return { value, onChangeText };
}
