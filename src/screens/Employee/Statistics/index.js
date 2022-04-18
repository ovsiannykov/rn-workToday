import React from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "./styles";
import StatisticSlider from "../../../components/StatisticSlider";
import Chart from "../../../components/Chart";

const Statistics = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {props.title ? props.titile : "Статистика"}
      </Text>
      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.sub_title}>Оберіть вакансію</Text>
          <View>
            <StatisticSlider />
            <Chart />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Statistics;
