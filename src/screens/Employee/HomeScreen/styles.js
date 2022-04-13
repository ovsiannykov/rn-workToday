import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "ios" ? 50 : 10,
    paddingHorizontal: 14,
  },
  header_box: {
    position: "relative",
    zIndex: 10,
  },
  vacancy_box: {
    alignItems: "center",
  },
});
