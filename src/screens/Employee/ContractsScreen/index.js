import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import styles from "./styles";
import Search from "../../../components/Search";
import ContractFilter from "../../../components/ContractFilter";
import Vacancy from "../../../components/Vacancy";
import { getFeedback } from "../../../redux/worker/worker-thunks";
import { setSelectContract } from "../../../redux/worker/worker-actions";

const ContractsScreen = (props) => {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.workerReducer.contracts);

  useEffect(() => {
    setLoading(true);
    dispatch(getFeedback("consideration"));
    setLoading(false);
  }, []);

  const renderItem = ({ item }) => (
    <Vacancy
      title={item.vacansyId.Title}
      info={item.vacansyId.info}
      id={item._id}
      photos={item.vacansyId.photos}
      priceTotal={item.vacansyId.priceTotal}
      place={item.vacansyId.place}
      timeStart={item.vacansyId.timeStart}
      timeEnd={item.vacansyId.timeEnd}
      item={item}
      status={item.status}
      onPress={async () => {
        await dispatch(setSelectContract(item));
        navigation.navigate("ContractDetailScreen");
      }}
    />
  );

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
    <LinearGradient colors={["#F4F7FF", "#FFFFFF"]} style={styles.container}>
      <View style={styles.container}>
        <Search />
        <View style={{ marginTop: 20 }}>
          <ContractFilter />
        </View>
        <View style={{ paddingBottom: 160, marginTop: 10 }}>
          {!data.length ? (
            <Text style={styles.noItems}>Ви ще не подали жодної заявки</Text>
          ) : null}
          <FlatList
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default ContractsScreen;
