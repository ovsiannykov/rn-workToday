import React, {useEffect, useState} from "react";
import {View, StyleSheet, TouchableOpacity, Platform} from "react-native";
import {sized} from "../Svg";

export const ButtonTabBar = ({state, descriptors, navigation}) => {

  const vacancyScreens = [undefined] // enter
  const contractScreens = []
  const marksScreens = []
  const profileScreens = []
  let focusedOptions = descriptors[state.routes[state.index].key].options
  let routeName = focusedOptions.currentRoute
  if (focusedOptions.tabBarVisible === false) {
    return null
  }
  return (
    <View style={styles.TabView__wrapper}>
      <View style={[styles.TabView]}>
        <TouchableOpacity style={styles.TabView__item} onPress={() => navigation.navigate("NewsLetter")}>
          <View style={styles.iconWrapper}>
            {/*{(messageScreens.indexOf(routeName) !== -1) ? <MessageActiveIcon/> : <MessageIcon/>}*/}
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TabView__item} onPress={() => navigation.navigate('Clients')}>
          <View style={styles.iconWrapper}>
            {/*{(groupScreens.indexOf(routeName) !== -1) ? <GroupActiveIcon/> : <GroupIcon/>}*/}
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TabView__item} onPress={() => navigation.navigate('Calendar')}>
          <View style={styles.iconWrapper}>
            {/*{(calendarScreens.indexOf(routeName) !== -1) ? <CalendarActiveIcon/> : <CalendarIcon/>}*/}
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TabView__item} onPress={() => navigation.navigate('MyPayments')}>
          <View style={styles.iconWrapper}>
            {/*{(dollarScreens.indexOf(routeName) !== -1) ? <DollarActiveIcon/> : <DollarIcon/>}*/}
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TabView__item} onPress={() => navigation.navigate('Settings')}>
          <View style={styles.iconWrapper}>
            {/*{(settingsScreens.indexOf(routeName) !== -1) ? <SettingsActiveIcon/> : <SettingsIcon/>}*/}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TabView__wrapper: {
    // height: 130,
    // alignItems: 'flex-end'
  },
  TabView: {
    backgroundColor: "#FFFFFF",
    height: 65,
    paddingHorizontal: Platform.OS === 'ios' ? 20 : 10,
    bottom: 0,
    left: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // position: "absolute",
    paddingTop: 20,
    paddingBottom: Platform.OS === 'ios' ? 21 : 8,
    zIndex: -1,
    borderStyle: 'solid',
    borderTopColor: '#E7E9EC',
    borderTopWidth: 1
  },
  TabView__item: {
    width: '20%',
    alignItems: 'center',
  },
  TabView__caption: {
    // marginTop: 6
  },
  iconWrapper: {
    // height: 30
  },
  cardButton: {
    // position: 'absolute',
    width: 63,
    height: 63,
    backgroundColor: 'red',
    borderRadius: 30,
    top: -15,
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
