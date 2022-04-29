import React, { useEffect } from "react";
import { View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import styles from "./styles";
import Search from "../../../components/Search";
import ContractFilter from "../../../components/ContractFilter";
import Vacancy from "../../../components/Vacancy";
import { getFeedback } from "../../../redux/worker/worker-thunks";

const ContractsScreen = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeedback("consideration"));
  }, []);

  return (
    <LinearGradient colors={["#F4F7FF", "#FFFFFF"]} style={styles.container}>
      <View style={styles.container}>
        <Search />
        <View style={{ marginTop: 20 }}>
          <ContractFilter />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 10, paddingBottom: 20 }}
        >
          <View style={{ paddingBottom: 30 }}>
            <Vacancy
              status='Активний'
              onPress={() => navigation.navigate("ContractDetailScreen")}
            />
            <Vacancy
              status='Скасований'
              onPress={() => navigation.navigate("ContractDetailScreen")}
            />
            <Vacancy
              status='Закінчений'
              onPress={() => navigation.navigate("ContractDetailScreen")}
            />
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default ContractsScreen;
