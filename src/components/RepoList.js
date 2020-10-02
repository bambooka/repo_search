import React from "react";
import RepoItem from "./RepoItem";
import {connect} from "react-redux";

const RepoList = (props) => {
  const repos = props.props.repoData.repoData;
  const loader = props.props.loader.loader;
  console.log(props, 'from list')
  return (
    <>
    {
      loader
        ? <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
        : <div className='row align-self-center'>
        {repos.map(repo => {
          return <RepoItem repo={repo}/>
        })}
      </div>
    }
</>

  )
}

const mapStateToProps = (state) => {
  return {
    props: state
  }
}



export default connect(mapStateToProps, null)(RepoList)