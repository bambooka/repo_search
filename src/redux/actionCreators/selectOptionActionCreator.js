import {SELECT_OPTION} from "../actionTypes";

export const selectOptionActionCreator = (data) => {
  return {
    type: SELECT_OPTION,
    selectedOption: data
  }
}