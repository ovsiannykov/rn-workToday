import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";
import QuestionsContainer from "../../../components/Questions/QuestionsContainer";
import StepOne from "../../../components/Questions/StepOne";
import StepTwo from "../../../components/Questions/StepTwo";
import StepThree from "../../../components/Questions/StepThree";
import StepFour from "../../../components/Questions/StepFour";

const Questions = (props) => {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("Основна інформація");

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
        {step == 2 ? <StepOne nextStep={nextStep} /> : null}
        {step == 4 ? <StepTwo nextStep={nextStep} /> : null}
        {step == 1 ? <StepFour nextStep={nextStep} /> : null}
      </QuestionsContainer>
    </LinearGradient>
  );
};

export default Questions;
