import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import Colors from "../../constants/Colors";

const standartData = ["Категорія 1", "Категорія 2"];

const RadioButtons = (props) => {
  const [data, setData] = useState(standartData);
  const [radioBtn, setRadioBtn] = useState();

  const categories = useSelector((state) => state.employerReducer.categories);

  useEffect(() => {
    if (categories) {
      setData(categories);
    }
  }, []);

  const RadioItem = (props) => {
    if (props.all) {
      return (
        <TouchableOpacity
          style={styles.btn_all}
          onPress={() => setRadioBtn(props.id)}
        >
          <View style={styles.icon_box}>
            <Ionicons
              name={
                radioBtn == props.id
                  ? "radio-button-on"
                  : "radio-button-off-sharp"
              }
              size={18}
              color='black'
            />
          </View>
          <Text style={styles.text_all}>{props.title}</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setRadioBtn(props.id)}
      >
        <View style={styles.icon_box}>
          <Ionicons
            name={
              radioBtn == props.id
                ? "radio-button-on"
                : "radio-button-off-sharp"
            }
            size={18}
            color='black'
          />
        </View>
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ marginTop: 10 }}>
      {data.map((item) => (
        <RadioItem key={item} title={item} id={item} />
      ))}
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
  btn_all: {
    width: 333,
    height: 44,
    alignItems: "center",
    paddingHorizontal: 21,
    marginBottom: 16,
    display: "flex",
    flexDirection: "row",
  },
  text_all: {
    color: Colors.darkBlue,
    fontSize: 16,
    fontWeight: "700",
  },
});

export default RadioButtons;
