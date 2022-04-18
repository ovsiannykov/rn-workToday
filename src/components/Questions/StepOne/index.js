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
import Input from "../../../components/Input";

const statusOptions = [
  { id: "1", label: "Працюю" },
  { id: "2", label: "Безробітний" },
  { id: "3", label: "Iнше" },
];

const StepOne = (props) => {
  const [selctList, setSelectList] = useState(true);

  return (
    <Formik
      initialValues={{
        birth: "",
        citizenship: "",
        status: "",
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
          values.birth.length > 0 &&
          values.citizenship.length > 0 &&
          values.status.length > 0;
        return (
          <View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ height: "100%" }}
            >
              <View style={{ marginTop: 20, width: 300 }}>
                <Text style={styles.label}>Громадянство:</Text>
                <TextInput
                  style={styles.input}
                  value={values.birth}
                  onChangeText={handleChange("birth")}
                  error={errors.birth}
                  placeholder='(день-місяць-рік)'
                />
              </View>
              <View style={{ marginTop: 20, width: 300 }}>
                <Text style={styles.label}>Громадянство:</Text>
                <TextInput
                  style={styles.input}
                  value={values.citizenship}
                  onChangeText={handleChange("citizenship")}
                  error={errors.citizenship}
                  placeholder='Україна'
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={styles.label}>Я в даний час*</Text>
                <TouchableOpacity
                  style={styles.select_input}
                  onPress={() => setSelectList(!selctList)}
                >
                  <Text style={styles.select_text}>
                    {values.status ? values.status : "Виберіть"}
                  </Text>
                </TouchableOpacity>
                {selctList ? (
                  <View style={styles.select_box}>
                    {statusOptions.map((item) => (
                      <TouchableOpacity
                        key={item.id}
                        style={styles.select_variant}
                        onPress={() => {
                          setFieldValue("status", item.label);
                          setSelectList(false);
                        }}
                      >
                        <Text style={styles.select_text}>
                          {"\u2022  " + item.label}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                ) : null}
              </View>
            </ScrollView>
            <View style={{ alignItems: "center" }}>
              <View style={styles.btn_box}>
                <LongWhiteButton
                  title='Наступний крок'
                  onPress={props.nextStep}
                  disabled={!isValid}
                />
              </View>
            </View>
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
    width: 299,
    position: "absolute",
    bottom: 140,
  },
});

export default StepOne;
