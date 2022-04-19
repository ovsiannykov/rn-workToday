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
import filterSvg from "../../assets/icons/filter.svg";
import Colors from "../../constants/Colors";
import Search from "../../components/Search";

const ReviewsHeader = (props) => {
  const FilterIcon = sized(filterSvg, 28, 28);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search_box}>
        <Search />
      </View>
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

export default ReviewsHeader;
