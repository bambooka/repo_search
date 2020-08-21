import React from "react";
import {getAllRepo, inputRepoName, requestParam, selectCriteria} from "../App";

function SearchForm() {
  return (
    <form className='searchForm'>
      <input onChange={inputRepoName} value={requestParam.name}/>
      <div>
        <select onChange={selectCriteria} name='language'>
          <option>java</option>
          <option>C</option>
          <option>Javascript</option>
        </select>
        <input onChange={selectCriteria} name='status' checked={requestParam.status} type='checkbox'/> private<br/>
      </div>
      <input type='button' onClick={() => (getAllRepo(requestParam.name, requestParam.language, requestParam.status))} value='get repo'/>
    </form>
  )
}

export default SearchForm;