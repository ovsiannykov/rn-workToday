import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AuthContext } from "../../../Navigation/Auth/AuthContext";
import { connect, useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-native-phone-input";

import styles from "./styles";
import Input from "../../../components/Input";
import BigButton from "../../../components/BigButton";
import sized from "../../../Svg/sized";
import logoSvg from "../../../assets/icons/logo.svg";
import { registerStart, auth } from "../../../redux/auth/auth-thunks";

const SignupSchema = Yup.object().shape({
  phone: Yup.string()
    .min(13, "Занадто короткий!")
    .max(13, "Занадто довгий!")
    .required("Обов'язково"),
  password: Yup.string().min(6, "Занадто короткий!").required("Обов'язково"),
});

const Login = ({ navigation, login, registerStart, ...props }) => {
  const [typeEntrance, setTypeEntrance] = useState(false);
  const context = useContext(AuthContext);

  const dispatch = useDispatch();

  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  const LogoIcon = sized(logoSvg, 179, 89);

  return (
    <DismissKeyboard>
      <View style={styles.loginBox}>
        <View style={styles.logoBox}>
          <LogoIcon />
        </View>
        <View style={styles.tabMenu}>
          <View style={styles.switchGroup}>
            <TouchableOpacity
              style={{ marginRight: 50 }}
              onPress={() => setTypeEntrance(false)}
            >
              <Text
                style={{
                  opacity: typeEntrance == false ? 1 : 0.5,
                  ...styles.switchButton,
                }}
              >
                Вхід
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTypeEntrance(true)}>
              <Text
                style={{
                  opacity: typeEntrance == true ? 1 : 0.5,
                  ...styles.switchButton,
                }}
              >
                реєстрація
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputsBox}>
            {!typeEntrance ? (
              <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.welcomeText}>Ласкаво просимо</Text>
                <Text style={styles.subTitle}>Віхд у ваш аккаунт</Text>
                <Formik
                  initialValues={{
                    phone: "",
                    password: "",
                  }}
                  onSubmit={(values) => {
                    dispatch(auth(values, context));
                  }}
                  validationSchema={SignupSchema}
                >
                  {({
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    submitCount,
                    setFieldValue,
                    validate,
                    touched,
                  }) => {
                    errors = submitCount > 0 ? errors : {};
                    const isValid =
                      values.phone.length < 0 && values.password.length < 0;

                    const handleConfirm = (num) => {
                      const number = num.replace(/\s/g, "");
                      setFieldValue("phone", number);
                    };
                    return (
                      <>
                        <View>
                          <Text style={styles.label}>Телефон</Text>
                          <PhoneInput
                            initialCountry={"ua"}
                            error={errors.phone}
                            onPressFlag={() => null}
                            value={values.phone}
                            maxLength={13}
                            onChangePhoneNumber={(num) => handleConfirm(num)}
                            allowZeroAfterCountryCode={false}
                            autoFormat={true}
                            style={styles.input}
                          />
                          {errors.phone && touched.phone ? (
                            <Text style={styles.error}>{errors.phone}</Text>
                          ) : null}
                        </View>
                        <View style={{ marginTop: 30, marginBottom: 20 }}>
                          <Input
                            title='Пароль'
                            textContentType='password'
                            isPassword={true}
                            value={values.password}
                            onChange={handleChange("password")}
                            error={errors.password}
                          />
                          {errors.password && touched.password ? (
                            <Text style={styles.error}>{errors.password}</Text>
                          ) : null}
                        </View>
                        <View style={{ alignItems: "center" }}>
                          <BigButton
                            title='УВIЙТИ'
                            onPress={() => {
                              handleSubmit();
                            }}
                          />
                        </View>
                      </>
                    );
                  }}
                </Formik>
                <View style={styles.loginSmallButtonsBox}>
                  <Text style={styles.restorePassword}>Забули пароль?</Text>
                  <TouchableOpacity>
                    <Text style={styles.viewPasswordBtn}>Відновити</Text>
                  </TouchableOpacity>
                </View>
              </KeyboardAwareScrollView>
            ) : (
              <KeyboardAwareScrollView>
                <Text style={styles.welcomeText}>Ласкаво просимо</Text>
                <Text style={styles.subTitle}>Cтворення нового аккаунту</Text>
                <Formik
                  initialValues={{
                    phone: "",
                    password: "",
                  }}
                  onSubmit={(values) => {
                    registerStart(values, navigation, values.phone);
                  }}
                  validationSchema={SignupSchema}
                >
                  {({
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    submitCount,
                    setFieldValue,
                    validate,
                    touched,
                  }) => {
                    errors = submitCount > 0 ? errors : {};
                    const isValid =
                      values.phone.length > 0 && values.password.length > 0;

                    const handleConfirm = (num) => {
                      const number = num.replace(/\s/g, "");
                      setFieldValue("phone", number);
                    };

                    return (
                      <>
                        <View>
                          <Text style={styles.label}>Телефон</Text>
                          <PhoneInput
                            initialCountry={"ua"}
                            error={errors.phone}
                            onPressFlag={() => null}
                            value={values.phone}
                            maxLength={13}
                            onChangePhoneNumber={(num) => handleConfirm(num)}
                            allowZeroAfterCountryCode={false}
                            autoFormat={true}
                            style={styles.input}
                          />
                          {errors.phone && touched.phone ? (
                            <Text style={styles.error}>{errors.phone}</Text>
                          ) : null}
                        </View>
                        <View style={{ marginTop: 30, marginBottom: 20 }}>
                          <Input
                            title='Пароль'
                            textContentType='password'
                            isPassword={true}
                            value={values.password}
                            onChange={handleChange("password")}
                            error={errors.password}
                          />
                          {errors.password && touched.password ? (
                            <Text style={styles.error}>{errors.password}</Text>
                          ) : null}
                        </View>
                        <View>
                          <View style={{ alignItems: "center" }}>
                            <BigButton
                              onPress={() => {
                                handleSubmit();
                              }}
                              title='РЕЄСТРАЦІЯ'
                            />
                          </View>
                        </View>
                      </>
                    );
                  }}
                </Formik>
              </KeyboardAwareScrollView>
            )}
          </View>
        </View>
      </View>
    </DismissKeyboard>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { registerStart, auth })(Login);

//mapDispatchToProps, mapStateToProps
