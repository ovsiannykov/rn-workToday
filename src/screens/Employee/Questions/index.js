import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";
import QuestionsContainer from "../../../components/Questions/QuestionsContainer";
import StepOne from "../../../components/Questions/StepOne";
import Step1 from "../../../components/Questions/Step1";

const Questions = (props) => {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("Основна інформація");

  const nextStepOne = () => {
    setStep((step) => step + 1);
  };

  return (
    <LinearGradient
      colors={["#F4F7FF", "#FFFFFF"]}
      style={{ ...styles.container }}
    >
      <QuestionsContainer title={title} step={step}>
        {step == 1 ? <Step1 nextStep={nextStepOne} /> : null}
      </QuestionsContainer>
    </LinearGradient>
  );
};

export default Questions;
