import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "../Home//Style";
import { Menu } from "../../components/Menu/Menu";

export default function Home() {
  return (
    <View style={styles.container}>
      <Menu />
      <Text> Home works!!</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
