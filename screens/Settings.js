import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Settings = ({ navigator }) => {
  return (
    <View style={styles.container}>
      <Text> Settings</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4F4EF",
  },
});
