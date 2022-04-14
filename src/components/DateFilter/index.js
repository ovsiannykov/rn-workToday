import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import styles from "./styles";

const DateFilter = (props) => {
  return (
    <ScrollView
      style={styles.scroll_box}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity style={{ ...styles.dateItem_1, ...styles.shadow }}>
        <Text style={{ ...styles.text }}>25 Березня</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ ...styles.dateItem_2, ...styles.shadow }}>
        <Text style={{ color: "white", ...styles.text }}>25 Березня</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ ...styles.dateItem_3, ...styles.shadow }}>
        <Text style={{ ...styles.text }}>25 Березня</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ ...styles.dateItem_2, ...styles.shadow }}>
        <Text style={{ color: "white", ...styles.text }}>25 Березня</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ ...styles.dateItem_4, ...styles.shadow }}>
        <Text style={{ ...styles.text }}>25 Березня</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DateFilter;
