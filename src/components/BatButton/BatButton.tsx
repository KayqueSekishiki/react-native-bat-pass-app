import React from "react";
import { Text, Pressable } from "react-native";

import { styles } from "./BatButtonStyles";
import { BatTextInput } from "../BatTextInput/BatTextInput";

export function BatButton() {
  return (
    <>
      <BatTextInput />
      <Pressable
        onPress={() => {
          console.log("fui pressionado");
        }}
        style={styles.button}
      >
        <Text
          onPress={() => {
            console.log("fui pressionado");
          }}
          style={styles.text}
        >
          GENERATE
        </Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>
    </>
  );
}
