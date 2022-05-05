import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";

import styles from "./styles";

const OldWorkCompanyItem = (props) => {
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
              {t("Worker.Profile.responces")}
            </Text>
            <Text style={styles.oldWorkInfo}>
              {props.сlikeds ? props.сlikeds : "-"}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 28,
          }}
        >
          <View>
            <Text style={styles.review}>{t("Worker.Profile.desc")}</Text>
            <Text style={styles.reviewText}>
              {props.description ? props.description : "-"}
            </Text>
          </View>
          <View></View>
        </View>
      </View>
    </View>
  );
};

export default OldWorkCompanyItem;
