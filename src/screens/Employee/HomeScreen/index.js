import React, { useState } from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import HomeHeader from "../../../components/HomeHeader";

const HomeScreen = (props) => {
  const [isMap, setIsMap] = useState(false);
  const [isCalendar, setIsCalendar] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  const mapHandler = () => {
    setIsMap(!isMap);
  };

  const calendarHandler = () => {
    setIsCalendar(!isCalendar);
  };

  const filterHandler = () => {
    setIsFilter(!isFilter);
  };

  return (
    <View style={styles.container}>
      <HomeHeader
        mapHandler={mapHandler}
        isMap={isMap}
        calendarHandler={calendarHandler}
        isCalendar={isCalendar}
        filterHandler={filterHandler}
        isFilter={isFilter}
      />
    </View>
  );
};

export default HomeScreen;
