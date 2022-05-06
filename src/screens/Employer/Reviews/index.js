import React, { useState, useEffect } from "react";
import { View, ScrollView, FlatList, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { useRoute } from "@react-navigation/native";

import ReviewsHeader from "../../../components/ReviewsHeader";
import ContractFilter from "../../../components/ContractFilter";
import WorkerItem from "../../../components/WorkerItem";
import RewievsModal from "../../../components/RewievsModal";
import HomeModal from "../../../components/HomeModal";
import {
  acceptUser,
  canseledUser,
  getFeedback,
} from "../../../redux/employer/employer-thunks";

import styles from "./styles";

const filters = [
  { id: "1", label: "Нові кандидати", count: "99" },
  { id: "2", label: "Прийняті кандидати", count: "73" },
  { id: "3", label: "Відкинуті кандидати", count: "16" },
];

const data = [
  { id: "1", label: "Обрати всі", all: true },
  { id: "2", label: "Вакансія 1" },
  { id: "3", label: "Вакансія 2" },
];

const Reviews = (props) => {
  const [isFilter, setIsFilter] = useState(false);
  const [selectVacancyId, setSelectVacancyId] = useState(null);
  const reviews = useSelector((state) => state.employerReducer.reviews);

  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params && route.params.vacancyId) {
      setSelectVacancyId(route.params.vacancyId);
    }

    dispatch(getFeedback(selectVacancyId));
  }, []);

  const filterHandler = () => {
    setIsFilter(true);
  };

  const closeModal = () => {
    setIsFilter(false);
  };

  const renderItem = ({ item }) => (
    <WorkerItem
      onPress={() => navigation.navigate("Profile")}
      refuseBtn={true}
      acceptBtn={true}
      id={item._id}
      vacansyId={item.vacansyId}
      status={item.status}
      userId={item.userId}
      workInfo={item.workInfo}
      refuseOnPress={() => dispatch(canseledUser(item._id))}
      acceptOnPress={() => dispatch(acceptUser(item._id))}
    />
  );

  return (
    <LinearGradient
      colors={["#F4F7FF", "#FFFFFF"]}
      style={{ ...styles.container }}
    >
      <RewievsModal isFilter={isFilter} closeModal={closeModal} data={data} />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <ReviewsHeader filterHandler={filterHandler} />
      </View>
      <View style={{ marginTop: 23 }}>
        <ContractFilter data={filters} />
      </View>
      {reviews.length == 0 ? (
        <Text style={styles.noItems}>Поки що ніхто не відкликнувся 😔</Text>
      ) : null}
      <View style={styles.wrapper}>
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          data={reviews}
        />
      </View>
    </LinearGradient>
  );
};

export default Reviews;
