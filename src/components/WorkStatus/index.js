import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";
import workerImg from "../../assets/images/worker.jpeg";
import TimeButton from "../TimeButton";

const WorkStatus = (props) => {
  const [perzent, setPerzent] = useState(72);
  const [status, setStatus] = useState("Активний");

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
            Дата початку роботи:{" "}
            {props.startDate ? props.startDate : "23.03.2022"}
          </Text>
          <Text style={{ marginTop: 5, ...styles.date }}>
            Дата початку роботи:{" "}
            {props.finishtDate ? props.finishtDate : "23.03.2022"}
          </Text>
        </View>
      </View>
      <View style={{ ...styles.statusBox, ...styles.flexBox }}>
        <View>
          <Text style={styles.title}>Процесс виконання</Text>
          <View style={styles.progressBox}>
            <Text style={styles.title}>{perzent}%</Text>
            <View style={styles.perzent_container}>
              <View style={styles.perzent} />
            </View>
            <Text style={styles.time}>24/34 годин</Text>
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
        <TouchableOpacity style={styles.support_btn}>
          <Text style={styles.support_btn_text}>Звернутися у підтримку</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WorkStatus;
