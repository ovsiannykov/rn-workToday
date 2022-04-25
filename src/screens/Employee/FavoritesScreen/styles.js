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
    paddingHorizontal: 14,
  },
  vacancy_scrollBox: {
    height: "100%",
  },
});
