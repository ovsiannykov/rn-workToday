import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import Colors from "../../../constants/Colors";
import { sized } from "../../../Svg";
import ukraineSvg from "../../../assets/icons/ukraine-flag.svg";
import polandSvg from "../../../assets/icons/poland-flag.svg";
import ukSvg from "../../../assets/icons/united-kingdom-flag.svg";

const UkraineIcon = sized(ukraineSvg, 63, 63);
const PolandIcon = sized(polandSvg, 63, 63);
const UkIcon = sized(ukSvg, 63, 63);

const Step1 = (props) => {
  return (
    <View style={styles.slide}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
      <View style={styles.flags_box}>
        <TouchableOpacity onPress={props.onPress}>
          <UkraineIcon style={styles.flag} />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onPress}>
          <PolandIcon style={styles.flag} />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onPress}>
          <UkIcon style={styles.flag} />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 30, ...styles.pionts_box }}>
        <View style={styles.point_big} />
        <View style={styles.point_smal} />
        <View style={styles.point_smal} />
        <View style={styles.point_smal} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    //alignItems: "center",
  },

  img_smal: {
    width: 92.12,
    height: 157.75,
    borderRadius: 24,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
  },
  img_big: {
    width: 191.97,
    height: 157.75,
    borderRadius: 24,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
  },

  slide: {
    paddingTop: 26,
    paddingHorizontal: 30,
  },
  title: {
    fontFamily: "ComfortaaLight",
    fontSize: 24,
    lineHeight: 32,
    color: "#0D253C",
    width: 218,
  },
  subtitle: {
    fontFamily: "RobotoThinItalic",
    marginTop: 16,
    fontSize: 14,
    lineHeight: 22,
    color: "#2D4379",
    width: 295,
  },
  flags_box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "space-around",
  },
  flag: {
    marginTop: 10,
    width: 63,
    height: 63,
    marginRight: 20,
  },
  pionts_box: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 1,
  },
  point_big: {
    width: 23,
    height: 8,
    borderRadius: 26,
    backgroundColor: Colors.yellow,
    marginRight: 8,
  },
  point_smal: {
    width: 8,
    height: 8,
    backgroundColor: "#DEE7FF",
    borderRadius: 50,
    marginRight: 8,
  },
  slide2_content: {
    marginTop: 55,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  next_button: {
    width: 88,
    height: 60,
    backgroundColor: "#376AED",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Step1;
