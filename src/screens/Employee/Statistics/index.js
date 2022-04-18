import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "./styles";
import StatisticSlider from "../../../components/StatisticSlider";
import Chart from "../../../components/Chart";
import StatisicModal from "../../../components/Modals/EmployeeModals/StatisicModal";

const Statistics = (props) => {
  const [isModal, setIsModal] = useState(true);

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <View style={styles.container}>
      <StatisicModal isModal={isModal} closeModal={closeModal} />
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
