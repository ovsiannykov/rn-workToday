import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";
import workerPhoto from "../../assets/images/worker.jpeg";
import LongWhiteButton from "../../components/LongWhiteButton";
import LongBlueButton from "../../components/LongBlueButton";
import { sized } from "../../Svg";
import linkSvg from "../../assets/icons/link.svg";

const WorkerItem = (props) => {
  const StatusText = (props) => {
    if (props.status !== "Прийнято" && props.status !== "Відхилино") {
      return (
        <Text style={styles.vancy}>
          {props.status ? props.status : "На розгляді"}
        </Text>
      );
    }
    if (props.status == "Прийнято") {
      return (
        <Text style={styles.accept}>
          {props.status ? props.status : "На розгляді"}
        </Text>
      );
    }
    if (props.status == "Відхилино") {
      return (
        <Text style={styles.denied}>
          {props.status ? props.status : "На розгляді"}
        </Text>
      );
    }
  };

  const LinkIcon = sized(linkSvg, 12, 12);

  return (
    <View style={styles.container}>
      <View style={styles.info_box}>
        <View style={{ width: 92 }}>
          <Image
            style={styles.image}
            source={props.img ? props.img : workerPhoto}
          />
        </View>
        <View style={{ marginLeft: 15 }}>
          <Text style={styles.name}>
            {props.name ? props.name : "Євген Лебідь"}
          </Text>
          <Text style={styles.comment_title}>Коментар працівника:</Text>
          <Text style={styles.about}>
            {props.about
              ? props.about
              : "Я особливо підходжу до цієї роботи з тієї-то тієї причини"}
          </Text>
        </View>
      </View>
      <View style={{ ...styles.down_box }}>
        <View>
          <View style={styles.info_box}>
            <Text style={styles.vancy_title}>Вакансія:</Text>
            <Text style={styles.vancy}>
              {props.vacancy ? props.vacancy : "Охоронець"}
            </Text>
          </View>
          <View style={{ marginTop: 6, ...styles.info_box }}>
            <Text style={styles.vancy_title}>Статус:</Text>
            <StatusText status={props.status} />
          </View>
        </View>
        <TouchableOpacity style={styles.link_btn} onPress={props.onPress}>
          <Text style={styles.link_title}>Перейти</Text>
          <LinkIcon />
        </TouchableOpacity>
      </View>
      {props.acceptBtn || props.refuseBtn ? (
        <View style={{ marginTop: 10 }}>
          {props.refuseBtn ? (
            <LongWhiteButton
              title='Відмовити у роботі'
              onPress={props.refuseOnPress}
            />
          ) : null}
          {props.acceptBtn ? (
            <LongBlueButton
              title='Взяти на роботу'
              onPress={props.acceptOnPress}
            />
          ) : null}
        </View>
      ) : null}
    </View>
  );
};

export default WorkerItem;
