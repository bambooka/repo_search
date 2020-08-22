import React from "react";
import {getAllRepo, store} from "../App";
import {rerender} from "../index";
import {getAllR, inputRepoName, selectCriteria} from "../redux/actionCreators";

function getSelectData(e) {
  store.dispatch(selectCriteria(e))
  store.subscribe(() => {
    rerender()
  })
}

function getInputRepoName(e) {
  store.dispatch(inputRepoName(e))
  store.subscribe(() => {
    rerender()
  })
}

function getRepo() {
  return store.getState();
}

function requestRepo() {
  store.dispatch(getAllR())
  // getAllRepo(getRepo().name, getRepo().language, getRepo().status)
}

function SearchForm() {
  return (
    <form className='searchForm'>
      <input onChange={getInputRepoName} value={getRepo().name}/>
      <div>
        <select onChange={getSelectData} name='language'>
          <option>java</option>
          <option>C</option>
          <option>Javascript</option>
        </select>
        <input onChange={getSelectData} name='status' checked={getRepo().status} type='checkbox'/> private<br/>
      </div>
      <input type='button' onClick={() => (requestRepo)} value='get repo'/>
    </form>
  )
}

export default SearchForm;