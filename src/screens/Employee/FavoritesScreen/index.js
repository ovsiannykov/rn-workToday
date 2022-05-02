import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, ScrollView, FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import HomeHeader from "../../../components/HomeHeader";
import Map from "../../../components/Map";
import Vacancy from "../../../components/Vacancy";
import DateFilter from "../../../components/DateFilter";
import HomeModal from "../../../components/HomeModal";
import styles from "./styles";
import { getFavorites } from "../../../redux/worker/worker-thunks";
import { setVacancyInfo } from "../../../redux/worker/worker-actions";

const FavoritesScreen = (props) => {
  const [isMap, setIsMap] = useState(false);
  const [isCalendar, setIsCalendar] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  const favoritesList = useSelector(
    (state) => state.workerReducer.favoritesList
  );
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  const mapHandler = () => {
    setIsMap(!isMap);
    setIsCalendar(false);
    setIsFilter(false);
  };

  const calendarHandler = () => {
    setIsCalendar(!isCalendar);
    setIsMap(false);
    setIsFilter(false);
  };

  const filterHandler = () => {
    setIsFilter(!isFilter);
    setIsMap(false);
    setIsCalendar(false);
  };

  const closeModal = () => {
    setIsFilter(false);
  };

  const renderItem = ({ item }) => (
    <Vacancy
      title={item.Title}
      info={item.info}
      id={item._id}
      photos={item.photos}
      priceTotal={item.priceTotal}
      place={item.place}
      timeStart={item.timeStart}
      timeEnd={item.timeEnd}
      item={item}
      addFavorite={() => dispatch(addFavorite(item))}
      onPress={async () => {
        await dispatch(setVacancyInfo(item));
        navigation.navigate("VacancyDetail");
      }}
    />
  );

  return (
    <>
      <LinearGradient colors={["#F4F7FF", "#FFFFFF"]} style={styles.container}>
        <View style={styles.header_box}>
          <HomeModal isFilter={isFilter} closeModal={closeModal} />
          <HomeHeader
            mapHandler={mapHandler}
            isMap={isMap}
            calendarHandler={calendarHandler}
            isCalendar={isCalendar}
            filterHandler={filterHandler}
            isFilter={isFilter}
          />
          {isCalendar ? <DateFilter /> : null}
          {isMap ? <Map data={favoritesList} /> : null}
        </View>
        <View style={styles.vacancy_scrollBox}>
          <View style={{ paddingBottom: 120, ...styles.vacancy_box }}>
            {favoritesList.length == 0 ? (
              <Text style={styles.noItems}>
                Ви ще не додали жодної вакансії до закладок
              </Text>
            ) : null}
            <FlatList
              contentContainerStyle={{ flexGrow: 1 }}
              data={favoritesList}
              keyExtractor={(item) => item._id}
              renderItem={renderItem}
            />
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default FavoritesScreen;
