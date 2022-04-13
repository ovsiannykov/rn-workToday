import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

import styles from "./styles";
import { sized } from "../../Svg";
import calendarSvg from "../../assets/icons/Calendar.svg";
import filterSvg from "../../assets/icons/filter.svg";

const HomeHeader = (props) => {
  const CalendarIcon = sized(calendarSvg, 28, 28);
  const FilterIcon = sized(filterSvg, 28, 28);

  return (
    <View style={styles.container}>
      <View style={styles.search_box}>
        <Feather name='search' size={20} color='#828282' />
        <TextInput
          style={styles.serach_input}
          placeholder='Пошук'
          placeholderStyle={{ fontSize: 16 }}
        />
      </View>
      <TouchableOpacity style={styles.header_btn}>
        <Fontisto name='map-marker-alt' size={24} color='white' />
      </TouchableOpacity>
      <TouchableOpacity style={styles.header_btn}>
        <CalendarIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.header_btn}>
        <FilterIcon />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
