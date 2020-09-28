import {combineReducers} from "redux";
import {selectorReducer} from "./selectorReducer";
import {fetchingDataReducer} from "./fetchingDataReducer";

export const rootReducer = combineReducers({
  selectorData: selectorReducer,
  repoData: fetchingDataReducer
})