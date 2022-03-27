import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SaveAreaView,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
const windowWidth = Dimensions.get("window").width;

const NeuMorphRec = ({ children, size, style, color }) => {
  return (
    <View style={styles.topShadow}>
      <View style={styles.bottomShadow}>
        <TouchableOpacity
          style={[
            styles.inner,
            {
              width: 365,
              height: 60,
              borderRadius: 10,
            },
            style,
          ]}
        >
          {children}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NeuMorphRec;

const styles = StyleSheet.create({
  inner: {
    backgroundColor: "#E3E6EC",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#D6DCE8",
    borderWidth: 0.5,
  },
  topShadow: {
    shadowOffset: {
      width: -10,
      height: -10,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: "#FBFFFF",
  },
  bottomShadow: {
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: "#D1D9E6",
  },
});
