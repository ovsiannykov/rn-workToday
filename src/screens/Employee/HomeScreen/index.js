import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, ScrollView, SafeAreaView } from "react-native";

import styles from "./styles";
import HomeHeader from "../../../components/HomeHeader";
import Map from "../../../components/Map";
import Vacancy from "../../../components/Vacancy";
import DateFilter from "../../../components/DateFilter";

const HomeScreen = (props) => {
  const [isMap, setIsMap] = useState(false);
  const [isCalendar, setIsCalendar] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  const mapHandler = () => {
    setIsMap(!isMap);
    setIsCalendar(false);
    setIsFilter(false);
  };

  const calendarHandler = () => {
    setIsCalendar(!isCalendar);
    setIsMap(false);
    setIsFilter(false);
  };

  const filterHandler = () => {
    setIsFilter(!isFilter);
    setIsMap(false);
    setIsCalendar(false);
  };

  return (
    <>
      <LinearGradient colors={["#F4F7FF", "#FFFFFF"]} style={styles.container}>
        <View style={styles.header_box}>
          <HomeHeader
            mapHandler={mapHandler}
            isMap={isMap}
            calendarHandler={calendarHandler}
            isCalendar={isCalendar}
            filterHandler={filterHandler}
            isFilter={isFilter}
          />
          {isMap ? <Map /> : null}
          {isCalendar ? <DateFilter /> : null}
        </View>
        <ScrollView>
          <View style={styles.vacancy_box}>
            <Vacancy />
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
};

export default HomeScreen;
