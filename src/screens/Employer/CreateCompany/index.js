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

import styles from "./styles";
import sized from "../../../Svg/sized";
import selectMapSvg from "../../../assets/icons/select_map.svg";
import UpluadInput from "../../../components/UpluadInput";
import LongWhiteButton from "../../../components/LongWhiteButton";

const SlecetMapIcon = sized(selectMapSvg, 16.64, 23);

const CreateCompany = (props) => {
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);

  const navigation = useNavigation();

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("Keyboard Shown");
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("Keyboard Hidden");
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <LinearGradient
      colors={["#F4F7FF", "#FFFFFF"]}
      style={{ ...styles.container }}
    >
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>Створення компанії</Text>
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
              <View>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View
                    style={{
                      paddingBottom:
                        keyboardStatus == "Keyboard Shown" ? 400 : 150,
                    }}
                  >
                    <View style={{ width: "75%" }}>
                      <Text style={styles.label}>Назва компанії</Text>
                      <TextInput
                        style={styles.input}
                        value={values.companyName}
                        onChangeText={handleChange("companyName")}
                        error={errors.companyName}
                        placeholder='Назва компанії'
                      />
                    </View>
                    <View style={{ marginTop: 20, width: "75%" }}>
                      <Text style={styles.label}>Тематика</Text>
                      <TextInput
                        style={styles.input}
                        value={values.thematic}
                        onChangeText={handleChange("thematic")}
                        error={errors.thematic}
                        placeholder='Тематика'
                      />
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
                      <TouchableOpacity style={styles.map_btn}>
                        <Text style={styles.selectMap_text}>
                          Выбрать на карте
                        </Text>
                        <SlecetMapIcon />
                      </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 20, width: "75%" }}>
                      <Text style={styles.label}>Про компанію</Text>
                      <TextInput
                        style={styles.input}
                        value={values.about}
                        onChangeText={handleChange("about")}
                        error={errors.about}
                        placeholder='У кількох словах'
                      />
                    </View>
                    <View style={{ marginTop: 20, width: "75%" }}>
                      <Text style={styles.label}>ПАватар профіля</Text>
                      <UpluadInput />
                    </View>

                    <View style={{ marginTop: 20, padding: 5 }}>
                      <LongWhiteButton
                        title='Создать'
                        disabled={!isValid}
                        onPress={() => {
                          navigation.goBack();
                          handleSubmit();
                        }}
                      />
                    </View>
                  </View>
                </ScrollView>
              </View>
            );
          }}
        </Formik>
      </View>
    </LinearGradient>
  );
};

export default CreateCompany;
