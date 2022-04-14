import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RadioButtons = (props) => {
  const [radioBtn, setRadioBtn] = useState(true);

  return (
    <View style={{ marginTop: 10 }}>
      <TouchableOpacity style={styles.btn} onPress={() => setRadioBtn(true)}>
        <View style={styles.icon_box}>
          <Ionicons
            name={radioBtn ? "radio-button-on" : "radio-button-off-sharp"}
            size={18}
            color='black'
          />
        </View>
        <Text style={styles.text}>Категорія 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => setRadioBtn(false)}>
        <View style={styles.icon_box}>
          <Ionicons
            name={!radioBtn ? "radio-button-on" : "radio-button-off-sharp"}
            size={18}
            color='black'
          />
        </View>
        <Text>Категорія 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 333,
    height: 44,
    borderRadius: 6,
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0.0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.6,
    elevation: 1,
    alignItems: "center",
    paddingHorizontal: 21,
    marginBottom: 16,
    display: "flex",
    flexDirection: "row",
  },
  icon_box: {
    marginRight: 29,
  },
  text: {
    color: "#141010",
    fontSize: 14,
  },
});

export default RadioButtons;
