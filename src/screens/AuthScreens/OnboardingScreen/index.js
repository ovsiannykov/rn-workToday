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

const bgImage = require("../../../assets/images/bg.png");

const OnboardingImg1 = require("../../../assets/images/onboarding/onboarding-1.jpeg");
const OnboardingImg2 = require("../../../assets/images/onboarding/onboarding-2.png");
const OnboardingImg3 = require("../../../assets/images/onboarding/onboarding-3.png");
const OnboardingImg4 = require("../../../assets/images/onboarding/onboarding-4.jpeg");
const ukraineImg = require("../../../assets/images/onboarding/ukraine.png");
const polandImg = require("../../../assets/images/onboarding/poland.png");
const ukImg = require("../../../assets/images/onboarding/united-kingdom.png");

const OnboardingScreen = (props) => {
  const [section, setSection] = useState(false);

  const navigation = useNavigation();

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
                <Image style={styles.flag} source={ukraineImg} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSection(true)}>
                <Image style={styles.flag} source={polandImg} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSection(true)}>
                <Image style={styles.flag} source={ukImg} />
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
