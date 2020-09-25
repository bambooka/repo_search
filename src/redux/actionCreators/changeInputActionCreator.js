import {CHANGE_INPUT} from "../actionTypes";

export const changeInputActionCreator = (data) => {
  return {
    type: CHANGE_INPUT,
    inputData: data
  }
}