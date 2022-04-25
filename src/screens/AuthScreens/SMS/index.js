import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

import styles from "./styles";
import sized from "../../../Svg/sized";
import logoSvg from "../../../assets/icons/logo.svg";
import { AuthContext } from "../../../Navigation/Auth/AuthContext";

const CELL_COUNT = 6;

const SMS = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const context = useContext(AuthContext);
  const LogoIcon = sized(logoSvg, 178, 83);

  useEffect(() => {
    if (value.length === CELL_COUNT) context.signIn("asd");
  }, [value]);

  return (
    <LinearGradient
      colors={["#F4F7FF", "#FFFFFF"]}
      style={{ ...styles.container }}
    >
      <LogoIcon />
      <Text style={styles.header_title}>Введите код из смс</Text>
      <Text style={styles.sub_title}>
        Проверочный код был отправлен вам на телефон +380988566330733
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
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btn_text}>Переотправить код</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default SMS;
