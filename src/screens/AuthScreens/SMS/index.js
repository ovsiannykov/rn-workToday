import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import styles from "./styles";
import sized from "../../../Svg/sized";
import logoSvg from "../../../assets/icons/logo.svg";
import { AuthContext } from "../../../Navigation/Auth/AuthContext";
import {
  registerSubmitCode,
  registerReSendCode,
} from "../../../redux/auth/auth-thunks";

const CELL_COUNT = 4;

const SMS = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const [number, setNumber] = useState(t("OnBoardingEmployer.yourNum"));
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const context = useContext(AuthContext);
  const route = useRoute();
  const dispatch = useDispatch();
  const LogoIcon = sized(logoSvg, 178, 83);

  useEffect(() => {
    if (value.length === CELL_COUNT) {
      dispatch(registerSubmitCode(value, context));
    } // context.signIn("asd");
  }, [value]);

  useEffect(() => {
    if (route.params) {
      setNumber(route.params.phone);
    }
  }, [route]);

  return (
    <LinearGradient
      colors={["#F4F7FF", "#FFFFFF"]}
      style={{ ...styles.container }}
    >
      <LogoIcon />
      <Text style={styles.header_title}>
        {t("OnBoardingEmployer.writeCode")}
      </Text>
      <Text style={styles.sub_title}>
        {t("OnBoardingEmployer.phoneNumber")} {number}
      </Text>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType='number-pad'
        textContentType='oneTimeCode'
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            style={[styles.cell_box, isFocused && styles.focusCell_box]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            <Text style={[styles.cell, isFocused && styles.focusCell]}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(registerReSendCode(number));
        }}
      >
        <Text style={styles.btn_text}>{t("OnBoardingEmployer.codeAgain")}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default SMS;
