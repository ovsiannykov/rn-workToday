import React from "react";
import { View, Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";
import Search from "../../../components/Search";
import Vacancy from "../../../components/Vacancy";

const Vacancies = (props) => {
  return (
    <LinearGradient
      colors={["#F4F7FF", "#FFFFFF"]}
      style={{ ...styles.container }}
    >
      <View style={styles.input_box}>
        <Search />
      </View>
      <View style={styles.wrapper}>
        <ScrollView style={{ height: "100%", paddingTop: 20 }}>
          <Vacancy />
          <Vacancy />
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default Vacancies;
