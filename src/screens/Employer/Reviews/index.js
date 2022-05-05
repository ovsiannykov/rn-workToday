import React, { useState } from "react";
import { View, ScrollView, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import ReviewsHeader from "../../../components/ReviewsHeader";
import ContractFilter from "../../../components/ContractFilter";
import WorkerItem from "../../../components/WorkerItem";
import RewievsModal from "../../../components/RewievsModal";
import HomeModal from "../../../components/HomeModal";

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
  const reviews = useSelector((state) => state.employerReducer.reviews);

  //console.log(reviews);

  const navigation = useNavigation();

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
      refuseOnPress={() => console.log("i")}
      acceptOnPress={() => console.log("i")}
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
      <View style={styles.wrapper}>
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          data={reviews}
        />
        {/* <WorkerItem
          status='Прийнято'
          refuseBtn={true}
          acceptBtn={true}
          onPress={() => navigation.navigate("Profile")}
        />
        <WorkerItem
          status='Відхилино'
          acceptBtn={true}
          onPress={() => navigation.navigate("Profile")}
        /> */}
      </View>
    </LinearGradient>
  );
};

export default Reviews;
