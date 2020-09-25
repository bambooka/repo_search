import React from "react";
import RepoItem from "./RepoItem";
import {connect} from "react-redux";

const RepoList = (props) => {
  console.log(props)
  return (
    <div className='result'>
      <RepoItem />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    props: state
  }
}



export default connect(mapStateToProps, null)(RepoList)