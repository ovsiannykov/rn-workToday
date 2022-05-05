import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  FlatList,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import styles from "./styles";
import Search from "../../../components/Search";
import Vacancy from "../../../components/Vacancy";
import Colors from "../../../constants/Colors";
import {
  vacancyMy,
  getCategoriesFilters,
  getFeedback,
} from "../../../redux/employer/employer-thunks";
import { setSelectVacancy } from "../../../redux/employer/employer-actions";
import LongBlueButton from "../../../components/LongBlueButton";

const Vacancies = (props) => {
  const [loading, setLoading] = useState(false);

  const data = useSelector((state) => state.employerReducer.vacancies);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(vacancyMy());
    dispatch(getCategoriesFilters());
    dispatch(getFeedback());
    setLoading(false);
  }, []);

  const renderItem = ({ item }) => (
    <Vacancy
      title={item.Title}
      info={item.info}
      id={item._id}
      photos={item.photos}
      priceTotal={item.priceTotal}
      place={item.place}
      timeStart={item.timeStart}
      timeEnd={item.timeEnd}
      item={item}
      type='employer'
      onPress={async () => {
        await dispatch(setSelectVacancy(item));
        navigation.navigate("VacancyDetail");
      }}
    />
  );

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

      <View style={{ ...styles.wrapper, paddingBottom: 80 }}>
        {data.length == 0 ? (
          <View style={{ alignItems: "center" }}>
            <Text style={styles.noItems}>
              Ви поки що не створили жодної вакансії
            </Text>
            <View style={{ width: 200, marginTop: 20 }}>
              <LongBlueButton
                title='Створити'
                onPress={() => navigation.navigate("CreateVacancy")}
              />
            </View>
          </View>
        ) : null}
        {loading ? (
          <ActivityIndicator size='large' color={Colors.primaryBlue} />
        ) : null}
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </LinearGradient>
  );
};

export default Vacancies;
