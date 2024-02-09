import React, { useState } from "react";
import { Text, Pressable } from "react-native";

import { styles } from "./BatButtonStyles";
import { BatTextInput } from "../BatTextInput/BatTextInput";

export function BatButton() {
  const [pass, setPass] = useState("");

  function handleGenerateButton() {
    setPass("Olá");
  }

  return (
    <>
      <BatTextInput password={pass} />
      <Pressable
        onPress={() => {
          handleGenerateButton();
        }}
        style={styles.button}
      >
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>
    </>
  );
}
