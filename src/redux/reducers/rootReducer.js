import {combineReducers} from "redux";
import {selectorReducer} from "./selectorReducer";
import {fetchingDataReducer} from "./fetchingDataReducer";
import {loaderReducer} from "./loaderReducer";

export const rootReducer = combineReducers({
  selectorData: selectorReducer,
  repoData: fetchingDataReducer,
  loader: loaderReducer
})