import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    paddingTop: Platform.OS == "ios" ? 50 : 10,
    //paddingHorizontal: 14,
  },
  header_box: {
    position: "relative",
    zIndex: 100,
    top: 0,
    left: 0,
  },
  vacancy_box: {
    alignItems: "center",
    height: "100%",
  },
  vacancy_scrollBox: {
    height: "100%",
    paddingHorizontal: 14,
  },
  noItems: {
    fontFamily: "ComfortaaLight",
    fontSize: 14,
    color: "gray",
    marginTop: 25,
    textAlign: "center",
  },
});
