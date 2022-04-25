import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Colors from "../../../constants/Colors";
import UpluadInput from "../../../components/UpluadInput";
import Input from "../../../components/Input/";
import LongWhiteButton from "../../../components/LongWhiteButton";

const UploadCompetence = () => {
  return (
    <LinearGradient
      colors={["#F4F7FF", "#FFFFFF"]}
      style={{ ...styles.container }}
    >
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>Завантаження компетенції</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingBottom: 40, ...styles.wrapper }}>
          <Text style={styles.label}>Сучасні дослідження</Text>
          <Text style={{ marginTop: 20, ...styles.sub_title }}>
            Описание документа или как доолжен выглядить документ на фото
          </Text>
          <View style={{ marginTop: 20 }}>
            <UpluadInput />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.label}>
              Якщо ваш документ має час дії, введіть його (залиште порожнім якщо
              його немає)
            </Text>
            <Input title=' ' placeholder='ДД/ММ/ГГГГ' />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ marginBottom: 20, ...styles.label }}>
              Додадкове фото
            </Text>
            <UpluadInput />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ marginBottom: 20, ...styles.label }}>
              Додадкове фото
            </Text>
            <UpluadInput />
          </View>
          <View style={{ marginTop: 20, marginBottom: 37 }}>
            <Text style={{ marginBottom: 20, ...styles.label }}>
              Додадкове фото
            </Text>
            <UpluadInput />
          </View>
          <LongWhiteButton title='Закінчити' />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: Platform.OS == "ios" ? 65 : 40,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "ComfortaaBold",
    color: Colors.veryDarkBlue,
    marginBottom: 40,
    width: 328,
  },
  wrapper: {
    paddingHorizontal: 17,
  },
  label: {
    color: Colors.darkBlue,
    fontFamily: "ComfortaaLight",
    fontSize: 14,
    lineHeight: 16,
  },
  sub_title: {
    width: 268,
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "ComfortaaRegular",
  },
});

export default UploadCompetence;
