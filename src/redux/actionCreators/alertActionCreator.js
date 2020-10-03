import {HIDE_ALERT, SHOW_ALERT} from "../actionTypes";

export const showAlertActionCreator = (text) => {
  return{
    type: SHOW_ALERT,
    alert: text
  }
}

export const hideAlertActionCreator = () => {
  return{
    type: HIDE_ALERT,
  }
}