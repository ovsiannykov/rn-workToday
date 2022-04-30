import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Colors from "../../constants/Colors";
import LongWhiteButton from "../LongWhiteButton";

const CompetenciesResult = (props) => {
  return (
    <View style={{ paddingBottom: 40, ...styles.wrapper }}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        //style={{ paddingBottom: 150 }}
      >
        <View style={{ paddingBottom: 180 }}>
          <View style={{ width: "75%" }}>
            <Text style={styles.label}>Сучасні дослідження k1</Text>
            <Text style={styles.input}>
              {props.info.competencies[0].status == true
                ? props.info.competencies[0].uploadPath[0].split("/").pop()
                : "Не завантажено"}
            </Text>
          </View>
          <View style={{ marginTop: 20, width: "75%" }}>
            <Text style={styles.label}>k2</Text>
            <Text style={styles.input}>
              {props.info.competencies[1].status == true
                ? props.info.competencies[1].uploadPath[0].split("/").pop()
                : "Не завантажено"}
            </Text>
          </View>
          <View style={{ marginTop: 20, width: "75%" }}>
            <Text style={styles.label}>k3</Text>
            <Text style={styles.input}>
              {props.info.competencies[2].status == true
                ? props.info.competencies[2].uploadPath[0].split("/").pop()
                : "Не завантажено"}
            </Text>
          </View>
          <View style={{ marginTop: 20, width: "75%" }}>
            <Text style={styles.label}>k4</Text>
            <Text style={styles.input}>
              {props.info.competencies[3].status == true
                ? props.info.competencies[3].uploadPath[0].split("/").pop()
                : "Не завантажено"}
            </Text>
          </View>
          <View style={{ marginTop: 20, width: "75%" }}>
            <Text style={styles.label}>k5</Text>
            <Text style={styles.input}>
              {props.info.competencies[4].status == true
                ? props.info.competencies[4].uploadPath[0].split("/").pop()
                : "Не завантажено"}
            </Text>
          </View>
        </View>
        <View style={styles.btn_box}>
          <View style={{ width: 299 }}>
            <LongWhiteButton title='Перезавантажити' onPress={props.onPress} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: Platform.OS == "ios" ? 65 : 40,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "ComfortaaBold",
    color: Colors.veryDarkBlue,
    marginBottom: 40,
    width: 328,
  },
  wrapper: {
    paddingHorizontal: 17,
  },
  label: {
    color: Colors.darkBlue,
    fontFamily: "ComfortaaLight",
    fontSize: 14,
    lineHeight: 16,
  },
  sub_title: {
    width: 268,
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "ComfortaaRegular",
  },
  input: {
    borderBottomColor: "#D9DFEB",
    borderBottomWidth: 2,
    paddingVertical: 10,
    fontFamily: "ComfortaaLight",
    width: 300,
  },
  label: {
    color: Colors.darkBlue,
    fontFamily: "ComfortaaLight",
    fontSize: 14,
    lineHeight: 16,
    marginBottom: 15,
  },
  select_text: {
    fontSize: 16,
    fontFamily: "ComfortaaRegular",
    marginLeft: 16,
  },
  select_input: {
    backgroundColor: "white",
    width: 294,
    height: 44,
    borderRadius: 14,
    alignItems: "flex-start",
    justifyContent: "center",
    display: "flex",
  },
  select_box: {
    width: 294,
    minHeight: 132,
    borderRadius: 14,
    backgroundColor: "#F5F5F5",
  },
  select_variant: {
    height: 44,
    width: 294,
    justifyContent: "center",
    borderBottomColor: "#D9DFEB",
    borderBottomWidth: 0.5,
    borderRadius: 18,
  },
  btn_box: {
    //width: SCREEN_WIDTH - 70,
    width: "100%",
    position: "absolute",
    bottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CompetenciesResult;
