import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

import Colors from "../../../constants/Colors";
import LongWhiteButton from "../../LongWhiteButton";
import { setStep4 } from "../../../redux/worker/worker-thunks";

const StepFour = (props) => {
  const [selctList, setSelectList] = useState(true);
  const [selctList2, setSelectList2] = useState(true);
  const [fetching, setFetching] = useState(false);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  if (fetching) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size='large' color='#376AED' />
      </View>
    );
  }

  const streetType = [
    { id: "1", label: t("Worker.Questions.street") },
    { id: "2", label: t("Worker.Questions.alley") },
    { id: "3", label: t("Worker.Questions.square") },
    { id: "4", label: t("Worker.Questions.district") },
  ];

  const factAdress = [
    { id: "1", label: t("Worker.Questions.yes") },
    { id: "2", label: t("Worker.Questions.no") },
  ];

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
      onSubmit={async (values) => {
        setFetching(true);
        await dispatch(setStep4(values, navigation));
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
                  <Text style={styles.label}>
                    {t("Worker.Questions.postCode")}
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={values.post}
                    onChangeText={handleChange("post")}
                    error={errors.post}
                    keyboardType='numeric'
                  />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>
                    {t("Worker.Questions.settlement")}
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={values.city}
                    onChangeText={handleChange("city")}
                    error={errors.city}
                  />
                </View>
                <View style={{ marginTop: 20 }}>
                  <Text style={styles.label}>
                    {t("Worker.Questions.streetType")}
                  </Text>
                  <TouchableOpacity
                    style={styles.select_input}
                    onPress={() => setSelectList(!selctList)}
                  >
                    <Text style={styles.select_text}>
                      {values.streetType
                        ? values.streetType
                        : t("Worker.Questions.choose")}
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
                  <Text style={styles.label}>
                    {t("Worker.Questions.houseNum")}
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={values.houseNum}
                    onChangeText={handleChange("houseNum")}
                    error={errors.houseNum}
                    keyboardType='numeric'
                  />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>
                    {t("Worker.Questions.appartamentNum")}
                  </Text>
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
                    {t("Worker.Questions.postalAdress")}
                  </Text>
                  <TouchableOpacity
                    style={styles.select_input}
                    onPress={() => setSelectList2(!selctList2)}
                  >
                    <Text style={styles.select_text}>
                      {values.isAdress
                        ? values.isAdress
                        : t("Worker.Questions.choose")}
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
                    {t("Worker.Questions.locationCorrespondence")}
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={values.correspondenceCity}
                    onChangeText={handleChange("correspondenceCity")}
                    error={errors.correspondenceCity}
                  />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>
                    {t("Worker.Questions.streetTypeCorrespondence")}
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={values.correspondenceStreetType}
                    onChangeText={handleChange("correspondenceStreetType")}
                    error={errors.correspondenceStreetType}
                  />
                </View>
                <View style={{ marginTop: 20, width: "75%" }}>
                  <Text style={styles.label}>
                    {t("Worker.Questions.correspondenceStreet")}
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
                    {t("Worker.Questions.correspondenceHouseNum")}
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
                    {t("Worker.Questions.appartamentNumCorrespondence")}
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

export default StepFour;
