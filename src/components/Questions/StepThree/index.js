import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useTranslation } from "react-i18next";

import Colors from "../../../constants/Colors";
import LongWhiteButton from "../../LongWhiteButton";
import { setStep3 } from "../../../redux/worker/worker-thunks";

const StepThree = (props) => {
  const [fetching, setFetching] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();

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
    <Formik
      initialValues={{
        passport: "",
        passportDate: "",
        pessel: "",
        firstname: "",
        lastname: "",
        email: "",
        card: "",
        tax: "",
      }}
      onSubmit={(values) => {
        setFetching(true);
        dispatch(setStep3(values, navigation));
        setFetching(false);
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
        const isValid =
          values.passport.length > 0 &&
          values.passportDate.length > 0 &&
          values.pessel.length > 0 &&
          values.firstname.length > 0 &&
          values.lastname.length > 0 &&
          values.email.length > 0 &&
          values.card.length > 0 &&
          values.tax.length > 0;

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
          setFieldValue("passportDate", `${numValue}.${monthValue}.${year}`);
          hideDatePicker();
        };

        return (
          <View>
            <ScrollView
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}
            >
              <View
                style={{
                  paddingBottom: 150,
                }}
              >
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>
                    {t("Worker.Questions.passport")}
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={values.passport}
                    onChangeText={handleChange("passport")}
                    error={errors.passport}
                  />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>
                    {t("Worker.Questions.passportDate")}
                  </Text>
                  <TouchableOpacity onPress={showDatePicker}>
                    <View pointerEvents='none'>
                      <TextInput
                        style={styles.input}
                        value={values.passportDate}
                        onChangeText={handleChange("passportDate")}
                        error={errors.passportDate}
                        placeholder={t("Worker.Questions.datePlaceholder")}
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
                    {t("Worker.Questions.pesel")}
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={values.pessel}
                    onChangeText={handleChange("pessel")}
                    error={errors.pessel}
                  />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>{t("Worker.Questions.name")}</Text>
                  <TextInput
                    style={styles.input}
                    value={values.firstname}
                    onChangeText={handleChange("firstname")}
                    error={errors.firstname}
                  />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>
                    {t("Worker.Questions.lastname")}
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={values.lastname}
                    onChangeText={handleChange("lastname")}
                    error={errors.lastname}
                  />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>
                    {t("Worker.Questions.email")}
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    error={errors.email}
                    keyboardType='email-address'
                  />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>
                    {t("Worker.Questions.bankNum")}
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={values.card}
                    onChangeText={handleChange("card")}
                    error={errors.card}
                    keyboardType='numeric'
                  />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>
                    {t("Worker.Questions.taxAdress")}
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={values.tax}
                    onChangeText={handleChange("tax")}
                    error={errors.tax}
                  />
                </View>
                <View style={{ marginTop: 20, padding: 5 }}>
                  <LongWhiteButton
                    title={t("Worker.Questions.nextStep")}
                    onPress={() => {
                      handleSubmit();
                      props.nextStep();
                    }}
                    disabled={!isValid}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
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
    // minHeight: 132,
    borderRadius: 14,
    backgroundColor: "#F5F5F5",
  },
  select_variant: {
    height: 44,
    width: 294,
    borderBottomColor: "#D9DFEB",
    borderBottomWidth: 0.5,
    borderRadius: 18,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  btn_box: {
    width: 299,
    position: "absolute",
    bottom: 130,
  },
});

export default StepThree;
