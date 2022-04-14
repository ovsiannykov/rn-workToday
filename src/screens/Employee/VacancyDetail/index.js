import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";
import NavigationHeader from "../../../components/NavigationHeader";

const VacancyDetail = (props, { route }) => {
  return (
    <LinearGradient
      colors={["#F4F7FF", "#FFFFFF"]}
      style={{ ...styles.container }}
    >
      <NavigationHeader title={props.title} />
    </LinearGradient>
  );
};

export default VacancyDetail;
