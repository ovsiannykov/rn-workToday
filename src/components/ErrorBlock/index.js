import React from "react";
import { View, Text, StyleSheet } from "react-native";

import errorSvg from "../../assets/icons/error.svg";
import sized from "../../Svg/sized";

const ErrorBlock = (props) => {
  const ErorrIcon = sized(errorSvg, 24, 24);
  return (
    <View style={styles.container}>
      <View style={{ marginRight: 5 }}>
        <ErorrIcon />
      </View>
      {props.title ? (
        <Text style={styles.text}>{props.title}</Text>
      ) : (
        <Text style={styles.text_error}>
          {props.title ? props.title : "Помилка!"}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 56,
    borderRadius: 11,
    backgroundColor: "#2C2931E5",
    paddingHorizontal: 12,
    paddingVertical: 16,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "ComfortaaRegular",
    fontSize: 14,
    lineHeight: 16,
    width: 244,
    height: 34,
    alignItems: "center",
  },
  text_error: {
    color: "#FFFFFF",
    fontFamily: "ComfortaaRegular",
    fontSize: 14,
    lineHeight: 16,
  },
});

export default ErrorBlock;
