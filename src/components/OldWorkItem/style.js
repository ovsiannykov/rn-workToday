import { StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

export default StyleSheet.create({
  worksBox: {
    width: 347,
    height: 164,
    backgroundColor: "white",
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.06,
    shadowRadius: 1.0,
    elevation: 1,
  },
  oldWorkTitle: {
    fontFamily: "ComfortaaBold",
    fontWeight: "700",
    fontSize: 15,
    lineHeight: 20,
    color: "#376AED",
  },
  oldWorkInfo: {
    fontFamily: "ComfortaaRegular",
    fontSize: 15,
    lineHeight: 20,
    color: "#376AED",
    fontWeight: "400",
  },
  review: {
    fontFamily: "ComfortaaBold",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 20,
    color: "#2D4379",
  },
  reviewText: {
    fontFamily: "ComfortaaLight",
    marginTop: 5,
    color: "#2D4379",
    maxWidth: 220,
  },
});
