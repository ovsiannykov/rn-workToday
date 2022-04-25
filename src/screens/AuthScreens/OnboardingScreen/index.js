import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { sized } from "../../../Svg";
import ukraineSvg from "../../../assets/icons/ukraine-flag.svg";
import polandSvg from "../../../assets/icons/poland-flag.svg";
import ukSvg from "../../../assets/icons/united-kingdom-flag";

const bgImage = require("../../../assets/images/bg.png");

const OnboardingImg1 = require("../../../assets/images/onboarding/onboarding-1.jpeg");
const OnboardingImg2 = require("../../../assets/images/onboarding/onboarding-2.png");
const OnboardingImg3 = require("../../../assets/images/onboarding/onboarding-3.png");
const OnboardingImg4 = require("../../../assets/images/onboarding/onboarding-4.jpeg");

const OnboardingScreen = (props) => {
  const [section, setSection] = useState(false);

  const navigation = useNavigation();

  const UkraineIcon = sized(ukraineSvg, 63, 63);
  const PolandIcon = sized(polandSvg, 63, 63);
  const UkIcon = sized(ukSvg, 63, 63);

  return (
    <ImageBackground
      source={bgImage}
      resizeMode='cover'
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.row_one}>
          <Image source={OnboardingImg1} style={styles.img_smal} />
          <Image
            source={OnboardingImg2}
            style={{ marginLeft: 12.06, ...styles.img_big }}
          />
        </View>
        <View style={styles.row_two}>
          <Image source={OnboardingImg3} style={styles.img_big} />
          <Image
            source={OnboardingImg4}
            style={{ marginLeft: 12.06, ...styles.img_smal }}
          />
        </View>
      </ScrollView>
      <View style={styles.content_box}>
        {!section ? (
          <View style={styles.slide}>
            <Text style={styles.title}>Оберіть мову застосунку</Text>
            <Text style={styles.subtitle}>
              За умовчанням обрана Українська мова
            </Text>
            <View style={styles.flags_box}>
              <TouchableOpacity onPress={() => setSection(true)}>
                <UkraineIcon style={styles.flag} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSection(true)}>
                <PolandIcon style={styles.flag} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSection(true)}>
                <UkIcon style={styles.flag} />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 30, ...styles.pionts_box }}>
              <View style={styles.point_big} />
              <View style={styles.point_smal} />
              <View style={styles.point_smal} />
              <View style={styles.point_smal} />
            </View>
          </View>
        ) : (
          <View style={styles.slide}>
            <Text style={styles.title}>Текст про застосунок</Text>
            <Text style={styles.subtitle}>
              Якійсь текст про застосунок, як їм користуватися і так далі і тому
              подібне
            </Text>
            <View style={styles.slide2_content}>
              <View style={styles.pionts_box}>
                <View style={styles.point_smal} />
                <View style={styles.point_smal} />
                <View style={styles.point_smal} />
                <View style={styles.point_big} />
              </View>
              <TouchableOpacity
                style={styles.next_button}
                onPress={() => navigation.navigate("Login")}
              >
                <AntDesign name='arrowright' size={24} color='white' />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

export default OnboardingScreen;
