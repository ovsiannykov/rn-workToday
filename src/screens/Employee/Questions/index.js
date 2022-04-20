import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import QuestionsContainer from "../../../components/Questions/QuestionsContainer";
import StepOne from "../../../components/Questions/StepOne";
import StepTwo from "../../../components/Questions/StepTwo";
import StepThree from "../../../components/Questions/StepThree";
import StepFour from "../../../components/Questions/StepFour";
import StepFive from "../../../components/Questions/StepFive";

const Questions = (props) => {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("Основна інформація");

  const navigation = useNavigation();

  const nextStep = () => {
    setStep((step) => step + 1);
  };

  useEffect(() => {
    if (step == 1) {
      setTitle("Основна інформація");
    }
    if (step == 2) {
      setTitle("Працевлаштування");
    }
    if (step == 3) {
      setTitle("Особисті дані");
    }
    if (step == 4) {
      setTitle("Адресса проживання");
    }
    if (step == 5) {
      setTitle("Завантаження документів");
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
