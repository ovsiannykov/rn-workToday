import { StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    zIndex: 1000,
  },
  search_box: {
    width: "49%",
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
