import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Text,
} from "react-native";
import { sized } from "../../Svg";

import homeSvg from "../../assets/icons/home.svg";
import contractsSvg from "../../assets/icons/contracts.svg";
import bookmarksSvg from "../../assets/icons/bookmarks.svg";
import settingsSvg from "../../assets/icons/settings.svg";
import statisticSvg from "../../assets/icons/statistic.svg";
import Colors from "../../constants/Colors";

export const ButtonTabBar = ({ state, descriptors, navigation }) => {
  const vacancyScreens = [undefined]; // enter
  const contractScreens = [];
  const marksScreens = [];
  const profileScreens = [];
  let focusedOptions = descriptors[state.routes[state.index].key].options;
  let routeName = focusedOptions.currentRoute;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const HomeIcon = sized(homeSvg, 20, 20, Colors.darkGray);
  const ContractsIcon = sized(contractsSvg, 28, 28, Colors.darkGray);
  const BookmarksIcon = sized(bookmarksSvg, 20, 20, Colors.darkGray);
  const SettingsIcon = sized(settingsSvg, 20, 20, "green");
  const StatisticIcon = sized(statisticSvg, 20, 20);

  return (
    <View style={styles.TabView__wrapper}>
      <View style={[styles.TabView]}>
        <TouchableOpacity style={styles.TabView__item}>
          <View style={styles.iconWrapper}>
            <HomeIcon />
            <Text style={styles.TabTitle}>Вакансії</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TabView__item_contracts}>
          <View style={styles.iconWrapper}>
            <ContractsIcon />
            <Text style={styles.TabTitle_contrats}>Контракти</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.TabView__item}>
          <View style={styles.iconWrapper_staticric}>
            {/*{(calendarScreens.indexOf(routeName) !== -1) ? <CalendarActiveIcon/> : <CalendarIcon/>}*/}
            <TouchableOpacity style={styles.Statistic_Btn}>
              <StatisticIcon />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.TabView__item}>
          <View style={styles.iconWrapper}>
            <BookmarksIcon />
            <Text style={styles.TabTitle}>Закладки</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TabView__item}>
          <View style={styles.iconWrapper}>
            <SettingsIcon />
            <Text style={styles.TabTitle}>Профіль</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TabView__wrapper: {
    //height: 83,
    //alignItems: "flex-end",
  },
  TabView: {
    backgroundColor: "#FFFFFF",
    height: 65,
    paddingHorizontal: Platform.OS === "ios" ? 20 : 10,
    bottom: 0,
    left: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    // position: "absolute",
    paddingTop: 20,
    paddingBottom: 20,
    zIndex: -1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  TabView__item: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  TabView__item_contracts: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  TabView__caption: {
    // marginTop: 6
  },
  iconWrapper: {
    //height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  iconWrapper_staticric: {
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    width: 56,
    backgroundColor: "white",
    borderRadius: 50,
    position: "absolute",
    top: -55,
    // borderStyle: "solid",
    // borderColor: "#E7E9EC",
    // borderWidth: 1,
  },
  Statistic_Btn: {
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    width: 48,
    backgroundColor: "#FFD617",
    borderRadius: 50,
  },
  cardButton: {
    // position: 'absolute',
    width: 63,
    height: 63,
    backgroundColor: "red",
    borderRadius: 30,
    top: -15,
    zIndex: 1000,
    justifyContent: "center",
    alignItems: "center",
  },
  TabTitle: {
    fontFamily: "ComfortaaRegular",
    fontSize: 10,
    textAlign: "center",
    marginTop: 8,
    color: Colors.darkGray,
  },
  TabTitle_contrats: {
    fontFamily: "ComfortaaRegular",
    fontSize: 10,
    textAlign: "center",
    marginTop: 0,
    color: Colors.darkGray,
  },
});
