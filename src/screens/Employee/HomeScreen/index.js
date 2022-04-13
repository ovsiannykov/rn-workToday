import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import HomeHeader from "../../../components/HomeHeader";

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <HomeHeader />
    </View>
  );
};

export default HomeScreen;
