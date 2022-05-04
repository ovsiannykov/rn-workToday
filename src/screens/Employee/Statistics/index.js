import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import styles from "./styles";
import StatisticSlider from "../../../components/StatisticSlider";
import Chart from "../../../components/Chart";
import StatisicModal from "../../../components/Modals/EmployeeModals/StatisicModal";
import WorkStatus from "../../../components/WorkStatus";
import { getMyWork } from "../../../redux/worker/worker-thunks";

const Statistics = (props) => {
  const [isModal, setIsModal] = useState(false);
  const [workStatus, setWorkStatus] = useState("Активний");
  const [loading, setLoading] = useState(false);

  const activeWorks = useSelector((state) => state.workerReducer.activeWorks);
  const finishedWorks = useSelector((state) => state.workerReducer.finishWorks);

  const { t } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const cancelWork = () => {
    setWorkStatus("Скасований");
  };

  const closeModal = () => {
    setIsModal(false);
  };

  useEffect(() => {
    setLoading(true);
    dispatch(getMyWork());
    setLoading(false);
  }, []);

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
    <View style={styles.container}>
      <StatisicModal
        isModal={isModal}
        closeModal={closeModal}
        onPress={cancelWork}
      />
      <Text style={styles.title}>
        {props.title ?? t("Worker.Statistics.title")}
      </Text>
      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.sub_title}>
            {t("Worker.Statistics.vacancySelect")}
          </Text>
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
