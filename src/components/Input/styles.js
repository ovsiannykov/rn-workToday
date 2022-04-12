import { StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

export default StyleSheet.create({
  inputBox: {
    width: 295,
    height: 66,
  },
  inputLabel: {
    color: Colors.darkBlue,
    fontFamily: "Poppins300",
    fontSize: 14,
    lineHeight: 16,
  },
  TextInput: {
    borderBottomColor: "#D9DFEB",
    borderBottomWidth: 2,
    paddingVertical: 10,
    fontFamily: "ComfortaaLight",
  },
  viewPasswordBtn: {
    fontSize: 15,
    fontFamily: "ComfortaaMedium",
    lineHeight: 15.61,
    color: Colors.yellow,
  },
});
