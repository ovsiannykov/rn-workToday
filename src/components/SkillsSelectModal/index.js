import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import LongBlueButton from "../LongBlueButton";

const SkillsSelectModal = (props) => {
  const selectSkills = props.skills;

  const findSkill = (elem) => {
    for (var i = 0; i < selectSkills.length; i++) {
      if (selectSkills[i] === elem) {
        return true;
      }
    }
    return false;
  };

  return (
    <Modal
      isVisible={props.isModal}
      onSwipeComplete={props.closeModal}
      swipeDirection='down'
      backdropOpacity={0.7}
      style={styles.view}
    >
      <View style={{ ...styles.modal }}>
        {props.data.map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.item}
            onPress={() => {
              if (findSkill(item)) {
                const newArr = selectSkills.filter((n) => {
                  return n != item;
                });
                props.skillsChange(newArr);
              } else {
                props.skillsChange((items) => [...items, item]);
              }
            }}
          >
            <View style={styles.icon_box}>
              {findSkill(item) ? (
                <Ionicons
                  name='radio-button-on'
                  size={18}
                  color={Colors.veryDarkBlue}
                />
              ) : (
                <Ionicons
                  name='radio-button-off-sharp'
                  size={18}
                  color={Colors.veryDarkBlue}
                />
              )}
            </View>
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        ))}
        <View style={{ alignItems: "center" }}>
          <LongBlueButton title='ОБРАТИ' onPress={props.closeModal} />
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
    paddingBottom: 40,
    width: Dimensions.get("window").width,
    backgroundColor: "#FCFCFC",
    paddingTop: 32,
    paddingHorizontal: 21,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  item: {
    width: 333,
    height: 44,
    borderRadius: 6,
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0.0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.6,
    elevation: 1,
    alignItems: "center",
    paddingHorizontal: 21,
    marginBottom: 16,
    display: "flex",
    flexDirection: "row",
  },
  icon_box: {
    marginRight: 20,
  },
  itemText: {
    fontFamily: "ComfortaaRegular",
    color: Colors.veryDarkBlue,
  },
});

export default SkillsSelectModal;
