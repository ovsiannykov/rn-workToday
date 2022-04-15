import { StyleSheet, Platform } from "react-native";

import Colors from "../../../constants/Colors";

export default StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: Platform.OS == "ios" ? 25 : 10,
    paddingHorizontal: 10,
  },
  search_box: {
    width: 347,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    height: 50,
    borderRadius: 6,
    padding: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2,
  },
  serach_input: {
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
    width: "100%",
  },
});
