import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useTranslation } from "react-i18next";

import styles from "./styles";
import sized from "../../../Svg/sized";
import selectMapSvg from "../../../assets/icons/select_map.svg";
import UpluadInput from "../../../components/UpluadInput";
import LongWhiteButton from "../../../components/LongWhiteButton";

const SlecetMapIcon = sized(selectMapSvg, 16.64, 23);

const CreateCompany = (props) => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <LinearGradient
      colors={["#F4F7FF", "#FFFFFF"]}
      style={{ ...styles.container }}
    >
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>{t("Employer.createCompany.h1")}</Text>
      </View>

      <View style={styles.wrapper}>
        <Formik
          initialValues={{
            companyName: "",
            thematic: "",
            location: "",
            about: "",
            avatar: "",
          }}
          onSubmit={(values) => {
            console.log(values);
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
              values.companyName.length > 0 &&
              values.thematic.length > 0 &&
              values.location.length > 0 &&
              values.about.length > 0;
            return (
              <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View
                    style={{
                      paddingBottom: 150,
                    }}
                  >
                    <View style={{ width: "75%" }}>
                      <Text style={styles.label}>
                        {t("Employer.createCompany.name")}
                      </Text>
                      <TextInput
                        style={styles.input}
                        value={values.companyName}
                        onChangeText={handleChange("companyName")}
                        error={errors.companyName}
                        placeholder={t("Employer.createCompany.name")}
                      />
                    </View>
                    <View style={{ marginTop: 20, width: "75%" }}>
                      <Text style={styles.label}>
                        {t("Employer.createCompany.theme")}
                      </Text>
                      <TextInput
                        style={styles.input}
                        value={values.thematic}
                        onChangeText={handleChange("thematic")}
                        error={errors.thematic}
                        placeholder={t("Employer.createCompany.theme")}
                      />
                    </View>
                    <View style={{ marginTop: 20, width: "75%" }}>
                      <Text style={styles.label}>
                        {t("Employer.createCompany.place")}
                      </Text>
                      <TextInput
                        style={styles.input}
                        value={values.location}
                        onChangeText={handleChange("location")}
                        error={errors.location}
                        placeholder='??????????????'
                      />
                      <TouchableOpacity
                        style={styles.map_btn}
                        onPress={() => navigation.navigate("MapScreen")}
                      >
                        <Text style={styles.selectMap_text}>
                          {t("Employer.createCompany.mapSelect")}
                        </Text>
                        <SlecetMapIcon />
                      </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 20, width: "75%" }}>
                      <Text style={styles.label}>
                        {t("Employer.createCompany.about")}
                      </Text>
                      <TextInput
                        style={styles.input}
                        value={values.about}
                        onChangeText={handleChange("about")}
                        error={errors.about}
                        placeholder={t("Employer.createCompany.info")}
                      />
                    </View>
                    <View style={{ marginTop: 20, width: "75%" }}>
                      <Text style={styles.label}>
                        {t("Employer.createCompany.avatar")}
                      </Text>
                      <UpluadInput />
                    </View>

                    <View style={{ marginTop: 20, padding: 5 }}>
                      <LongWhiteButton
                        title={t("Employer.createCompany.create")}
                        disabled={!isValid}
                        onPress={() => {
                          navigation.goBack();
                          handleSubmit();
                        }}
                      />
                    </View>
                  </View>
                </ScrollView>
              </KeyboardAwareScrollView>
            );
          }}
        </Formik>
      </View>
    </LinearGradient>
  );
};

export default CreateCompany;
