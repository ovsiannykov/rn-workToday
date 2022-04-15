import React from "react";
import { View, Text, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";
import Search from "../../../components/Search";

const ContractsScreen = (props) => {
  return (
    <LinearGradient colors={["#F4F7FF", "#FFFFFF"]} style={styles.container}>
      <View style={styles.container}>
        <Search />
        <Text>ContractsScreen</Text>
      </View>
    </LinearGradient>
  );
};

export default ContractsScreen;
