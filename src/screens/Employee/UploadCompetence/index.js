import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Formik } from "formik";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";
import { useTranslation } from "react-i18next";

import Colors from "../../../constants/Colors";
import UpluadInput from "../../../components/UpluadInput";
import LongWhiteButton from "../../../components/LongWhiteButton";
import { getLoadCompetitions } from "../../../redux/worker/worker-thunks";
import CompetenciesResult from "../../../components/CompetenciesResult";

const UploadCompetence = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [isCompetencies, setIsCompetencies] = useState(false);

  const { t } = useTranslation();
  const userInfo = useSelector((state) => state.workerReducer.userInfo);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    if (userInfo && userInfo.competencies[0].status == true) {
      setIsCompetencies(true);
    }
  }, []);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  if (fetching) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size='large' color='#376AED' />
      </View>
    );
  }

  return (
    <LinearGradient
      colors={["#F4F7FF", "#FFFFFF"]}
      style={{ ...styles.container }}
    >
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>{t("Worker.Skills.title")}</Text>
      </View>
      {!isCompetencies ? (
        <Formik
          initialValues={{
            k1: "",
            date: "",
            k2: "",
            k3: "",
            k4: "",
          }}
          onSubmit={async (values) => {
            const body1 = { file: values.k1, date: values.date };
            const body2 = { file: values.k2 };
            const body3 = { file: values.k3 };
            const body4 = { file: values.k4 };
            setFetching(true);
            if (values.k1) {
              await dispatch(getLoadCompetitions(body1, "k1"));
            }
            if (values.k2) {
              await dispatch(getLoadCompetitions(body2, "k2"));
            }
            if (values.k3) {
              await dispatch(getLoadCompetitions(body3, "k3"));
            }
            if (values.k4) {
              await dispatch(getLoadCompetitions(body4, "k4"));
            }
            if (values.k1 || values.k2 || values.k3 || values.k4) {
              showMessage({
                message: "Форму успішно відправлено 🎉",
                type: "success",
              });
            }
            setFetching(false);

            navigation.goBack();
          }}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            errors,
            submitCount,
            setFieldValue,
          }) => {
            errors = submitCount > 0 ? errors : {};
            // const isValid =
            //   values.birth.length > 0 &&
            //   values.citizenship.length > 0 &&
            //   values.status.length > 0;

            const handleConfirm = (date) => {
              let numValue;
              let monthValue;

              const num = date.getDate().toString();
              const month = date.getMonth().toString();
              const year = date.getFullYear().toString();

              if (num < 10) {
                numValue = `0${num}`;
              } else {
                numValue = num;
              }

              if (month < 10) {
                monthValue = `0${month}`;
              } else {
                monthValue = num;
              }

              setFieldValue("date", `${numValue}.${monthValue}.${year}`);
              hideDatePicker();
            };

            return (
              <>
                <View style={{ paddingBottom: 40, ...styles.wrapper }}>
                  <ScrollView
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    //style={{ paddingBottom: 150 }}
                  >
                    <View style={{ paddingBottom: 180 }}>
                      <View style={{ width: "75%" }}>
                        <Text style={styles.label}>
                          {t("Worker.Skills.skill1")}
                        </Text>
                        <Text
                          style={{
                            marginTop: 10,
                            marginBottom: 15,
                            ...styles.sub_title,
                          }}
                        >
                          {t("Worker.Skills.uploadPhoto")}
                        </Text>
                        <UpluadInput
                          filename={values.k1}
                          onChangeFile={(value) => setFieldValue("k1", value)}
                        />
                      </View>
                      <View style={{ marginTop: 20, width: "75%" }}>
                        <Text style={styles.label}>
                          {t("Worker.Skills.dateLabel")}
                        </Text>
                        <TouchableOpacity onPress={showDatePicker}>
                          <View pointerEvents='none'>
                            <TextInput
                              style={styles.input}
                              value={values.date}
                              onChangeText={handleChange("date")}
                              error={errors.date}
                              placeholder={t("Worker.Skills.datePleaceholder")}
                              keyboardType='numeric'
                            />
                          </View>
                        </TouchableOpacity>
                        <DateTimePickerModal
                          isVisible={isDatePickerVisible}
                          mode='date'
                          onConfirm={handleConfirm}
                          onCancel={hideDatePicker}
                          confirmTextIOS='Обрати'
                          locale='uk_UA'
                        />
                      </View>
                      <View style={{ marginTop: 20, width: "75%" }}>
                        <Text style={styles.label}>
                          {t("Worker.Skills.skill2")}
                        </Text>
                        <UpluadInput
                          filename={values.k2}
                          onChangeFile={(value) => setFieldValue("k2", value)}
                        />
                      </View>
                      <View style={{ marginTop: 20, width: "75%" }}>
                        <Text style={styles.label}>
                          {" "}
                          {t("Worker.Skills.skill3")}
                        </Text>
                        <UpluadInput
                          filename={values.k3}
                          onChangeFile={(value) => setFieldValue("k3", value)}
                        />
                      </View>
                      <View style={{ marginTop: 20, width: "75%" }}>
                        <Text style={styles.label}>
                          {" "}
                          {t("Worker.Skills.skill4")}
                        </Text>
                        <UpluadInput
                          filename={values.k2}
                          onChangeFile={(value) => setFieldValue("k4", value)}
                        />
                      </View>
                    </View>
                  </ScrollView>
                </View>
                <View style={styles.btn_box}>
                  <View style={{ width: 299 }}>
                    <LongWhiteButton
                      title={t("Worker.Skills.end")}
                      onPress={async () => {
                        await handleSubmit();
                      }}
                      //disabled={!isValid}
                    />
                  </View>
                </View>
              </>
            );
          }}
        </Formik>
      ) : (
        <CompetenciesResult
          info={userInfo}
          onPress={() => setIsCompetencies(false)}
        />
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: Platform.OS == "ios" ? 65 : 40,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "ComfortaaBold",
    color: Colors.veryDarkBlue,
    marginBottom: 40,
    width: 328,
  },
  wrapper: {
    paddingHorizontal: 17,
  },
  label: {
    color: Colors.darkBlue,
    fontFamily: "ComfortaaLight",
    fontSize: 14,
    lineHeight: 16,
  },
  sub_title: {
    width: 268,
    fontSize: 16,
    lineHeight: 22,
    fontFamily: "ComfortaaRegular",
  },
  input: {
    borderBottomColor: "#D9DFEB",
    borderBottomWidth: 2,
    paddingVertical: 10,
    fontFamily: "ComfortaaLight",
    width: 300,
  },
  label: {
    color: Colors.darkBlue,
    fontFamily: "ComfortaaLight",
    fontSize: 14,
    lineHeight: 16,
    marginBottom: 15,
  },
  select_text: {
    fontSize: 16,
    fontFamily: "ComfortaaRegular",
    marginLeft: 16,
  },
  select_input: {
    backgroundColor: "white",
    width: 294,
    height: 44,
    borderRadius: 14,
    alignItems: "flex-start",
    justifyContent: "center",
    display: "flex",
  },
  select_box: {
    width: 294,
    minHeight: 132,
    borderRadius: 14,
    backgroundColor: "#F5F5F5",
  },
  select_variant: {
    height: 44,
    width: 294,
    justifyContent: "center",
    borderBottomColor: "#D9DFEB",
    borderBottomWidth: 0.5,
    borderRadius: 18,
  },
  btn_box: {
    //width: SCREEN_WIDTH - 70,
    width: "100%",
    position: "absolute",
    bottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UploadCompetence;
