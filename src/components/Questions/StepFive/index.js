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
import UploadInput from "../../../components/UpluadInput/index";
import Input from "../../Input";

const methods = [
  {
    id: "1",
    label: "Вислати фото документів, які видаляться одразу після перевірки",
  },
  { id: "2", label: "Особисто в офісі Tikrow Pruszków ul. Kraszewskiego 32/4" },
];

const StepFive = (props) => {
  const [selctList, setSelectList] = useState(true);
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("Keyboard Shown");
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("Keyboard Hidden");
    });
  }, []);

  return (
    <Formik
      initialValues={{
        method: "",
        passport1: "",
        passport2: "",
        polandCard1: "",
        polandCard2: "",
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
          values.method.length > 0 &&
          values.passport1 &&
          values.passport2 &&
          values.polandCard1 &&
          values.polandCard2;
        return (
          <View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  paddingBottom: keyboardStatus == "Keyboard Shown" ? 400 : 150,
                }}
              >
                <View style={{ marginTop: 20 }}>
                  <Text style={styles.label}>
                    Спосіб підтвердження правдивості документів:
                  </Text>
                  <TouchableOpacity
                    style={styles.select_input}
                    onPress={() => setSelectList(!selctList)}
                  >
                    <Text style={styles.select_text}>
                      {values.method ? values.method : "Виберіть"}
                    </Text>
                  </TouchableOpacity>
                  {selctList ? (
                    <View style={styles.select_box}>
                      {methods.map((item) => (
                        <TouchableOpacity
                          key={item.id}
                          style={styles.select_variant}
                          onPress={() => {
                            setFieldValue("method", item.label);
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
                <View style={{ marginTop: 20, width: 300 }}>
                  <Text style={styles.label}>Фото 1 сторінки паспорту:</Text>
                  <UploadInput />
                </View>
                <View style={{ marginTop: 20, width: 300 }}>
                  <Text style={styles.label}>Фото 2 сторінки паспорту:</Text>
                  <UploadInput />
                </View>
                <View style={{ marginTop: 20, width: 300 }}>
                  <Text style={styles.label}>Фото 1 сторона Карти Поляка:</Text>
                  <UploadInput />
                </View>
                <View style={{ marginTop: 20, width: 300 }}>
                  <Text style={styles.label}>Фото 2 сторона Карти Поляка:</Text>
                  <UploadInput />
                </View>
                <View style={{ marginTop: 20, padding: 5 }}>
                  <LongWhiteButton
                    title='Закінчити'
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
    // height: 44,
    padding: 10,
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

export default StepFive;
