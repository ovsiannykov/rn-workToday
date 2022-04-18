import React from "react";
import { View, StyleSheet } from "react-native";

import Colors from "../../../constants/Colors";

const QuestionsSteps = (props) => {
  if (props.step == 1) {
    return (
      <View style={styles.container}>
        <View style={styles.yellow_box}></View>
        <View style={styles.gray_box}></View>
        <View style={styles.gray_box}></View>
        <View style={styles.gray_box}></View>
        <View style={styles.gray_box}></View>
      </View>
    );
  }

  if (props.step == 2) {
    return (
      <View style={styles.container}>
        <View style={styles.yellow_box}></View>
        <View style={styles.yellow_box}></View>
        <View style={styles.gray_box}></View>
        <View style={styles.gray_box}></View>
        <View style={styles.gray_box}></View>
      </View>
    );
  }

  if (props.step == 3) {
    return (
      <View style={styles.container}>
        <View style={styles.yellow_box}></View>
        <View style={styles.yellow_box}></View>
        <View style={styles.yellow_box}></View>
        <View style={styles.gray_box}></View>
        <View style={styles.gray_box}></View>
      </View>
    );
  }

  if (props.step == 4) {
    return (
      <View style={styles.container}>
        <View style={styles.yellow_box}></View>
        <View style={styles.yellow_box}></View>
        <View style={styles.yellow_box}></View>
        <View style={styles.yellow_box}></View>
        <View style={styles.gray_box}></View>
      </View>
    );
  }

  if (props.step == 5) {
    return (
      <View style={styles.container}>
        <View style={styles.yellow_box}></View>
        <View style={styles.yellow_box}></View>
        <View style={styles.yellow_box}></View>
        <View style={styles.yellow_box}></View>
        <View style={styles.yellow_box}></View>
      </View>
    );
  }
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
