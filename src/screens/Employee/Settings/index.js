import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Switch } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";

import styles from "./styles";
import Input from "../../../components/Input";
import LongWhiteButton from "../../../components/LongWhiteButton";
import LongBlueButton from "../../../components/LongBlueButton";
import ErrorBlock from "../../../components/ErrorBlock";
import SettingsModal from "../../../components/SettingsModal";
import sized from "../../../Svg/sized";
import supportSvg from "../../../assets/icons/support.svg";

const Settings = (props) => {
  const [email, setEmail] = useState("alexander.warps@gmail.ua");
  const [isEnabled, setIsEnabled] = useState(true);
  const [disablePush, setDisablePush] = useState(0);
  const [pushType, setPushType] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const [agreement, setAgreement] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const { t } = useTranslation();
  const navigation = useNavigation();
  const route = useRoute();
  const SupportIcon = sized(supportSvg, 20, 20);

  const isAgreements = async () => {
    try {
      const value = await AsyncStorage.getItem("@marketing");
      if (value == "true") {
        setAgreement(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    isAgreements();
  }, []);

  useEffect(() => {
    if (route.params && route.params.setModal) {
      setIsModal(true);
    }
  }, [route]);

  const Button = () => {
    return (
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btn_title}>{t("Worker.Settings.change")}</Text>
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
          setIsModal(false);
        }}
      />
      <Text style={styles.title}>{t("Worker.Settings.settings")}</Text>
      <ScrollView style={styles.scroll_container}>
        <View style={styles.wrapper}>
          <View style={styles.input_box}>
            <Input
              title={t("Worker.Settings.email")}
              value={email}
              onChange={setEmail}
            />
          </View>
          <Button />
        </View>
        <View style={{ marginTop: 20, ...styles.wrapper }}>
          <View style={styles.input_box}>
            <Input
              title={t("Worker.Settings.pass")}
              placeholder={t("Worker.Settings.writeOldPass")}
              textContentType='password'
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={{ marginTop: -10, ...styles.wrapper }}>
          <View style={styles.input_box}>
            <Input
              title=' '
              placeholder={t("Worker.Settings.writeNewPass")}
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
            <View style={{ width: "100%", marginBottom: 0 }}>
              {agreement ? (
                <ErrorBlock title={t("Worker.Settings.errorPolitic")} />
              ) : null}
            </View>
            <LongWhiteButton
              onPress={() => navigation.navigate("MarketingAgreements")}
              title={
                agreement
                  ? t("Worker.Settings.viewPolitic")
                  : t("Worker.Settings.acceptPolitic")
              }
            />
            <LongBlueButton
              onPress={() => navigation.navigate("UploadCompetence")}
              title={t("Worker.Settings.addSkills")}
            />
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.label}>{t("Worker.Settings.notifications")}</Text>
          <View style={{ ...styles.wrapper }}>
            <View style={styles.input_box}>
              <Text style={styles.push_title}>{t("Worker.Settings.push")}</Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#376AED" }}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <View style={{ marginTop: 21 }}>
          <Text style={styles.push_title}>
            {t("Worker.Settings.disablePush")}
          </Text>
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
          <Text style={styles.push_title}>
            {t("Worker.Settings.typeMessages")}
          </Text>
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
            }}
          >
            <TouchableOpacity style={{ marginBottom: 20, ...styles.btn_long2 }}>
              <Text style={{ ...styles.btnLong_title2 }}>
                {t("Worker.Settings.employerInfo")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn_long}
              onPress={() => setIsModal(true)}
            >
              <Text style={styles.btnLong_title}>
                {t("Worker.Settings.support")}
              </Text>
              <SupportIcon />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Settings;
