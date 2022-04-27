import { StyleSheet, Platform } from "react-native";

import Colors from "../../../constants/Colors";

export const CELL_SIZE = 55;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = "#fff";
export const NOT_EMPTY_CELL_BG_COLOR = "#3557b7";
export const ACTIVE_CELL_BG_COLOR = "#f7fafe";

export default StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: 75,
    alignItems: "center",
  },
  header_title: {
    fontSize: 30,
    fontFamily: "ComfortaaBold",
    marginTop: 20,
  },
  sub_title: {
    fontFamily: "ComfortaaRegular",
    width: 315,
    marginTop: 20,
    height: 34,
    fontSize: 15,
    lineHeight: 16.73,
    letterSpacing: 0.37,
    marginBottom: 20,
    textAlign: "center",
  },
  //
  root: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 44,
    height: 44,
    lineHeight: 42,
    fontSize: 19,
    textAlign: "center",
  },
  focusCell: {
    borderColor: "#000",
  },
  cell_box: {
    backgroundColor: "#F2F2F7",
    marginRight: 10,
    borderRadius: 8,
  },
  focusCell_box: {
    backgroundColor: "#DEDDF7",
    marginRight: 10,
    borderRadius: 8,
  },

  //
  //
  button: {
    width: 160,
    height: 48,
    marginTop: 23,
    backgroundColor: "white",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0.4,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
    elevation: 1,
  },
  btn_text: {
    fontSize: 13,
    fontFamily: "ComfortaaMedium",
    color: "#C1C1C3",
  },
  phone: {
    fontWeight: "900",
  },
});
