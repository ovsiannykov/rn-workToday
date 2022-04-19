import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";
import OldWorkCompanyItem from "../../../components/OldWorkCompanyItem";

const image = require("../../../assets/images/company.png");

const CompanyProfile = ({ navigation }, props) => {
  return (
    <LinearGradient
      colors={["#F4F7FF", "#FFFFFF"]}
      style={{ flex: 1, ...styles.container }}
    >
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Профіль</Text>
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
                <Text style={styles.name}>
                  {props.companyName ? props.companyName : "Назва компанії"}
                </Text>
                <Text style={styles.position}>
                  {props.thematic ? props.thematic : "Тематика"}
                </Text>
              </View>
            </View>
            <Text style={styles.aboutLabel}>Про компанію</Text>
            <Text style={styles.aboutText}>
              {props.about
                ? props.about
                : "Норм чел все делал быстро и качественно Норм чел все делал быстро и качественно Норм чел все делал быстро и"}
            </Text>
          </View>
        </View>
        <Text style={styles.worksTitle}>Останні вакансии</Text>
        <View style={{ paddingBottom: 30 }}>
          <OldWorkCompanyItem
            сlikeds='18'
            position='Бармен'
            description='Зробити те протягом того часу'
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default CompanyProfile;
