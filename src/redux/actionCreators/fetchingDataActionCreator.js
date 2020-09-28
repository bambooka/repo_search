import {FETCH_DATA} from "../actionTypes";

export const fetchingDataActionCreator = (data) => {
  // debugger
  // console.log(data)
  return async dispatch => {
    const response = await fetch(`https://api.github.com/search/repositories?q=${data.inputText}+language:${data.selectedOption}&sort=stars&order=desc&`);
    // console.log(response)
    const json = await response.json();
    console.log(json.items, 'from server')
    dispatch({type: FETCH_DATA, repoData: json.items})
  }
  // const response = fetch(`https://api.github.com/search/repositories?q=${data.inputText}+language:${data.selectedOption}&sort=stars&order=desc&`);

}