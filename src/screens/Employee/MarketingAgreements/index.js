import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../../constants/Colors";
import sized from "../../../Svg/sized";
import chekSvg from "../../../assets/icons/chek-mark.svg";
import ingoSvg from "../../../assets/icons/ingo.svg";
import LongWhiteButton from "../../../components/LongWhiteButton";

const MarketingAgreements = () => {
  const CheckIcon = sized(chekSvg, 12, 12);
  const InfoIcon = sized(ingoSvg, 18, 18);

  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#F4F7FF", "#FFFFFF"]}
      style={{ ...styles.container }}
    >
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>Маркетингові згоди</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <View style={styles.text_box}>
            <View style={styles.icon}>
              <CheckIcon style={styles.check_icon} />
            </View>
            <Text style={styles.text}>
              This one got an incredible amount of backlash the last time I said
              it, so I’m going
            </Text>
          </View>
          <View style={styles.text_box}>
            <View style={styles.icon}>
              <CheckIcon style={styles.check_icon} />
            </View>
            <Text style={styles.text}>
              This one got an incredible amount of backlash the last time I said
              it, so I’m going
              <View style={styles.ingfo_icon}>
                <InfoIcon style={styles.info_icon} />
              </View>
            </Text>
          </View>
          <View style={styles.text_box}>
            <View style={styles.icon}>
              <CheckIcon style={styles.check_icon} />
            </View>
            <Text style={styles.text}>
              This one got an incredible amount of backlash the last time I said
              it, so I’m going
              <View style={styles.ingfo_icon}>
                <InfoIcon style={styles.info_icon} />
              </View>
            </Text>
          </View>
          <View style={styles.text_box}>
            <View style={styles.icon}>
              <CheckIcon style={styles.check_icon} />
            </View>
            <Text style={styles.text}>
              This one got an incredible amount of backlash the last time I said
              it, so I’m going
              <View style={styles.ingfo_icon}>
                <InfoIcon style={styles.info_icon} />
              </View>
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.btn_box}>
        <View style={{ width: 299 }}>
          <LongWhiteButton
            title='Погоджуюся'
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </LinearGradient>
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
    paddingHorizontal: 34,
  },
  text_box: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  icon: {
    marginRight: 20,
  },
  text: {
    color: Colors.veryDarkBlue,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "ComfortaaLight",
    width: 271,
  },
  info_icon: {
    position: "absolute",
    top: -16,
    left: 5,
  },
  check_icon: {
    position: "relative",
    top: 5,
  },
  btn_box: {
    width: "100%",
    position: "absolute",
    bottom: 18,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MarketingAgreements;
