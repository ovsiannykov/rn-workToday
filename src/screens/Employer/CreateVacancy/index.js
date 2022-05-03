import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Formik } from "formik";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useSelector, useDispatch } from "react-redux";

import styles from "./styles";
import { sized } from "../../../Svg";
import selectMapSvg from "../../../assets/icons/select_map.svg";
import vacancyImage from "../../../assets/images/vacancy_image.jpeg";
import LongWhiteButton from "../../../components/LongWhiteButton";
import Colors from "../../../constants/Colors";
import { setSelectLocation } from "../../../redux/employer/employer-actions";
import { vacancyCreate } from "../../../redux/employer/employer-thunks";
import UpluadInput from "../../../components/UpluadInput";
import { setSelectVacancy } from "../../../redux/employer/employer-actions";

const SlecetMapIcon = sized(selectMapSvg, 16.64, 23);

const CreateVacancy = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
  const [fetching, setFetching] = useState(false);

  const mapData = useSelector((state) => state.employerReducer.selectLocation);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showDatePicker2 = () => {
    setDatePickerVisibility2(true);
  };

  const hideDatePicker2 = () => {
    setDatePickerVisibility2(false);
  };

  if (fetching) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size='large' color='#376AED' />
      </View>
    );
  }

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
            Title: "",
            Type: "Повний рабочий день",
            sumHour: "",
            taxHour: "",
            sumDay: "",
            taxDay: "",
            geo: "",
            responsibilities: "",
            responsibilitiesAdditionally: "",
            skills: "",
            skillsAdditionally: "",
            compitence: "",
            compitenceAdditionally: "",
            place: "",
            timeStart: "",
            timeEnd: "",
            info: "",
            photo: "",
          }}
          onSubmit={(values, navigation) => {
            setFetching(true);
            dispatch(vacancyCreate(values, navigation));
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
              values.Title.length > 0 &&
              values.Type.length > 0 &&
              values.sumHour.length > 0 &&
              values.sumDay.length > 0 &&
              values.place.length > 0 &&
              values.responsibilities.length > 0 &&
              values.skills.length > 0 &&
              values.timeStart.length > 0 &&
              values.timeEnd.length > 0 &&
              values.info.length > 0 &&
              values.photo &&
              values.compitence.length > 0;

            useEffect(() => {
              if (mapData !== null) {
                setFieldValue("place", mapData.adress);
                setFieldValue("geo", mapData.location);
                dispatch(setSelectLocation(null));
              }
            }, [mapData]);

            const vacancyPreview = (values) => {
              const arrObj = (str) => {
                const item = str.split(", ").filter((i) => i !== " ");
                return item.map((item) => ({
                  name: item,
                }));
              };

              const item = {
                Title: values.Title,
                info: values.info,
                _id: "none",
                photos: [values.photo],
                priceTotal: values.sumDay,
                place: values.place,
                timeStart: values.timeStart,
                timeEnd: values.timeEnd,
                company: "Your Company",
                responsibilities: arrObj(values.responsibilities),
                skills: arrObj(values.skills),
                competencies: arrObj(values.compitence),
                disableFeedback: true,
              };
              dispatch(setSelectVacancy(item));
            };

            const startDateConfirm = (date) => {
              let numValue;
              let monthValue;
              const num = date.getDate().toString();
              const month = date.getMonth().toString();
              const year = date.getFullYear().toString();

              if (num < 10) {
                numValue = `0${num}`;
              } else {
                numValue = num;
              }

              if (month < 10) {
                monthValue = `0${month}`;
              } else {
                monthValue = month;
              }
              setFieldValue("timeStart", `${numValue}.${monthValue}.${year}`);
              hideDatePicker();
            };

            const endDateConfirm = (date) => {
              let numValue;
              let monthValue;
              const num = date.getDate().toString();
              const month = date.getMonth().toString();
              const year = date.getFullYear().toString();

              if (num < 10) {
                numValue = `0${num}`;
              } else {
                numValue = num;
              }

              if (month < 10) {
                monthValue = `0${month}`;
              } else {
                monthValue = month;
              }
              setFieldValue("timeEnd", `${numValue}.${monthValue}.${year}`);
              hideDatePicker2();
            };

            return (
              <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View
                    style={{
                      paddingBottom: 150,
                    }}
                  >
                    <View style={{ marginTop: 20, width: "75%" }}>
                      <Text style={styles.label}>Назва вакансії:</Text>
                      <TextInput
                        style={styles.input}
                        value={values.Title}
                        onChangeText={handleChange("Title")}
                        error={errors.Title}
                        placeholder='Офiцiант'
                        maxLength={20}
                      />
                    </View>
                    <View style={{ marginTop: 20, width: "75%" }}>
                      <Text style={styles.label}>Тип вакансії:</Text>
                      <TextInput
                        style={styles.input}
                        value={values.Type}
                        onChangeText={handleChange("Type")}
                        error={errors.Type}
                        placeholder='Повний робочий день, Віддалено, тощо'
                        maxLength={20}
                      />
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 35,
                      }}
                    >
                      <View
                        style={{
                          width: 140,
                          marginRight: 12,
                          ...styles.commission_box,
                        }}
                      >
                        <Text style={styles.label}>Оплата в год.:</Text>
                        <TextInput
                          style={styles.input_min}
                          value={values.sumHour}
                          onChangeText={handleChange("sumHour")}
                          error={errors.sumHour}
                          placeholder='50 zl'
                          keyboardType='numeric'
                        />
                      </View>
                      <View style={{ width: 210, ...styles.commission_box }}>
                        <Text style={styles.label}>Оплата з комісією:</Text>
                        <TextInput
                          style={styles.input_middle}
                          value={values.taxHour}
                          onChangeText={handleChange("taxHour")}
                          error={errors.taxHour}
                          placeholder='55 zl'
                          keyboardType='numeric'
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
                      <View
                        style={{
                          width: 140,
                          marginRight: 12,
                          ...styles.commission_box,
                        }}
                      >
                        <Text style={styles.label}>Оплата в день:</Text>
                        <TextInput
                          style={styles.input_min}
                          value={values.sumDay}
                          onChangeText={handleChange("sumDay")}
                          error={errors.sumDay}
                          placeholder='500 zl'
                          keyboardType='numeric'
                        />
                      </View>
                      <View style={{ width: 210, ...styles.commission_box }}>
                        <Text style={styles.label}>Оплата з комісією:</Text>
                        <TextInput
                          style={styles.input_middle}
                          value={values.taxDay}
                          onChangeText={handleChange("taxDay")}
                          error={errors.taxDay}
                          placeholder='550 zl'
                          keyboardType='numeric'
                        />
                      </View>
                    </View>

                    <View style={{ marginTop: 35, width: "75%" }}>
                      <Text style={styles.label}>Опис вакансії:</Text>
                      <TextInput
                        style={styles.input}
                        value={values.info}
                        onChangeText={handleChange("info")}
                        error={errors.info}
                        placeholder='Інформація про вакансію'
                        maxLength={250}
                        multiline={true}
                        numberOfLines={4}
                      />
                    </View>

                    <View style={{ marginTop: 20, width: "75%" }}>
                      <Text style={styles.label}>Місце роботи:</Text>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("MapScreen")}
                      >
                        <View pointerEvents='none'>
                          <TextInput
                            style={{ ...styles.input, paddingRight: 90 }}
                            value={values.place}
                            onChangeText={handleChange("place")}
                            error={errors.place}
                            placeholder='Україна'
                          />
                        </View>
                      </TouchableOpacity>
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

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 20,
                      }}
                    >
                      <View
                        style={{
                          width: 140,
                          marginRight: 12,
                          ...styles.commission_box,
                        }}
                      >
                        <Text style={styles.label}>Дата початку:</Text>
                        <TouchableOpacity onPress={showDatePicker}>
                          <View pointerEvents='none'>
                            <TextInput
                              style={styles.input_min}
                              value={values.timeStart}
                              onChangeText={handleChange("timeStart")}
                              error={errors.timeStart}
                              placeholder='Виберіть дату'
                            />
                          </View>
                        </TouchableOpacity>
                        <DateTimePickerModal
                          isVisible={isDatePickerVisible}
                          mode='date'
                          onConfirm={startDateConfirm}
                          onCancel={hideDatePicker}
                          confirmTextIOS='Обрати'
                          locale='uk_UA'
                        />
                      </View>
                      <View style={{ width: 210, ...styles.commission_box }}>
                        <Text style={styles.label}>Дата кінця:</Text>
                        <TouchableOpacity onPress={showDatePicker2}>
                          <View pointerEvents='none'>
                            <TextInput
                              style={styles.input_middle}
                              value={values.timeEnd}
                              onChangeText={handleChange("timeEnd")}
                              error={errors.timeEnd}
                              placeholder='Виберіть дату'
                            />
                          </View>
                        </TouchableOpacity>
                        <DateTimePickerModal
                          isVisible={isDatePickerVisible2}
                          mode='date'
                          onConfirm={endDateConfirm}
                          onCancel={hideDatePicker2}
                          confirmTextIOS='Обрати'
                          locale='uk_UA'
                        />
                      </View>
                    </View>

                    <View style={{ marginTop: 20, width: "75%" }}>
                      <Text style={styles.label}>Обов'язки:</Text>
                      <TextInput
                        style={styles.input}
                        value={values.responsibilities}
                        onChangeText={handleChange("responsibilities")}
                        error={errors.responsibilities}
                        placeholder='Напишіть через кому'
                        multiline={true}
                        numberOfLines={4}
                      />
                    </View>
                    {/* <View style={{ marginTop: 15, width: "75%" }}>
                      <TextInput
                        style={styles.input}
                        value={values.responsibilitiesAdditionally}
                        onChangeText={handleChange(
                          "responsibilitiesAdditionally"
                        )}
                        error={errors.responsibilitiesAdditionally}
                        placeholder='Додати ще (через кому)'
                      />
                    </View> */}
                    <View style={{ marginTop: 20, width: "75%" }}>
                      <Text style={styles.label}>Необхідні навички:</Text>
                      <TextInput
                        style={styles.input}
                        value={values.skills}
                        onChangeText={handleChange("skills")}
                        error={errors.skills}
                        placeholder='Напишіть через кому'
                        maxLength={50}
                        multiline={true}
                        numberOfLines={4}
                      />
                    </View>
                    {/* <View style={{ marginTop: 15, width: "75%" }}>
                      <TextInput
                        style={styles.input}
                        value={values.skillsAdditionally}
                        onChangeText={handleChange("skillsAdditionally")}
                        error={errors.skillsAdditionally}
                        placeholder='Додати ще (через кому)'
                      />
                    </View> */}
                    <View style={{ marginTop: 20, width: "75%" }}>
                      <Text style={styles.label}>Необхідні компетенції:</Text>
                      <TextInput
                        style={styles.input}
                        value={values.compitence}
                        onChangeText={handleChange("compitence")}
                        error={errors.compitence}
                        placeholder='Напишіть через кому'
                        maxLength={50}
                        multiline={true}
                        numberOfLines={4}
                      />
                    </View>
                    {/* <View style={{ marginTop: 15, width: "75%" }}>
                      <TextInput
                        style={styles.input}
                        value={values.compitenceAdditionally}
                        onChangeText={handleChange("compitenceAdditionally")}
                        error={errors.compitenceAdditionally}
                        placeholder='Додати ще (через кому)'
                      />
                    </View> */}
                    <View style={{ marginTop: 20, width: "75%" }}>
                      <Text style={styles.label}>Фото:</Text>
                      <UpluadInput
                        filename={values.photo}
                        onChangeFile={(value) => setFieldValue("photo", value)}
                      />
                    </View>
                    <View
                      style={{
                        marginTop: 40,
                        padding: 5,
                        marginBottom: 100,
                        paddingRight: 25,
                      }}
                    >
                      <LongWhiteButton
                        title='Створити'
                        disabled={!isValid}
                        onPress={() => {
                          // navigation.goBack();
                          handleSubmit();
                        }}
                      />
                      <LongWhiteButton
                        title='Перегляд'
                        disabled={!isValid}
                        onPress={() => {
                          vacancyPreview(values);
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
