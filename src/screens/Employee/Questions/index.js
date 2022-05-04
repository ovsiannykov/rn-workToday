import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";

import styles from "./styles";
import QuestionsContainer from "../../../components/Questions/QuestionsContainer";
import StepOne from "../../../components/Questions/StepOne";
import StepTwo from "../../../components/Questions/StepTwo";
import StepThree from "../../../components/Questions/StepThree";
import StepFour from "../../../components/Questions/StepFour";
import StepFive from "../../../components/Questions/StepFive";


const Questions = (props) => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState(t("Worker.Questions.title1"));

  const navigation = useNavigation();

  const nextStep = () => {
    setStep((step) => step + 1);
  };

  const getStorage = async () => {
    try {
      const value = await AsyncStorage.getItem("@questions");

      if (value !== null) {
        const count = Number(value);
        setStep(count);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getStorage();
  }, []);

  useEffect(() => {
    if (step == 1) {
      setTitle(t("Worker.Questions.title1"));
    }
    if (step == 2) {
      setTitle(t("Worker.Questions.title2"));
    }
    if (step == 3) {
      setTitle(t("Worker.Questions.title3"));
    }
    if (step == 4) {
      setTitle(t("Worker.Questions.title4"));
    }
    if (step == 5) {
      setTitle(t("Worker.Questions.title5"));
    }
  }, [step]);

  return (
    <LinearGradient
      colors={["#F4F7FF", "#FFFFFF"]}
      style={{ ...styles.container }}
    >
      <QuestionsContainer title={title} step={step}>
        {step == 1 ? <StepOne nextStep={nextStep} /> : null}
        {step == 2 ? <StepTwo nextStep={nextStep} /> : null}
        {step == 3 ? <StepThree nextStep={nextStep} /> : null}
        {step == 4 ? <StepFour nextStep={nextStep} /> : null}
        {step == 5 ? <StepFive nextStep={() => navigation.goBack()} /> : null}
      </QuestionsContainer>
    </LinearGradient>
  );
};

export default Questions;
