import { StyleSheet, Platform } from "react-native";

import Colors from "../../../constants/Colors";

export default StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: Platform.OS == "ios" ? 80 : 40,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "ComfortaaBold",
    color: Colors.veryDarkBlue,
    marginBottom: 40,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  wrapper: {
    paddingHorizontal: 31,
  },
  button_text: {
    color: Colors.veryDarkBlue,
    fontSize: 20,
    fontFamily: "ComfortaaLight",
  },
  button_wrapper: {
    width: 210,
    marginRight: 11,
  },
  //
  contract: {
    marginBottom: 20,
  },
  contract_title: {
    textAlign: "left",
    fontSize: 18,
    color: Colors.veryDarkBlue,
    fontFamily: "ComfortaaMedium",
  },
  border: {
    marginTop: 8,
    width: 293,
    height: 3,
    backgroundColor: "#7B8BB242",
  },
  contract_subTitle: {
    textAlign: "left",
    fontSize: 14,
    color: Colors.veryDarkBlue,
    fontFamily: "ComfortaaMedium",
    marginTop: 20,
  },
  contract_text: {
    width: 295,
    color: Colors.veryDarkBlue,
    fontSize: 14,
    fontFamily: "ComfortaaLight",
    lineHeight: 20,
    marginBottom: 20,
    marginTop: 6,
  },
});
