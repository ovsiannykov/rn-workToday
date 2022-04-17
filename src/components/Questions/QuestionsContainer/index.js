import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import Colors from "../../../constants/Colors";
import QuestionsSteps from "../../../components/Questions/QuestionsSteps";

const QuestionsContainer = (props) => {
  return (
    <>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.step_text}>{props.step} з 5 кроків</Text>
        <QuestionsSteps step={props.step} />
      </View>
      <View>
        <View style={styles.wrapper}>{props.children}</View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: Platform.OS == "ios" ? 80 : 40,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "ComfortaaBold",
    color: Colors.veryDarkBlue,
    marginBottom: 35,
    width: 328,
  },
  wrapper: {
    paddingHorizontal: 17,
  },
  step_text: {
    fontSize: 19,
    fontFamily: "Rubik_Regular",
  },
});

export default QuestionsContainer;
