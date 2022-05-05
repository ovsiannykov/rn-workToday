import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";

import styles from "./styles";
import StatisticSlider from "../../../components/StatisticSlider";
import Chart from "../../../components/Chart";

const Statistics = (props) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.company_name}>Назва компанії</Text>
      <Text style={styles.title}>{t("Worker.Statistics.title")}</Text>
      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.sub_title}>
            {t("Worker.Statistics.vacancySelect")}
          </Text>
          <View>
            <StatisticSlider />
            <View style={styles.peopleContainer}>
              <Text style={styles.peopleTitle}>
                {t("Worker.Statistics.hired")}
              </Text>
              <Text style={{ ...styles.peopleValue, marginBottom: 15 }}>
                3 {t("Worker.Statistics.people")}
              </Text>
              <Text style={styles.peopleTitle}>
                {t("Worker.Statistics.consideration")}
              </Text>
              <Text style={styles.peopleValue}>
                3 {t("Worker.Statistics.people")}
              </Text>
            </View>
            <Chart />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Statistics;
