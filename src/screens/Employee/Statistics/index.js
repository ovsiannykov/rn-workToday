import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import StatisticSlider from "../../../components/StatisticSlider";

const Statistics = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Статистика</Text>
      <View style={styles.content}>
        <Text style={styles.sub_title}>Оберіть вакансію</Text>
        <View>
          <StatisticSlider />
        </View>
      </View>
    </View>
  );
};

export default Statistics;
