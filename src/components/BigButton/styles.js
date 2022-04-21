import { StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

export default StyleSheet.create({
  btnBox: {
    backgroundColor: Colors.blue,
    width: "100%",
    height: 60,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "300",
    fontFamily: "ComfortaaLight",
  },
});
