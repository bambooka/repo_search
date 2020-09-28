import React from "react";
const RepoItem = (props) => {
  console.log(props, 'from item')
  return (
    <div className='repo-item'>
      {<h1>{props.repo.name}</h1>}
    </div>
  )
}

export default RepoItem;