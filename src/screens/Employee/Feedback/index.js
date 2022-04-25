import React, { useState } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StarRating from "react-native-star-rating";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../../constants/Colors";
import Input from "../../../components/Input";
import LongWhiteButton from "../../../components/LongWhiteButton";

const Feedback = () => {
  const [rating, setRating] = useState(0);

  const navigation = useNavigation();
  const route = useRoute();

  return (
    <LinearGradient
      colors={["#F4F7FF", "#FFFFFF"]}
      style={{ ...styles.container }}
    >
      <Text style={styles.title}>Відгук о працівнику</Text>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Рейтинг обслуговування</Text>
        <View style={styles.rating_box}>
          <StarRating
            disabled={false}
            maxStars={5}
            emptyStar='star-o'
            fullStar='star'
            iconSet='FontAwesome'
            fullStarColor='#FFD029'
            emptyStarColor='#D5D6DB'
            rating={rating}
            selectedStar={(rating) => setRating(rating)}
            style={styles.rating}
          />
        </View>
        <Input title='Додатковий відгук' placeholder='Я вважаю...' />
      </View>
      <View style={styles.btn_box}>
        <View style={{ width: 299 }}>
          <LongWhiteButton
            title='Закінчити'
            onPress={() => navigation.goBack()}
            disabled={rating == 0 ? true : false}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: Platform.OS == "ios" ? 80 : 40,
  },
  title: {
    paddingLeft: 17,
    fontSize: 24,
    color: Colors.veryDarkBlue,
    fontFamily: "ComfortaaLight",
    paddingBottom: 30,
  },
  wrapper: {
    paddingHorizontal: 21,
  },
  label: {
    fontSize: 14,
    marginTop: 10,
    color: "#2D4379",
    fontFamily: "ComfortaaLight",
  },
  rating_box: {
    width: 255,
    marginTop: 15,
    marginBottom: 20,
  },
  btn_box: {
    width: "100%",
    position: "absolute",
    bottom: 18,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Feedback;
