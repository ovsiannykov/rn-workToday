import React from "react";
import { View, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Search from "../../../components/Search";
import ContractFilter from "../../../components/ContractFilter";
import Vacancy from "../../../components/Vacancy";

const ContractsScreen = (props) => {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={["#F4F7FF", "#FFFFFF"]} style={styles.container}>
      <View style={styles.container}>
        <Search />
        <View style={{ marginTop: 20 }}>
          <ContractFilter />
        </View>
        <ScrollView style={{ marginTop: 10 }}>
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
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default ContractsScreen;
