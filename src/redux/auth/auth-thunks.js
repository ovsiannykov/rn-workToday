import { authReducer } from "./auth-reducer";
import {authApi} from "./auth-api";
import {setUserId} from "./auth-actions";

export const registerStart = (body, navigation) => async (dispatch) => {
  try {
    const res = await authApi.registerStart(body)
    if(res.data.status === 'Success') {
      dispatch(setUserId(res.data.data))
      navigation.navigate('SMS')
    } else {
      // тут обработатывать ошибку
    }
  } catch (e) {
    console.log(e)
  }
}
