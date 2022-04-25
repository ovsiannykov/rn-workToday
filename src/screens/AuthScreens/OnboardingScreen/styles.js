import { StyleSheet, Platform, Dimensions } from "react-native";

import Colors from "../../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    //alignItems: "center",
  },
  row_one: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 40,
    paddingTop:
      Platform.OS == "android" ? 60 : Dimensions.get("window").height / 8,
  },
  row_two: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 40,
    paddingTop: 16.25,
  },
  img_smal: {
    width: 92.12,
    height: 157.75,
    borderRadius: 24,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
  },
  img_big: {
    width: 191.97,
    height: 157.75,
    borderRadius: 24,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
  },
  content_box: {
    backgroundColor: "white",
    minHeight:
      Platform.OS == "android" ? null : Dimensions.get("window").height - 530,
    paddingBottom: 40,
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  slide: {
    paddingTop: 26,
    paddingHorizontal: 30,
  },
  title: {
    fontFamily: "ComfortaaLight",
    fontSize: 24,
    lineHeight: 32,
    color: "#0D253C",
    width: 218,
  },
  subtitle: {
    fontFamily: "RobotoThinItalic",
    marginTop: 16,
    fontSize: 14,
    lineHeight: 22,
    color: "#2D4379",
    width: 295,
  },
  flags_box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "space-around",
  },
  flag: {
    marginTop: 10,
    width: 63,
    height: 63,
    marginRight: 20,
  },
  pionts_box: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 1,
  },
  point_big: {
    width: 23,
    height: 8,
    borderRadius: 26,
    backgroundColor: Colors.yellow,
    marginRight: 8,
  },
  point_smal: {
    width: 8,
    height: 8,
    backgroundColor: "#DEE7FF",
    borderRadius: 50,
    marginRight: 8,
  },
  slide2_content: {
    marginTop: 55,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  next_button: {
    width: 88,
    height: 60,
    backgroundColor: "#376AED",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
