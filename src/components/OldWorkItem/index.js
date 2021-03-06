import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";

import styles from "./style";
import RatingBox from "../RatingBox";

const starsImage = require("../../assets/images/GroupStars.png");

const OldWorkItem = (props) => {
  const { t } = useTranslation();

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
            <Text style={styles.oldWorkTitle}>{t("Worker.Profile.name")}</Text>
            <Text style={styles.oldWorkInfo}>
              {props.position ? props.position : "-"}
            </Text>
          </View>
          <View>
            <Text style={styles.oldWorkTitle}>
              {t("Worker.Profile.company")}
            </Text>
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
            <Text style={styles.review}>{t("Worker.Profile.feedback")}</Text>
            <Text style={styles.reviewText}>
              {props.review ? props.review : "-"}
            </Text>
          </View>
          <View>
            <RatingBox rating={props.rating} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default OldWorkItem;
