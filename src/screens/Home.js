import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";

import TodoItem from "../components/TodoItem";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "white", fontSize: 20 }}>Home</Text>
      <PaperProvider>
        <TodoItem />
      </PaperProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0714",
    alignItems: "center",
    justifyContent: "center",
  },
});
