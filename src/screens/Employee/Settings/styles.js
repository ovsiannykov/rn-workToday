import { StyleSheet } from "react-native";

import Colors from "../../../constants/Colors";

export default StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: Platform.OS == "ios" ? 80 : 40,
  },
  title: {
    paddingLeft: 17,
    fontSize: 24,
    color: Colors.veryDarkBlue,
    fontFamily: "ComfortaaLight",
    paddingBottom: 30,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  scroll_container: {
    paddingHorizontal: 21,
  },
  input_box: {
    width: 224,
  },
  //
  btn: {
    width: 100,
    height: 42,
    backgroundColor: "white",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Colors.primaryBlue,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.24,
    shadowRadius: 0,
    elevation: 2,
    marginRight: 1,
  },
  btn_title: {
    color: Colors.primaryBlue,
    fontSize: 14,
    fontFamily: "ComfortaaMedium",
  },
  //
  label: {
    fontSize: 14,
    marginTop: 20,
    color: "#2D4379",
    fontFamily: "ComfortaaLight",
  },
  push_title: {
    marginTop: 12,
    fontSize: 14,
    fontFamily: "ComfortaaMedium",
  },
  btn_long: {
    width: "100%",
    height: 48,
    borderRadius: 12,
    backgroundColor: "white",
    justifyContent: "space-evenly",
    alignItems: "center",
    shadowColor: Colors.primaryBlue,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.24,
    shadowRadius: 1.86,
    elevation: 2,
    display: "flex",
    flexDirection: "row",
  },
  btnLong_title: {
    color: Colors.primaryBlue,
    fontSize: 16,
    fontFamily: "ComfortaaMedium",
  },
  btnLong_title2: {
    color: Colors.primaryBlue,
    fontSize: 16,
    fontFamily: "ComfortaaMedium",
    textAlign: "center",
  },
  btn_long2: {
    width: "100%",
    height: 66,
    borderRadius: 12,
    backgroundColor: "white",
    justifyContent: "space-evenly",
    alignItems: "center",
    shadowColor: Colors.primaryBlue,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.24,
    shadowRadius: 5.86,
    elevation: 2,
    display: "flex",
    flexDirection: "row",
  },
});
