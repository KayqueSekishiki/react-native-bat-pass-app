import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "../Home//Style";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";

export default function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>

      <View style={styles.imputContainer}>
        <BatTextInput />
        <BatButton />
      </View>

      <StatusBar style="light" />
    </View>
  );
}
