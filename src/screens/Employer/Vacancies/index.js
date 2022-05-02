import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  FlatList,
  Text,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import styles from "./styles";
import Search from "../../../components/Search";
import Vacancy from "../../../components/Vacancy";
import Colors from "../../../constants/Colors";
import {
  vacancyMy,
  getCategoriesFilters,
} from "../../../redux/employer/employer-thunks";

const Vacancies = (props) => {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(vacancyMy());
    dispatch(getCategoriesFilters());
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <LinearGradient
        colors={["#F4F7FF", "#FFFFFF"]}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size='large' color={Colors.primaryBlue} />
      </LinearGradient>
    );
  }

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
