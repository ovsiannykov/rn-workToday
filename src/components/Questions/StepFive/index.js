import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../../constants/Colors";
import LongWhiteButton from "../../LongWhiteButton";
import UploadInput from "../../../components/UpluadInput/index";
import { setStep5 } from "../../../redux/worker/worker-thunks";

const methods = [
  {
    id: "1",
    label: "Вислати фото документів, які видаляться одразу після перевірки",
  },
  { id: "2", label: "Особисто в офісі Tikrow Pruszków ul. Kraszewskiego 32/4" },
];

const StepFive = (props) => {
  const [selctList, setSelectList] = useState(true);
  const [fetching, setFetching] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

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
        method: "",
        passport1: "",
        passport2: "",
        polandCard1: "",
        polandCard2: "",
      }}
      onSubmit={(values) => {
        console.log(values)
        setFetching(true);
        dispatch(setStep5(values, navigation));
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
          values.method.length > 0 &&
          values.passport1 &&
          values.passport2 &&
          values.polandCard1 &&
          values.polandCard2;
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
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>Фото 1 сторінки паспорту:</Text>
                  <UploadInput filename={values.passport1} onChangeFile={(value) => setFieldValue('passport1', value)} />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>Фото 2 сторінки паспорту:</Text>
                  <UploadInput filename={values.passport2} onChangeFile={(value) => setFieldValue('passport2', value)} />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>Фото 1 сторона Карти Поляка:</Text>
                  <UploadInput filename={values.polandCard1} onChangeFile={(value) => setFieldValue('polandCard1', value)} />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>Фото 2 сторона Карти Поляка:</Text>
                  <UploadInput filename={values.polandCard2} onChangeFile={(value) => setFieldValue('polandCard2', value)} />
                </View>
                <View style={{ marginTop: 20, padding: 5 }}>
                  <LongWhiteButton
                    title='Закінчити'
                    onPress={() => {
                      handleSubmit();
                    }}
                    // disabled={!isValid}
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
