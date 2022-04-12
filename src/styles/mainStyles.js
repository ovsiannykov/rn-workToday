import {Dimensions, PixelRatio, StyleSheet} from "react-native";
import {colors} from "../components/colors";
import {POPPINS400, POPPINS500, POPPINS700} from "../redux/types";

export const SCREEN_HEIGHT = Dimensions.get('screen').height
export const WINDOW_HEIGHT = Dimensions.get('window').height
export const SCREEN_WIDTH = Dimensions.get('screen').width

export const getPixel = (size) => {
  return PixelRatio.getPixelSizeForLayoutSize(size)
}

export const commonStyles = StyleSheet.create({
  shadow: {
    shadowColor: "rgba(0,0,0,0.56)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.77,
    shadowRadius: 4.65,
    elevation: 16,
  },
})

export const mainStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  centeredRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  betweenRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  endRow: {
    alignItems: 'flex-end'
  },
  p20: {
    paddingHorizontal: 20
  },
  flex1: {
    flex: 1
  },
  centeredText: {
    width: '100%',
    textAlign: 'center'
  },
  mt6: {
    marginTop: 6
  },
  mt18: {
    marginTop: 18
  },
  mb20: {
    marginBottom: 20
  },
  mb35: {
    marginBottom: 35
  },
  mr15: {
    marginRight: 15
  },
  ml15: {
    marginLeft: 15
  },
  flexContent: {
    flex: 1,
    justifyContent: 'space-between'
  },
  hiddenBlock: {
    opacity: 0
  },
  ml30: {
    marginLeft: 30
  },
  ph0: {
    paddingHorizontal: 0
  },
  ml5: {
    marginLeft: 5
  },
  ph30: {
    paddingHorizontal: 30
  }
})
