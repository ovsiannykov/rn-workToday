import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

import styles from "./styles";
import { sized } from "../../Svg";
import calendarSvg from "../../assets/icons/Calendar.svg";
import filterSvg from "../../assets/icons/filter.svg";
import Colors from "../../constants/Colors";

const HomeHeader = (props) => {
  const CalendarIcon = sized(calendarSvg, 28, 28);
  const FilterIcon = sized(filterSvg, 28, 28);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search_box}>
        <Feather name='search' size={20} color='#828282' />
        <TextInput
          style={styles.serach_input}
          placeholder='Пошук'
          placeholderTextColor='#828282'
          placeholderStyle={{ fontSize: 16 }}
          value={props.value}
          onChangeText={props.onChangeText}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: !props.isMap ? Colors.yellow : Colors.primaryBlue,
          ...styles.header_btn,
        }}
        onPress={props.mapHandler}
      >
        <Fontisto name='map-marker-alt' size={24} color='white' />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.calendarHandler}
        style={{
          backgroundColor: !props.isCalendar
            ? Colors.yellow
            : Colors.primaryBlue,
          ...styles.header_btn,
        }}
      >
        <CalendarIcon />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.filterHandler}
        style={{
          backgroundColor: !props.isFilter ? Colors.yellow : Colors.primaryBlue,
          ...styles.header_btn,
        }}
      >
        <FilterIcon />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeHeader;
