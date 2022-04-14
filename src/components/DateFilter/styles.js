import { StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

export default StyleSheet.create({
  scroll_box: {
    height: 70,
    paddingLeft: 16,
    display: "flex",
    marginTop: 10,
    zIndex: 5,
  },
  dateItem_1: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderColor: "black",
    width: 68,
    height: 68,
    borderWidth: 0.7,
    borderStyle: "dashed",
    marginRight: 12,
  },
  text: {
    textAlign: "center",
    fontFamily: "ComfortaaRegular",
    fontSize: 12,
  },
  dateItem_2: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryBlue,
    borderRadius: 50,
    width: 68,
    height: 68,
    marginRight: 12,
  },
  dateItem_3: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#cfd8ee",
    borderRadius: 50,
    width: 68,
    height: 68,
    marginRight: 12,
  },
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 0.5,
    elevation: 1,
  },
  dateItem_4: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 50,
    width: 68,
    height: 68,
    marginRight: 12,
  },
});
