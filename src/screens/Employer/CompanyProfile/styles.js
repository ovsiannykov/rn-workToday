import { StyleSheet, Platform } from "react-native";

import Colors from "../../../constants/Colors";

export default StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  header: {
    height: Platform.OS == "ios" ? 100 : 60,
    justifyContent: "flex-end",
    marginBottom: 10,
    paddingHorizontal: 40,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontFamily: "ComfortaaLight",
    fontSize: 24,
    color: Colors.veryDarkBlue,
    lineHeight: 26.7,
  },
  profileBox: {
    marginTop: 10,
    height: 269,
    width: 295,
    backgroundColor: "white",
    borderRadius: 16,
    paddingHorizontal: 32,
    paddingTop: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.03,
    shadowRadius: 1.0,
    elevation: 1,
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 24,
  },
  pictureBox: {
    borderRadius: 28,
    width: 84,
    height: 84,
    alignItems: "center",
    justifyContent: "center",
  },
  circleGradient: {
    backgroundColor: "white",
    width: 80,
    height: 80,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    borderRadius: 22,
    width: 66.71,
    height: 66.71,
  },
  profileInfo: {
    justifyContent: "center",
    paddingLeft: 20,
    alignItems: "flex-start",
    height: 84,
  },
  name: {
    fontSize: 18,
    color: Colors.veryDarkBlue,
    fontFamily: "ComfortaaLight",
    maxWidth: 150,
    marginBottom: 10,
  },
  position: {
    fontFamily: "ComfortaaLight",
    fontSize: 16,
    color: "#376AED",
  },
  aboutLabel: {
    fontFamily: "ComfortaaLight",
    fontSize: 16,
    color: Colors.veryDarkBlue,
    marginBottom: 10,
  },
  aboutText: {
    fontFamily: "ComfortaaLight",
    color: "#2D4379",
    fontSize: 14,
    lineHeight: 20,
  },
  numbers: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#386BED",
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  numbersItem: {
    width: 98.33,
    height: 68,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingNumber: {
    fontFamily: "ComfortaaRegular",
    color: "white",
    fontSize: 20,
    lineHeight: 22,
    marginBottom: 4,
  },
  ratingInfo: {
    fontFamily: "MulishRegular",
    fontSize: 12,
    lineHeight: 18,
    color: "white",
  },
  worksTitle: {
    color: Colors.veryDarkBlue,
    fontFamily: "ComfortaaLight",
    fontSize: 24,
    marginLeft: 24,
    marginTop: 40,
  },
});
