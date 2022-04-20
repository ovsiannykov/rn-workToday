import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Keyboard,
  ScrollView,
} from "react-native";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Colors from "../../../constants/Colors";
import LongWhiteButton from "../../LongWhiteButton";
import Input from "../../Input";

const StepThree = (props) => {
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
        console.log(values);
      }}
      // validationSchema={Yup.object({
      //   birth: Yup.string().required("Birth.required"),
      //   citizenship: Yup.string().required("Citizenship.required"),
      //   status: Yup.string().required("Status.required"),
      // })}
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
                  <Text style={styles.label}>Серія і номер паспорту:</Text>
                  <TextInput
                    style={styles.input}
                    value={values.passport}
                    onChangeText={handleChange("passport")}
                    error={errors.passport}
                  />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>
                    Дата закінчення дії паспорту:
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={values.passportDate}
                    onChangeText={handleChange("passportDate")}
                    error={errors.passportDate}
                  />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>Номер PESEL:</Text>
                  <TextInput
                    style={styles.input}
                    value={values.pessel}
                    onChangeText={handleChange("pessel")}
                    error={errors.pessel}
                  />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>Ім’я:</Text>
                  <TextInput
                    style={styles.input}
                    value={values.firstname}
                    onChangeText={handleChange("firstname")}
                    error={errors.firstname}
                  />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>Прізвище:</Text>
                  <TextInput
                    style={styles.input}
                    value={values.lastname}
                    onChangeText={handleChange("lastname")}
                    error={errors.lastname}
                  />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>Електронна адреса:</Text>
                  <TextInput
                    style={styles.input}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    error={errors.email}
                    keyboardType='email-address'
                  />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>Номер банківського рахунку:</Text>
                  <TextInput
                    style={styles.input}
                    value={values.card}
                    onChangeText={handleChange("card")}
                    error={errors.card}
                    keyboardType='numeric'
                  />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>Назва, адреса податкової:</Text>
                  <TextInput
                    style={styles.input}
                    value={values.tax}
                    onChangeText={handleChange("tax")}
                    error={errors.tax}
                  />
                </View>
                <View style={{ marginTop: 20, padding: 5 }}>
                  <LongWhiteButton
                    title='Наступний крок'
                    onPress={props.nextStep}
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
