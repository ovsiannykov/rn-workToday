import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

import exclamationSvg from "../../../../assets/icons/exclamation_point.svg";
import sized from "../../../../Svg/sized";
import questionMarkSvg from "../../../../assets/icons/question_mark.svg";
import Colors from "../../../../constants/Colors";
import Input from "../../../../components/Input";

const StatisicModal = (props) => {
  const [content, setContent] = useState(1);

  const QuestionIcon = sized(questionMarkSvg, 64, 64);
  const ExclamationIcon = sized(exclamationSvg, 64, 64);

  const CancelHandler = () => {
    props.closeModal();
    props.onPress();
  };

  const ContentOne = (props) => {
    return (
      <View style={styles.modal}>
        <QuestionIcon style={{ marginBottom: 27 }} />
        <Text style={styles.title}>Відмінити роботу?</Text>
        <View style={styles.buttons_container}>
          <TouchableOpacity
            onPress={props.closeModal}
            style={{ marginRight: 23, ...styles.btn }}
          >
            <Text style={styles.btn_titile}>Ні</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setContent(2)} style={styles.btn}>
            <Text style={styles.btn_titile}>Так</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const ContentTwo = (props) => {
    return (
      <View style={styles.modal2}>
        <ExclamationIcon style={{ marginBottom: 27 }} />
        <View style={{ width: 295 }}>
          <Input title='Вкажіть причину відміни' />
        </View>
        <View style={styles.buttons_container}>
          <TouchableOpacity
            onPress={props.closeModal}
            style={{ marginRight: 23, ...styles.btn }}
          >
            <Text style={styles.btn_titile}>Отмена</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={CancelHandler} style={styles.btn}>
            <Text style={styles.btn_titile}>Відправити</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Modal
        backdropOpacity={0.8}
        isVisible={props.isModal}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        {content == 1 ? (
          <ContentOne closeModal={props.closeModal} />
        ) : (
          <ContentTwo closeModal={props.closeModal} />
        )}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: 371,
    height: 247,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  modal2: {
    width: 371,
    height: 263,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons_container: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontSize: 14,
    fontFamily: "ComfortaaMedium",
    marginBottom: 43,
  },
  btn: {
    width: 142,
    height: 34,
    borderRadius: 12,
    backgroundColor: "white",
    shadowColor: Colors.primaryBlue,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.24,
    shadowRadius: 5.86,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  btn_titile: {
    fontSize: 16,
    color: "#376AED",
    fontFamily: "ComfortaaMedium",
  },
});

export default StatisicModal;
