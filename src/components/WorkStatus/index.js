import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";

import styles from "./styles";
import workerImg from "../../assets/images/worker.jpeg";
import TimeButton from "../TimeButton";

const WorkStatus = (props) => {
  const [perzent, setPerzent] = useState(72);
  const [status, setStatus] = useState("Активний");

  const { t } = useTranslation();

  useEffect(() => {
    if (props.status) {
      setStatus(props.status);
    }

    if (props.perzent) {
      setPerzent(props.perzent);
    }
  }, [props]);

  return (
    <View style={styles.container}>
      <View style={styles.flexBox}>
        <Image style={styles.profile_img} source={workerImg} />
        <View>
          <Text style={styles.name}>
            {props.name ? props.name : "Євген Лебідь"}
          </Text>
          <Text style={{ marginTop: 3, ...styles.date }}>
            {t("Worker.Statistics.dateStart")}{" "}
            {props.startDate ? props.startDate : "23.03.2022"}
          </Text>
          <Text style={{ marginTop: 5, ...styles.date }}>
            {t("Worker.Statistics.dateEnd")}{" "}
            {props.finishtDate ? props.finishtDate : "23.03.2022"}
          </Text>
        </View>
      </View>
      <View style={{ ...styles.statusBox, ...styles.flexBox }}>
        <View>
          <Text style={styles.title}>{t("Worker.Statistics.process")}</Text>
          <View style={styles.progressBox}>
            <Text style={styles.title}>{perzent}%</Text>
            <View style={styles.perzent_container}>
              <View style={styles.perzent} />
            </View>
            <Text style={styles.time}>
              24/34 {t("Worker.Statistics.hours")}
            </Text>
          </View>
        </View>
        <View style={{ marginLeft: 42 }}>
          <View style={styles.btn_box}>
            <TimeButton greenPress={props.greenPress} status={status} />
            <Text style={{ ...styles.status }}>{status}</Text>
          </View>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        {status == "Активний" ? (
          <TouchableOpacity
            style={styles.cancel_btn}
            onPress={props.greenPress}
          >
            <Text style={styles.cancel_btn_text}>
              {t("Worker.Statistics.review")}
            </Text>
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          style={{
            marginTop: status == "Активний" ? -10 : 20,
            ...styles.support_btn,
          }}
          onPress={props.onPressRed}
        >
          <Text style={styles.support_btn_text}>
            {t("Worker.Statistics.support")}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WorkStatus;
