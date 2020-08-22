import {GET_ALL_REPO, INPUT_REPO_NAME, SELECT_CRITERIA} from "../actionTypes";
import {rerender} from "../../index";
import {allRepo} from "../../App";

let getR = (name, language, status) => {
  let url = `https://api.github.com/search/repositories?q=${name}+language:${language}+is:${status ? 'private' : 'public'}&sort=stars&order=desc&`;
  console.log(url)
  return fetch(url)
    .then(response => response.json())
    .then(item => {
      allRepo = item.items;
      rerender();
    });
}

export let rootReducer = function(state, action){

  if(action.type === SELECT_CRITERIA) {
    let name = action.name;
    let value = action.value
    if (name === 'status') {
      value = action.status;
    }
    state[name] = value;
    return state;
  } else if (action.type === INPUT_REPO_NAME) {
    console.log(action.value)
    state.name = action.value;
    return state;
  } else if(action.type === GET_ALL_REPO) {
    state.repo = getR(state.selected.name, state.selected.language, state.selected.status)
    return state
  }
  return state;
}