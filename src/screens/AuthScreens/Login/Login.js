import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AuthContext } from "../../../Navigation/Auth/AuthContext";
import { useNavigation } from "@react-navigation/native";
import {connect, useDispatch} from "react-redux";
import { useSelector } from "react-redux";

import styles from "./styles";
import Input from "../../../components/Input";
import BigButton from "../../../components/BigButton";
import sized from "../../../Svg/sized";
import logoSvg from "../../../assets/icons/logo.svg";
import {fetchWorkerRegister, registerStart} from "../../../redux/auth/auth-thunks";

const Login = ({ navigation, login, registerStart, ...props }) => {
  const [typeEntrance, setTypeEntrance] = useState(false);
  const context = useContext(AuthContext);
  const registr = useSelector((state) => state.authReducer.workerRegister);

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
                <View>
                  <Input title='Телефон' keyType='numeric' />
                </View>
                <View style={{ marginTop: 30, marginBottom: 20 }}>
                  <Input
                    title='Пароль'
                    textContentType='password'
                    isPassword={true}
                  />
                </View>
                <View style={{ alignItems: "center" }}>
                  <BigButton
                    title='УВIЙТИ'
                    onPress={() => context.signIn("asd")} // пользователь заходит в приложение, в context устанавливаю токен, переключается на основной стек со скринами
                  />
                </View>
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
                <View>
                  <Input title='Телефон' keyType='numeric' />
                </View>
                <View style={{ marginTop: 30, marginBottom: 20 }}>
                  <Input
                    title='Пароль'
                    textContentType='password'
                    isPassword={true}
                  />
                </View>
                <View>
                  <View style={{ alignItems: "center" }}>
                    <BigButton
                      onPress={() => {
                        //navigation.navigate("SMS");
                        registerStart({

                        })
                        console.log(registr);
                      }}
                      title='РЕЄСТРАЦІЯ'
                    />
                  </View>
                </View>
              </KeyboardAwareScrollView>
            )}
          </View>
        </View>
      </View>
    </DismissKeyboard>
  );
};

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {registerStart})(Login)

//mapDispatchToProps, mapStateToProps
