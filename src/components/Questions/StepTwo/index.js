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

const termOptions = [
  { id: "1", label: "На вказаний" },
  { id: "2", label: "Безтерміново" },
];

const vacationOtions = [
  { id: "1", label: "Я не у відпустці" },
  { id: "2", label: "Я у відпустці по догляду за дитиною" },
  { id: "3", label: "Я у декретній відпустці" },
  { id: "4", label: "Я у неоплачуваній відпустці" },
];

const contributionsOptions = [
  { id: "1", label: "Так" },
  { id: "2", label: "Ні" },
];

const StepTwo = (props) => {
  const [selctList, setSelectList] = useState(true);
  const [selctList2, setSelectList2] = useState(true);
  const [selctList3, setSelectList3] = useState(true);

  return (
    <Formik
      initialValues={{
        wokrPlace: "",
        term: "",
        vacation: "",
        contributions: "",
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
          values.wokrPlace.length > 0 &&
          values.term.length > 0 &&
          values.vacation.length > 0 &&
          values.contributions.length > 0;
        return (
          <View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ paddingBottom: 150 }}>
                <View style={{ marginTop: 20, width: 300 }}>
                  <Text style={styles.label}>
                    Назва та адреса закладу праці
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={values.wokrPlace}
                    onChangeText={handleChange("wokrPlace")}
                    error={errors.wokrPlace}
                  />
                </View>
                <View style={{ marginTop: 20 }}>
                  <Text style={styles.label}>Мене приймають на роботу*</Text>
                  <TouchableOpacity
                    style={styles.select_input}
                    onPress={() => setSelectList(!selctList)}
                  >
                    <Text style={styles.select_text}>
                      {values.term ? values.term : "Виберіть"}
                    </Text>
                  </TouchableOpacity>
                  {selctList ? (
                    <View style={styles.select_box}>
                      {termOptions.map((item) => (
                        <TouchableOpacity
                          key={item.id}
                          style={styles.select_variant}
                          onPress={() => {
                            setFieldValue("term", item.label);
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
                <View style={{ marginTop: 20 }}>
                  <Text style={styles.label}>Відпустка крім щорічної*</Text>
                  <TouchableOpacity
                    style={styles.select_input}
                    onPress={() => setSelectList2(!selctList2)}
                  >
                    <Text style={styles.select_text}>
                      {values.vacation ? values.vacation : "Виберіть"}
                    </Text>
                  </TouchableOpacity>
                  {selctList2 ? (
                    <View style={styles.select_box}>
                      {vacationOtions.map((item) => (
                        <TouchableOpacity
                          key={item.id}
                          style={styles.select_variant}
                          onPress={() => {
                            setFieldValue("vacation", item.label);
                            setSelectList2(false);
                          }}
                        >
                          <Text style={styles.select_text}>{"\u2022"}</Text>
                          <Text style={styles.select_text}>{item.label}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  ) : null}
                </View>
                <View style={{ marginTop: 20 }}>
                  <Text style={styles.label}>
                    Внески сплачуються від мінімум 2800 брутто*
                  </Text>
                  <TouchableOpacity
                    style={styles.select_input}
                    onPress={() => setSelectList3(!selctList3)}
                  >
                    <Text style={styles.select_text}>
                      {values.contributions ? values.contributions : "Виберіть"}
                    </Text>
                  </TouchableOpacity>
                  {selctList3 ? (
                    <View style={{ ...styles.select_box }}>
                      {contributionsOptions.map((item) => (
                        <TouchableOpacity
                          key={item.id}
                          style={styles.select_variant}
                          onPress={() => {
                            setFieldValue("contributions", item.label);
                            setSelectList3(false);
                          }}
                        >
                          <Text style={styles.select_text}>{"\u2022"}</Text>
                          <Text style={styles.select_text}>{item.label}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  ) : null}
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

export default StepTwo;
