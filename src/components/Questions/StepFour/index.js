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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const streetType = [
  { id: "1", label: "Вулиця" },
  { id: "2", label: "Алея" },
  { id: "3", label: "Площа" },
  { id: "4", label: "Мікрорайон" },
];

const factAdress = [
  { id: "1", label: "Так" },
  { id: "2", label: "Ні" },
];

const StepFour = (props) => {
  const [selctList, setSelectList] = useState(true);
  const [selctList2, setSelectList2] = useState(true);

  return (
    <Formik
      initialValues={{
        post: "",
        city: "",
        streetType: "",
        isAdress: "",
        houseNum: "",
        apartament: "",
        correspondenceCity: "",
        correspondenceStreetType: "",
        correspondenceStreetName: "",
        correspondenceHouseNum: "",
        correspondenceAppartament: "",
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
          values.post.length > 0 &&
          values.city.length > 0 &&
          values.streetType.length > 0 &&
          values.isAdress.length > 0 &&
          values.houseNum.length > 0 &&
          values.apartament.length > 0;
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
                  <Text style={styles.label}>Код почтовий (індекс):</Text>
                  <TextInput
                    style={styles.input}
                    value={values.post}
                    onChangeText={handleChange("post")}
                    error={errors.post}
                    keyboardType='numeric'
                  />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>Населений пункт:</Text>
                  <TextInput
                    style={styles.input}
                    value={values.city}
                    onChangeText={handleChange("city")}
                    error={errors.city}
                  />
                </View>
                <View style={{ marginTop: 20 }}>
                  <Text style={styles.label}>Вид вулиці*</Text>
                  <TouchableOpacity
                    style={styles.select_input}
                    onPress={() => setSelectList(!selctList)}
                  >
                    <Text style={styles.select_text}>
                      {values.streetType ? values.streetType : "Виберіть"}
                    </Text>
                  </TouchableOpacity>
                  {selctList ? (
                    <View style={styles.select_box}>
                      {streetType.map((item) => (
                        <TouchableOpacity
                          key={item.id}
                          style={styles.select_variant}
                          onPress={() => {
                            setFieldValue("streetType", item.label);
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
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>Номер будинку:</Text>
                  <TextInput
                    style={styles.input}
                    value={values.houseNum}
                    onChangeText={handleChange("houseNum")}
                    error={errors.houseNum}
                    keyboardType='numeric'
                  />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>Номер квартири:</Text>
                  <TextInput
                    style={styles.input}
                    value={values.apartament}
                    onChangeText={handleChange("apartament")}
                    error={errors.apartament}
                    keyboardType='numeric'
                  />
                </View>
                <View style={{ marginTop: 20 }}>
                  <Text style={styles.label}>
                    Поштова адреса (адреса кореспонденції) така сама як і адреса
                    проживання?
                  </Text>
                  <TouchableOpacity
                    style={styles.select_input}
                    onPress={() => setSelectList2(!selctList2)}
                  >
                    <Text style={styles.select_text}>
                      {values.isAdress ? values.isAdress : "Виберіть"}
                    </Text>
                  </TouchableOpacity>
                  {selctList2 ? (
                    <View style={styles.select_box}>
                      {factAdress.map((item) => (
                        <TouchableOpacity
                          key={item.id}
                          style={styles.select_variant}
                          onPress={() => {
                            setFieldValue("isAdress", item.label);
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
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>
                    Населений пункт кореспонденції:
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={values.correspondenceCity}
                    onChangeText={handleChange("correspondenceCity")}
                    error={errors.correspondenceCity}
                  />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>Вид вулиці:</Text>
                  <TextInput
                    style={styles.input}
                    value={values.correspondenceStreetType}
                    onChangeText={handleChange("correspondenceStreetType")}
                    error={errors.correspondenceStreetType}
                  />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>
                    Назва вулиці для кореспонденції:
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={values.correspondenceStreetName}
                    onChangeText={handleChange("correspondenceStreetName")}
                    error={errors.correspondenceStreetName}
                  />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>
                    Номер будинку для кореспонденції:
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={values.correspondenceHouseNum}
                    onChangeText={handleChange("correspondenceHouseNum")}
                    error={errors.correspondenceHouseNum}
                    keyboardType='numeric'
                  />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>
                    Номер квартири для кореспонденції:
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={values.correspondenceAppartament}
                    onChangeText={handleChange("correspondenceAppartament")}
                    error={errors.correspondenceAppartament}
                    keyboardType='numeric'
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

export default StepFour;
