import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import Colors from "../../../constants/Colors";
import LongWhiteButton from "../../../components/LongWhiteButton";

const statusOptions = [
  { id: "1", label: "Працюю" },
  { id: "2", label: "Безробітний" },
  { id: "3", label: "Iнше" },
];

const Step1 = (props) => {
  const [birth, setBirth] = useState();
  const [citizenship, setCitizenship] = useState();
  const [selctList, setSelectList] = useState(false);
  const [status, setStatus] = useState();
  const [disableBtn, setDisableBtn] = useState(true);

  useEffect(() => {
    if (birth) {
      setDisableBtn(false);
    }

    console.log(status);
  }, [birth, disableBtn]);

  return (
    <View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>Дата народження:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setBirth}
          value={birth}
          placeholder='(день-місяць-рік)'
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>Громадянство:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setCitizenship}
          value={citizenship}
          placeholder='Україна'
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>Громадянство:</Text>
        <TouchableOpacity
          style={styles.select_input}
          onPress={() => setSelectList(!selctList)}
        >
          <Text style={styles.select_text}>{status ? status : "Виберіть"}</Text>
        </TouchableOpacity>
        {selctList ? (
          <View style={styles.select_box}>
            {statusOptions.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.select_variant}
                onPress={() => {
                  setStatus(item.label);
                  setSelectList(false);
                }}
              >
                <Text style={styles.select_text}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}
      </View>
      <View style={{ marginTop: 200 }}>
        <LongWhiteButton
          title='Наступний крок'
          onPress={props.nextStep}
          disabled={disableBtn}
        />
      </View>
    </View>
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
  },
  btn_box: {},
});

export default Step1;
