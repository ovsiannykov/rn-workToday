import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";
import Search from "../../../components/Search";
import VacancyFilter from "../../../components/VacancyFilter";
import WorkStatus from "../../../components/WorkStatus";
import StatisicModal from "../../../components/Modals/EmployeeModals/StatisicModal";

const Workers = (props) => {
  const [isModal, setIsModal] = useState(false);
  const [workStatus, setWorkStatus] = useState("Активний");

  const cancelWork = () => {
    setWorkStatus("Скасований");
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <LinearGradient
      colors={["#F4F7FF", "#FFFFFF"]}
      style={{ ...styles.container }}
    >
      <View style={styles.input_box}>
        <Search />
      </View>
      <View style={{ marginTop: 22, marginBottom: 5 }}>
        <VacancyFilter />
      </View>
      <View style={styles.wrapper}>
        <ScrollView style={{ height: "100%", paddingTop: 27 }}>
          <WorkStatus status={workStatus} greenPress={() => setIsModal(true)} />
        </ScrollView>
      </View>
      <StatisicModal
        isModal={isModal}
        closeModal={closeModal}
        onPress={cancelWork}
      />
    </LinearGradient>
  );
};

export default Workers;
