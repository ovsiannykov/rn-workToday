import React from "react";
import { View, StyleSheet } from "react-native";

import Colors from "../../../constants/Colors";

const QuestionsSteps = (props) => {
  return (
    <View style={styles.container}>
      {Array.apply(null, { length: 5 }).map((_, index) => {
        return (
          <View
            key={Math.random()}
            style={[index < props.step ? styles.yellow_box : styles.gray_box]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: 273,
    marginTop: 16,
    paddingBottom: 10,
  },
  yellow_box: {
    width: 45.34,
    height: 4,
    borderRadius: 10,
    backgroundColor: Colors.yellow,
    marginRight: 9.7,
  },
  gray_box: {
    width: 45.34,
    height: 4,
    borderRadius: 10,
    backgroundColor: "#BDBDBD",
    marginRight: 9.7,
  },
});

export default QuestionsSteps;
