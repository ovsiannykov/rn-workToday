import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";
import OldWorkItem from "../../../components/OldWorkItem";

const image = require("../../../assets/images/profile.png");

const Profile = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#F4F7FF", "#FFFFFF"]}
      style={{ flex: 1, ...styles.container }}
    >
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Профіль</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Feedback")}>
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
                <Text style={styles.name}>Євген Лебідь</Text>
                <Text style={styles.position}>Фермер</Text>
              </View>
            </View>
            <Text style={styles.aboutLabel}>Про себе</Text>
            <ScrollView style={{ height: 80 }}>
              <Text style={styles.aboutText}>
                Норм чел все делал быстро и качественно Норм чел все делал
                быстро и качественно Норм чел все делал быстро и
              </Text>
            </ScrollView>
            <View style={styles.numbers}>
              <View
                style={{ backgroundColor: "#2151CD", ...styles.numbersItem }}
              >
                <Text style={styles.ratingNumber}>4,9</Text>
                <Text style={styles.ratingInfo}>Рейтинг</Text>
              </View>
              <View
                style={{ backgroundColor: "#386BED", ...styles.numbersItem }}
              >
                <Text style={styles.ratingNumber}>250</Text>
                <Text style={styles.ratingInfo}>Годин</Text>
              </View>
              <View
                style={{ backgroundColor: "#386BED", ...styles.numbersItem }}
              >
                <Text style={styles.ratingNumber}>25</Text>
                <Text style={styles.ratingInfo}>Днів</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.worksTitle}>Останні роботи</Text>
        <View style={{ paddingBottom: 30 }}>
          <OldWorkItem
            company='Alt Bier'
            position='Бармен'
            review='Норм чел все делал быстро и качественно'
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Profile;
