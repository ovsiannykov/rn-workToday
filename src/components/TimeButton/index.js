import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

const TimeButton = (props) => {
  // if (props.status == "Очікування") {
  //   return (
  //     <TouchableOpacity style={styles.container_expectation}>
  //       <View style={{ marginLeft: 3 }}>
  //         <Entypo name='controller-play' size={24} color='white' />
  //       </View>
  //     </TouchableOpacity>
  //   );
  // }

  if (props.status == "Скасований") {
    return (
      <View style={styles.container_red}>
        <Entypo name='controller-paus' size={24} color='white' />
      </View>
    );
  }

  if (props.status == "Закінчений") {
    return <View style={styles.container_end}></View>;
  }

  // if (props.status == "Активний") {
  //   return (
  //     <TouchableOpacity style={styles.container} onPress={props.onPress}>
  //       <Entypo name='controller-paus' size={24} color='white' />
  //     </TouchableOpacity>
  //   );
  // }

  return (
    <TouchableOpacity style={styles.container} onPress={props.greenPress}>
      <Entypo name='controller-paus' size={24} color='white' />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 58,
    height: 58,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.green,
  },
  container_expectation: {
    width: 58,
    height: 58,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryBlue,
  },
  container_end: {
    width: 58,
    height: 58,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7B8BB2",
  },
  container_red: {
    width: 58,
    height: 58,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.red,
  },
  status: {
    position: "relative",
    top: 20,
  },
});

export default TimeButton;
