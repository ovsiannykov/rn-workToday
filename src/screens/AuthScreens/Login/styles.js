import { StyleSheet, Platform } from "react-native";

import Colors from "../../../constants/Colors";

export default StyleSheet.create({
  loginBox: {
    // justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  logoBox: {
    marginTop: 80,
    marginBottom: 109,
  },
  logo: {
    width: 178,
  },
  tabMenu: {
    height: Platform.OS == "ios" ? 600 : 520,
    backgroundColor: Colors.blue,
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingTop: 10,
    alignItems: "center",
  },
  switchGroup: {
    display: "flex",
    flexDirection: "row",
    marginTop: 24,
  },
  switchButton: {
    fontFamily: "ComfortaaRegular",
    fontSize: 18,
    lineHeight: 18,
    textTransform: "uppercase",
    color: "white",
  },
  inputsBox: {
    marginTop: 30,
    width: "100%",
    backgroundColor: "white",
    height: "100%",
    paddingTop: 30,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 40,
  },
  welcomeText: {
    fontFamily: "ComfortaaLight",
    fontSize: 24,
  },
  subTitle: {
    marginTop: 12,
    fontSize: 14,
    fontFamily: "RobotoThinItalic",
    fontWeight: "100",
    color: Colors.darkBlue,
    marginBottom: 35,
  },
  loginSmallButtonsBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
  },
  viewPasswordBtn: {
    fontSize: 15,
    fontFamily: "ComfortaaMedium",
    lineHeight: 15.61,
    color: Colors.yellow,
  },
  restorePassword: {
    fontSize: 14,
    fontFamily: "RobotoThinItalic",
    fontWeight: "100",
    color: Colors.darkBlue,
  },
});
