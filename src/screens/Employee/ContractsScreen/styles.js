import { StyleSheet, Platform } from "react-native";

import Colors from "../../../constants/Colors";

export default StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: Platform.OS == "ios" ? 25 : 10,
    paddingHorizontal: 10,
  },
  noItems: {
    fontFamily: "ComfortaaLight",
    marginTop: 20,
    fontSize: 14,
    color: "gray",
    textAlign: "center",
  },
});
