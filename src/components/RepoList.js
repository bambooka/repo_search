import React from "react";
import RepoItem from "./RepoItem";
import {connect} from "react-redux";

const RepoList = (props) => {
  const repos = props.props.repoData.repoData;
  console.log(props.props.repoData.repoData, 'from list')
  return (
    <div className='row align-self-center'>
      {repos.map(repo => {
        return <RepoItem repo={repo}/>
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    props: state
  }
}



export default connect(mapStateToProps, null)(RepoList)