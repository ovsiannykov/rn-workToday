import {StyleSheet} from "react-native";
import {mainStyles} from "../../../styles/mainStyles";
import {colors} from "../../../components/colors";

export const styles = StyleSheet.create({
  title: {
    ...mainStyles.betweenRow,
    marginBottom: 28,
    paddingHorizontal: 30
  },
  buttonLabel: {
    marginRight: 3
  },
  logout: {
    backgroundColor: colors.error,
    marginTop: 85,
    marginBottom: 30
  },
  ph0: {
    paddingHorizontal: 0
  },
  ph30: {
    paddingHorizontal: 30
  }
})