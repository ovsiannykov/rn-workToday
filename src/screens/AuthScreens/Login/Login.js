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
import { useSelector } from "react-redux";

import styles from "./styles";
import Input from "../../../components/Input";
import BigButton from "../../../components/BigButton";
import sized from "../../../Svg/sized";
import logoSvg from "../../../assets/icons/logo.svg";
import { registerStart, auth } from "../../../redux/auth/auth-thunks";

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
                >
                  {({
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    submitCount,
                    setFieldValue,
                    validate,
                  }) => {
                    errors = submitCount > 0 ? errors : {};
                    const isValid =
                      values.phone.length > 0 && values.password.length > 0;
                    return (
                      <>
                        <View>
                          <Input
                            title='Телефон'
                            value={values.phone}
                            onChange={handleChange("phone")}
                            error={errors.phone}
                            keyType='numeric'
                          />
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
                        </View>
                        <View style={{ alignItems: "center" }}>
                          <BigButton
                            title='УВIЙТИ'
                            disabled={!isValid}
                            onPress={() => {
                              if (isValid) {
                                handleSubmit();
                              }
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
                >
                  {({
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    submitCount,
                    setFieldValue,
                    validate,
                  }) => {
                    errors = submitCount > 0 ? errors : {};
                    const isValid =
                      values.phone.length > 0 && values.password.length > 0;
                    return (
                      <>
                        <View>
                          <Input
                            title='Телефон'
                            value={values.phone}
                            onChange={handleChange("phone")}
                            error={errors.phone}
                            keyType='numeric'
                          />
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
                        </View>
                        <View>
                          <View style={{ alignItems: "center" }}>
                            <BigButton
                              disabled={!isValid}
                              onPress={() => {
                                if (isValid) {
                                  handleSubmit();
                                  navigation.navigate("SMS");
                                }
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
