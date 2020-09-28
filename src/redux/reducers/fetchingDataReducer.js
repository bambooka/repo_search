import {FETCH_DATA} from "../actionTypes";

const initialState = {
  repoData: []
}
export const fetchingDataReducer = (state = initialState, action) => {
  // console.log(action)
  switch(action.type) {
    case FETCH_DATA: return {...state, repoData: action.repoData}
    default: return state
  }
}