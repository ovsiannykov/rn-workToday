import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Text,
} from "react-native";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { sized } from "../../Svg";
import homeSvg from "../../assets/icons/home.svg";
import contractsSvg from "../../assets/icons/contracts.svg";
import bookmarksSvg from "../../assets/icons/bookmarks.svg";
import settingsSvg from "../../assets/icons/settings.svg";
import statisticSvg from "../../assets/icons/statistic.svg";
import activeHomeSvg from "../../assets/icons/active/Home.svg";
import { getFeedback } from "../../redux/employer/employer-thunks";

import activeContractsSvg from "../../assets/icons/active/Articles.svg";
import activebookmarksSvg from "../../assets/icons/active/Bookmark.svg";
import activeProfileSvg from "../../assets/icons/active/Menu.svg";
import Colors from "../../constants/Colors";

export const ButtonTabBarEmployer = ({ state, descriptors, navigation }) => {
  const vacancyScreens = [undefined]; // enter name screens
  const contractScreens = ["Reviews", "Profile", "Feedback", "Workers"];
  const bookmarksScreens = ["CreateVacancy"];
  const profileScreens = ["CompanyProfile", "CreateCompany"];
  let focusedOptions = descriptors[state.routes[state.index].key].options;
  let routeName = focusedOptions.currentRoute;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const HomeIcon = sized(homeSvg, 22, 22);
  const ContractsIcon = sized(contractsSvg, 21, 21);
  const BookmarksIcon = sized(bookmarksSvg, 20, 20);
  const SettingsIcon = sized(settingsSvg, 20, 20, "green");
  const StatisticIcon = sized(statisticSvg, 20, 20);

  const ActiveHomeIcon = sized(activeHomeSvg, 22, 22);
  const ActiveContractsIcon = sized(activeContractsSvg, 24, 24);
  const ActiveBookmarksIcon = sized(activebookmarksSvg, 21, 21);
  const ActiveSettingsIcon = sized(activeProfileSvg, 23, 23);

  return (
    <View style={styles.TabView__wrapper}>
      <View style={[styles.TabView]}>
        <TouchableOpacity
          style={styles.TabView__item}
          onPress={() => navigation.navigate("Vacancies")}
        >
          <View style={styles.iconWrapper}>
            {vacancyScreens.indexOf(routeName) !== -1 ? (
              <ActiveHomeIcon />
            ) : (
              <HomeIcon />
            )}
            <Text
              style={{
                color:
                  vacancyScreens.indexOf(routeName) !== -1
                    ? "#376AED"
                    : "#7B8BB2",
                ...styles.TabTitle,
              }}
            >
              {t("Employer.Tabbar.vacancies")}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            await dispatch(getFeedback());
            navigation.navigate("Reviews");
          }}
          style={styles.TabView__item}
        >
          <View style={styles.iconWrapper}>
            {contractScreens.indexOf(routeName) !== -1 ? (
              <ActiveContractsIcon />
            ) : (
              <ContractsIcon />
            )}
            <Text
              style={{
                color:
                  contractScreens.indexOf(routeName) !== -1
                    ? "#376AED"
                    : "#7B8BB2",
                ...styles.TabTitle,
              }}
            >
              {t("Employer.Tabbar.reviews")}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.TabView__item}>
          <View style={styles.iconWrapper_staticric}>
            {/*{(contractScreens.indexOf(routeName) !== -1) ? <CalendarActiveIcon/> : <BookmarksIcon/>}*/}
            <TouchableOpacity
              style={styles.Statistic_Btn}
              onPress={() => navigation.navigate("Statistics")}
            >
              <StatisticIcon />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TabView__item}
          onPress={() => navigation.navigate("CreateVacancy")}
        >
          <View style={styles.iconWrapper}>
            {bookmarksScreens.indexOf(routeName) !== -1 ? (
              <ActiveBookmarksIcon />
            ) : (
              <BookmarksIcon />
            )}
            <Text
              style={{
                width: 46,
                color:
                  bookmarksScreens.indexOf(routeName) !== -1
                    ? "#376AED"
                    : "#7B8BB2",
                ...styles.TabTitle,
              }}
            >
              {t("Employer.Tabbar.add")}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TabView__item}
          onPress={() => navigation.navigate("CompanyProfile")}
        >
          <View style={styles.iconWrapper}>
            {profileScreens.indexOf(routeName) !== -1 ? (
              <ActiveSettingsIcon />
            ) : (
              <SettingsIcon />
            )}
            <Text
              style={{
                color:
                  profileScreens.indexOf(routeName) !== -1
                    ? "#376AED"
                    : "#7B8BB2",
                ...styles.TabTitle,
              }}
            >
              {t("Employer.Tabbar.profile")}
            </Text>
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
    paddingBottom: 35,
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
  },
  TabTitle_contrats: {
    fontFamily: "ComfortaaRegular",
    fontSize: 10,
    textAlign: "center",
    marginTop: 0,
    color: Colors.darkGray,
  },
});
