import React from "react";
const RepoItem = (props) => {
  return (
    <div className='repo-item'>
      {
        <div className="card align-self-center" style={{width: 20 + 'rem', height: 300 + 'px'}}>
            <div className="card-body">
              <h5 className="card-title">{props.repo.name}</h5>
              <p className="card-text">{props.repo.description}</p>
              <p className="card-text">{props.repo.language}</p>
              <a href={props.repo.git_url} className="btn btn-primary">Go to repo</a>
            </div>
        </div>
      }
    </div>
  )
}

export default RepoItem;