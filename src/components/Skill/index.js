import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import trueSvg from "../../assets/icons/true.svg";
import falseSvg from "../../assets/icons/false.svg";
import sized from "../../Svg/sized";

const Skill = (props) => {
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    if (props.isTrue) {
      setIsTrue(true);
    }
  }, [props.isTrue]);

  const TrueIcon = sized(trueSvg, 24, 24);
  const FalseIcon = sized(falseSvg, 24, 24);

  return (
    <View style={isTrue ? styles.container_true : styles.container_false}>
      <Text style={isTrue ? styles.text_true : styles.text_false}>
        {props.title}
      </Text>
      <View>{isTrue ? <TrueIcon /> : <FalseIcon />}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container_false: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 75,
    justifyContent: "space-between",
    paddingRight: 3,
    borderWidth: 2,
    borderStyle: "solid",
    paddingVertical: 4,
    marginBottom: 10,
    paddingLeft: 16,
    borderColor: "#FF4B55",
    alignItems: "center",
    minHeight: 32,
    maxWidth: 128,
    marginHorizontal: 5,
  },
  container_true: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 75,
    justifyContent: "space-between",
    paddingRight: 3,
    borderWidth: 2,
    borderStyle: "solid",
    paddingVertical: 4,
    marginBottom: 10,
    paddingLeft: 16,
    borderColor: "#59C36A",
    alignItems: "center",
    minHeight: 32,
    maxWidth: 128,
    marginHorizontal: 5,
  },
  text_true: {
    color: "#59C36A",
    marginRight: 5,
    fontFamily: "ComfortaaLight",
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.7,
  },
  text_false: {
    color: "#FF4B55",
    marginRight: 5,
    fontFamily: "ComfortaaLight",
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.7,
  },
});

export default Skill;
