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
  Platform,
  ActivityIndicator,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../../constants/Colors";
import LongWhiteButton from "../../LongWhiteButton";
import { setStep1 } from "../../../redux/worker/worker-thunks";

const statusOptions = [
  { id: "1", label: "Працюю" },
  { id: "2", label: "Безробітний" },
  { id: "3", label: "Iнше" },
];

const StepOne = (props) => {
  const [selctList, setSelectList] = useState(true);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [fetching, setFetching] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

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
        birth: "",
        citizenship: "Україна",
        status: "",
      }}
      onSubmit={async (values) => {
        setFetching(true);
        await dispatch(setStep1(values, navigation));
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
          values.birth.length > 0 &&
          values.citizenship.length > 0 &&
          values.status.length > 0;

        const handleConfirm = (date) => {
          const num = date.getDate().toString();
          const month = date.getMonth().toString();
          const year = date.getFullYear().toString();
          setFieldValue("birth", `${num}-${month}-${year}`);
          hideDatePicker();
        };

        return (
          <View>
            <ScrollView
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}
              style={{ paddingBottom: 50 }}
            >
              <View style={{ marginTop: 20, width: "75%" }}>
                <Text style={styles.label}>Дата народження:</Text>
                <TouchableOpacity onPress={showDatePicker}>
                  <View pointerEvents='none'>
                    <TextInput
                      style={styles.input}
                      value={values.birth}
                      onChangeText={handleChange("birth")}
                      error={errors.birth}
                      placeholder='(день-місяць-рік)'
                      keyboardType='numeric'
                    />
                  </View>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode='date'
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                  confirmTextIOS='Обрати'
                  locale='uk_UA'
                />
              </View>
              <View style={{ marginTop: 20, width: "75%" }}>
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
            <View style={styles.btn_box}>
              <View style={{ width: 299 }}>
                <LongWhiteButton
                  title='Наступний крок'
                  onPress={async () => {
                    await handleSubmit();
                    props.nextStep();
                  }}
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
    //width: SCREEN_WIDTH - 70,
    width: "100%",
    position: "absolute",
    bottom: -30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default StepOne;
