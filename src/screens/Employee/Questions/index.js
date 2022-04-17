import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";
import QuestionsContainer from "../../../components/Questions/QuestionsContainer";
import StepOne from "../../../components/Questions/StepOne";

const Questions = (props) => {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("Основна інформація");

  const nextStepOne = () => {
    setStep(2);
  };

  const Step = <StepOne nextStep={nextStepOne} />;

  return (
    <LinearGradient
      colors={["#F4F7FF", "#FFFFFF"]}
      style={{ ...styles.container }}
    >
      <QuestionsContainer children={Step} title={title} step={step} />
    </LinearGradient>
  );
};

export default Questions;
