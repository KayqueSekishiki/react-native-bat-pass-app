import React from "react";
import { TextInput } from "react-native";

import { styles } from "./BatTextInputStyles";

interface IBatTextInputProps {
  password: string;
}

export function BatTextInput(props: IBatTextInputProps) {
  return (
    <TextInput
      style={styles.inputer}
      placeholder="password"
      value={props.password}
    />
  );
}
