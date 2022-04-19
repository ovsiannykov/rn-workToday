import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Switch } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Input from "../../../components/Input";
import LongWhiteButton from "../../../components/LongWhiteButton";
import LongBlueButton from "../../../components/LongBlueButton";
import ErrorBlock from "../../../components/ErrorBlock";
import Colors from "../../../constants/Colors";
import SettingsModal from "../../../components/SettingsModal";
import sized from "../../../Svg/sized";
import supportSvg from "../../../assets/icons/support.svg";

const Settings = (props) => {
  const [email, setEmail] = useState("alexander.warps@gmail.ua");
  const [isEnabled, setIsEnabled] = useState(true);
  const [disablePush, setDisablePush] = useState(0);
  const [pushType, setPushType] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const navigation = useNavigation();
  const SupportIcon = sized(supportSvg, 20, 20);

  const Button = () => {
    return (
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btn_title}>Змінити</Text>
      </TouchableOpacity>
    );
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <LinearGradient
      colors={["#F4F7FF", "#FFFFFF"]}
      style={{ ...styles.container }}
    >
      <SettingsModal
        isModal={isModal}
        closeModal={closeModal}
        onPress={() => {
          navigation.navigate("Feedback");
          setIsModal(false);
        }}
      />
      <Text style={styles.title}>Налаштування профілю</Text>
      <ScrollView style={styles.scroll_container}>
        <View style={styles.wrapper}>
          <View style={styles.input_box}>
            <Input title='Зміна пошти' value={email} onChange={setEmail} />
          </View>
          <Button />
        </View>
        <View style={{ marginTop: 20, ...styles.wrapper }}>
          <View style={styles.input_box}>
            <Input
              title='Змінити пароль'
              placeholder='Введіть старый пароль'
              textContentType='password'
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={{ marginTop: -10, ...styles.wrapper }}>
          <View style={styles.input_box}>
            <Input
              title=' '
              placeholder='Введіть новий пароль'
              textContentType='password'
              secureTextEntry={true}
            />
          </View>
          <Button />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 330,
            marginTop: 20,
          }}
        >
          <View
            style={{
              width: 336,
              alignItems: "center",
              justifyContent: "center",
              marginRight: -20,
            }}
          >
            <View style={{ width: "100%", marginBottom: 20 }}>
              <ErrorBlock title='Ви не погодилися з маркетинговими умовами ' />
            </View>
            <LongWhiteButton
              onPress={() => navigation.navigate("MarketingAgreements")}
              title='Переглянути маркетингові умови'
            />
            <LongBlueButton
              onPress={() => navigation.navigate("UploadCompetence")}
              title='Заповнити компетенції'
            />
          </View>
        </View>
        <View>
          <Text style={styles.label}>Повідомлення</Text>
          <View style={{ ...styles.wrapper }}>
            <View style={styles.input_box}>
              <Text style={styles.push_title}>Push-Повідомлення</Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#376AED" }}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <View style={{ marginTop: 21 }}>
          <Text style={styles.push_title}>Вимкнути Push-Повідомлення на</Text>
          <View style={{ marginTop: 21 }}>
            <SegmentedControl
              values={["Off", "1H", "1D", "1W"]}
              selectedIndex={disablePush}
              onChange={(event) => {
                setDisablePush(event.nativeEvent.selectedSegmentIndex);
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: 21 }}>
          <Text style={styles.push_title}>Отримувати повідомлення через</Text>
          <View style={{ marginTop: 21, paddingBottom: 40 }}>
            <SegmentedControl
              values={["Off", "E-Mail", "SMS"]}
              selectedIndex={pushType}
              onChange={(event) => {
                setPushType(event.nativeEvent.selectedSegmentIndex);
              }}
            />
          </View>
          <View
            style={{
              marginBottom: 50,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={{ marginBottom: 20, ...styles.btn_long2 }}>
              <Text style={{ ...styles.btnLong_title2 }}>
                Заповнити інформацію для роботодавців
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn_long}
              onPress={() => setIsModal(true)}
            >
              <Text style={styles.btnLong_title}>Відправити питання</Text>
              <SupportIcon />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Settings;
