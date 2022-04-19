import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    zIndex: 1000,
    paddingHorizontal: 14,
    width: 365,
  },
  search_box: {
    width: 263,
    alignItems: "center",
  },
  header_btn: {
    height: 50,
    width: 52,
    borderRadius: 6,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 1.51,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  serach_input: {
    height: 50,
    paddingHorizontal: 10,
    fontSize: 16,
    width: "100%",
  },
});
