import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import LongWhiteButton from "../../components/LongWhiteButton";

const StoryviewModal = (props) => {
  const deviceWidth = Dimensions.get("window").width;
  const deviceHeight = Dimensions.get("window").height;
  const navigation = useNavigation();

  return (
    <Modal
      isVisible={props.isVisible}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
      backdropColor='#376AED'
      backdropOpacity={1}
      style={styles.modal}
    >
      <View style={styles.container}>
        <Text style={styles.text}>
          Щоб використовувати застосунов вам необхідно пройти заповнення
          документів
        </Text>
      </View>
      <View style={styles.buttons_box}>
        <LongWhiteButton
          title='До заповнення'
          onPress={() => {
            props.close();
            navigation.navigate("UploadCompetence");
          }}
        />
        <TouchableOpacity
          style={styles.red_btn}
          onPress={() => {
            props.close();
            setTimeout(() => {
              navigation.navigate("Settings", { setModal: true });
            }, 500);
          }}
        >
          <Text style={styles.btn_text}>Потрібна допомога ? </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.close_box} onPress={props.close}>
        <AntDesign name='close' size={26} color='white' />
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    height: Dimensions.get("window").height,
    width: "100%",
    marginLeft: 0,
  },
  container: {
    height: Dimensions.get("window").height,
    width: "100%",
    paddingTop: 100,
    backgroundColor: "#376AED",
    alignItems: "center",
  },
  text: {
    color: "white",
    marginTop: 50,
    width: 246,
    fontSize: 18,
    lineHeight: 20,
    fontFamily: "ComfortaaBold",
  },
  buttons_box: {
    alignItems: "center",
    position: "relative",
    bottom: 130,
    paddingHorizontal: 42,
  },
  red_btn: {
    width: "100%",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#F55252",
    marginTop: 15,
  },
  btn_text: {
    color: "white",
    fontSize: 16,
    fontFamily: "ComfortaaMedium",
  },
  close_box: {
    position: "absolute",
    top: 32,
    right: 18,
  },
});

export default StoryviewModal;
