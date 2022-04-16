import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

const VacancyStatusText = (props) => {
  if (props.text == "Активний") {
    return <Text style={styles.status_green}>{props.text}</Text>;
  }
  if (props.text == "Скасований") {
    return <Text style={styles.status_red}>{props.text}</Text>;
  } else {
    return <Text style={styles.status_gray}>{props.text}</Text>;
  }
};

const styles = StyleSheet.create({
  status_green: {
    color: "#2EB44C",
    fontSize: 12,
    fontFamily: "ComfortaaBold",
  },
  status_red: {
    color: "#D33705",
    fontSize: 12,
    fontFamily: "ComfortaaBold",
  },
  status_gray: {
    color: "#848484",
    fontSize: 12,
    fontFamily: "ComfortaaBold",
  },
});

export default VacancyStatusText;
