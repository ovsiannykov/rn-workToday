import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import trueSvg from "../../assets/icons/true.svg";
import falseSvg from "../../assets/icons/false.svg";
import blueCircleSvg from "../../assets/icons/blueCircle.svg";
import sized from "../../Svg/sized";

const Skill = (props) => {
  const [isTrue, setIsTrue] = useState(undefined);
  const [typeUser, setTypeUser] = useState(undefined);

  useEffect(() => {
    if (props.isTrue) {
      setIsTrue(true);
    }

    if (props.isTrue == false) {
      setIsTrue(false);
    }

    if (props.isTrue == undefined) {
      setIsTrue(undefined);
    }
  }, [props.isTrue]);

  useEffect(() => {
    if (props.type) {
      setTypeUser(props.type);
    }
  }, [props.type]);

  const TrueIcon = sized(trueSvg, 24, 24);
  const FalseIcon = sized(falseSvg, 24, 24);
  const JustIcon = sized(blueCircleSvg, 24, 24);

  if (isTrue == undefined && typeUser === "worker") {
    return (
      <View style={styles.container_false}>
        <Text style={styles.text_false}>{props.title}</Text>
        <View>
          <FalseIcon />
        </View>
      </View>
    );
  }

  if (typeUser == "employer") {
    return (
      <View style={styles.container_just}>
        <Text style={styles.text_just}>{props.title}</Text>
        <View>
          <JustIcon />
        </View>
      </View>
    );
  }

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
  container_just: {
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
    borderColor: "#376AED",
    alignItems: "center",
    minHeight: 32,
    maxWidth: 128,
    marginHorizontal: 5,
  },
  text_just: {
    color: "#376AED",
    marginRight: 5,
    fontFamily: "ComfortaaLight",
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.7,
  },
});

export default Skill;
