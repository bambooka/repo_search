import {HIDE_ALERT, SHOW_ALERT} from "../actionTypes";

const initialState = {
  alert: null
}

export const alertReducer = (state = initialState, action) => {
  console.log(initialState)
  switch (action.type){
    case SHOW_ALERT: return {...state, alert: action.alert}
    case HIDE_ALERT: return {...state, alert: null}
    default: return state
  }
}