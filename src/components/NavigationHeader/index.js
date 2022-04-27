import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRoute } from "@react-navigation/native";

import Colors from "../../constants/Colors";
import sized from "../../Svg/sized";
import backSvg from "../../assets/icons/back.svg";

const NavigationHeader = (props) => {
  const BackIcon = sized(backSvg, 24, 24);
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.back_btn}
          onPress={() => navigation.goBack()}
        >
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{props.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    // height: 60,
    marginBottom: 0,
    paddingHorizontal: 40,
    paddingBottom: 22,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  headerTitle: {
    fontFamily: "ComfortaaLight",
    fontSize: 24,
    color: Colors.veryDarkBlue,
    lineHeight: 26.7,
  },
  back_btn: {
    marginRight: 26.6,
  },
});

export default NavigationHeader;
