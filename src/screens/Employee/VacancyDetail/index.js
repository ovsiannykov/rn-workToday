import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import NavigationHeader from "../../../components/NavigationHeader";
import vacancyImage from "../../../assets/images/vacancy_image.jpeg";
import Colors from "../../../constants/Colors";
import sized from "../../../Svg/sized";
import sendSvg from "../../../assets/icons/send.svg";
import walletSvg from "../../../assets/icons/Wallet.svg";
import timeSvg from "../../../assets/icons/time.svg";
import ErrorBlock from "../../../components/ErrorBlock";
import Skill from "../../../components/Skill";
import LongWhiteButton from "../../../components/LongWhiteButton";
import LongBlueButton from "../../../components/LongBlueButton";
import VacancyInfo from "../../../components/VacancyInfo";

const VacancyDetail = (props) => {
  const route = useRoute();

  const SendIcon = sized(sendSvg, 18, 18);
  const WalletIcon = sized(walletSvg, 18, 18);
  const TimeIcon = sized(timeSvg, 24, 24);

  const dutyList = [
    { id: "1", label: "Обов’язок 1" },
    { id: "2", label: "Обов’язок 2" },
    { id: "3", label: "Обов’язок 3" },
  ];

  const skillList = [
    { id: "1", label: "Навик 1" },
    { id: "2", label: "Навик 2" },
    { id: "3", label: "Навик 3" },
  ];

  const compitensesList = [
    { id: "1", label: "Art", its: false },
    { id: "2", label: "Design", its: false },
    { id: "3", label: "Culture", its: true },
    { id: "4", label: "Production", its: false },
  ];

  return (
    <LinearGradient
      colors={["#F4F7FF", "#FFFFFF"]}
      style={{ ...styles.container }}
    >
      <NavigationHeader title={route.params.title} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 39 }}>
          <View style={{ alignItems: "center" }}>
            <VacancyInfo />
          </View>
          <ErrorBlock title='Ви недостатньо компетентні, щоб прийняти завдання' />
          <Text style={{ marginTop: 20, ...styles.company_name }}>
            Необхідні компетенції:
          </Text>
          <View style={{ marginBottom: 20, ...styles.sills_box }}>
            {compitensesList.map((item) => (
              <Skill key={item.id} title={item.label} isTrue={item.its} />
            ))}
          </View>
          <View style={styles.buttons_container}>
            <LongWhiteButton title='Заповнити компетенції' />
            <LongBlueButton title='Відповсіти на вакансію' />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default VacancyDetail;
