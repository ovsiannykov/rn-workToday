import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Modal from "react-native-modal";
import { Slider } from "@miblanchard/react-native-slider";

import RadioButtons from "../RadioButtons";

const RewievsModal = (props) => {
  return (
    <Modal
      isVisible={props.isFilter}
      onSwipeComplete={props.closeModal}
      swipeDirection='down'
      backdropOpacity={0.3}
      style={styles.view}
    >
      <View style={{ ...styles.modal }}>
        <Text style={styles.title}>Вакансії</Text>
        <View>
          <RadioButtons data={props.data} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  view: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modal: {
    height: 535,
    width: Dimensions.get("window").width,
    backgroundColor: "#FCFCFC",
    paddingTop: 26,
    paddingHorizontal: 21,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    color: "#0D253C",
    fontSize: 20,
    fontFamily: "ComfortaaLight",
    marginBottom: 20,
  },
  rate_text_box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  range_text: {
    fontSize: 14,
  },
  twenty_km: {
    position: "absolute",
    left: 120,
  },
  thumb: {
    backgroundColor: "white",
    width: 28,
    height: 28,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
    elevation: 1,
    borderRadius: 50,
  },
  track: {
    backgroundColor: "#C9C9D6",
  },
});

export default RewievsModal;
