import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Alert,
  FlatList,
  ActivityIndicator,
  Text,
  RefreshControl,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";
import Colors from "../../../constants/Colors";
import HomeHeader from "../../../components/HomeHeader";
import Map from "../../../components/Map";
import Vacancy from "../../../components/Vacancy";
import DateFilter from "../../../components/DateFilter";
import HomeModal from "../../../components/HomeModal";
import StoryviewModal from "../../../components/StoryviewModal";
import {
  vacanciesWorkerThunk,
  getCategories,
  getInfo,
  getFavorites,
} from "../../../redux/worker/worker-thunks";
import {
  setSelectVacancy,
  setVacancyInfo,
} from "../../../redux/worker/worker-actions";

const HomeScreen = (props) => {
  const [isMap, setIsMap] = useState(false);
  const [isCalendar, setIsCalendar] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [storyViewModal, setStoryViewModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [searchText, setSearchText] = useState();

  const data = useSelector((state) => state.workerReducer.vacancies);
  const dataInfo = useSelector((state) => state.workerReducer.userInfo);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const getStorageQuesstion = async () => {
    try {
      const value = await AsyncStorage.getItem("@questions");

      if (value == "5") {
        setStoryViewModal(false);
      } else {
        setTimeout(() => {
          setStoryViewModal(true);
        }, 1000);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const addStorageQuestion = async () => {
    if (dataInfo && dataInfo.step5Info) {
      await AsyncStorage.setItem("@questions", "5");
    }
  };

  // StoryModal
  useEffect(() => {
    addStorageQuestion();
    getStorageQuesstion();
  }, [dataInfo]);

  const fetchData = () => {
    dispatch(getFavorites());
    dispatch(getCategories());
    dispatch(getInfo());
  };

  // fetchData
  useEffect(() => {
    setLoading(true);
    fetchData();
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Упс...", "Схоже, у нас немає доступу до геолокації 😔");
        return;
      }

      let geo = await Location.getCurrentPositionAsync({});
      await setLocation(geo);
    })();
    (async () => {
      await dispatch(vacanciesWorkerThunk(location, searchText));
    })();
    setLoading(false);
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

  const closeStoryviewModal = () => {
    setStoryViewModal(false);
  };

  const selectVacancyHandler = (item) => {
    dispatch(setSelectVacancy(item));
  };

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
      onPress={async () => {
        await dispatch(setVacancyInfo(item));
        navigation.navigate("VacancyDetail");
      }}
    />
  );

  return (
    <>
      <LinearGradient colors={["#F4F7FF", "#FFFFFF"]} style={styles.container}>
        <StoryviewModal
          isVisible={storyViewModal}
          close={closeStoryviewModal}
        />
        <View style={styles.header_box}>
          <HomeModal isFilter={isFilter} closeModal={closeModal} />
          <HomeHeader
            mapHandler={mapHandler}
            isMap={isMap}
            calendarHandler={calendarHandler}
            isCalendar={isCalendar}
            filterHandler={filterHandler}
            isFilter={isFilter}
            onChangeText={setSearchText}
            value={searchText}
          />
          {isCalendar ? <DateFilter /> : null}
          {isMap ? <Map data={data} /> : null}
        </View>
        <View
          style={{
            ...styles.vacancy_scrollBox,
            paddingBottom: 120,
            marginTop: 1,
          }}
        >
          {data.length == 0 ? (
            <Text style={styles.noItems}>
              Поки що немає актуальних вакансій 😔
            </Text>
          ) : null}
          <FlatList
            contentContainerStyle={{ flexGrow: 1 }}
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={fetchData} />
            }
          />
        </View>
      </LinearGradient>
    </>
  );
};

export default HomeScreen;
