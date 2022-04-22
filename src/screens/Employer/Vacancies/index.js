import React from "react";
import { View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Search from "../../../components/Search";
import Vacancy from "../../../components/Vacancy";

const Vacancies = (props) => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#F4F7FF", "#FFFFFF"]}
      style={{ ...styles.container }}
    >
      <View style={styles.input_box}>
        <Search />
      </View>

      <ScrollView style={{ height: "100%", paddingTop: 20 }}>
        <View style={styles.wrapper}>
          <Vacancy
            onPress={() =>
              navigation.navigate("VacancyDetail", { title: "Офіціант" })
            }
          />
          <Vacancy
            title='Лiкар'
            onPress={() =>
              navigation.navigate("VacancyDetail", { title: "Лiкар" })
            }
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Vacancies;
