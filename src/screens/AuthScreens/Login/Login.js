import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Input from "../../../components/Input";
import BigButton from "../../../components/BigButton";
import { AuthContext } from "../../../Navigation/Auth/AuthContext";

const logo = require("../../../assets/images/Logo.png");

const Login = ({ navigation, login, ...props }) => {
  const [typeEntrance, setTypeEntrance] = useState(false);
  const context = useContext(AuthContext);

  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  return (
    <DismissKeyboard>
      <View style={styles.loginBox}>
        <View style={styles.logoBox}>
          <Image style={styles.logo} source={logo} />
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
                      onPress={() => navigation.navigate("SMS")}
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

export default Login;
