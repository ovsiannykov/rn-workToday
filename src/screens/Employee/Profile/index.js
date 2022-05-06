import React, { useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import styles from "./styles";
import OldWorkItem from "../../../components/OldWorkItem";

const image = require("../../../assets/images/profile.png");

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const userInfo = useSelector((state) => state.workerReducer.userInfo);

  return (
    <LinearGradient
      colors={["#F4F7FF", "#FFFFFF"]}
      style={{ flex: 1, ...styles.container }}
    >
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>{t("Worker.Profile.profile")}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Ionicons name='ellipsis-horizontal' size={24} color='black' />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <View style={styles.profileBox}>
            <View style={styles.profile}>
              <LinearGradient
                colors={["#9CECFB", "#376AED", "#49B0E2"]}
                style={styles.pictureBox}
              >
                <View style={styles.circleGradient}>
                  <Image style={styles.profileImage} source={image} />
                </View>
              </LinearGradient>
              <View style={styles.profileInfo}>
                {/* <Text style={styles.name}>
                  {userInfo && userInfo.step3Info.firstname
                    ? userInfo.step3Info.firstname
                    : "Ім'я"}{" "}
                  {userInfo && userInfo.step3Info.lastname
                    ? userInfo.step3Info.lastname
                    : "Прізвище"}
                </Text> */}
                <Text style={styles.name}>Ім'я Прізвище</Text>
                <Text style={styles.position}>Фермер</Text>
              </View>
            </View>
            <Text style={styles.aboutLabel}>{t("Worker.Profile.about")}</Text>
            <ScrollView style={{ height: 80 }}>
              <Text
                style={styles.aboutText}
                ellipsizeMode={"tail"}
                numberOfLines={4}
              >
                Норм чел все делал быстро и качественно Норм чел все делал
                быстро и качественно Норм чел все делал быстро и
              </Text>
            </ScrollView>
            <View style={styles.numbers}>
              <View
                style={{ backgroundColor: "#2151CD", ...styles.numbersItem }}
              >
                <Text style={styles.ratingNumber}>4,9</Text>
                <Text style={styles.ratingInfo}>
                  {t("Worker.Profile.rating")}
                </Text>
              </View>
              <View
                style={{ backgroundColor: "#386BED", ...styles.numbersItem }}
              >
                <Text style={styles.ratingNumber}>250</Text>
                <Text style={styles.ratingInfo}>
                  {t("Worker.Profile.hours")}
                </Text>
              </View>
              <View
                style={{ backgroundColor: "#386BED", ...styles.numbersItem }}
              >
                <Text style={styles.ratingNumber}>25</Text>
                <Text style={styles.ratingInfo}>
                  {t("Worker.Profile.days")}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.worksTitle}>{t("Worker.Profile.recentWorks")}</Text>
        <View style={{ paddingBottom: 30 }}>
          <OldWorkItem
            company='Alt Bier'
            position='Бармен'
            review='Норм чел все делал быстро и качественно'
            rating={3}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Profile;
