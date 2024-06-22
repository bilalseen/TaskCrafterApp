import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { Dialog, Portal, Button } from "react-native-paper";

import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TodoItem({ initialIsDone = false }) {
  const [isDone, setIsDone] = useState(false);
  const [visible, setVisible] = useState(false);
  const swipeableRef = useRef(null);

  const handleLeftSwipe = () => {
    swipeableRef.current?.close();
    setIsDone(true);
  };

  const UndoLeftSwipe = () => {
    swipeableRef.current?.close();
    setIsDone(false);
  };

  const handleRightSwipe = () => {
    swipeableRef.current?.close();
    setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
  };

  const confirmDelete = () => {
    setIsDone(false);
    setVisible(false);
  };

  return (
    <GestureHandlerRootView style={styles.rootContainer}>
      <Swipeable
        ref={swipeableRef}
        renderLeftActions={isDone ? UndoAction : MarkAsDoneAction}
        renderRightActions={RightSwipeActions}
        onSwipeableLeftOpen={isDone ? UndoLeftSwipe : handleLeftSwipe}
        onSwipeableRightOpen={handleRightSwipe}
      >
        <SafeAreaView style={styles.todoContainer}>
          <Text style={[styles.todoText, isDone && styles.doneText]}>
            TodoItem
          </Text>
        </SafeAreaView>
      </Swipeable>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Confirm Delete</Dialog.Title>
          <Dialog.Content>
            <Text>Are you sure you want to delete this item?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancel</Button>
            <Button onPress={confirmDelete}>Delete</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </GestureHandlerRootView>
  );
}
const UndoAction = () => (
  <View style={styles.undoLeftAction}>
    <MaterialCommunityIcons name="undo" size={30} color="black" />
  </View>
);

const MarkAsDoneAction = () => (
  <View style={styles.leftAction}>
    <MaterialIcons name="done" size={30} color="black" />
  </View>
);

const RightSwipeActions = () => (
  <View style={styles.rightAction}>
    <MaterialIcons name="delete" size={30} color="black" />
  </View>
);

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  todoContainer: {
    backgroundColor: "#15101C",
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.075,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  doneText: {
    textDecorationLine: "line-through",
    color: "#388e3c",
  },
  todoText: {
    color: "#9E78CF",
    fontSize: 14,
  },
  leftAction: {
    flex: 1,
    backgroundColor: "#388e3c",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 10,
    paddingLeft: 20,
  },
  undoLeftAction: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 10,
    paddingLeft: 20,
  },
  rightAction: {
    flex: 1,
    backgroundColor: "#dd2c00",
    justifyContent: "center",
    alignItems: "flex-end",
    borderRadius: 10,
    paddingRight: 20,
  },
  actionText: {
    color: "#fff",
    fontWeight: "600",
    padding: 20,
  },
});
