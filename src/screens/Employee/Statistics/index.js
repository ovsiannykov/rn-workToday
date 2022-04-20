import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import StatisticSlider from "../../../components/StatisticSlider";
import Chart from "../../../components/Chart";
import StatisicModal from "../../../components/Modals/EmployeeModals/StatisicModal";
import WorkStatus from "../../../components/WorkStatus";

const Statistics = (props) => {
  const [isModal, setIsModal] = useState(false);
  const [workStatus, setWorkStatus] = useState("Активний");
  const navigation = useNavigation();

  const cancelWork = () => {
    setWorkStatus("Скасований");
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <View style={styles.container}>
      <StatisicModal
        isModal={isModal}
        closeModal={closeModal}
        onPress={cancelWork}
      />
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
          <View style={styles.status_box}>
            <WorkStatus
              status={workStatus}
              greenPress={() => setIsModal(true)}
              onPressRed={() =>
                navigation.navigate("Settings", { setModal: true })
              }
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Statistics;
