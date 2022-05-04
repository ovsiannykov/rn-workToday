import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

import Colors from "../../../constants/Colors";
import LongWhiteButton from "../../LongWhiteButton";
import { setStep2 } from "../../../redux/worker/worker-thunks";

const StepTwo = (props) => {
  const [selctList, setSelectList] = useState(true);
  const [selctList2, setSelectList2] = useState(true);
  const [selctList3, setSelectList3] = useState(true);
  const [fetching, setFetching] = useState(false);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const termOptions = [
    { id: "1", label: t("Worker.Questions.deadline") },
    { id: "2", label: t("Worker.Questions.noDeadline") },
  ];

  const vacationOtions = [
    { id: "1", label: t("Worker.Questions.noVocation") },
    { id: "2", label: t("Worker.Questions.childVocation") },
    { id: "3", label: t("Worker.Questions.moternity") },
    { id: "4", label: t("Worker.Questions.unpaid") },
  ];

  const contributionsOptions = [
    { id: "1", label: t("Worker.Questions.yes") },
    { id: "2", label: t("Worker.Questions.no") },
  ];

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
        wokrPlace: "",
        term: "",
        vacation: "",
        contributions: "",
      }}
      onSubmit={(values) => {
        setFetching(true);
        dispatch(setStep2(values, navigation));
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
          values.wokrPlace.length > 0 &&
          values.term.length > 0 &&
          values.vacation.length > 0 &&
          values.contributions.length > 0;
        return (
          <View>
            <ScrollView
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}
            >
              <View style={{ paddingBottom: 150 }}>
                <View style={{ marginTop: 20, width: 300 }}>
                  <Text style={styles.label}>
                    {t("Worker.Questions.workAdress")}
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={values.wokrPlace}
                    onChangeText={handleChange("wokrPlace")}
                    error={errors.wokrPlace}
                  />
                </View>
                <View style={{ marginTop: 20 }}>
                  <Text style={styles.label}>
                    {t("Worker.Questions.currentluWorking")}
                  </Text>
                  <TouchableOpacity
                    style={styles.select_input}
                    onPress={() => setSelectList(!selctList)}
                  >
                    <Text style={styles.select_text}>
                      {values.term ? values.term : t("Worker.Questions.choose")}
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
                  <Text style={styles.label}>
                    {t("Worker.Questions.vacation")}
                  </Text>
                  <TouchableOpacity
                    style={styles.select_input}
                    onPress={() => setSelectList2(!selctList2)}
                  >
                    <Text style={styles.select_text}>
                      {values.vacation
                        ? values.vacation
                        : t("Worker.Questions.choose")}
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
                    {t("Worker.Questions.taxesPay")}
                  </Text>
                  <TouchableOpacity
                    style={styles.select_input}
                    onPress={() => setSelectList3(!selctList3)}
                  >
                    <Text style={styles.select_text}>
                      {values.contributions
                        ? values.contributions
                        : t("Worker.Questions.choose")}
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

export default StepTwo;
