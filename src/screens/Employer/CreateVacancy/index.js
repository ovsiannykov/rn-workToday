import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styles from "./styles";
import { sized } from "../../../Svg";
import selectMapSvg from "../../../assets/icons/select_map.svg";
import vacancyImage from "../../../assets/images/vacancy_image.jpeg";
import LongWhiteButton from "../../../components/LongWhiteButton";
import Colors from "../../../constants/Colors";

const SlecetMapIcon = sized(selectMapSvg, 16.64, 23);

const CreateVacancy = (props) => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#F4F7FF", "#FFFFFF"]}
      style={{ ...styles.container }}
    >
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>Створення вакансії</Text>
      </View>

      <View style={styles.wrapper}>
        <View style={styles.vacancy_info}>
          <View style={styles.image_box}>
            <Image source={vacancyImage} style={styles.image} />
          </View>
          <View>
            <Text style={styles.company_name}>Компанія</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Feather name='clock' size={14} color={Colors.darkBlue} />
              <Text style={styles.time}>22.02.2022 - 23.03.2022</Text>
            </View>
          </View>
        </View>
        <Formik
          initialValues={{
            sumYear: "",
            taxYear: "",
            sumDay: "",
            taxDay: "",
            location: "",
            responsibilities: "",
            responsibilitiesAdditionally: "",
            skills: "",
            skillsAdditionally: "",
            compitence: "",
            compitenceAdditionally: "",
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
              values.sumYear.length > 0 &&
              values.sumDay.length > 0 &&
              values.taxDay.length > 0 &&
              values.taxYear.length > 0 &&
              values.location.length > 0 &&
              values.responsibilities.length > 0 &&
              values.skills.length > 0 &&
              values.compitence.length > 0;
            return (
              <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View
                    style={{
                      paddingBottom: 150,
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <View style={{ width: 120, marginRight: 12 }}>
                        <Text style={styles.label}>Оплата в год.:</Text>
                        <TextInput
                          style={styles.input_min}
                          value={values.sumYear}
                          onChangeText={handleChange("sumYear")}
                          error={errors.sumYear}
                          placeholder='500 zl'
                        />
                      </View>
                      <View style={{ width: 210 }}>
                        <Text style={styles.label}>
                          Оплата с учетом комисии:
                        </Text>
                        <TextInput
                          style={styles.input_middle}
                          value={values.taxYear}
                          onChangeText={handleChange("taxYear")}
                          error={errors.taxYear}
                          placeholder='450 zl'
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 20,
                      }}
                    >
                      <View style={{ width: 120, marginRight: 12 }}>
                        <Text style={styles.label}>Оплата в день:</Text>
                        <TextInput
                          style={styles.input_min}
                          value={values.sumDay}
                          onChangeText={handleChange("sumDay")}
                          error={errors.sumDay}
                          placeholder='50 zl'
                        />
                      </View>
                      <View style={{ width: 210 }}>
                        <Text style={styles.label}>
                          Оплата с учетом комисии:
                        </Text>
                        <TextInput
                          style={styles.input_middle}
                          value={values.taxDay}
                          onChangeText={handleChange("taxDay")}
                          error={errors.taxDay}
                          placeholder='45 zl'
                        />
                      </View>
                    </View>

                    <View style={{ marginTop: 20, width: "75%" }}>
                      <Text style={styles.label}>Місце роботи:</Text>
                      <TextInput
                        style={styles.input}
                        value={values.location}
                        onChangeText={handleChange("location")}
                        error={errors.location}
                        placeholder='Україна'
                      />
                      <TouchableOpacity
                        style={styles.map_btn}
                        onPress={() => navigation.navigate("MapScreen")}
                      >
                        <Text style={styles.selectMap_text}>
                          Выбрать на карте
                        </Text>
                        <SlecetMapIcon />
                      </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 20, width: "75%" }}>
                      <Text style={styles.label}>Обов'язки:</Text>
                      <TextInput
                        style={styles.input}
                        value={values.responsibilities}
                        onChangeText={handleChange("responsibilities")}
                        error={errors.responsibilities}
                        placeholder='Обов’язок 1'
                      />
                    </View>
                    <View style={{ marginTop: 15, width: "75%" }}>
                      <TextInput
                        style={styles.input}
                        value={values.responsibilitiesAdditionally}
                        onChangeText={handleChange(
                          "responsibilitiesAdditionally"
                        )}
                        error={errors.responsibilitiesAdditionally}
                        placeholder='Додати ще:'
                      />
                    </View>
                    <View style={{ marginTop: 20, width: "75%" }}>
                      <Text style={styles.label}>Необхідні навички:</Text>
                      <TextInput
                        style={styles.input}
                        value={values.skills}
                        onChangeText={handleChange("skills")}
                        error={errors.skills}
                        placeholder='Навик 1'
                      />
                    </View>
                    <View style={{ marginTop: 15, width: "75%" }}>
                      <TextInput
                        style={styles.input}
                        value={values.skillsAdditionally}
                        onChangeText={handleChange("skillsAdditionally")}
                        error={errors.skillsAdditionally}
                        placeholder='Додати ще:'
                      />
                    </View>
                    <View style={{ marginTop: 20, width: "75%" }}>
                      <Text style={styles.label}>Необхідні компетенції:</Text>
                      <TextInput
                        style={styles.input}
                        value={values.compitence}
                        onChangeText={handleChange("compitence")}
                        error={errors.compitence}
                        placeholder='компетенція 1'
                      />
                    </View>
                    <View style={{ marginTop: 15, width: "75%" }}>
                      <TextInput
                        style={styles.input}
                        value={values.compitenceAdditionally}
                        onChangeText={handleChange("compitenceAdditionally")}
                        error={errors.compitenceAdditionally}
                        placeholder='Додати ще:'
                      />
                    </View>

                    <View
                      style={{
                        marginTop: 20,
                        padding: 5,
                        marginBottom: 100,
                        paddingRight: 25,
                      }}
                    >
                      <LongWhiteButton
                        title='Создать'
                        disabled={!isValid}
                        onPress={() => {
                          // navigation.goBack();
                          handleSubmit();
                        }}
                      />
                      <LongWhiteButton
                        title='Перегляд'
                        onPress={() => {
                          navigation.navigate("VacancyDetail", {
                            title: "Ваша вакансія",
                          });
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

export default CreateVacancy;
