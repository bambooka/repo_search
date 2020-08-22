import {GET_ALL_REPO, INPUT_REPO_NAME, SELECT_CRITERIA} from "./actionTypes";

export const selectCriteria = (e) => {
 return {type: SELECT_CRITERIA, name: e.target.name, value: e.target.value}
}

export const inputRepoName = (e) => {
 return {type: INPUT_REPO_NAME, name: e.target.name, value: e.target.value}
}

export const getAllR = () => {
 return function(dispatch) {

 }

}