import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Platform } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { sized } from "../../Svg";
import linkSvg from "../../assets/icons/link.svg";
import walletSvg from "../../assets/icons/Wallet.svg";
import Colors from "../../constants/Colors";
import VacancyStatusText from "../../components/VacancyStatusText";
import { API_BASE_URL } from "../../redux/instance";

const image = require("../../assets/images/vacancy.jpeg");
const LinkIcon = sized(linkSvg, 12, 12);
const WalletIcon = sized(walletSvg, 16, 16);

const Vacancy = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {props.status ? null : (
        <TouchableOpacity
          onPress={() => setIsFavorite(!isFavorite)}
          style={styles.favorite}
        >
          {isFavorite ? (
            <Ionicons name='bookmark' size={22} color='#376AED' />
          ) : (
            <Ionicons name='bookmark-outline' size={22} color='#376AED' />
          )}
        </TouchableOpacity>
      )}
      <View style={styles.content}>
        <Image
          style={styles.image}
          //source={{ uri: `${API_BASE_URL}/static/${props.photos[0]}` }}
          source={image}
        />
        <View style={{ marginLeft: 15 }}>
          <Text style={styles.title}>{props.title ?? "Юрист"}</Text>
          <Text style={styles.description}>{props.info ?? "Инфо..."}</Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          ...styles.content,
        }}
      >
        <View style={{ marginTop: 5, maxWidth: 160 }}>
          <View style={{ alignItems: "center", ...styles.content }}>
            <WalletIcon />
            <Text style={styles.sub_content}>
              {props.priceTotal ?? "500"} zl
            </Text>
            <EvilIcons name='clock' size={22} color='#2D4379' />
            <Text style={styles.sub_content}>
              {props.timeStart ?? "23.03.2022"} -{" "}
              {props.timeEnd ?? "25.03.2022"}
            </Text>
          </View>
          <View
            style={{ marginTop: 5, alignItems: "center", ...styles.content }}
          >
            <Fontisto name='map-marker-alt' size={20} color='#2D4379' />
            <Text style={styles.place}>
              {props.place ?? "Вулиця Івана 23, буд 56"}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.link_btn} onPress={props.onPress}>
          <Text style={styles.link_title}>Перейти</Text>
          <LinkIcon />
        </TouchableOpacity>
      </View>
      {props.status ? (
        <View style={styles.status_box}>
          <VacancyStatusText text={props.status} />
        </View>
      ) : null}
    </View>
  );
};

export default Vacancy;
