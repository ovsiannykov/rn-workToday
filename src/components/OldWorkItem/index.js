import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import styles from "./style";

const starsImage = require("../../assets/images/GroupStars.png");

const OldWorkItem = (props) => {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.worksBox}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={styles.oldWorkTitle}>Назва роботи:</Text>
            <Text style={styles.oldWorkInfo}>
              {props.position ? props.position : "-"}
            </Text>
          </View>
          <View>
            <Text style={styles.oldWorkTitle}>Компанія:</Text>
            <Text style={styles.oldWorkInfo}>
              {props.company ? props.company : "-"}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <View>
            <Text style={styles.review}>Вiдгук:</Text>
            <Text style={styles.reviewText}>
              {props.review ? props.review : "-"}
            </Text>
          </View>
          <View>
            <Image source={starsImage} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default OldWorkItem;
