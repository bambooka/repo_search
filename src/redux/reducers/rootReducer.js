import {combineReducers} from "redux";
import {selectorReducer} from "./selectorReducer";

export const rootReducer = combineReducers({
  selectorData: selectorReducer
})