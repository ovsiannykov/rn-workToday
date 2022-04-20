import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "./styles";
import StatisticSlider from "../../../components/StatisticSlider";
import Chart from "../../../components/Chart";

const Statistics = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.company_name}>Назва компанії</Text>
      <Text style={styles.title}>
        {props.title ? props.title : "Статистика"}
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
