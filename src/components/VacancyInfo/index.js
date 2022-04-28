import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import vacancyImage from "../../assets/images/vacancy_image.jpeg";
import Colors from "../../constants/Colors";
import sized from "../../Svg/sized";
import sendSvg from "../../assets/icons/send.svg";
import walletSvg from "../../assets/icons/Wallet.svg";
import timeSvg from "../../assets/icons/time.svg";
import Skill from "../../components/Skill";

const VacancyInfo = (props) => {
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

  return (
    <View>
      <View style={styles.vacancy_info}>
        <View style={styles.image_box}>
          <Image source={vacancyImage} style={styles.image} />
        </View>
        <View>
          <Text style={styles.company_name}>{props.company ?? "Компанія"}</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Feather name='clock' size={14} color={Colors.darkBlue} />
            <Text style={styles.time}>
              {props.timeStart ?? "23.03.2022"} -{" "}
              {props.timeEnd ?? "25.03.2022"}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.send_icon}>
            <SendIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.favorite_icon}>
            <Ionicons
              name='bookmark-outline'
              size={21}
              color={Colors.primaryBlue}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 20, ...styles.vacancy_info }}>
        <WalletIcon />
        <Text style={styles.price}>{props.priceTotal ?? "0"} zl/день</Text>
        <TimeIcon />
        <Text style={styles.price}>{props.pricePerHour ?? "0"} zl/год.</Text>
      </View>
      <View style={{ marginTop: 7, marginLeft: -2, ...styles.vacancy_info }}>
        <MaterialCommunityIcons
          name='map-marker'
          size={22}
          color={Colors.darkBlue}
        />
        <Text style={styles.price}>
          {props.place ?? "Вулиця Івана 23, буд 56}"}
        </Text>
      </View>
      <Text style={{ marginTop: 18, ...styles.company_name }}>
        Категорія вакансії: {props.type ?? "Невідомо"}
      </Text>
      <Text style={{ marginTop: 20, ...styles.company_name }}>Обов'язки:</Text>
      <View>
        {props.resp
          ? props.resp.map((item) => (
              <Text key={item.name} style={styles.listItem}>
                {"\u2022 " + item.name}
              </Text>
            ))
          : dutyList.map((item) => (
              <Text key={item.id} style={styles.listItem}>
                {"\u2022 " + item.label}
              </Text>
            ))}
      </View>
      <Text style={{ marginTop: 20, ...styles.company_name }}>
        Необхідні навички:
      </Text>
      <View style={{ marginBottom: 20 }}>
        {props.skills
          ? props.skills.map((item) => (
              <Text key={item.name} style={styles.listItem}>
                {"\u2022 " + item.name}
              </Text>
            ))
          : skillList.map((item) => (
              <Text key={item.id} style={styles.listItem}>
                {"\u2022 " + item.label}
              </Text>
            ))}
      </View>
    </View>
  );
};

export default VacancyInfo;
