import React from "react";
import { View, Text, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

const ContractsScreen = (props) => {
  return (
    <LinearGradient colors={["#F4F7FF", "#FFFFFF"]} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.search_box}>
          <Feather name='search' size={20} color='#828282' />
          <TextInput
            style={styles.serach_input}
            placeholder='Пошук'
            placeholderStyle={{ fontSize: 16 }}
          />
        </View>
        <Text>ContractsScreen</Text>
      </View>
    </LinearGradient>
  );
};

export default ContractsScreen;
