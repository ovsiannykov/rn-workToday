import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";

import Input from "../Input";
import Colors from "../../constants/Colors";
import sized from "../../Svg/sized";
import supportSvg from "../../assets/icons/support.svg";
import { useTranslation } from "react-i18next";

const SettingsModal = (props) => {
  const SupportIcon = sized(supportSvg, 20, 20);
  const { t } = useTranslation();

  return (
    <Modal
      isVisible={props.isModal}
      onSwipeComplete={props.closeModal}
      swipeDirection='down'
      backdropOpacity={0.7}
      style={styles.view}
    >
      <View style={{ ...styles.modal }}>
        <Text style={styles.title}>{t("Worker.Settings.support")}</Text>
        <View style={{ marginTop: 30 }}>
          <Input
            title={t("Worker.Settings.myQuestion")}
            placeholder={t("Worker.Settings.writeQuestion")}
          />
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View style={styles.btn_box}>
            <TouchableOpacity style={styles.btn} onPress={props.onPress}>
              <Text style={styles.btn_title}>
                {t("Worker.Settings.sendQuestion")}
              </Text>
              <SupportIcon />
            </TouchableOpacity>
          </View>
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
    height: 572,
    width: Dimensions.get("window").width,
    backgroundColor: "#FCFCFC",
    paddingTop: 32,
    paddingHorizontal: 21,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    color: "#0D253C",
    fontFamily: "ComfortaaBold",
  },
  btn_box: {
    position: "relative",
    width: 299,
    bottom: -300,
  },
  btn: {
    width: 299,
    height: 48,
    borderRadius: 12,
    backgroundColor: "white",
    justifyContent: "space-evenly",
    alignItems: "center",
    shadowColor: Colors.primaryBlue,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.24,
    shadowRadius: 5.86,
    elevation: 18,
    display: "flex",
    flexDirection: "row",
  },
  btn_title: {
    color: Colors.primaryBlue,
    fontSize: 16,
    fontFamily: "ComfortaaLight",
  },
});

export default SettingsModal;
