import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";

import styles from "./styles";
import Step1 from "../../../components/onBoarding/Step1";
import Step2 from "../../../components/onBoarding/Step2";
import Step3 from "../../../components/onBoarding/Step3";
import Step4 from "../../../components/onBoarding/Step4";

const bgImage = require("../../../assets/images/bg.png");

const OnboardingImg1 = require("../../../assets/images/onboarding/onboarding-1.jpeg");
const OnboardingImg2 = require("../../../assets/images/onboarding/onboarding-2.png");
const OnboardingImg3 = require("../../../assets/images/onboarding/onboarding-3.png");
const OnboardingImg4 = require("../../../assets/images/onboarding/onboarding-4.jpeg");

const OnboardingScreen = (props) => {
  const [section, setSection] = useState(1);
  const { t } = useTranslation();
  const navigation = useNavigation();

  const nextHandler = () => {
    setSection(section + 1);
  };

  const storeOnboarding = async () => {
    try {
      await AsyncStorage.setItem("onboarding", "true");
      navigation.navigate("Login");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ImageBackground
      source={bgImage}
      resizeMode='cover'
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.imagesContainer}>
          <View style={styles.imagesBox}>
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
          </View>
        </View>
      </ScrollView>
      <View style={styles.content_box}>
        {section == 1 ? (
          <Step1
            onPress={nextHandler}
            title={t("OnBoardingWorker.chooseLanguage")}
            subtitle={t("OnBoardingWorker.default")}
          />
        ) : null}
        {section == 2 ? (
          <Step2
            onPress={nextHandler}
            title={t("OnBoardingEmployer.Step2title")}
            subtitle={t("OnBoardingEmployer.Step2subtitle")}
          />
        ) : null}
        {section == 3 ? (
          <Step3
            onPress={nextHandler}
            title={t("OnBoardingEmployer.Step3title")}
            subtitle={t("OnBoardingEmployer.Step3subtitle")}
          />
        ) : null}
        {section == 4 ? (
          <Step4
            title={t("OnBoardingEmployer.Step4title")}
            subtitle={t("OnBoardingEmployer.Step4subtitle")}
            onPress={storeOnboarding}
          />
        ) : null}
      </View>
    </ImageBackground>
  );
};

export default OnboardingScreen;
