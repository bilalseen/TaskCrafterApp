import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TodoItem() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.todoText}>TodoItem</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#15101C",
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.075,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  todoText: {
    color: "#9E78CF",
    fontSize: 14,
  },
});
